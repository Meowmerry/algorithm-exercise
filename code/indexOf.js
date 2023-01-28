/*
Write a function called indexOf, which accepts an array and a number. 
The function should return the first index at which the value exists or -1 if the value is not found. 
Do not use the built in Array.indexOf() function!
Examples:
let arr = [5, 10, 15, 20];
indexOf(arr, 20); // 3

let arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

let arr3 = [1, 2];
indexOf(arr3, 10); // -1
*/
/* ========= SOLUTION 1 =========== */
// const indexOf = (arr, target , idx = 0)=>{
//     // base case : if arr is empty return -1;
//     if(!arr[idx]) return -1;
//     // base case : if element is equal to tart get return idx
//     if(arr[++idx] === target) return idx;
//     // recursive case: invoke indexOf fucntion pass arr, target and index + 1;
//     return indexOf(arr, target, idx)
// }

/* ========= SOLUTION 2 =========== */
const indexOf = (arr, target)=>{
    for(let i = 0 ; i < arr.length ; i+=1 ){
        if(arr[i] === target) return i;
    }
    return -1;
}
let arr = [5, 10, 15, 20];
console.log(indexOf(arr, 20)); // 3
let arr2 = [1, 2, 3, 4, 5];
console.log(indexOf(arr2, 2)); // 1
let arr3 = [1, 2];
console.log(indexOf(arr3, 10)); // -1