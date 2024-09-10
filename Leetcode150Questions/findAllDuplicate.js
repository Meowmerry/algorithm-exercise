/*

442. Find All Duplicates in an Array
https://leetcode.com/problems/find-all-duplicates-in-an-array/
Given an integer array nums of length n where all the integers of nums are in the range [1, n] 
and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, 
excluding the space needed to store the output

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

Example 2:
Input: nums = [1,1,2]
Output: [1]

Example 3:

Input: nums = [1]
Output: []
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
Each element in nums appears once or twice.
*/

var findDuplicates = function (nums) {
    // Iterate through the nums list
    const mapNum = new Map();
    const duplicate = [];
    for (const num of nums) {
        mapNum.set(num, (mapNum.get(num) || 0) + 1);
        if (mapNum.get(num) > 1) {
            duplicate.push(num);
        }
    }

    return duplicate;
};
// 1, 1, 2
// i === i+1
// nums[i] = nums[i+1]

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); //  [2,3]
console.log(findDuplicates([1, 1, 2])); // [1]
console.log(findDuplicates([]));// []