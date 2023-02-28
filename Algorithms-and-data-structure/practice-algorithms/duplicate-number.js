/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/


// const duplicateNumber = array => {
//     const result =  array.filter((num, index) => array.indexOf(num) !== index)
//     return Number(result.join(''))
// }

const duplicateNumber = array => {
   
}
console.log(duplicateNumber([1,2,3,4,5,6,7,7,8,9,10,11,12,13,14,15,15]))

/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = array => {
    
};

module.exports = { duplicateNumber, duplicateNumberAdvanced };
