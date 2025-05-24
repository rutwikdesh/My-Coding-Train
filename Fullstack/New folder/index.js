let str = "({}[]({}[]))";
let str2 = "{([]}";

const getTop = function (arr) {
  return arr[arr.length - 1];
};

const isBracketValid = function (str) {
  const st = [];
  let i = 0;
  while (i < str.length) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      st.push(str[i]);
    } else if (st.length === 0) {
      return false;
    } else if (str[i] === ")" && (getTop(st) === "{" || getTop(st) === "[")) {
      return false;
    } else if (str[i] === "}" && (getTop(st) === "(" || getTop(st) === "[")) {
      return false;
    } else if (str[i] === "]" && (getTop(st) === "(" || getTop(st) === "{")) {
      return false;
    } else {
      st.pop();
    }
    i++;
  }
  return st.length === 0;
};

console.log(isBracketValid(str2) ? "Valid" : "InValid");
