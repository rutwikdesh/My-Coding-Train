function multiply(x, y, z) {
  return x * y * z;
}

function curryMultiply(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(curryMultiply(2)(3)(4)); // Output: 24
