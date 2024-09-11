/*
268. Missing Number
https://leetcode.com/problems/missing-number/description/
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
*/

// Time: O(N^2) , Space: O9N
var missingNumber = function (nums) {
    let n = nums.length;
    let res;
    // Iterate through num and look up the nums is missing in nums
    for (let i = 0; i <= n; i++) {
        if (!nums.includes(i)) {
            res = i;
        }
    }
    return res;
};

var missingNumber = function (nums) {
    let n = nums.length;
    // Find expect sum of all the element in array
    let expectedSum = (n * (n + 1) / 2);
    let actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
};
console.log(missingNumber([3, 0, 1])); // 2