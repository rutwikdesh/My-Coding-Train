const a = "abc";
const b = "wxyz";

let k = a;
let count = 1;
while (k.length < a.length + b.length) {
  k += a;
  count++;
}

let ind = k.indexOf(b);
console.log(ind);
const ans = Math.ceil((ind + b.length) / a.length);

console.log(`ans = ${ans}, k = ${k}, count = ${count}`);
