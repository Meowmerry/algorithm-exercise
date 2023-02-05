/* 
Write the function solution which takes an array of integers as input 
and returns true if all of the values in the array have the same value, 
and false otherwise.

Examples:

[1, 1] returns true
[1, 2, 3] returns false
Clarifications:

An empty array is considered a unival array
An array with only one value is considered a unival array

[execution time limit] 4 seconds (js)

[input] array.integer input

[output] boolean


*/

const solution = input =>{
    // if (!Array.isArray(input) || input.length === 0) return false;
    let first = input[0]
    for(let i = 1 ; i < input.length ; i+=1){
        if(input[i] !== first) return false;
    }
    return true;
}
console.log(solution([] )) // true
console.log(solution([1, 1] ))
console.log(solution([1, 2, 3] ))