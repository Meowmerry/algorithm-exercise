/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.
Input : Array of array
Output :Array of array
*/

const mergeRanges = intervals => {
    
};

// === JAY SOLUTION ========


// const mergeRanges = intervals => { // Time Complexity O log N , Space O(1)
//     intervals.sort((a, b) => a[0] - b[0])
    
//     // push first to interval
//     const result = [];
//     const first = intervals.shift();
//     result.push(first);

//     // merge overlapping intervals
//     intervals.forEach(curr => {
//         const recent = result[result.length - 1];

//         if (curr[0] <= recent[1])
//             recent[1] = Math.max(recent[1], curr[1]);

//         else result.push(curr)

//     });

//     return result;
// };
let intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(intervals)); //-> [[0, 1], [3, 8], [9, 12]]
module.exports = { mergeRanges };

