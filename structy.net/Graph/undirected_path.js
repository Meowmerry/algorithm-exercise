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

const edges1 = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];
const undirectedPath = (edges, nodeA, nodeB) => {


};

console.log(undirectedPath(edges, "l", "j")); // -> true
console.log(undirectedPath(edges1, "r", "b")); // -> false
