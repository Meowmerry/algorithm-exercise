function diagonalDifference(arr) {
  // Write your code here
  let n = arr.length;
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === j) {
        d1 += arr[i][j];
      }
      if (i + j === n - 1) {
        d2 += arr[i][j];
      }
    }
  }
  return Math.abs(d1 - d2);
} //

console.log(diagonalDifference([
[1, 2, 3],
[4, 5, 6],
[9, 8, 9],
]));
