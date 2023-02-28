/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
*/
// Input : Number[Array]     Output : Number
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const nums1 = [5, 4, -1, 7, 8]
var maxSubArray = function (nums) {
    let solution = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
        solution = Math.max(solution, nums[i])
    }
    return solution;
};
console.log(maxSubArray(nums))
console.log(maxSubArray(nums1))


const nums4 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const nums5 = [5, 4, -1, 7, 8]
const maxSubArray2 = function (arr) {
    // first check if arr.length === 1 than return arr[0]
    if (arr.length === 1) return arr[0]
    // declear a variable maxVaule assign to firstIndex  arr[0];
    let maxValue = arr[0];
    // declear a variable accumulated assign to firstIndex  arr[0];
    let accumulated = arr[0];
    // iterated thought each element in arr by using a for loop  to do somthing with it.
    for (let i = 1; i < arr.length; i++) {
        // declear a variable calculated to find maxSum by using Math.max() and compare each element with accumulated add each element of arr
        const calculated = Math.max(arr[i], accumulated + arr[i])
        // check if current number is BIG or should take previous accumulated number and that.
        // check if accumulated number is bigger than maxVaule, if so, replace  it.
        if (calculated > maxValue) maxValue = calculated;
        // set accumalated  = calculated value.
        accumulated = calculated;
    }
    return maxValue;
};
console.log(maxSubArray2(nums4))
console.log(maxSubArray2(nums5))


const nums2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const nums3 = [5, 4, -1, 7, 8]
const maxSubArray1 = function (arr) {
    let currentSum = 0;
    let maxSum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += arr[i];
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum;
};
console.log(maxSubArray1(nums2))
console.log(maxSubArray1(nums3))



