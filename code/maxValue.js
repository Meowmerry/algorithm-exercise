/**
 * max value
Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty.

test_00:
maxValue([4, 7, 2, 8, 10, 9]); // -> 10
test_01:
maxValue([10, 5, 40, 40.3]); // -> 40.3
test_02:
maxValue([-5, -2, -1, -11]); // -> -1
test_03:
maxValue([42]); // -> 42

## Complexity  ##
It is linear of O of n runtime
n = array length
Time: O(n) because we interate thru every number in array
Space: O(1) because we don't store anything so only one variable return

*/
const maxValue = (nums) => {
    // todo
    let max = -Infinity;
    for(i = 0 ; i < nums.length ; i+=1){
      if(nums[i] > max ){
        max = nums[i]
      }
    }
    return max;
    
};
console.log(maxValue([4, 7, 2, 8, 10, 9])); // -> 10)



const maxValue1 = (nums) => {
    // todo
   return nums.reduce((acc, curr)=>{
    if(curr > acc){
        acc = curr;
    }
    return acc;
   },-Infinity)
};
console.log(maxValue1([4, 7, 2, 8, 10, 9])); // -> 10)

const maxValue2 = (nums) => {
    // todo
   return Math.max(...nums)
};
console.log(maxValue2([4, 7, 2, 8, 10, 9])); // -> 10)


const maxValue3 = (nums) => {
  // todo
  let maximum = -Infinity;
  for(let num of nums){
    if(num > maximum ) maximum = num;
  }
  return maximum;
  
};
console.log(maxValue3([4, 7, 2, 8, 10, 9])); // -> 10)

