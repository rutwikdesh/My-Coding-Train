// ------------------------------------------ MAP -----------------------------------------------

// let arr = [1, 2, 3, 4];

// Array.prototype.myMap = function (cb) {
//   let ans = [];
//   for (let i = 0; i < this.length; i++) {
//     ans.push(cb(this[i], i, this));
//   }
//   return ans;
// };

// arr = arr.myMap((ele, ind, arr) => {
//   return ele * 2;
// });

// console.log(arr);

// ------------------------------------------- CALL ----------------------------------------------

const obj = {
  name: "Rutwik",
  car: "Audi",
};

function fun(location, state) {
  console.log(
    `Hi ${this.name}, you live in ${location} ${
      state && ", " + state
    }. You favourite car is ${this.car}`
  );
}

// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error("Given input is not a function");
//   }

//   context.fn = this;
//   context.fn(...args);
// };

// fun.myCall(obj, "Mumbai");

// ------------------------------------------- APPLY ----------------------------------------------

// Function.prototype.myApply = function (context = {}, args = []) {
//   if (typeof this !== "function") {
//     throw new Error("Given input is not a function");
//   }

//   context.fn = this;
//   context.fn(...args);
// };

// fun.myApply(obj, ["Mumbai"]);

// ------------------------------------------- BIND ----------------------------------------------

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Given input is not a function");
  }

  context.fn = this;
  return (...newArgs) => context.fn(...args, ...newArgs);
};

const bindedFun = fun.myBind(obj, "Mumbai");
bindedFun("Maharashtra");
