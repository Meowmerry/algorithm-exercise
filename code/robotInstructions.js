/* 
robotInstructions
Write a function called robotInstructions which accepts an array of moves. The options for the moves are "U", "D", "L", "R". The function should return an object with one key for each move with their values being the total number of times each move appears.
Examples:
robotInstructions(["U", "D", "L", "R"]) // { "U": 1, "D": 1, "L": 1, "R": 1 })

robotInstructions(
  ["U", "D", "L", "R", "U", "D", "L", "R", "U", "D", "L", "R"]
) // { "U": 3, "D": 3, "L": 3, "R": 3 })
*/
/* ========= SOLUTION 1 =========== */
// const  robotInstructions = (arr)=>{
//   const cache = {};
//   for(const char of arr){
//     if(!cache[char]) {
//       cache[char] = 1;
//     }else{
//       cache[char]+=1
//     }
//   }
//   return cache;
// }
/* ========= SOLUTION 2 =========== */
// const robotInstructions = (arr) => {
//   const cache = {};
//   for(const char  of arr) {
//      cache[char] = (cache[char] || 0 ) + 1
//   }
//   return cache;
// };

/* ========= SOLUTION 3 =========== */
const robotInstructions = (arr) => {
  return arr.reduce((cache, char)=> {
    cache[char] = (cache[char] || 0) + 1;
    return cache;
  },{})
};
console.log(robotInstructions(["U", "D", "L", "R"])); // { "U": 1, "D": 1, "L": 1, "R": 1 })

console.log(
  robotInstructions([
    "U",
    "D",
    "L",
    "R",
    "U",
    "D",
    "L",
    "R",
    "U",
    "D",
    "L",
    "R",
  ])
); // { "U": 3, "D": 3, "L": 3, "R": 3 })
