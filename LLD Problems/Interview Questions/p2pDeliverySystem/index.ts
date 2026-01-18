// p2p_delivery.ts
// Run with: ts-node p2p_delivery.ts
// or compile with tsc then node.

// -------------------------
// Imports (Node builtins only)
// -------------------------
import { EventEmitter } from "events";

// -------------------------
// Utility: Async Mutex
// Simple promise-based mutex for critical sections
// -------------------------
class AsyncMutex {
  private _queue: Array<() => void> = [];
  private _locked = false;

  async lock(): Promise<() => void> {
    return new Promise<() => void>((resolve) => {
      const tryAcquire = () => {
        if (!this._locked) {
          this._locked = true;
          resolve(this._release.bind(this));
        } else {
          this._queue.push(tryAcquire);
        }
      };
      tryAcquire();
    });
  }

  private _release() {
    if (this._queue.length > 0) {
      const next = this._queue.shift()!;
      // schedule next tick to avoid recursion
      setImmediate(next);
    } else {
      this._locked = false;
    }
  }
}

// -------------------------
// Entities & Types
// -------------------------
enum ItemType {
  DOCUMENT = "DOCUMENT",
  SMALL_PACKAGE = "SMALL_PACKAGE",
  FOOD = "FOOD",
  ELECTRONICS = "ELECTRONICS",
}

enum OrderStatus {
  PENDING = "PENDING",
  ASSIGNED = "ASSIGNED",
  PICKED_UP = "PICKED_UP",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

enum DriverStatus {
  AVAILABLE = "AVAILABLE",
  BUSY = "BUSY",
}

type ID = string;

function genId(prefix = "") {
  return prefix + Math.random().toString(36).slice(2, 9);
}

class Customer {
  constructor(public id: ID, public name: string) {}
}

class Driver {
  public currentOrderId: ID | null = null;
  public status: DriverStatus = DriverStatus.AVAILABLE;
  constructor(public id: ID, public name: string) {}
}

class Order {
  public assignedDriverId: ID | null = null;
  public status: OrderStatus = OrderStatus.PENDING;
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  constructor(
    public id: ID,
    public customerId: ID,
    public itemType: ItemType,
    public description?: string
  ) {}
}

// -------------------------
// Repositories (in-memory, singletons)
// -------------------------
class CustomerRepository {
  private customers = new Map<ID, Customer>();
  private static instance: CustomerRepository;
  private constructor() {}
  static getInstance() {
    if (!CustomerRepository.instance) {
      CustomerRepository.instance = new CustomerRepository();
    }
    return CustomerRepository.instance;
  }
  add(customer: Customer) {
    this.customers.set(customer.id, customer);
  }
  get(id: ID) {
    return this.customers.get(id) ?? null;
  }
  all() {
    return Array.from(this.customers.values());
  }
}

class DriverRepository {
  private drivers = new Map<ID, Driver>();
  private driverMutexes = new Map<ID, AsyncMutex>();
  private static instance: DriverRepository;
  private constructor() {}
  static getInstance() {
    if (!DriverRepository.instance) {
      DriverRepository.instance = new DriverRepository();
    }
    return DriverRepository.instance;
  }
  add(driver: Driver) {
    this.drivers.set(driver.id, driver);
    this.driverMutexes.set(driver.id, new AsyncMutex());
  }
  get(id: ID) {
    return this.drivers.get(id) ?? null;
  }
  getMutex(id: ID) {
    let m = this.driverMutexes.get(id);
    if (!m) {
      m = new AsyncMutex();
      this.driverMutexes.set(id, m);
    }
    return m;
  }
  all() {
    return Array.from(this.drivers.values());
  }
}

class OrderRepository {
  private orders = new Map<ID, Order>();
  private orderMutexes = new Map<ID, AsyncMutex>();
  private static instance: OrderRepository;
  private constructor() {}
  static getInstance() {
    if (!OrderRepository.instance) {
      OrderRepository.instance = new OrderRepository();
    }
    return OrderRepository.instance;
  }
  add(order: Order) {
    this.orders.set(order.id, order);
    this.orderMutexes.set(order.id, new AsyncMutex());
  }
  get(id: ID) {
    return this.orders.get(id) ?? null;
  }
  update(order: Order) {
    this.orders.set(order.id, order);
  }
  getMutex(id: ID) {
    let m = this.orderMutexes.get(id);
    if (!m) {
      m = new AsyncMutex();
      this.orderMutexes.set(id, m);
    }
    return m;
  }
  all() {
    return Array.from(this.orders.values());
  }
}

// -------------------------
// Assignment Queue / Manager
// - Maintains queue of pending orders (FIFO)
// - Maintains queue/collection of available drivers
// - Matches orders <-> drivers when either arrives
// -------------------------
class AssignmentManager extends EventEmitter {
  private static instance: AssignmentManager;
  private pendingOrderQueue: ID[] = [];
  private availableDrivers: Set<ID> = new Set();
  private mutex = new AsyncMutex(); // guards queue + availableDrivers

