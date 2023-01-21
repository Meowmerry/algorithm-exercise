/*Given an arrray of unsorted numbers, find all unique triplets
in it that add up to zero
Input: [-3, 0, 1, 2, -1, 1, -2]
output: [[-3, 1, 2], [-2, 0, 2],[-2, 1, 1], [-1, 0, 1]] 
*/
const uniqueTriplets = (nums) => {
  let result = [];

  nums.sort((a, b) => a - b); // O(logN)

  for (let i = 0; i < nums.length - 1; i++) {
    // can't be the same as the previous value
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
      
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        // break;
        left++;
        // //keep looking for the next one that is not equal the previous and lower than right
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return result;
};
console.log(uniqueTriplets([-3, 0, 1, 2, -1, 1, -2])); //  [[-3, 1, 2], [-2, 0, 2],[-2, 1, 1], [-1, 0, 1]]
