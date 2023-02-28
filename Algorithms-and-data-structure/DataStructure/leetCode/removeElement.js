/* 27. Remove Element
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    return nums.reduce((idx, curr) => curr !== val ? nums[idx++] = curr : idx, 0)
};

let nums = [3, 2, 2, 3], val = 3
let num1 = [0, 1, 2, 2, 3, 0, 4, 2], val1 = 2
console.log(removeElement(nums, val))
//console.log(removeElement(num1, val1))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // 4