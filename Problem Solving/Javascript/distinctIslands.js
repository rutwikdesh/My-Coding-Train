class Solution {
  // Function to count the number of distinct islands.
  countDistinctIslands(grid) {
    this.m = grid.length;
    this.n = grid[0].length;
    const s = new Set();
    for (let i = 1; i < this.m - 1; i++) {
      for (let j = 1; j < this.n - 1; j++) {
        if (grid[i][j] === 1) {
          const arr = [];
          this.dfs(grid, i, j, arr, row0, col0);
          s.add(JSON.stringify(arr));
        }
      }
    }
    return s.length;
  }

  dfs(grid, visited, x, y, arr, row0, col0) {
    if (visited[x][y] === 0) {
      visited[x][y] = 1;
      arr.push([row0 - x, col0 - y]);
      const indices = [
        [x - 1, y],
        [x, y - 1],
        [x + 1, y],
        [x, y + 1],
      ];
      for (let [i, j] of indices) {
        if (
          i >= 0 &&
          j >= 0 &&
          i <= this.m - 1 &&
          j <= this.n - 1 &&
          grid[i][j] === 1
        ) {
          this.dfs(grid, visited, i, j, arr, row0, col0);
        }
      }
    }
  }
}
