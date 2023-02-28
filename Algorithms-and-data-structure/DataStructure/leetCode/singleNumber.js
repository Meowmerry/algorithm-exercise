/*
136. Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/
// var singleNumber = function(nums) {
//     let result;
//     for (let i = 0; i < nums.length; i++) {
//         result = nums[i];
//         for (let j = 0; j < nums.length; j++) {
//             if (result === nums[j] && i !== j) {
//                 break;
//             }
//             if (nums[j + 1] === undefined) {
//                 return result;
//             }
//         }
//     }
// }
var singleNumber = function(nums, i =0 , result = 0) {
   if(!nums[i]) return result;
  };
  console.log(singleNumber([4,1,2,1,2])) // 4
  console.log(singleNumber([2,2,1])) // 1