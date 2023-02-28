/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

var reverse = function (x) {
    let numToString = String(x);
    let result = numToString.split('').reverse()
    let newArr = []
    for (let i = 0; i < result.length; i++) {
        if (result[i] !== '0') {
            newArr.push(result[i])
        }
    }
    return result.join('')
};
let x = 123;
let x1 = -123;
let x2 = 120;
let x3 = 0;
console.log(reverse(x)) // 321
console.log(reverse(x1)) // -321
console.log(reverse(x2)) // 21
console.log(reverse(x3)) // 0


var reverse = function (x) {
    const isNegative = x < 0;
    let result = 0;
    x = Math.abs(x);
    // count the digits length
    let length = Math.ceil(Math.log10(x - 1));

    while (x > 0) {
        let remainder = x % 10;
        result = result + remainder * Math.ceil(10 ** length);

        // next state
        x = Math.floor(x / 10);
        length--;
    }

    if (result > 2 ** 31) return 0;
    return isNegative ? -result : result;
};
let xx = 123;
let xx1 = -123;
let xx2 = 120;
let xx3 = 0;
console.log(reverse(xx)) // 321
console.log(reverse(xx1)) // -321
console.log(reverse(xx2)) // 21
console.log(reverse(xx3)) // 0