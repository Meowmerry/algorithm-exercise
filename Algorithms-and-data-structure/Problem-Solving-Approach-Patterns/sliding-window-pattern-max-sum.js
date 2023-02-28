/*
Write a function called maxSubarraySum whice accepts
an array of intergers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
*/

const maxSubarraySum = (arr, num) => {
    // check if num > arr.lenght return null;
    if (num > arr.length) return null;
    // set max = infinity number;
    let max = -Infinity;
    // loop through arr to compare two postion of arr 
    // check if i < arr.lenght - num + 1 then i++
    // ***** 0 < 9 - 2 + 1 ===> 0 < 6 ? 0++
    // i = 0 < 8 ? 0++
    // i = 1 < 8 ? 1++
    // i = 2 < 8 ? 2++
    // i = 3 < 8 ? 3++
    // i = 4 < 8 ? 4++
    // i = 5 < 8 ? 5++
    // i = 6 < 8 ? 6++
    // i = 7 < 8 ? 7++
    // i = 8 < 8 ? break out of loop
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        // check if j < num ? j++
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
            // check if temp > max then set max = temp
            if (temp > max) {
                max = temp;
            }
        }
        //console.log('temp : ', temp, 'max: ', max)
        // temp: 17 max: 17
        // temp: 17 max: 17
        // temp: 12 max: 17
        // temp: 11 max: 17
        // temp: 14 max: 17
        // temp: 19 max: 19
        // temp: 14 max: 19
    }
    return max;
}


console.log('max : ', maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19
// console.log('max : ', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
// console.log('max : ', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
// console.log('max : ', maxSubarraySum([4, 2, 1, 6, 1], 1)) // 6
// console.log('max : ', maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
// console.log('max : ', maxSubarraySum([], 4)) // null



// max-sum refactored
const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    // set default if num > arr.length return  null
    if (num > arr.length) return null;
    // loop through num to update  maxSum if i < num ; i++
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    // loop through arr by setting first index i = num; and if i < arr.lenght ; i ++
    for (let i = num; i < arr.length; i++) {
        // update tempSum by subtract 1 index infront and add 1 index after 
        tempSum = tempSum - arr[i - num] + arr[i];
        // maxSum = Math.max(maxSum, tempSum);
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}

console.log('max : ', maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19
// console.log('max : ', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
// console.log('max : ', maxSubarraySum([4, 2, 1, 6, 1], 1)) // 6
// console.log('max : ', maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
// console.log('max : ', maxSubarraySum([], 4)) // null


const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length) return null;
    // update maxSum by looping  through num and add to maxSum;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    // set tempSum = maxSum;
    tempSum = maxSum;
    // update tempSum by  looping throught arr by set first index = num;
    for (let i = num; i < arr.length; i++) {
        // update tempSum by subtracting firstIndex infront of array and add the index next of tempSum
        tempSum = tempSum - arr[i - num] + arr[i]
        if (tempSum > maxSum) {
            maxSum = tempSum
        }
    }
    return maxSum;
}
console.log('max : ', maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19

const maxSubarraySum = (arr, num) => {
    // set max and sum = 0
    let maxSum = 0; tempSum = 0;
    // set defalut out of function
    if (num > arr.length) return null;
    // loop throug num to update maxSum, set firstIndex = 0 and if index < num ; i++ 
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    // set tempSum = maxSum then  we can compare both;
    tempSum = maxSum;
    // loop through arr to update tempSum by setting firstIndex = num if index , arr.length ; i++
    for (let i = num; i < arr.length; i++) {
        //  update tempSum by subtracting the firstIndex infront with subtract num then added the indexNext of number;
        tempSum = tempSum - arr[i - num] + arr[i];
        // find maxSum by comparing maxSum with tempSum
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

console.log('max : ', maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19



const maxSubarraySum = (arr, num) => {
    // set maxSum and tempSum
    let maxSum = 0; tempSum = 0;
    if (num > arr.length) return null;
    // update maxSum 
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    // update tempSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        if (tempSum > maxSum) {
            maxSum = tempSum
        }
    }
    return maxSum;
}
console.log('max : ', maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19




const maxSubarraySum = (arr, num) => {
    let maxSum = 0; tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}
console.log('max : ', maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19


const maxSubarraySum = (arr, num) => {
    let maxSum = 0; tempSum = 0;
    if (num > arr.length) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}
console.log('max : ', maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19


const maxSubarraySum = (arr, num) => {
    let maxSum = 0; tempSum = 0;
    if (num > arr.length) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

console.log('max : ', maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19