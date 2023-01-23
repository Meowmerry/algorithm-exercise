/* 
intersection
Write a function, intersection, that takes in two arrays, a,b, as arguments. 
The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.

test_00:
intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
test_01:
intersection([2,4,6], [4,2]) // -> [2,4]
test_02:
intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
test_03:
intersection([0,1,2], [10,11]) // -> []
test_04:
const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
intersection(a, b) // -> [0,1,2,3,..., 49999]

Input : Arrays of number
Output : Array of that containing element that are in both of the two array

initial result to empty array
interate through first array
    check if any number in the first array, if add to the result
*/

// ==== SOLUTION  =======
/* brute force (timeout)
n = length of array a, m = length of array b
Time: O(n*m)
Space: O(min(n,m)) ==> mininum of length of n and m
*/
function intersection(a, b) {
    const result = [];
    for (let item of b) {
        if (a.includes(item)) {
            result.push(item);
        }
    }
    return result;
};

// ==== SOLUTION 1 =======
const intersection = (a, b) => {
    const result = [];
    a.forEach(element => {
        if (b.includes(element)) {
            result.push(element)
        }
    });
    return result;
};
console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])) // -> [2,6]
console.log(intersection([2, 4, 6], [4, 2])) // -> [2,4]
console.log(intersection([4, 2, 1], [1, 2, 4, 6])) // -> [1,2,4]

// ==== SOLUTION 2 =======
function intersection(a, b) {
    return a.filter(ele => b.includes(ele))
};
console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])) // -> [2,6]
console.log(intersection([2, 4, 6], [4, 2])) // -> [2,4]
console.log(intersection([4, 2, 1], [1, 2, 4, 6])) // -> [1,2,4]




// ==== SOLUTION  =======
/* using set (pass) when look up the set will be O(1)
n = length of array a, m = length of array b
Time: O(n+m)
Space: O(n)
*/
const intersection = (a, b) => {
    const result = [];
    const setA = new Set(a);
    for(const item of b) {
        if(setA.has(item)) result.push(item);
    }
   return result;
};
const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
    a.push(i);
    b.push(i);
}
console.log(intersection(a, b)) // -> [0,1,2,3,..., 49999]