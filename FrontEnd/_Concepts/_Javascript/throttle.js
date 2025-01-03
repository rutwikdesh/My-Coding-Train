function throttle(fun, delay) {
  let isThrottling = false;

  return function (...args) {
    if (!isThrottling) {
      isThrottling = true;
      fun(...args);
      setTimeout(() => {
        isThrottling = false;
      }, delay);
    }
  };
}

const throttledFunction = throttle(myFun, 2000);
throttledFunction(1, "abc");
