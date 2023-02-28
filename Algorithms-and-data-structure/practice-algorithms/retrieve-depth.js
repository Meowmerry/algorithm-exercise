/*
Given an arbitrarily nested array of numbers and a positive integer "depth",
return a new array consisting of the numbers with depth less than or equal to
the provided depth, in order of appearance.
The original array is considered to be at depth 1, and inner arrays are at
greater depth.
For example:
retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
"depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
the 7 is at "depth 3".
retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] becuase the 2 and 5 are at
"depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
"depth 3".
retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
is within "depth 3". No number is deeper.
*/

/*
    base case : 
    if depth less then or equal to 1, return arr with filter out array, only want values that are not arrays.
    
    recursive case : invoke retrieveDepth and passed in arr.flat() as first argument, and depth decrement by 1 each time the recursive call. 
    return the function but the arguments are different. 
    We flatten the array with each new call and decrement the depth by 1. 
    We do this until we reach our base case, which is when the depth is less than or equal to 1. 
    Less than to catch any weird arguments that are less than 1 initially and 1 as we decrement we should eventually reach 1.
*/
const retrieveDepth = (arr, depth) => {

};

/*
Extension:
Given an arbitrarily nested array of numbers and a nonnegative integer "depth",
return a new nested array that's flattened to a certain level of depth.
Flattening at "depth 0" just returns the same array.
Flattening at "depth 1" returns the array flattened at just one level.
For example:
flattenDepth([2, [4, [7], 1], 5], 0)
  -> [2, [4, [7], 1], 5] // the same array
flattenDepth([2, [4, [7], 1], 5], 1)
  -> [2, 4, [7], 1, 5] // flattened at one level
flattenDepth([2, [4, [7], 1], 5], 2)
  -> [2, 4, 7, 1, 5] // flattened at two levels
flattenDepth([2, [4, [7], 1], 5], 3)
  -> [2, 4, 7, 1, 5] // flattening at greater levels just produces a completely
flattened array
*/

const flattenDepth = (arr, depth) => arr.flat(depth);

// CS SOLUTION
const flattenDepthCS = (arr, depth) => {
 
};
module.exports = { retrieveDepth, flattenDepth };
