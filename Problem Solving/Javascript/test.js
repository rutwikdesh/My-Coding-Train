const bfs = (adj, arr) => {
  const queue = [];
  queue.push([0, 0]);

  while (queue.length !== 0) {
    const node = queue.shift();
    const val = node[0];
    const prev = node[1];
    if (arr[val] === -1) {
      arr[val] = !prev;
      const adjEles = adj.get(val);

      for (let ele of adjEles) {
        queue.push([ele, !prev]);
      }
    } else if (arr[val] === prev) return false;
  }
  return true;
};

const isBipartite = (V, edges) => {
  const arr = Array.from({ length: V }, () => -1);
  const queue = [];

  queue.push(0);
  const adj = new Map();

  for (let [i, j] of edges) {
    (adj.has(i) ? adj.get(i) : adj.set(i, []).get(i)).push(j);
    (adj.has(j) ? adj.get(j) : adj.set(j, []).get(j)).push(i);
  }

  return bfs(adj, arr);
};

console.log(
  isBipartite(3, [
    [0, 1],
    [1, 2],
  ])
);
