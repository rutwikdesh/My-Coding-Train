const findOrder = function (words) {
  let i = 1;
  const n = words.length;
  const s = new Set();
  for (let word of words) {
    for (let char of word) {
      s.add(char);
    }
  }
  const N = s.size;
  const adj = new Map();
  while (i < n) {
    const a = words[i - 1];
    const b = words[i];

    let j = 0;

    while (j < Math.min(a.length, b.length)) {
      if (a[j] !== b[j]) {
        if (adj.has(cc(a[j]))) {
          adj.get(cc(a[j])).push(cc(b[j]));
        } else {
          adj.set(cc(a[j]), [cc(b[j])]);
        }
        break;
      }
      j++;
    }

    i++;
  }
  for (let char of s) {
    if (!adj.has(cc(char))) {
      adj.set(cc(char), []);
    }
  }
  console.log([...adj.keys()]);
  console.log(Math.min(...adj.keys()));
  const ans = topo(adj, N);
  const ans2 = ans.map((ele, index) => {
    return String.fromCharCode(ele + 97);
  });
  return ans2.length ? ans2.join("") : "";
};

const cc = function (str) {
  return str.charCodeAt(0) - 97;
};

const topo = function (adj, N) {
  const vis = new Array(N).fill(false);
  const pathVis = [...vis];
  const stack = [];

  for (let i = Math.min(...adj.keys()); i < Math.max(...adj.keys()); i++) {
    if (!vis[i]) {
      if (dfs(i, adj, vis, pathVis, stack)) return [];
    }
  }

  return stack.reverse();
};

const dfs = function (node, adj, vis, pathVis, stack) {
  vis[node] = true;
  pathVis[node] = true;

  console.log(node);

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

const words = ["bdbc", "dbe", "bcebc", "e", "bedb"];
console.log(findOrder(words));
