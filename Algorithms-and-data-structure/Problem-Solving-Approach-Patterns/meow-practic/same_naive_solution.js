/*
Write a function called same, which accepts tow arrays.
The function should return true if every value in the
array has it's corresponding value squared in the second array.
The frequency of values must be the same
*/

const same = (arr1, arr2)=>{ // Time Complexity -  O(n^2)
    // base case check if both array don't have same length return false
    if(arr1.length !== arr2.length) return false;

    // iterate the one array
    for (let i = 0; i < arr1.length; i++) {
        const correctIdx = arr2.indexOf(Math.pow(arr1[i], 2)) // arr2.indexOf(arr1[i] ** 2)) 
        // console.log(correctIdx) // 1,0,2
        // check if the index doesn't exist return false
        if(correctIdx === -1) return false;
        // other while we will check each element by splicing by 1 from arr2
        arr2.splice(correctIdx, 1)
    }
 return true;

}
console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false
