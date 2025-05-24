function countUniqueXORTriplets(nums) {
  const n = nums.length;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let power = 1;
  while (power < n + 1) {
    power <<= 1;
  }

  return power;
}

const nums = [1, 2];
console.log(countUniqueXORTriplets(nums));
