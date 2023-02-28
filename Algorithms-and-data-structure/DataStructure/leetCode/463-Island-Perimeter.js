var islandPerimeter = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    var perimeter = 0;

    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (!grid[row][col]) continue;

            perimeter += 4;

            // abstract the number of adjacent island
            if (row > 0 && grid[row - 1][col]) perimeter--;
            if (col > 0 && grid[row][col - 1]) perimeter--;
            if (row < rows - 1 && grid[row + 1][col]) perimeter--;
            if (col < cols - 1 && grid[row][col + 1]) perimeter--;
        }
    }

    return perimeter;
};
let grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]] //16
//Explanation: The perimeter is the 16 yellow stripes in the image above.
let grid1 = [[1]] // 4
let grid2 = [[1, 0]] //4
console.log('example1 ', islandPerimeter(grid))
console.log('example2 ', islandPerimeter(grid1))
console.log('example3 ', islandPerimeter(grid2))
