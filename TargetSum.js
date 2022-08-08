/*Problem:
Given an array of sorted numbers and a target sum, 
find a pair in the array whose sum is equal to the given target 
Example 1
Input [1, 2, 3, 4, 6] target = 6
output [1, 3]
The numbers at index 1 and 3 add up to 6: 2 + 4 = 6

Example 2
Input: [2, 3, 9, 11] target = 11
output [0, 2]
The numbers at index 0 and 2 add up to 11: 2 + 9 = 11
*/

// const TargetSum = (array, target) => {
//     let left = 0,
//     right = array.length - 1;
//     while(left < right) {
//         let tempSum = array[left] + array[right];
//         if(tempSum === target){
//             return [left, right]
//         }
//         if(tempSum > target){
//             right -= 1
//         } else {
//             left += 1
//         }
//     }
//     return [-1, -1];
// }

const TargetSum = (nums, target) => {
    // create an object to hold value
    const cache = {};
    // iterate thrugh nums array
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i]
        // find the  different of target with currentNum
        const diff = target - currNum; // KEY -->  11 - 2 = 9 , 11 - 3 = 8 ,11 - 9 = 2
        // reassign cache by add diff as KEY, index as value
        cache[diff] = i; //
        //  console.log('-->' , cache[diff]) --> VALUE index 0, index 1 , index 2
        // check, if cache object at currNum is not undefined, will get the index
        console.log('cache[currNum]', cache[currNum] ,i )
        if (cache[currNum] !== undefined) {
            // return cache at currNum with index
            return [cache[currNum], i]
        }
    }
    return [-1, -1];
};
console.log(TargetSum([2, 3, 9, 11], 11)) // [0,2] 

function twoSumTarget(nums, target) {
	// declare the variable to store values we've seen and their indexes
    let cache = {};
    // declare pairIndex assign undefined
    let pairIndex;
    for (let i = 0; i < nums.length; i++) {
		// trying to find index of pair to current item.
        pairIndex = cache[target - nums[i]];
       
        if (pairIndex !== undefined) {
            console.log('->', pairIndex)
            return [pairIndex, i]
        }
        console.log('', cache[nums[i]])
        cache[nums[i]] = i;
    }
    throw new Error('No solution')
    
};

console.log(twoSumTarget([1, 2, 3, 4, 6], 6)) // [1, 3]
console.log(twoSumTarget([2, 3, 9, 11], 11)) // [0,2] 


function twoSumTarget(nums, target) {
	for(let i = 0 ; i < nums.length ; i ++){
        const curr = nums[i];
        for(let j = 0 ; j< nums.length ; j++){
            const subCurr = nums[j]
            if(curr+subCurr === target && i !== j){
                return [i,j]
            }
        }
    }
    return [-1,-1]
    
};

console.log(twoSumTarget([1, 2, 3, 4, 6], 6)) // [1, 3]
console.log(twoSumTarget([2, 3, 9, 11], 11)) // [0,2] 