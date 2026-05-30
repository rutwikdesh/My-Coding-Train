function smallestDivisor(nums: number[], threshold: number): number {
  const len: number = nums.length;
  let low: number = 1, high: number = Math.max(...nums);
  let ans: number = high;
  while (low <= high) {
      let mid = low + (high - low) / 2;
      if (isPossible(nums, mid, threshold)) {
          ans = mid;
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
  return ans;
};

function isPossible(nums: number[], divisor: number, threshold: number): boolean {
  let res: number = 0;
  nums.map((num) => {
      res += Math.ceil(num/divisor);
  });
  if (res <= threshold) return true;
  return false;
}