  private constructor() {
    super();
  }

  static getInstance() {
    if (!AssignmentManager.instance) {
      AssignmentManager.instance = new AssignmentManager();
    }
    return AssignmentManager.instance;
  }

  // call when new order is created and ready to be assigned
  async addPendingOrder(orderId: ID) {
    const release = await this.mutex.lock();
    try {
      this.pendingOrderQueue.push(orderId);
      // try match
      await this.tryMatchLocked();
    } finally {
      release();
    }
  }

  // call when a driver becomes available for assignment
  async notifyDriverAvailable(driverId: ID) {
    const release = await this.mutex.lock();
    try {
      this.availableDrivers.add(driverId);
      await this.tryMatchLocked();
    } finally {
      release();
    }
  }

  // internal: attempts to match while both queues non-empty
  private async tryMatchLocked() {
    const orderRepo = OrderRepository.getInstance();
    const driverRepo = DriverRepository.getInstance();

    // simple FIFO match: pick first order and any available driver
    while (
      this.pendingOrderQueue.length > 0 &&
      this.availableDrivers.size > 0
    ) {
      const orderId = this.pendingOrderQueue.shift()!;
      // ensure order still exists and is in PENDING state (it might have been canceled)
      const order = orderRepo.get(orderId);
      if (!order) continue;

      // if order canceled meanwhile skip
      if (order.status !== OrderStatus.PENDING) {
        continue;
      }

      // pick a driver (first in set)
      const driverId = this.availableDrivers.values().next().value as ID;
      this.availableDrivers.delete(driverId);

      // emit event so services perform assignments under relevant locks
      // Emitted with {orderId, driverId}
      // Listeners will try to perform assign under locks.
      this.emit("assignCandidate", { orderId, driverId });
    }
  }

  // If an order that is in the queue gets canceled externally:
  async removePendingOrder(orderId: ID) {
    const release = await this.mutex.lock();
    try {
      this.pendingOrderQueue = this.pendingOrderQueue.filter(
        (id) => id !== orderId
      );
    } finally {
      release();
    }
  }

  // If driver removed/disabled - remove from availableDrivers
  async removeAvailableDriver(driverId: ID) {
    const release = await this.mutex.lock();
    try {
      this.availableDrivers.delete(driverId);
    } finally {
      release();
    }
  }
}

// -------------------------
// Services
// -------------------------
class CustomerService {
  private cusRepo = CustomerRepository.getInstance();
  createCustomer(name: string) {
    const id = genId("cus_");
    const c = new Customer(id, name);
    this.cusRepo.add(c);
    return c;
  }
}

class DriverService {
  private driverRepo = DriverRepository.getInstance();
  private orderRepo = OrderRepository.getInstance();
  private assignmentMgr = AssignmentManager.getInstance();

