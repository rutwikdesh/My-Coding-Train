function totalFruit(fruits: number[]): number {
  let prevNumber = -1;
  let currNumber = -1;

  let prevCount = 0;
  let currCount = 0;

  let maxFruits = 0;

  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === currNumber) {
      ++currCount;
    } else if (fruits[i] === prevNumber) {
      ++prevCount;
    } else if (prevNumber !== -1 && currNumber !== -1) {
      prevNumber = currNumber;
      prevCount = currCount;
      currNumber = fruits[i];
      currCount = 1;
    } else if (prevNumber === -1) {
      prevNumber = fruits[i];
      prevCount = 1;
    } else {
      currNumber = fruits[i];
      currCount = 1;
    }
    console.log(fruits[i]);
    maxFruits = Math.max(maxFruits, prevCount + currCount);
    console.log(maxFruits);
    console.log(`currCount = ${currCount}, prevCount = ${prevCount}`);
    console.log("-------------------------------------------");
  }
  return maxFruits;
}

const fruits = [1, 2, 1, 2, 3];

console.log(totalFruit(fruits));
