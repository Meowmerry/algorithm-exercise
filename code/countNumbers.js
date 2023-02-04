/*
countNumbers
Write a function called countNumbers, which accepts an array of strings. 
The function should return a count of the number of strings in the array that can be successfully 
converted into a number. For example, the string "1" can be successfully converted to the number 1, 
but the string "hello" cannot be converted into a number.
Examples:
countNumbers(['a','b','3','awesome','4']); // 2
countNumbers(['32', '55', 'awesome', 'test', '100']); // 3
countNumbers([]); // 0
countNumbers(['4','1','0','NaN']); // 3
countNumbers(['7', '12', 'a', '', '6', '8', ' ']); // 4

*/

const countNumbers = (arr)=> {
    return arr.reduce((acc, curr)=>{
        if(!isNaN(curr))  acc +=1;
        if(curr === '' || curr === ' ') acc-=1;
        return acc;
    },0)
}

// const countNumbers = (arr, count = 0, index = 0) => {

//   if (!arr[index]) return count;
//   if (!isNaN(arr[index])) {
//     count += 1;
//   } else if (arr[index] === "" || arr[index] === " ") {
//     acc -= 1;
//   }
//   console.log(count);
//   return countNumbers(arr, count, index + 1);
// };
// console.log(countNumbers(['a','b','3','awesome','4'])); // 2
// console.log(countNumbers(['32', '55', 'awesome', 'test', '100'])); // 3
// console.log(countNumbers([])); // 0
// console.log(countNumbers(['4','1','0','NaN'])); // 3
console.log(countNumbers(["7", "12", "a", "", "6", "8", " "])); // 4
