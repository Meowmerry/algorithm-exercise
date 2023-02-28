/* 
415. Add Strings
Easy
Share
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
Example 1:
*/

var addStrings = function (num1, num2) {
    let n1 = 0, n2 = 0
    return [...num1].reduce((sum, curr, i) => {
        console.log('--', num2[i])
        sum += Number(num2[i])
        //sum += Number(num2[i])
        return sum;
    }, 0)

};
console.log(addStrings("11", "123")) // "134"
// console.log(addStrings("456", "77")) // "533"
// console.log(addStrings("0", "1203")) // "0"