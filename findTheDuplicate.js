/* 
findTheDuplicate
Write a function called findTheDuplicate which accepts an array of numbers containing a single duplicate. 
The function returns the number which is a duplicate or undefined if there are no duplicates.
Examples:
findTheDuplicate([1,2,1,4,3,12]) // 1
findTheDuplicate([6,1,9,5,3,4,9]) // 9
findTheDuplicate([2,1,3,4]) // undefined
*/
const findTheDuplicate = (arr) => {
    const cache = {};
    for(let i = 0 ; i < arr.length ; i ++){
        console.log(cache)
        if(arr[i] in cache) return arr[i]  
        else cache[arr[i]] = arr[i]
    }
  return;
}


console.log(findTheDuplicate([1,2,1,4,3,12])) // 1
console.log(findTheDuplicate([6,1,9,5,3,4,9])) // 9
console.log(findTheDuplicate([2,1,3,4])) // undefined