  constructor() {
    // when assignmentManager picks candidate pair, perform atomic assignment
    this.assignmentMgr.on(
      "assignCandidate",
      async ({ orderId, driverId }: { orderId: ID; driverId: ID }) => {
        // Acquire both driver and order mutexes in consistent order (orderId then driverId lexical) to avoid deadlock
        const [first, second] =
          orderId < driverId ? [orderId, driverId] : [driverId, orderId];
        const firstMutex = this.orderRepo.get(first)
          ? this.orderRepo.getMutex(first)
          : this.driverRepo.getMutex(first);
        const secondMutex = this.orderRepo.get(second)
          ? this.orderRepo.getMutex(second)
          : this.driverRepo.getMutex(second);
        const release1 = await firstMutex.lock();
        const release2 = await secondMutex.lock();
        try {
          // Now attempt assignment with correct checks
          const order = this.orderRepo.get(orderId);
          const driver = this.driverRepo.get(driverId);
          if (!order || !driver) {
            // if either missing, ensure driver available for others
            if (driver) {
              await this.assignmentMgr.notifyDriverAvailable(driverId);
            }
            return;
          }
          if (order.status !== OrderStatus.PENDING) {
            // nothing to do; if driver exists, return to available
            await this.assignmentMgr.notifyDriverAvailable(driverId);
            return;
          }
          if (
            driver.status !== DriverStatus.AVAILABLE ||
            driver.currentOrderId
          ) {
            // driver busy; skip
            return;
          }

          // perform assignment
          order.status = OrderStatus.ASSIGNED;
          order.assignedDriverId = driverId;
          order.updatedAt = new Date();
          driver.currentOrderId = orderId;
          driver.status = DriverStatus.BUSY;

          this.orderRepo.update(order);

          // notify external parties
          console.log(
            `[ASSIGN] Order ${orderId} assigned to Driver ${driverId}`
          );
        } catch (err) {
          console.error("Error during assignCandidate handler:", err);
        } finally {
          release2();
          release1();
        }
      }
    );
  }

  onboardDriver(name: string) {
    const id = genId("drv_");
    const d = new Driver(id, name);
    this.driverRepo.add(d);
    // notify assignment manager that driver is available
    // NOTE: do not await here (fire-and-forget)
    this.assignmentMgr
      .notifyDriverAvailable(d.id)
      .catch((e) => console.error(e));
    return d;
  }

  async pickUpOrder(driverId: ID) {
    const driver = this.driverRepo.get(driverId);
    if (!driver) throw new Error("Driver not found");
    const driverMutex = this.driverRepo.getMutex(driverId);
    const releaseDriver = await driverMutex.lock();
    try {
      if (!driver.currentOrderId) {
        throw new Error("No assigned order to pick up");
      }
      const orderId = driver.currentOrderId;
      const order = this.orderRepo.get(orderId);
      if (!order) {
        // inconsistent state: free driver and return
        driver.currentOrderId = null;
        driver.status = DriverStatus.AVAILABLE;
        await this.assignmentMgr.notifyDriverAvailable(driverId);
        throw new Error("Assigned order not found");
      }
      const orderMutex = this.orderRepo.getMutex(orderId);
      const releaseOrder = await orderMutex.lock();
      try {
        // checks: driver must be assigned and order must be ASSIGNED and not CANCELLED
        if (order.status === OrderStatus.CANCELLED) {
          // unassign and free driver
          driver.currentOrderId = null;
          driver.status = DriverStatus.AVAILABLE;
          order.assignedDriverId = null;
          this.orderRepo.update(order);
          // make sure assignment manager knows driver available
          await this.assignmentMgr.notifyDriverAvailable(driverId);
          throw new Error("Order was cancelled; cannot pick up");
        }
        if (order.status !== OrderStatus.ASSIGNED) {
          throw new Error(
            `Order ${orderId} is not in ASSIGNED state (current: ${order.status})`
          );
        }

        // perform pickup
        order.status = OrderStatus.PICKED_UP;
        order.updatedAt = new Date();
        this.orderRepo.update(order);

        console.log(`[PICKUP] Driver ${driverId} picked up Order ${orderId}`);
      } finally {
        releaseOrder();
      }
    } finally {
      releaseDriver();
    }
  }

  async markDelivered(driverId: ID) {
    const driver = this.driverRepo.get(driverId);
    if (!driver) throw new Error("Driver not found");
    const driverMutex = this.driverRepo.getMutex(driverId);
    const releaseDriver = await driverMutex.lock();
    try {
      if (!driver.currentOrderId) {
        throw new Error("No current order to deliver");
      }
      const orderId = driver.currentOrderId;
      const order = this.orderRepo.get(orderId);
      if (!order) {
        driver.currentOrderId = null;
        driver.status = DriverStatus.AVAILABLE;
        await this.assignmentMgr.notifyDriverAvailable(driverId);
        throw new Error("Assigned order missing during delivery");
      }
      const orderMutex = this.orderRepo.getMutex(orderId);
      const releaseOrder = await orderMutex.lock();
      try {
        if (order.status !== OrderStatus.PICKED_UP) {
          throw new Error(`Order ${orderId} not in PICKED_UP state`);
        }

        order.status = OrderStatus.DELIVERED;
        order.updatedAt = new Date();
        this.orderRepo.update(order);

        // free driver
        driver.currentOrderId = null;
        driver.status = DriverStatus.AVAILABLE;

        console.log(`[DELIVER] Driver ${driverId} delivered Order ${orderId}`);
        // driver available for next assignment
        await this.assignmentMgr.notifyDriverAvailable(driverId);
      } finally {
        releaseOrder();
      }
    } finally {
      releaseDriver();
    }
  }

