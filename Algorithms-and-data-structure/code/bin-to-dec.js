/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. 
DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString) { // Time complexity = O(n) , Space complexity = O(n)
    // reassing string to each letter and reverse, 
    // iterate thru string arr, set initialValue at 0;
    // check if current is equal to 1, if so reassign initialValue by adding call Math.pow(base: start at 2, exponent : current Index, ) 
    // otherwise value will be accumulated

    // return [...binString].reverse().reduce((acc, curr, i) => (curr === '1') ? acc + Math.pow(2, i) : acc, 0) 

    return [...binString].reverse().reduce((acc, curr, i) => {
        if (curr === '1') {
            acc = acc + Math.pow(2, i)
        }
        return acc;
    }, 0)
}
console.log(binToDec('0')) //-> 0
console.log(binToDec('11')) //-> 3
console.log(binToDec('100')) //-> 4
console.log(binToDec('101')) //-> 5
console.log(binToDec('0101')) //-> 5


function binToDec(binString) { // Time complexity = O(n) , Space complexity = O(1)
    let bitstrArr = binString.split('');
    let len = bitstrArr.length - 1;
    let sum = 0;
    for (let i = 0; i <= len; i++) {
        sum += bitstrArr[i] * 2 ** (len - i)
    };
    return sum;
}
console.log(binToDec('0')) //-> 0
console.log(binToDec('11')) //-> 3
console.log(binToDec('100')) //-> 4
console.log(binToDec('101')) //-> 5
console.log(binToDec('0101')) //-> 5

function binToDec(binString, counter = binString.length, answer = 0) { // Time complexity = O(n) , Space complexity = O(1)
    if (counter === -1) return answer;
    answer += 2 ** ((binString.length - 1) - counter) * (binString[counter] === '1');
    return binToDec(binString, counter - 1, answer)
}
console.log(binToDec('0')) //-> 0
console.log(binToDec('11')) //-> 3
console.log(binToDec('100')) //-> 4
console.log(binToDec('101')) //-> 5
console.log(binToDec('0101')) //-> 5