/* 
Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]
*/
/* =============  SOLUTION 1 ================ */
function largestOfFour(arr) {
  return arr.reduce((newArr, curr) => {
    newArr.push(Math.max(...curr));
    return newArr;
  }, []);
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

/* =============  SOLUTION 2 ================ 

- Create a variable to store the results as an array.
- Create an outer loop to iterate through the outer array.
- Create a second variable to hold the largest number and initialise it with the first number. 
  This must be outside an inner loop so it won’t be reassigned until we find a larger number.
- Create said inner loop to work with the sub-arrays.
- Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
- After the inner loop, save the largest number in the corresponding position inside of the results array.
- And finally return said array.
*/
function largestOfFour(arr) {
    const results = [];
    for(let i = 0 ;i < arr.length ; i += 1) {
        let largest = arr[i][0];
        for(let j = 1 ; j < arr[i].length; j += 1){
            if(arr[i][j] > largest){
                largest = arr[i][j]
            }
        }
        results[i] = largest // results.push(largest)
    }
    return results;
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);


/* =============  SOLUTION 3 ================ 
- we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
- within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
- the callback function passed to the reduce method takes the previous value and the current value and compares the two values
  if the current value is higher than the previous value we set it as the new previous value for comparison 
  with the next item within the array or returns it to the map method callback if it’s the last item
*/
function largestOfFour(arr) {
    return arr.map(group=>{
       return  group.reduce((prev, curr)=>{
            return curr > prev ? curr: prev;
        })
    })
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);


/* =============  SOLUTION 4 ================ */
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
  }
  console.log(
    largestOfFour([
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1],
    ])
  );

/* =============  SOLUTION 5 Recursive================ */
function largestOfFour(arr, results = []) {
    
    //return !arr.length ? results : largestOfFour(arr.slice(1), results.concat(Math.max(...arr[0])))

    // base case: if array has no length return results
    if(!arr.length)return results
    // recuresive case : recursively call largestOfFour and passed with arr use slice by 1 , and results concat with Math.max of each sub array of index 0
    return largestOfFour(arr.slice(1), results.concat(Math.max(...arr[0])))
}
console.log(
    largestOfFour([
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1],
    ])
  );