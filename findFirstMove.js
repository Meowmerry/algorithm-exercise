/* 
Write a function called findFirstMove. This function accepts an array of arrays of moves and a move. It should return an array with the index of the first move in the array of arrays of moves. If the move is not present in the moves array, the function should return -1.
Examples:
let moves = [
  ["a", "b", "c"],
  ["d", "a", "f"],
  ["g", "h", "h"],
];

findFirstMove(moves, "a"); // [0, 0]
findFirstMove(moves, "h"); // [2, 1]
findFirstMove(moves, "z"); // -1
*/