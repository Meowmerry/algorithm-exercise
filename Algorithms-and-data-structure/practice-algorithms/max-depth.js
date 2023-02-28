/*
Given an arbitrarily nested array of arrays, return the maximum depth.
For example:
maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([7, 8, 0, 9]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)
maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)
maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)
maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)
*/

// *------- Meow Solution -------*





//! **  - We much touch on each element in the array to know if it's another array ===> O(n) 
//! **  - Since we end up repeating the same step of checking if an element in an array and entering that nested array, we can use recurion
//! **  - We much touch on each element in the array to know if it's another array ===> O(n) 


// *------- CS Solution -------*
// * iterate throught input arr and check if ele is arr
// * create acounter a variable to keep track of depth
// * Use Math.max to compare/ update to max depth
// * Use recursion to 
const maxDepth  = arr => {
}

module.exports = { maxDepth };

