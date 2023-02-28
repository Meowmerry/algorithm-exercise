/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.
Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?
ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false

* O(n2) : processing work (n) * process work(n)
* Using Binary  Time : Big O(log n)
* Using Binary Search Space : Big O(1)
*/

const findInOrderedSet = (array, target) => {
  
};
const nums = [-3, 0, 8, 13, 37];
console.log(findInOrderedSet(nums, 0)); //-> true

const findInOrderedSetIterativeBinarySearch  =(array, target) =>{
 
}
const nums1 = [-3, 0, 8, 13, 37];
console.log(findInOrderedSetIterativeBinarySearch(nums1, 0)); //-> true

/*
Extension:
Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  
ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false
*/

// * Using While loop  Time : Big O(log n)
// * Using While loop Space : Big O(1)
const findIn2dMatrix = (matrix, target) => {
       
};

module.exports = { findInOrderedSet, findIn2dMatrix };
