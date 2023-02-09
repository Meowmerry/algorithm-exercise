/* 
Write a function that simulates the right shift function. 
Right shift is an operator that moves all binary bits in a number to the right, 
dropping the rightmost bit. Without using the right shift operator, write a function that will simulate it.

Examples:

2 returns 1 (binary representation 10 becomes 1)
4 returns 2 (binary representation 100 becomes 10)
5 returns 2 (binary representation 101 becomes 10)
7 returns 3 (binary representation 111 becomes 11)
Clarifications:

You may assume that the input will be a positive number
[execution time limit] 4 seconds (js)

[input] integer arg1

[output] integer
*/

function solution(arg1) {

}
function rightShift(arg1) {
    return Math.floor(arg1 / 2);
}
console.log(rightShift(2))
console.log(rightShift(4))
console.log(rightShift(5))
console.log(rightShift(7))