function shortestPath(grid, source, destination) {
  const r = grid.length;
  const c = grid[0].length;

  const dist = Array.from({ length: r }, () => Array.from({ length: c }, () => Infinity));
  dist[source[0]][source[1]] = 0;

  const queue = [[source[0], source[1]]];

  while (queue.length) {
    const [i, j] = queue.shift();
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    for (let [x, y] of directions) {
      const p = i + x, q = j + y;
      if (p > 0 && q > 0 && p < r && q < c && grid[p][q] === 1 && dist[p][q] > dist[i][j] + 1) {
        dist[p][q] = dist[i][j] + 1;
        queue.push([p, q]);
      }
    }
  }

  return dist[destination[0]][destination[1]] === Infinity ? -1 : dist[destination[0]][destination[1]];
}

const grid = [[1, 1, 1, 1], [1, 1, 0, 1], [1, 1, 1, 1], [1, 1, 0, 0], [1, 0, 0, 1]];
const source = [0, 1]
const destination = [2, 2]
console.log(shortestPath(grid, source, destination));
