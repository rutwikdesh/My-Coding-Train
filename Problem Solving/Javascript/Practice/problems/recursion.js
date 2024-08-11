// print 1 to n using recursion

/*const recur = (num) => {
  if (num > 10) return;
  console.log(num);
  recur(num + 1);
};*/

// recur(1);

// print 1 to n using backtracking

const backtrack = (num) => {
  if (num < 1) return;
  backtrack(num - 1);
  console.log(num);
};

// backtrack(10);

// sum of first n numbers

// const sum = (num) => {
//   if (num === 1) return 1;
//   return num + sum(num - 1);
// };
// console.log(sum(3));

const sumParam = (sumNum) => {
  let num = 0;
  return helperSumParam(sumNum, num);
};

const helperSumParam = (sumNum, currNum) => {
  if (sumNum === 0) return currNum;
  return helperSumParam(sumNum - 1, currNum + sumNum);
};

// console.log(sumParam(4));

const fibonacci = (num) => {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

// console.log(fibonacci(6));

const genBinaryStrings = (len) => {
  const v = [];
  gen(v, len, "");
  console.log(v);
};

const checkConsecutive1s = (str) => {
  let prevEle = str[0];
  // console.log(str.substr(1));
  for (let i = 1; i < str.length; i++) {
    if (str[i] === "1" && prevEle === "1") {
      return true;
    }
    prevEle = str[i];
  }

  return false;
};

// const gen = (v, len, currStr) => {
//   if (currStr.length === len) {
//     if (!checkConsecutive1s(currStr)) v.push(currStr);
//     return;
//   }
//   gen(v, len, currStr + "0");
//   gen(v, len, currStr + "1");
// };

const gen = (v, len, currStr) => {
  if (currStr.length === len) {
    v.push(currStr);
    return;
  }
  gen(v, len, currStr + "0");
  if (
    (currStr.length >= 1 && currStr[currStr.length - 1] !== "1") ||
    currStr.length === 0
  ) {
    gen(v, len, currStr + "1");
  }
};

genBinaryStrings(3);

var generateParenthesis = function (n) {
  let v = [];
  gen(v, "(", 1, 0, n);
  return v;
};

var gen = (v, currStr, i, j, n) => {
  if (i === n && j === n) {
    v.push(currStr);
    return;
  }
  if (i < n) gen(v, currStr + "(", i + 1, j, n);
  if (j < n && i > j) gen(v, currStr + ")", i, j + 1, n);
};
