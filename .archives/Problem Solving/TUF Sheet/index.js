class Solution {
  /**

  * @param number d
  * @param number[] arr

  * @returns number
  */
  countPartitions(arr, d) {
    let totalSum = 0;
    arr.forEach((ele) => (totalSum += ele));
    const dp = new Array(arr.length + 1)
      .fill()
      .map(() => Array(totalSum + 1).fill(-1));
    return this.fun(arr, d, 0, 0, totalSum, dp);
  }

  fun(arr, d, ind, currSum, totalSum, dp) {
    if (ind === arr.length) {
      if (2 * currSum - totalSum === d) return (dp[ind][currSum] = 1);
      return 0;
    }

    if (dp[ind][currSum] !== -1) return dp[ind][currSum];

    let pick = 0;
    if (2 * currSum - totalSum <= d) {
      pick = this.fun(arr, d, ind + 1, currSum + arr[ind], totalSum, dp);
    }
    let notPick = this.fun(arr, d, ind + 1, currSum, totalSum, dp);

    return (dp[ind][currSum] = pick + notPick);
  }
}
