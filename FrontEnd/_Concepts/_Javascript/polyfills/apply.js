import { fun, obj } from "./helper/a.js";

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("Given input is not a function");
  }

  context.fn = this;
  context.fn(...args);
};

fun.myApply(obj, ["Mumbai"]);
