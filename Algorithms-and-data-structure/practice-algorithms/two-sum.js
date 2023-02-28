/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 
  Example:
  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,
  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

// if(!arr[i]) return false
// if(arr[i] + arr[i+1] === target) return true;
// return twoSum(arr, target, i+1)

const twoSum = (arr, target) => {

  // for (let i = 0; i < arr.length; i++) {
  //   const curr = arr[i];
  //   for (let j = 1; j < arr.length; j++) {
  //     if (curr + arr[j] === target) return true;
  //   }
  // }
  // return false;

  const cache = {}
  
};
const nums = [2, 5, 11, 15];
console.log(twoSum(nums, 7)); //-> true
console.log(twoSum([-1, 4, 6, 12, 9], 2)); // false

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.
The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?
*/

const threeSum = (arr, target) => {};

module.exports = { twoSum, threeSum };
