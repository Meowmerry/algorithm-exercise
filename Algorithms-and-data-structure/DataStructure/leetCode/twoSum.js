/* 
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
/* ============= SOLUTION 1 ======================= */
const twoSum1 = function (nums, target) {
    let previouseValues = {};
    for (let index1 = 0; index1 < nums.length; index1++) {
        const currentNumber = nums[index1];
        const neededValues = target - currentNumber;
        const index2 = previouseValues[neededValues];
        if (index2 != null) {
            return [index2, index1];
        } else {
            previouseValues[currentNumber] = index1;
        }
    }
};
const nums = [2, 7, 11, 15], target = 17 // [0, 3]
const nums1 = [2, 7, 11, 15], target1 = 9 // [0, 1]
const nums2 = [3, 2, 4], target2 = 6  // [1,2]
const nums3 = [3, 3], target3 = 6 //[0,1]
console.log(twoSum1(nums, target))// [0, 1]
console.log(twoSum1(nums1, target1))// [0, 1]
console.log(twoSum1(nums2, target2))// [1,2]
console.log(twoSum1(nums3, target3))//[0,1]
