/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
import { MinPriorityQueue } from "@datastructures-js/priority-queue"
const pq = new MinPriorityQueue();

pq.enqueue(10);
pq.enqueue(2);
pq.enqueue(3);
pq.enqueue(6);
pq.enqueue(1);
pq.enqueue(8);
pq.enqueue(100);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());