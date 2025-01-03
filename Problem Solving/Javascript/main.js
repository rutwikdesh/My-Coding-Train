var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  const firstSetBit = (xor & (xor - 1)) ^ xor;
  let bucket1 = 0,
    bucket2 = 0;

  console.log(firstSetBit);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & firstSetBit) {
      bucket1 ^= nums[i];
    } else {
      bucket2 ^= nums[i];
    }
  }
  return [bucket1, bucket2];
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
