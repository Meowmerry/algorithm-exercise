/*
reverseValues
Write a function called reverseValues, which accepts an array of numbers, 
and iterates through it. 
As it traverses the array, if the value encountered is an even number, 
skip it AND skip the next two numbers, as well. Anything that isn't skipped should be added to a new array, 
which has all non-skipped numbers in reverse order of the original array. Return this new array.
Examples:

*/
function reverseValues(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            i += 2;
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.reverse();
}
console.log(reverseValues([1, 1, 3, 3, 2])) // [3, 3, 1, 1]
console.log(reverseValues([1, 3, 5, 7])) // [7, 5, 3, 1]
console.log(reverseValues([1, 3, 4, 7])) // [3, 1]
console.log(reverseValues([11, 13, 15, 20, 1, 1])) // [15, 13, 11]
console.log(reverseValues([4, 5, 1, 1, 2, 1, 1])) // [1]
console.log(reverseValues([2, 2, 2])) // []


function reverseValues(arr) {
    let finalArr = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            arr.splice(arr.indexOf(num), 2);
        } else {
            finalArr.push(num);
        }
    } return finalArr.reverse();
}
console.log(reverseValues([1, 1, 3, 3, 2])) // [3, 3, 1, 1]
console.log(reverseValues([1, 3, 5, 7])) // [7, 5, 3, 1]
console.log(reverseValues([1, 3, 4, 7])) // [3, 1]
console.log(reverseValues([11, 13, 15, 20, 1, 1])) // [15, 13, 11]
console.log(reverseValues([4, 5, 1, 1, 2, 1, 1])) // [1]
console.log(reverseValues([2, 2, 2])) // []


function reverseValues(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            i += 2;
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.reverse();
}
console.log(reverseValues([1, 1, 3, 3, 2])) // [3, 3, 1, 1]
console.log(reverseValues([1, 3, 5, 7])) // [7, 5, 3, 1]
console.log(reverseValues([1, 3, 4, 7])) // [3, 1]
console.log(reverseValues([11, 13, 15, 20, 1, 1])) // [15, 13, 11]
console.log(reverseValues([4, 5, 1, 1, 2, 1, 1])) // [1]
console.log(reverseValues([2, 2, 2])) // []