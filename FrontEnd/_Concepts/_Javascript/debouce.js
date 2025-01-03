function debounce(fun, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fun(...args);
    }, delay);
  };
}

const debouncedFunction = debounce(myFun, 2000);
debouncedFunction(1, "abc");
