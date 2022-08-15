/*
Finders Keepers
Create a function that looks through an array arr and returns the first element 
in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. 
If no element passes the test, return undefined.
*/
/* =============  SOLUTION 1 ================ */
function findElement(arr, func) {
  // let num = 0;
  // return num;
  for (let i = 0; i < arr.length; i += 1) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return;
}

console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));

/* =============  SOLUTION 2 ================ 
The find() method returns the first element in the provided array that satisfies the provided testing function. 
If no values satisfy the testing function, undefined is returned.

*/
function findElement(arr, func) {
   return  arr.find(func)
}

console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));

/* =============  SOLUTION 3 ================ 
- Look through the array given in the 1st paramater “arr” using the .map() method
- Use the function in the 2nd parameter as the callback function in arr.map()
- Acquire the index of the first number that meets the condition in the function.
- Use that index to display the first available number that meets the condition.

*/
function findElement(arr, func) {
  return  arr[arr.map(func).indexOf(true)]
}

console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));


/* =============  SOLUTION 4  ** Recursive Solution**================ */
function findElement(arr, func) {
   //return arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0]
    
   if(arr.length && !func(arr[0])) return findElement(arr.slice(1), func);
   else return arr[0]
}

console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));


