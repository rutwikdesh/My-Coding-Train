const ParkingSlot = require("./ParkingSlot");

class ParkingLot {
  static revenue = 0;

  constructor() {
    this.slots = {
      car: [],
      truck: [],
      bike: [],
    };

    this.slotPricePerHr = {
      car: 100,
      bike: 40,
      truck: 200,
    };
  }

  static getRevenue() {
    return this.revenue;
  }

  addSlot(type) {
    this.slots[type].push(new ParkingSlot(type));
  }

  parkVehicle(vehicle) {
    const slot = this.slots[vehicle.type].find((slot) => !slot.isOccupied);
    if (slot) {
      slot.park(vehicle);
      return slot;
    }
    return null;
  }

  releaseVehicle(vehicleNumber, type) {
    const slot = this.slots[type].find(
      (slot) => slot.vehicle?.number === vehicleNumber
    );
    if (slot) {
      slot.release();
      const timeOccupied =
        (Date.now() - slot.parkedTime) / (Math.pow(10, 3) * 3600);
      ParkingLot.revenue += timeOccupied * this.slotPricePerHr[type];
      return slot;
    }
    return null;
  }
}

module.exports = ParkingLot;
