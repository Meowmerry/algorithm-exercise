
/*
217. Contains Duplicate
https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

*/


// Contain duplicate
var containsDuplicate = function (nums) {
    const numsMap = new Map();
    for (const num of nums) {
        numsMap.set(num, (numsMap.get(num) || 0) + 1);
        if (numsMap.get(num) > 1) return true;
    }
    return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));