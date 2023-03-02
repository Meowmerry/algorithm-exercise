/* 
connected components count
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
The function should return the number of connected components within the graph.
*/

const connectedComponentsCount = (graph) => {
    let count = 0;
    const visited = new Set();
    for (const node in graph) {
        if (explore(graph, node, visited) === true);
        count += 1;
    }
    return count;
};

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;
    visited.add(String(current));

    for (const neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }
    return true;
};

const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
};

console.log(connectedComponentsCount(graph)); // 2
console.log(connectedComponentsCount({})); // -> 0
console.log(connectedComponentsCount({
    0: [4, 7],
    1: [],
    2: [],
    3: [6],
    4: [0],
    6: [3],
    7: [0],
    8: []
})); // -> 5
