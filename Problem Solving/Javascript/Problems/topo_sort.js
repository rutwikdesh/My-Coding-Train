const topo = function (adj) {
  const vis = new Array(adj.size).fill(false);
  const pathVis = [...vis];
  const stack = [];

  for (let i = 0; i < adj.size; i++) {
    if (!vis[i]) {
      if (dfs(i, adj, vis, pathVis, stack)) return [];
    }
  }

  return stack.reverse();
};

const dfs = function (node, adj, vis, pathVis, stack) {
  vis[node] = true;
  pathVis[node] = true;

  for (let neighbor of adj.get(node)) {
    if (pathVis[neighbor]) return true;
    if (!vis[neighbor]) {
      if (dfs(neighbor, adj, vis, pathVis, stack)) return true;
    }
  }

  pathVis[node] = false;
  stack.push(node);
  return false;
};

const adj = new Map();
adj.set(0, [1, 2]);
adj.set(1, [4]);
adj.set(2, [1, 3]);
adj.set(3, []);
adj.set(4, []);

console.log(topo(adj));
