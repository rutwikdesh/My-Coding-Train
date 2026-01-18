// Interfaces
interface LRUCache<K, V> {
  get(key: K): V | null;
  put(key: K, data: V): void;
}

// Classes
class DLLNode<K, V> {
  key: K;
  data: V;
  next: DLLNode<K, V> | null;
  prev: DLLNode<K, V> | null;

  constructor(key: K, data: V) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache<K, V> {
  private readonly capacity: number;
  private readonly map: Map<K, DLLNode<K, V>> = new Map<K, DLLNode<K, V>>();

  private head: DLLNode<K, V> | null = null;
  private tail: DLLNode<K, V> | null = null;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: K): V | null {
    const node = this.map.get(key);
    if (!node) {
      return null;
    }

    this.moveToHead(node);
    return node.data;
  }

  put(key: K, data: V): void {
    if (this.capacity === 0) return;

    const existing = this.map.get(key);
    if (existing) {
      existing.data = data;
      this.moveToHead(existing);
      return;
    }

    const node = new DLLNode<K, V>(key, data);
    this.map.set(key, node);
    this.moveToHead(node);
    if (this.map.size > this.capacity) {
      this.evictLRU();
    }
  }

  removeNode(node: DLLNode<K, V>): void {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    if (node === this.head) this.head = node.next;
    if (node === this.tail) this.tail = node.prev;
  }

  addToHead(node: DLLNode<K, V>): void {
    node.next = this.head;
    node.prev = null;
    if (this.head) this.head.prev = node;
    this.head = node;
    if (!this.tail) this.tail = node;
  }

  moveToHead(node: DLLNode<K, V>): void {
    this.removeNode(node);
    this.addToHead(node);
  }

  evictLRU(): void {
    if (!this.tail) return;

    const key = this.tail.key;
    this.removeNode(this.tail);
    this.map.delete(key);
  }
}
