/* 1. Two Sum
Easy

25291

821

Add to List

Share
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1] */

//let nums = [2, 7, 11, 15], target = 9;


// Solution 1 ---> naive O(N*2)
function twoSum(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                result.push(i, j)
                return result;
            }
        }
    }
}
console.log('towSum', twoSum(nums, target))


//Solution 2 ---> naive O(N)
function twoSum(nums, target) {
    const previousValues = {}
    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index]
        const neededValues = target - currentNumber
        const index2 = previousValues[neededValues]
        if (index2 != null) {
            return [index2, index]
        } else {
            previousValues[currentNumber] = index
        }
    }
}
let nums1 = [3, 2, 4], target1 = 6;
console.log('twoSum', twoSum(nums1, target1))


//Solution 3 ---> naive O(N)
function twoSum(nums, target) {
    let sum = [];
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        let twoArr = nums[i] + nums[j]
        if (twoArr === target) {
            sum.push(i, j)
        } else if (twoArr < target) {
            i + j
        }
        else {
            i--
        }
    }
    return sum
}
// let nums = [3, 6, 4, 5], target = 10;
let nums2 = [3, 2, 3], target2 = 6;
console.log('twoSum', twoSum(nums2, target2))

// Looking for a target, we can utilize some elementary alegbra...
// By subtracting the value we're looping over from the target number, we 
// find what value needs to be added onto the looped number in order equal the target.
// If this calculated difference exists in a map (used for value => index storage)
// we can retrieve its index, and pair it with the index of the value being looped over
// to successfully complete the problem

function twoSum(numbers, target) {
    // create a map as a method of key value storage for O(1) search / access
    // Array has an O(n) search-time, so we opt for the map
    const numberMap = new Map()

    // start by looping through each number (we use a traditional
    // for-loop here since it allows us to use "break" or "return" if we find
    // the number we're looking for before reaching the end of the array)
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]

        // here we find the difference between the target and number...
        // "difference" represents the number that needs to be added
        // onto "number" (the current number we're looping over) in order
        // to equal the function's target number
        const difference = target - number

        // check numberMap for the difference value. if we already
        // looped over this number, that means it's in our map, therefore
        // we can retrieve the value from our map (O(1)), get its index, and return
        // the index we're currently looping over to complete the problem
        if (numberMap.has(difference)) return [numberMap.get(difference), i]

        // if we haven't already looped over the number, store it
        // and its index in a JS Map (hash table) so we can
        // get an O(1) search / access check to see if we looped over the
        // number previously
        numberMap.set(number, i)
    }
};

var twoSum = function (nums, target) {
    var d = {};
    for (var i = 0; i < nums.length; i++) {
        if (!d.hasOwnProperty(target - nums[i])) {
            d[nums[i]] = i;
        } else {
            return [d[target - nums[i]], i];
        }
    }

};

let nums4 = [2, 7, 11, 15], target4 = 9;
console.log('twoSum', twoSum(nums4, target4))



//Solution 2 ---> naive O(N)
function twoSum(nums, target) {
    const previousValues = {}
    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index] // 3,2,4
        const neededValues = target - currentNumber //  3,4,2
        const index2 = previousValues[neededValues] // undefined , undefined, 1
        if (index2 != null) {
            return [index2, index]  // 1,2
        } else {
            previousValues[currentNumber] = index  // 0,1
        }
    }
}
let nums = [3, 2, 4], target = 6;
console.log('twoSum', twoSum(nums, target))