

const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
  };

const defthFirstPrint = (graph, source) => {
  // source will be the first node
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

// console.log(defthFirstPrint(graph, 'a'))

const defthFirstPrintRecursive = (graph, source) => {
  // source will be the first node
  console.log(source);
  for (const neighbor of graph[source]) {
    defthFirstPrintRecursive(graph, neighbor);
  }
};
console.log(defthFirstPrintRecursive(graph, "a"));

const brethFirstPrinte = (graph, source) => {
  // source will be the first node
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

console.log(defthFirstPrint(graph, "a"));
