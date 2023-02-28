/* 
1. Remove all even integers from an array
Input: [4, 1, 9, 10, 15, 22, 5, 14]
Output: [ 1, 9, 15, 5 ]
*/
// ============ SOLUTION 1 ============
const removeEvenNumbers = (arr, i = 0, resutl = []) => {
    if (!arr[i]) return resutl;
    if (arr[i] % 2 !== 0) resutl.push(arr[i])
    return removeEvenNumbers(arr, i + 1, resutl)
}
console.log(removeEvenNumbers([4, 1, 9, 10, 15, 22, 5, 14])) // [ 1, 9, 15, 5 ]
// ============ SOLUTION 2 ============
const removeEvenNumbers2 = (arr) => arr.filter(num => num % 2 !== 0)
console.log(removeEvenNumbers2([4, 1, 9, 10, 15, 22, 5, 14])) // [ 1, 9, 15, 5 ]