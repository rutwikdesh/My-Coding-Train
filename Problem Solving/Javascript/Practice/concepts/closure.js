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
