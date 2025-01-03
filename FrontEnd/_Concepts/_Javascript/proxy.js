let target = {
  message: "Hello, world!",
};

let handler = {
  get(target, prop, receiver) {
    if (prop === "message") {
      return `Intercepted: ${target[prop]}`;
    }
    return prop in target ? target[prop] : `Property ${prop} not found`;
  },
  set(target, prop, value) {
    if (prop === "message") {
      target[prop] = value.toUpperCase(); // Force the message to be uppercase
    } else {
      target[prop] = value;
    }
    return true;
  },
};

let proxy = new Proxy(target, handler);

console.log(proxy.message); // Output: "Intercepted: Hello, world!"
proxy.message = "new message";
console.log(proxy.message); // Output: "Intercepted: NEW MESSAGE"
console.log(proxy.name); // Ouput: "Property name not found"
