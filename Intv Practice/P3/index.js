/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
  const parent = Array(n)
    .fill(0)
    .map((_, id) => id);

  const find = (u) => {
    if (parent[u] !== u) {
      parent[u] = find(parent[u]);
    }
    return parent[u];
  };

  const union = (u, v) => {
    const pu = find(u);
    const pv = find(v);
    if (pu !== pv) {
      parent[pu] = pv;
    }
  };

  for (let i = 0; i < n - 1; i++) {
    if (nums[i + 1] - nums[i] <= maxDiff) {
      union(i, i + 1);
    }
  }

  const answer = [];
  for (const [u, v] of queries) {
    answer.push(find(u) === find(v));
  }

  return answer;
};
