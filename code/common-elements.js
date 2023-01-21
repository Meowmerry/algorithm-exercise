/*
Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. 
It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.

ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']

Input : Any number of Arrays
Output : Array

crete function called commonElements that takes Number of array grater than equal to two
      declare a variable named "result" assign empty array
        iterate over the first array input 
            check if the element is in every array
                then push the element to the result
        
        check if the size of result array is equal to 0
          return "Nothing in Common!"
          
        return result 

        
create a func commonelements that take number of array
    declare a variable result to return output
        iterate thru array input use reduce, filter  each element includes ele
      check the size of the result array > if is 0 return   return "Nothing in Common!"
      return result
 

*/
// ===== MEOW ======
// const commonElements = (...arrs) => {
//     const result = arrs.reduce((acc, curr) => acc.filter(ele => curr.includes(ele)))
//     return result.length === 0 ? "Nothing in Common!" : result;
// }


// ===== SONTER ======
// function commonElements(...arrays) {
//   const result = [];
//   const firstArray = arrays[0];
//   for (let i = 0; i < firstArray.length; i++) {
//     if(arrays.every((arr) => arr.includes(firstArray[i]))) {
//         result.push(firstArray[i])
//     }
//   }
//  return result.length === 0 ? "Nothing in Common!" : result;
// }

/* 
// ===== TE ======
create a func commonElements, takes any number of arrays as arguments
    declare a variable storage assign to empty object
        iterate thre the first array of arrays input
            update storage KEY will be 1, VALUE will be an object with key will be each element and VULUE true
            iterate thru the rest of arrays input
                chcek if each element is already in storage value object    
                     update storage KEY will be index of t
                     

                
*/

// function commonElements(...arrs) {
//     const storage = {};
//     const fristArr = arrs[0];
//     for (let i = 0; i < fristArr.length; i++) {
//         if (!storage['1']) {
//             storage['1'] = {}
//             storage['1'][fristArr[i]] = true;
//         }
//     }
//    // console.log(storage)
//     for(let j =1; j < arrs.length; j++) {
//         const eleArr = arrs[j]
//         for(let k =0; k < eleArr.length; k++) {
//             if(storage[j][eleArr[k]]) {
//                 storage[j+1][eleArr[k]] = true; {};
//                 storage[j+1] = {eleArr[k]:true} 
//             }
//         }
//     }

//     return storage[arrs.length] ? storage[arrs.length] : "Nothing in Common!";
// }


const commonElements = (...args) => {  // Time Complexity =  O(n)  / Space Complexity =  O(n) 
    const cache = {}; 
    // loop over your array of arrays
    for (let arr of args) {
        // loop throught each individual array
        for (let el of arr) {
            // access to each element of the array
            // update the cache to hold count of times key comes up
            if (!cache[el]) {
                cache[el] = 1;
            } else {
                cache[el]++;
            }
        }
    }
    // grab the keys from the cache object
    // console.log('cache==>', cache)
    const keys = Object.keys(cache);
   
    // set a new array that filters keys for only those whose
    // corresponding value is equal to number of input arrays
    const commonKeys = keys.filter((key) => cache[key] === args.length)
            .map((key) => isNaN(Number(key)) ? key : Number(key))
    return commonKeys.length > 0 ? commonKeys : 'Nothing in Common!'
}

const arr1 = [2, 10, "cat", 3, 99, 2000, "dog", "lion"];
const arr2 = [3, 7, 2, 2000, 1, "dog", "cat"];
const arr3 = [2, 100, 2000, "dog", 3, "lion"];
console.log(commonElements(arr1, arr2, arr3)); // -> [2, 3, 2000, 'dog']

const arr11 = ["dog", "lion"];
const arr22 = [3, 7, 2, "mock element"];
const arr33 = [100, 2000];
console.log(commonElements(arr11, arr22, arr33)); // -> "Nothing in Common!"


/*
Write a function called commonElements1 that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. 
It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.

ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements1(arr1, arr2, arr3) -> [2, 3, 2000, 'dog'] */
const commonElements1 = () =>{
    
}