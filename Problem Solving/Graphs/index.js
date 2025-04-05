function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function longestPalindrome(s, t) {
  const lenFirst = s.length;
  const lenSecond = t.length;
  let maxLen = 1;

  for (let i = 0; i <= lenFirst; i++) {
    for (let j = i; j <= lenFirst; j++) {
      let subFirst = s.slice(i, j);

      for (let k = 0; k <= lenSecond; k++) {
        for (let l = k; l <= lenSecond; l++) {
          const subSecond = t.slice(k, l);
          const combinedStr = subFirst + subSecond;

          if (combinedStr.length > 0 && isPalindrome(combinedStr)) {
            maxLen = Math.max(maxLen, combinedStr.length);
          }
        }
      }
    }
  }

  return maxLen;
}

// Example test cases
console.log(longestPalindrome("a", "a")); // Output: 2
console.log(longestPalindrome("abc", "def")); // Output: 1
console.log(longestPalindrome("b", "aaaa")); // Output: 4
console.log(longestPalindrome("abcde", "ecdba")); // Output: 5
