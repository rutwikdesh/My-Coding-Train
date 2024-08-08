var myAtoi = function (s) {
  var myStr = s.trim(),
    ans = 0;
  if (myStr[0] === "-") {
    var res = -recAtoi(myStr, 1, ans, 1);
    return res <= -Math.pow(2, 31) ? -Math.pow(2, 31) : res;
  } else {
    var res;
    if (myStr[0] === "+") {
      res = recAtoi(myStr, 1, ans, 1);
    } else {
      res = recAtoi(myStr, 0, ans, 1);
    }
    return res >= Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : res;
  }
};

var recAtoi = (myStr, index, ans, mul) => {
  if (myStr.charCodeAt(index) >= 48 && myStr.charCodeAt(index) <= 58) {
    ans = ans * mul + myStr.charCodeAt(index) - 48;
    return recAtoi(myStr, index + 1, ans, 10);
  }
  return ans;
};

console.log(myAtoi("42"));
console.log(myAtoi(" -042"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
