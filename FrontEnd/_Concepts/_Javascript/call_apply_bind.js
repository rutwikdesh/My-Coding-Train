let var1 = {
  firstName: "Rutwik",
  lastName: "Deshmukh",
};

let printFullName = function (city, state) {
  console.log(
    this.firstName + " " + this.lastName + ", lives in: " + city + ", " + state
  );
};

printFullName.call(var1, "Mumbai", "Maharashtra");
printFullName.apply(var1, ["Mumbai", "Maharashtra"]);
let printDetails = printFullName.bind(var1, "Mumbai", "Maharashtra");
printDetails();

// ------------------------------------------------------------------------------------------------

let setuserName = function (username) {
  this.username = username;
};

let createUser = function (username, email, password) {
  setuserName.call(this, username);
  this.email = email;
  this.password = password;
};

const chai = new createUser("RD", "rd@gg.com", "pass");

console.log(chai);
