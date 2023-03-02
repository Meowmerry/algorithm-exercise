/* 
largest component
Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
The function should return the size of the largest connected component in the graph.

n = number of nodes
e = number edges
Time: O(e)
Space: O(n)
*/
const largestComponent = (graph) => {

    const visited = new Set();
    let largest = 0;

    for (const node in graph) {

        const size = exploreSize(graph, node, visited);
        // console.log('size', size)
        if (largest < size) largest = size;
    }
    return largest;
}
const exploreSize = (graph, current, visted) => {
    if (visted.has(current)) return 0;
    visted.add(current);
    let size = 1;
    console.log('visited', visted)
    for (const neighbor of graph[current]) {
        size += exploreSize(graph, neighbor, visted)
    }

    return size;
}

console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
})); // -> 4

// console.log(largestComponent({})); // -> 0
// console.log(largestComponent({
//     1: ['2'],
//     2: ['1', '8'],
//     6: ['7'],
//     9: ['8'],
//     7: ['6', '8'],
//     8: ['9', '7', '2']
// })); // -> 6