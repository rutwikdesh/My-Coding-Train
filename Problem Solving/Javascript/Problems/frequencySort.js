var frequencySort = function (s) {
  const charStore = new Map();
  for (let i = 0; i < s.length; i++) {
    if (charStore.has(s[i])) {
      charStore.set(s[i], charStore.get(s[i]) + 1);
    } else {
      charStore.set(s[i], 1);
    }
  }
  const sortedStore = new Map(
    [...charStore.entries()].sort((a, b) => b[1] - a[1])
  );

  let pos = 0;
  let ansStr = "";
  console.log(sortedStore.keys());
  for (let char of sortedStore.keys()) {
    let count = sortedStore.get(char);
    while (count > 0) {
      ansStr += char;
      pos++;
      count -= 1;
    }
  }
  return ansStr;
};

console.log(frequencySort("tree"));
