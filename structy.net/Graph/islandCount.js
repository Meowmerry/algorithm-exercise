/* 
island count
Write a function, islandCount, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. 
The function should return the number of islands on the grid. 
An island is a vertically or horizontally connected region of land.
*/

const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            // invoke helper function
            if (exportIsland(grid, r, c, visited) === true) {
                count += 1;
            }
        }
    }
    return count;
}

const exportIsland = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid.length;
    if (!rowInbounds || !colInbounds) return false;

    if (grid[r][c] === 'W') return false;

    const position = r + ',' + c;
    if (visited.has(position)) return false;
    visited.add(position);
    exportIsland(grid, r - 1, c, visited);
    exportIsland(grid, r + 1, c, visited);
    exportIsland(grid, r, c - 1, visited);
    exportIsland(grid, r, c + 1, visited);
    return true;
}


const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid)); // -> 3