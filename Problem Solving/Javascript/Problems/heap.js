class Heap {
  constructor(compareFn = (a, b) => a - b) {
    // Default is a min-heap (smaller value has higher priority)
    this.data = [];
    this.compare = compareFn;
  }

  // Helper methods
  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  // Swap elements
  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

  // Insert a new value into the heap
  insert(value) {
    this.data.push(value);
    this.heapifyUp(this.data.length - 1);
  }

  // Move the inserted element up to maintain heap property
  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.compare(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Extract the top element (min or max)
  extract() {
    if (this.data.length === 0) return null;
    if (this.data.length === 1) return this.data.pop();

    const top = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown(0);
    return top;
  }

  // Move the root element down to maintain heap property
  heapifyDown(index) {
    const length = this.data.length;
    while (true) {
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);
      let smallest = index;

      if (left < length && this.compare(this.data[left], this.data[smallest]) < 0)
        smallest = left;
      if (right < length && this.compare(this.data[right], this.data[smallest]) < 0)
        smallest = right;

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  // Peek at the top element without removing it
  peek() {
    return this.data.length > 0 ? this.data[0] : null;
  }

  // Check heap size
  size() {
    return this.data.length;
  }

  // Check if heap is empty
  isEmpty() {
    return this.data.length === 0;
  }
}

// Example usage:
const minHeap = new Heap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(3);

console.log(minHeap.extract()); // 3
console.log(minHeap.extract()); // 5
console.log(minHeap.peek());    // 10

// For a max-heap, just invert the comparison:
const maxHeap = new Heap((a, b) => b - a);
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);

console.log(maxHeap.extract()); // 20
