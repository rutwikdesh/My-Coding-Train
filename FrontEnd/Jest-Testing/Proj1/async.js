function myFun(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 3000);
}

module.exports = myFun;
