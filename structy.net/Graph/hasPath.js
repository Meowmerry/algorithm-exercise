/*
has path
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph 
and two nodes (src, dst). The function should return a boolean indicating whether 
or not there exists a directed path between the source and destination nodes.

Hey. This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. 
Be productive, not stubborn. -AZ
*/

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};
const graph1 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};
/*  depth first iterative
  n = number of nodes
e = number edges
Time: O(e)
Space: O(n)
*/
const hasPathDepth = (graph, src, dst) => {
  const stack = [src];
  while (stack.length) {
    const current = stack.pop();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return false;
};

// console.log(hasPathDepth(graph, "f", "k")); // true
// console.log(hasPathDepth(graph1, "f", "j")); // false

/* depth first Recurrsive
  n = number of nodes
e = number edges
Time: O(e)
Space: O(n)
*/
const hasPathDepthRecur = (graph, src, dst) => {
  if(src === dst) return true;
  for(const neighbor of graph[src]){
      if(hasPathDepthRecur(graph, neighbor, dst)) return true
  }
  return false

};

console.log(hasPathDepthRecur(graph, "f", "k")); // true
console.log(hasPathDepthRecur(graph1, "f", "j")); // false

/*  breadth first iterative
n = number of nodes
e = number edges
Time: O(e)
Space: O(n)
*/
const hasPathBepth = (graph, src, dst) => {
  const queue = [src];
  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

// console.log(hasPathBepth(graph, "f", "k")); // true
// console.log(hasPathBepth(graph1, "f", "j")); // false
