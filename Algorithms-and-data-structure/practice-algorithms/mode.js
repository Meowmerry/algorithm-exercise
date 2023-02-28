/*
Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.
Assume that at least one number is present in the array.
e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8
*/

const mode = array => {
    
};
// console.log(mode([7, 5, 8, 8, 2, 5]))
/*
Extension:
Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.
Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.
e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 
*/

const modeNested = array => {
    
};
console.log(modeNested([7, [
    [5, [8], 8], 2, 5
]]))
module.exports = {
    mode,
    modeNested
};
