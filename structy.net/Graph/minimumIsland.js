/* 
minimum island
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. The function should 
return the size of the smallest island. An island is a vertically or 
horizontally connected region of land.

You may assume that the grid contains at least one island.
*/

const minimumIsland = (grid) => {
    const visited = new Set();
    let minimumSize = Infinity;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            const size = exploreSize(grid, r, c, visited);
            if (size > 0 && size < minimumSize) minimumSize = size;
        }
    }
    return minimumSize;
};

const exploreSize = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return 0;
    if (grid[r][c] === 'W') return 0;
    const position = r + "," + c;
    console.log('visited', visited)
    if (visited.has(position)) return 0;
    visited.add(position);
    let size = 1;
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c - 1, visited);
    size += exploreSize(grid, r, c + 1, visited);

    return size;
};

const grid = [
    ["W", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "L", "W"],
    ["W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid)); // -> 2
