Function.prototype.myCall = function (context = {}, ...args) {
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myApply = function (context = {}, args) {
  context.fn = this;
  console.log("Yo!");
  context.fn(...args);
};

const car = {
  model: "BMW",
  color: "Black",
};

const myFunc = function (name, role) {
  console.log(
    `Hi! I am ${name}. I am an ${role}. This is my ${this.color} ${this.model}`
  );
};

// myFunc.call(car, "Rutwik", "SDE");
// myFunc.myCall(car, "Rutwik", "SDE");
// myFunc.apply(car, ["Rutwik", "SDE"]);
myFunc.myApply(car, ["Rutwik", "SDE"]);
