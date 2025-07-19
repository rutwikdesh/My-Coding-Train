const shortestPath = function (V, E, edges) {
  const adj = new Map();
  const adjTopo = new Map();
  for (let i = 0; i < edges.length; i++) {
    adj.set(edges[i][0], [
      ...(adj.get(edges[i][0]) || []),
      [edges[i][1], edges[i][2]],
    ]);
    adjTopo.set(edges[i][0], [
      ...(adjTopo.get(edges[i][0]) || []),
      edges[i][1],
    ]);
  }
  for (let i = 0; i < V; i++) {
    if (!adj.has(i)) {
      adj.set(i, []);
      adjTopo.set(i, []);
    }
  }

  const topoSort = topo(adjTopo, V);
  console.log(topoSort);
};

const topo = function (adj, N) {
  const vis = new Array(N).fill(false);
  const pathVis = [...vis];
  const stack = [];

  for (let i of adj.keys()) {
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
const edges = [
  [0, 1, 2],
  [0, 2, 1],
];
shortestPath(4, 2, edges);
