/*
undirected path
Write a function, undirected_path, that takes in a list of edges for an undirected graph 
and two nodes (node_A, node_B). The function should return a boolean 
indicating whether or not there exists a path between node_A and node_B.
*/

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];
/* 
# * converst to object graph:
graph : {
  i: [ 'j', 'k' ],
  j: [ 'i' ],
  k: [ 'i', 'm', 'l' ],
  m: [ 'k' ],
  l: [ 'k' ],
  o: [ 'n' ],
  n: [ 'o' ]
}
*/

const edges1 = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];
/* 
# * converst to object graph:
graph : {
  b: [ 'a', 'c' ],
  a: [ 'b', 'c' ],
  c: [ 'a', 'b' ],
  q: [ 'r', 's', 'u', 't' ],
  r: [ 'q' ],
  s: [ 'q' ],
  u: [ 'q' ],
  t: [ 'q' ]
}
*/

// building graph to be object format
const buildGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  //console.log('graph', graph)
  return hasPath(graph, nodeA, nodeB, new Set());
}

// helper function 
const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src)
  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  return false;
};



console.log(undirectedPath(edges, "l", "j")); // -> true
// console.log(undirectedPath(edges1, "r", "b")); // -> false
