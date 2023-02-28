/*
66. Plus One Easy
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

*/

const plusOne = (digits, i = digits.length - 1) => {
    while (i > -1) {
        digits[i]++
        if (digits[i] < 10) return digits
        digits[i] = 0
        i--
    }
    return [1, ...digits]
}
console.log('plusOne', plusOne([1, 2, 3])) // [1,2,4]
console.log('plusOne', plusOne([4, 3, 2, 1])) //[4,3,2,2]
console.log('plusOne', plusOne([0, 9]))  //  [1]
console.log('plusOne', plusOne([9]))  //  [1,0]
console.log('plusOne', plusOne([9, 9]))  //  [1,0,0]
console.log('plusOne', plusOne([1, 9]))  //  [ 2, 0 ]
console.log('plusOne', plusOne([2, 1]))  //  [ 2, 2 ]
console.log('plusOne', plusOne([1, 9]))  //  [ 2, 0 ]