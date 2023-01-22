/* 
pair product
Write a function, pairProduct, that takes in an array and a target product as arguments. 
The function should return an array containing a pair of indices whose elements multiply to the given target. 
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.

test_00:
pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
test_01:
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
test_02:
pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
test_03:
pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
test_04:
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
test_05:
pairProduct([4, 6, 8, 2], 16); // -> [2, 3]
*/
function pairProduct(numbers, targetProduct) {
    for (let i = 0; i < numbers.length; i += 1) {
        for (let j = i + 1; j < numbers.length; j += 1) {
            if (numbers[i] * numbers[j] === targetProduct) {
                return [i, j]
            }
        }
    }
};
console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]

/*
Complexity
n = length of array
Time: O(n)
Space: O(n)
*/

const pairProduct = (numbers, targetProduct) => {
    const previousNum = {};
    for (let i = 0; i < numbers.length; i += 1) {
        const num = numbers[i];
        const complement = targetProduct / num;
        if(complement in previousNum) {
            return [previousNum[complement], i];
        }
        previousNum[num] = i;
    }
};
console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]