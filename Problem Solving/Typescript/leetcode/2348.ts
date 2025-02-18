// https://leetcode.com/problems/number-of-zero-filled-subarrays/description/

function zeroFilledSubarray(nums: number[]): number {
  let count = 0;
  let i = 0;
  while (i < nums.length) {
    let k = 0;
    while (nums[i] === 0) {
      k++;
      i++;
    }
    if (k > 0) count += counterFun(k);
    if (k === 0) i++;
  }
  return count;
}

function counterFun(num: number): number {
  if (num === 0 || num === 1) return num;
  return counterFun(num - 1) + num;
}

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));
