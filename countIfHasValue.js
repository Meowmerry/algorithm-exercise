/* 
Write a function called countIfHasValue which accepts an object where all of the values are arrays. 
It also accepts a numeric value that is being searched for. 
The function should return the number of arrays in which the searched-for value appears.
Examples:
let obj = {
  a: [1, 10, 3],
  b: [4, 1, 7],
  c: [7, 7, 7],
  d: [10, 7, 12]
};
countIfHasValue(obj, 1) // 2
countIfHasValue(obj, 7) // 3
countIfHasValue(obj, 10) // 2
countIfHasValue(obj, 13) // 0

Input : Object and each element is array of number
Output : Number of count we we find value in each array which match with the target value 

*/
const countIfHasValue = (obj, value) => {
  // declare sum variable assign to 0
//   let count = 0;
//   // iterate thru obj
//   for(let key in obj){
//     // iterate thrugh each key in object 
//     const currKey = obj[key]
//     if(currKey.includes(value)) count += 1;
//   }

//  return count;
return Object.values(obj).reduce((count, curr)=>{
    if(curr.includes(value)) count += 1;
    return count;
  },0)

}

let obj = {
  a: [1, 10, 3],
  b: [4, 1, 7],
  c: [7, 7, 7],
  d: [10, 7, 12]
};
console.log(countIfHasValue(obj, 1))// 2
console.log(countIfHasValue(obj, 7))// 3
console.log(countIfHasValue(obj, 10)) // 2
console.log(countIfHasValue(obj, 13)) // 0