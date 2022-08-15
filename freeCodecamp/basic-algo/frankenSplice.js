/* 
Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/
/* =============  SOLUTION 1 ================ 
- Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. 
At the same time we must ensurethat neither arr or arr2 have been mutated.

- Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.

- Now that we have an array that we can mutate on, we can iterate through every item in the first array. 
For each item in the first array we can use the splice() function to insert the item into index n of localArray.

- We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.

Finally, we return the localArray and end the function.
*/

function frankenSplice(arr1, arr2, n) {
   const localArray = arr2.slice(0);
   for(let i = 0 ; i < arr1.length ; i++){
       localArray.splice(n, 0 , arr1[i]);
       n++
   }
   return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [4,1,2,3, 5, 6]
console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
); // ["head", "shoulders", "claw", "tentacle", "knees", "toes"].


/* =============  SOLUTION 2 ================ 
- Since our goal is to return the new array with out altering arr1 or arr2 
we create a localArr and add all the items from arr2 using the slice() function

- Since the splice() function will mutate (alter) arrays and can be used to 
add new elements we will use it to add the contents of arr1 into localArr. 
n is the starting position where our content will be inserted. 
We won’t be deleting any elements so the next argument is 0. 
Then we add the entire contents of arr1 using spread syntax ....

- localArr is returned and the function is complete.
*/
function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice(0)
    localArr.splice(n,0 ,...arr1);
    return localArr
 }
 
 console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [4,1,2,3, 5, 6]
 console.log(
   frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
 ); // ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
 

/* =============  SOLUTION 2 ================ 
- Use spread operators with slice to return an array.
- First spread operator uses the slice method to only give the portion of arr2 from index 0 to ‘n.’
- Second spread operator passes all elements from arr1.
- Third spread operator uses the slice method to return all elements starting at index ‘n’ to the end of the array.
*/
function frankenSplice(arr1, arr2, n) {
    
    return [...arr2.slice(0,n), ...arr1 , ...arr2.slice(n)] // ==> arr2.slice(0,n).concat(arr1).concat(arr2.slice(n))
 }
 
 console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [4,1,2,3, 5, 6]
 console.log(
   frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
 ); // ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
 