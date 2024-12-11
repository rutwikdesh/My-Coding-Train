function throttle(fun, delay) {
  let flag = false;

  return function (...args) {
    if (!flag) {
      flag = true;
      fun(args);
      setTimeout(() => {
        flag = false;
      }, delay);
      clearTimeout();
    }
  };
}

function debounce(fun, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fun(args);
    }, delay);
  };
}

// Function to throttle
function handleAction() {
  console.log("Action performed");
}

// Create a throttled version of the function
const throttledAction = throttle(handleAction, 2000);
const debouncedAction = debounce(handleAction, 1000);
