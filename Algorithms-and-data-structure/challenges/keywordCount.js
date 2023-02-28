/*
Write a function (keywordCount) that takes as input an object of key-value
pairs and a string. The object can have as values numbers, booleans, strings,
or nested objects. There will be NO arrays or other object types in
the object. Your function should return the number of times the keyword
appears in the object. (Note: the keyword will never be an object key - only
a value)

ex.
const myObj = { a: 'hi', b: 'yo', c: { d: 'ciao', e: 'hi' } };
keywordCount(myObj, 'hi') --> 2
keywordCount(myObj, 'bye') --> 0

Input : Object , string
Output : Number

create a function takes Obj, String as arguments
    declare a result assign to 0
    change input Object to be array 
        check if input will be array then check each element reassign result 
    return result
*/
// const keywordCount = (obj, str) => {
//   return Object.values(obj).reduce((acc, curr) => {
//     if (typeof curr === "object") {
//       Object.values(curr).forEach((ele) => {
//         if (ele === str) {
//           acc += 1;
//         }
//       });
//     } else if (curr === str) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
// };
// const myObj = { a: "hi", b: "yo", c: { d: "ciao", e: "hi" } };
// console.log(keywordCount(myObj, "hi")); //--> 2
// console.log(keywordCount(myObj, "bye")); //--> 0


const keywordCount = (obj, keyword) => {
       let count = 0;
       for(let key in obj){
        if(typeof obj[key] === 'object') count += keywordCount(obj[key], keyword);
        if(obj[key] === keyword) count +=1;
       }
       return count;
  };
  const myObj = { a: "hi", b: "yo", c: { d: "ciao", e: "hi" } };
  console.log(keywordCount(myObj, "hi")); //--> 2
  console.log(keywordCount(myObj, "bye")); //--> 0
