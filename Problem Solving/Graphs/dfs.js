function dfsOfGraph(adj) {
  const vis = new Array(adj.length).fill(0);
  const dfs = [];

  for (let i = 0; i < adj.length; i++) {
    if (!vis[i]) {
      dfsRec(adj, dfs, vis, i);
    }
  }
  return dfs;
}

function dfsRec(adj, dfs, vis, ele) {
  vis[ele] = 1;
  for (let node of adj[ele]) {
    dfs.push(node);
    dfsRec(adj, dfs, vis, node);
  }
}
