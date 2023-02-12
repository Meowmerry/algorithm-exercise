/*
Write the function solution which takes a matrix of integers and creates an array out of it in a zigzag fashion.
This means traversing the first row forwards, the second row backwards, and alternating until the last row.

Example:

[[1, 2, 3, 4],
 [5, 6, 7, 8],
 [9, 10, 11, 12],
 [13, 14, 15, 16]]
returns [1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13].

[execution time limit] 4 seconds (js)

[input] array.array.integer arg1

[output] array.integer

This function uses four variables to keep track of the starting and ending row and column indices, 
and a variable direction to keep track of the current direction of traversal. 
The while loop continues until all rows and columns have been traversed. 
In each iteration, the function performs the necessary traversal 
in the current direction and updates the indices and direction accordingly.

*/

function zigzagArray(matrix) {
  let result = [];
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;
  let direction = "right";

  while (rowStart <= rowEnd && colStart <= colEnd) {
    if (direction === "right") {
      for (let i = colStart; i <= colEnd; i++) {
        result.push(matrix[rowStart][i]);
      }
      rowStart++;
      direction = "down";
    } else if (direction === "down") {
      for (let i = rowStart; i <= rowEnd; i++) {
        result.push(matrix[i][colEnd]);
      }
      colEnd--;
      direction = "left";
    } else if (direction === "left") {
      for (let i = colEnd; i >= colStart; i--) {
        result.push(matrix[rowEnd][i]);
      }
      rowEnd--;
      direction = "up";
    } else if (direction === "up") {
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(matrix[i][colStart]);
      }
      colStart++;
      direction = "right";
    }
  }

  return result;
}

console.log(
  zigzagArray([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
); //[1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13]
