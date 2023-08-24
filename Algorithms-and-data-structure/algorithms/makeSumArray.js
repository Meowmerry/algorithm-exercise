/*
Write a function makeSumArray that accepts any number of arguments (a spread operator) 
and returns a new array with the numbers passed into the function.
This means your sumArray functions are required to work.
*/
//makeSumArray

function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

const makeSumArray = (...results) => {
    return results;
};
let result1 = sumArray([3, 5, 1, 2, 4, 5]); // <-- 20
let result2 = sumArray([1, 1, 1, 10]); // <-- 13
let result3 = sumArray([90, 40, 55, 25, 60]); // <-- 270

// console.log('result1--> ', result1, 'result2--> ', result2, 'result3--> ', result3);

const newArray = makeSumArray(result1, result2, result3); // <-- [ 20, 13, 270]
console.log('newArray', newArray);

