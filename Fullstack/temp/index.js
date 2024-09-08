let arr = [1, 2, 3, 4, 1, 2, 3];

let s = new Set();

for (let index = 0; index < arr.length; index++) {
  s.add(arr[index]);
}

// for (let i of s) {
//   console.log(i);
// }

console.log(s.values());
