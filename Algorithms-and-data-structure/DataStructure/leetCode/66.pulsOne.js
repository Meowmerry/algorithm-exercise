// digits = [1, 2, 3]
// var plusOne = function (digits) {
//     digits = BigInt(digits.join("")) + 1n;
//     return Array.from(String(digits), BigInt);
// };
// console.log('plusOne', plusOne(digits))

/*
input:  digits[1,2,3]
        check each item in array by using loop
            loop through digits start from lastIndex - 1 ; if lenght>=0 ; index--
                check if digits[index] !== 9 then increase by 1
                            return digits
                
            set digits[index] = 0 incase if digits[0,0] then unshift 1 to digits
            ** ตั้งให้ digits[index] = 0 กรณีที่ ถ้า ใน array ของเท่ากับ digits[0,0]  และให้  push 1 เข้าไปข้างหน้าของ array **
                check if index === 0
                            unshift 1 to  digits
                            return digits 
output : should be [1,2,4]
*/
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0
        if (i === 0) {
            digits.unshift(1);
            return digits
        }
    }
};

/* 
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/
const plusOne = function (digits) {
    let i = digits.length - 1;
    while (i > -1) {
        digits[i]++;
        if (digits[i] < 10) return digits;
        digits[i] = 0;
        i--;
    }
    return [1, ...digits]
};

const plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1)
    return digits;
};

console.log('plusOne', plusOne([1, 2, 3])) // [1,2,4]
console.log('plusOne', plusOne([4, 3, 2, 1])) //[4,3,2,2]
console.log('plusOne', plusOne([0, 9]))  //  [1]
console.log('plusOne', plusOne([9]))  //  [1,0]
console.log('plusOne', plusOne([9, 9]))  //  [1,0,0]
console.log('plusOne', plusOne([1, 9]))  //  [ 2, 0 ]
console.log('plusOne', plusOne([2, 1]))  //  [ 2, 2 ]
console.log('plusOne', plusOne([1, 9]))  //  [ 2, 0 ]





// // Tee Solution 
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    const ans = Array(digits.length + 1).fill(0, 1, digits.length + 1);
    ans[0] = 1;
    return ans;
};
console.log('plusOne', plusOne([1, 9])) 
