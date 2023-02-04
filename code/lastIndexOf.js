/*
Write a function called lastIndexOf, which accepts an array and a number. 
The function should return the last index at which the value exists, or -1 if the value is not found.
Do not use the built in Array.lastIndexOf() function!
Examples:
console.log(lastIndexOf([1, 2, 3, 4], 2)); // 1
console.log(lastIndexOf([1, 2, 3, 4, 2], 2)); // 4
console.log(lastIndexOf([1, 2, 3, 4], 22)); // -1

*/
// Input : Array and Number
// Output : Number of index findOut at the last element
// const lastIndexOf = (arr,num )=>{
//    let index = arr.length;
//     while(index >= 0){
//     if(arr[index] === num) return index;
//     index -= 1;
//     }
//     return -1;
// }
const lastIndexOf = (arr, num, index = arr.length) => {
  if (arr[index] === num) return index;
  if (index < 0) return -1;
  return lastIndexOf(arr, num, index - 1);
};
console.log(lastIndexOf([1, 2, 3, 4], 2)); // 1
console.log(lastIndexOf([1, 2, 3, 4, 2], 2)); // 4
console.log(lastIndexOf([1, 2, 3, 4], 22)); // -1