  getDriverStatus(driverId: ID) {
    const d = this.driverRepo.get(driverId);
    if (!d) return null;
    return {
      id: d.id,
      name: d.name,
      status: d.status,
      currentOrderId: d.currentOrderId,
    };
  }

  listDrivers() {
    return this.driverRepo.all().map((d) => ({
      id: d.id,
      name: d.name,
      status: d.status,
      currentOrderId: d.currentOrderId,
    }));
  }
}

class OrderService {
  private orderRepo = OrderRepository.getInstance();
  private assignmentMgr = AssignmentManager.getInstance();

  placeOrder(customerId: ID, item: ItemType, description?: string) {
    const id = genId("ord_");
    const o = new Order(id, customerId, item, description);
    this.orderRepo.add(o);
    // add to pending queue for assignment (async)
    this.assignmentMgr.addPendingOrder(o.id).catch((e) => console.error(e));
    console.log(
      `[ORDER] Customer ${customerId} placed Order ${o.id} (${item})`
    );
    return o;
  }

  async cancelOrder(orderId: ID) {
    const order = this.orderRepo.get(orderId);
    if (!order) throw new Error("Order not found");
    const orderMutex = this.orderRepo.getMutex(orderId);
    const release = await orderMutex.lock();
    try {
      // If already delivered or picked up, cannot cancel
      if (
        order.status === OrderStatus.PICKED_UP ||
        order.status === OrderStatus.DELIVERED
      ) {
        throw new Error(
          "Cannot cancel order that has been picked up or delivered"
        );
      }
      if (order.status === OrderStatus.CANCELLED) {
        return order; // idempotent
      }

      // If assigned to a driver, we must unassign and free the driver
      const assignedDriverId = order.assignedDriverId;
      if (assignedDriverId) {
        // obtain driver mutex to safely free
        const driverRepo = DriverRepository.getInstance();
        const driverMutex = driverRepo.getMutex(assignedDriverId);
        const releaseDriver = await driverMutex.lock();
        try {
          const driver = driverRepo.get(assignedDriverId);
          if (driver) {
            // Only unassign if driver hasn't picked up yet
            if (order.status === OrderStatus.ASSIGNED) {
              driver.currentOrderId = null;
              driver.status = DriverStatus.AVAILABLE;
              // tell assignment manager driver is available now
              await this.assignmentMgr.notifyDriverAvailable(assignedDriverId);
            } else {
              // if order already picked up, cancellation rejected earlier
            }
          }
        } finally {
          releaseDriver();
        }
        // clear assignment
        order.assignedDriverId = null;
      }

      // remove from pending queue if present
      await this.assignmentMgr.removePendingOrder(orderId);

      order.status = OrderStatus.CANCELLED;
      order.updatedAt = new Date();
      this.orderRepo.update(order);

      console.log(`[CANCEL] Order ${orderId} cancelled`);
      return order;
    } finally {
      release();
    }
  }

  getOrderStatus(orderId: ID) {
    const o = this.orderRepo.get(orderId);
    if (!o) return null;
    return {
      id: o.id,
      customerId: o.customerId,
      itemType: o.itemType,
      status: o.status,
      assignedDriverId: o.assignedDriverId,
      createdAt: o.createdAt,
      updatedAt: o.updatedAt,
    };
  }

