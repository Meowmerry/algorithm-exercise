/* 
countValues
Write a function called countValues which accepts an array and a number and returns the number of times 
that value appears in the array.
Examples:
countValues([4,1,4,2,3,4,4], 4) // 4
countValues([4,1,4,2,3,4,4], 100) // 0
countValues([], 1) // 0

Input : Array and Num
Output : Num
*/
const countValues = (array, num, i = 0, count = 0) => {
  // base case : if array is empty return count
  if (!array[i]) return count;
  // if array at current element is equal to num , increment count
  if (!array[i] === num) count += 1;
  // recuresively call and return countValues func and pass array, num, count
  return countValues(array, num, i + 1, count);
};

console.log(countValues([4, 1, 4, 2, 3, 4, 4], 4)); // 4
console.log(countValues([4, 1, 4, 2, 3, 4, 4], 100)); // 0
console.log(countValues([], 1)); // 0
