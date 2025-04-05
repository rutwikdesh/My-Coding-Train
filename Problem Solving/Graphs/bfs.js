function bfsOfGraph(adj) {
  const vis = new Array(adj.length).fill(0);
  const queue = [];
  const bfs = [];

  queue.push(0);
  vis[0] = 1;

  while (queue.length) {
    const ele = queue.shift();
    bfs.push(ele);

    for (let node of adj[ele]) {
      if (!vis[node]) {
        queue.push(node);
        vis[node] = 1;
      }
    }
  }
  return bfs;
}
