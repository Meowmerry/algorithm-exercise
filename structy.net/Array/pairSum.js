/*
pair sum
Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.

test_00:
pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
test_01:
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
test_02:
pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
test_03:
pairSum([1, 6, 7, 2], 13); // -> [1, 2]
test_04:
pairSum([9, 9], 18); // -> [0, 1]
test_05:
pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]
*/
// ==== SOLUTION ChatGPI 
function pairSum(numbers, targetSum) {
    const seenNumbers = {};
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        const complement = targetSum - currentNumber;
        if (seenNumbers[complement] !== undefined) {
            return [seenNumbers[complement], i];
        }
        seenNumbers[currentNumber] = i;
    }
}
console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); // -> [3, 5]


/* 
using a hashmap (object)
n = length of array
Time: O(n2)
Space: O(1)
*/
function pairSum(numbers, targetSum) {
    for(let i = 0 ; i < numbers.length ; i +=1){
        for(let j = i + 1 ; j < numbers.length ; j+=1 ){
            if(numbers[i] + numbers[j] === targetSum){
                return [i,j]
            }
        }
    }
    
}
console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); // -> [3, 5]

/* 
using a hashmap (object)
n = length of array
Time: O(n)
Space: O(n)
*/
function pairSum(numbers, targetSum) {
    // const previousNums = {};
    // for(let i = 0 ; i< numbers.length; i +=1){
    //     const num = numbers[i];
    //     const complement = targetSum - num;
    //     if(complement in previousNums) {
    //         return [i, previousNums[complement]];
    //     }
    //     previousNums[num] = i;
    // }

    const previousNums = {};
    for (let i = 0; i < numbers.length; i += 1) {
      const num = numbers[i];
      const complement = targetSum - num;
      if (complement in previousNums) return [previousNums[complement], i];
      previousNums[num] = i;
    }
    
}
console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); // -> [3, 5]