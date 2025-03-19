import { fun, obj } from "./helper/a.js";

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Given input is not a function");
  }

  context.fn = this;
  return (...newArgs) => context.fn(...args, ...newArgs);
};

const bindedFun = fun.myBind(obj, "Mumbai");
bindedFun("Maharashtra");
