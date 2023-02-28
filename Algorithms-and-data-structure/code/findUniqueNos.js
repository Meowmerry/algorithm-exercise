/* 
2. Find all repeated numbers from an array
Input: [1,2,4,5,6,1,3,7,9,10]
Output: [1, 2, 4, 5, 6, 3, 7, 9, 10]
*/
// ============= SOLUTION 1 ===============
const findUniqueNos = (inputData) => {
    let unique = [];
    inputData.map(num => {
        let counts = unique.filter(uniqueNum => uniqueNum === num);
        if (counts.length !== 1) unique.push(num)
    })
    return unique;
}
console.log(findUniqueNos([1, 2, 4, 5, 6, 1, 3, 7, 9, 10])) //  [1, 2, 4, 5, 6, 3, 7, 9, 10]

// ============= SOLUTION 12===============
const findUniqueNos2 = (inputData) => {
    return [...new Set(inputData)]
}
console.log(findUniqueNos2([1, 2, 4, 5, 6, 1, 3, 7, 9, 10])) //  [1, 2, 4, 5, 6, 3, 7, 9, 10]