  listOrders() {
    return this.orderRepo.all().map((o) => ({
      id: o.id,
      customerId: o.customerId,
      itemType: o.itemType,
      status: o.status,
      assignedDriverId: o.assignedDriverId,
      createdAt: o.createdAt,
      updatedAt: o.updatedAt,
    }));
  }
}

// -------------------------
// Demo / Test driver program
// -------------------------
async function demo() {
  console.log("=== P2P DELIVERY SYSTEM DEMO ===");
  const customerService = new CustomerService();
  const driverService = new DriverService();
  const orderService = new OrderService();

  // Create customers
  const alice = customerService.createCustomer("Alice");
  const bob = customerService.createCustomer("Bob");
  const carol = customerService.createCustomer("Carol");

  // Onboard two drivers
  const d1 = driverService.onboardDriver("Dinesh");
  const d2 = driverService.onboardDriver("Fatima");

  // Place multiple orders (more than drivers)
  const o1 = orderService.placeOrder(
    alice.id,
    ItemType.DOCUMENT,
    "Alice -> Bob contract"
  );
  const o2 = orderService.placeOrder(
    bob.id,
    ItemType.SMALL_PACKAGE,
    "Bob sending gift"
  );
  const o3 = orderService.placeOrder(carol.id, ItemType.FOOD, "Lunch parcel");
  const o4 = orderService.placeOrder(
    alice.id,
    ItemType.ELECTRONICS,
    "Phone accessory"
  );

  // After slight delay, cancel one pending order (simulate user cancellation)
  setTimeout(async () => {
    try {
      console.log(
        "\n-- Attempting to cancel order o3 (maybe pending or assigned) --"
      );
      await orderService.cancelOrder(o3.id);
    } catch (e: any) {
      console.error("Cancel failed:", e.message);
    }
  }, 200);

  // After short delay, drivers try to pick up their assigned orders concurrently
  // We'll attempt to pick up from both drivers; only assigned orders and not cancelled will be picked.
  setTimeout(async () => {
    console.log(
      "\n-- Drivers attempting to pick up assigned orders concurrently --"
    );
    const pickOps = [d1.id, d2.id].map(async (drvId) => {
      try {
        await driverService.pickUpOrder(drvId);
      } catch (e: any) {
        console.error(`[PICKUP-ERR] Driver ${drvId}:`, e.message);
      }
    });
    await Promise.all(pickOps);
  }, 400);

  // After pickup, one driver delivers, the other tries to deliver without pickup/correct state
  setTimeout(async () => {
    console.log("\n-- Driver D1 delivering (if picked up) --");
    try {
      await driverService.markDelivered(d1.id);
    } catch (e: any) {
      console.error(`[DELIVER-ERR] Driver ${d1.id}:`, e.message);
    }
  }, 800);

  // Meanwhile, another customer places an order after some deliveries
  setTimeout(() => {
    console.log("\n-- New order placed by Bob after some time --");
    orderService.placeOrder(bob.id, ItemType.DOCUMENT, "Bob new doc");
  }, 1000);

  // Another driver onboarding late
  setTimeout(() => {
    console.log("\n-- Onboarding a new driver (Gita) --");
    const d3 = driverService.onboardDriver("Gita");
    // after a bit, she attempts to pick up
    setTimeout(async () => {
      try {
        await driverService.pickUpOrder(d3.id);
      } catch (e: any) {
        console.error(`[PICKUP-ERR] ${d3.id}:`, e.message);
      }
    }, 300);
  }, 1200);

  // Later show status of all orders and drivers
  setTimeout(() => {
    console.log("\n=== Final Orders ===");
    console.table(orderService.listOrders());
    console.log("\n=== Drivers ===");
    console.table(driverService.listDrivers());
  }, 2200);

  // Also, demonstrate cancellation of an assigned order before pickup:
  // Place a new order, ensure it's assigned, then cancel quickly
  setTimeout(async () => {
    console.log(
      "\n-- Demo: cancellation of an ASSIGNED order before pickup --"
    );
    const ord = orderService.placeOrder(
      alice.id,
      ItemType.SMALL_PACKAGE,
      "Assigned then cancelled"
    );
    // Wait short to allow auto assignment
    setTimeout(async () => {
      try {
        console.log(
          "Attempting cancel on just-placed order (may be assigned)..."
        );
        await orderService.cancelOrder(ord.id);
      } catch (e: any) {
        console.error("Cancel error:", e.message);
      }
    }, 200);
  }, 1400);
}

// Execute demo
demo().catch((e) => console.error("Demo error:", e));
