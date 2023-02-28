/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water. */

let grid2 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
// Output: 1


let grid3 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
// Output: 3

// * @param {character[][]} grid
// * @return {number}

var numIslands = function (grid) {
    let countIslands = 0;
    for (const rowIndex in grid) {
        for (const colIndex in grid[rowIndex]) {
            if (grid[rowIndex][colIndex] === '1')
                countIslands++
            teraform(parseInt(rowIndex), parseInt(colIndex), grid)
        }
    }
    return countIslands;
};
// convert stuff arround us to water
const teraform = (rowIndex, colIndex, grid) => {
    if (grid[rowIndex] === undefined || grid[rowIndex][colIndex] === undefined || grid[rowIndex][colIndex] === '0') return;
    grid[rowIndex][colIndex] = '0';
    teraform(rowIndex + 1, colIndex, grid);
    teraform(rowIndex - 1, colIndex, grid);
    teraform(rowIndex, colIndex + 1, grid);
    teraform(rowIndex, colIndex - 1, grid);

}

console.log(numIslands(grid2))
console.log(numIslands(grid3))