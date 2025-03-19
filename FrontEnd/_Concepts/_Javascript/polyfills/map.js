let arr = [1, 2, 3, 4];

Array.prototype.myMap = function (cb) {
  if (typeof cb !== "function") {
    throw Error(`${cb} is not a function`);
  }
  let ans = [];
  for (let i = 0; i < this.length; i++) {
    ans.push(cb(this[i], i, this));
  }
  return ans;
};

arr = arr.myMap((ele, ind, arr) => {
  return ele * 2;
});

console.log(arr);
