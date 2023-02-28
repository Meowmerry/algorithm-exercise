/*
Write a function (closestToTarget) that takes as input an array of numbers, 
a callback function, and a target number. closestToTarget will pass each number
in the array to the callback and return the number in the original array
whose callback value is closest to the target number. (If more than one are
the closest, return the first one.)

ex.
function flipEvens(num) { return (num % 2 === 0) ? -num : num; }
const myArr = [3, -2, 6, 0];

closestToTarget(myArr, flipEvens, 5)  // --> 3 (myArr[0])
closestToTarget(myArr, flipEvens, -5) //--> 6 (myArr[2])

Input : array, func , target of number
Output : return the number in array input

create a function take array, func and number target
    declare a result assign to undefined
    iterate the array input 
        invoke funcInput and passed current number
            the result of invoke func will return number in array
    return result
*/
const closestToTarget = (arr, callback, target) => {
  // iterate thru array and passed each ele in callback
  const newArr = arr.map((ele) => callback(ele));
  // declare the result assign to 0;
  let resultIdx = 0;
  // find distance to target which will be the smallest value
  let distanceToTarget = Math.abs(target - newArr[0]);
  // console.log("distanceToTarget", distanceToTarget);
  // iterate thre new array
  for (let i = 1; i < newArr.length; i++) {
    // if target decress current element is grater than distanceTotaget
    if (Math.abs(target - newArr[i]) < distanceToTarget) {
      // reassign result to current
      resultIdx = i;
      distanceToTarget = Math.abs(target - newArr[i]);
    }
  }
  return arr[resultIdx];
};
function flipEvens(num) {
  return num % 2 === 0 ? -num : num;
}
const myArr = [3, -2, 6, 0];
console.log(closestToTarget(myArr, flipEvens, 5)); // --> 3 (myArr[0])
console.log(closestToTarget(myArr, flipEvens, -5)); //--> 6 (myArr[2])

const closestToTarget1 = (arr, callback, target) => {
   
  };
  function flipEvens1(num) {
    return num % 2 === 0 ? -num : num;
  }
  const myArr1 = [3, -2, 6, 0];
  console.log(closestToTarget1(myArr1, flipEvens1, 5)); // --> 3 (myArr[0])
  console.log(closestToTarget1(myArr1, flipEvens1, -5)); //--> 6 (myArr[2])
  
