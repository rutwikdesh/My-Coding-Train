// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   setTimeout(() => {
//     console.log("Timeout Inside Promise");
//   }, 0);
//   console.log("Promise");
// });

// console.log("End");

// Ouput:
// Start
// End
// Promise
// Timeout
// Timeout Inside Promise

// -------------------------------------------------------------------------------------

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => {
//     console.log("C");
//   });
//   console.log("F");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
// });

// process.nextTick(() => {
//   console.log("G");
// });

// console.log("E");

// Ouput: A, E, G, D, B, F, C

// -------------------------------------------------------------------------------------

console.log("Script start");

queueMicrotask(() => {
  console.log("Microtask 1");
});

Promise.resolve().then(() => {
  console.log("Promise callback");
});

queueMicrotask(() => {
  console.log("Microtask 2");
});

console.log("Script end");

// O/p:
// Script start
// Script end
// Microtask 1
// Promise callback
// Microtask 2

// -------------------------------------------------------------------------------------
