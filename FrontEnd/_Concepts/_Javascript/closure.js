function myClosure() {
  let counter = 0;

  let incrementCounter = function () {
    counter += 1;
  };

  let getCounter = function () {
    return counter;
  };

  return { incrementCounter, getCounter };
}

const incrementCounterObj = myClosure();

incrementCounterObj.incrementCounter();
incrementCounterObj.incrementCounter();
incrementCounterObj.incrementCounter();

console.log(incrementCounterObj.getCounter());

// --------------------------------------------------------------------------------------

// Function Factory using closure
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
