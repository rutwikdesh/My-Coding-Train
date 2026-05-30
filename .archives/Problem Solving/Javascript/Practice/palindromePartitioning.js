/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const totPart = [];
  partHere(0, 0, s, [], totPart, s.length);
  return totPart;
};

var isPalindrome = (str) => {
  const n = str.length;
  if (n === 1) return true;
  let start = 0,
    end = n - 1;
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
};

// a | ab -> a | a | b
// aa | b -> aa | b

var partHere = (start, end, s, currPart, totPart, n) => {
  const currStr = s.substring(start, end + 1);
  if (end === n - 1) {
    if (isPalindrome(currStr)) {
      currPart.push(currStr);
      totPart.push([...currPart]);
    }
    return;
  }

  if (isPalindrome(currStr)) {
    currPart.push(currStr);
    partHere(start + 1, end + 1, s, currPart, totPart, n);
    // currPart.pop();
  }
  partHere(start, end + 1, s, currPart, totPart, n);
};

console.log(partition("aab"));
