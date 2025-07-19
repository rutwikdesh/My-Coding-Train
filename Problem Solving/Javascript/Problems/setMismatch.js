var findErrorNums = function (nums) {
  let slow = nums[0];
  let fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  slow = nums[0];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  const duplicateNum = slow;
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return [duplicateNum, expectedSum - sum + duplicateNum];
};

console.log(findErrorNums([1, 2, 2, 4]));
