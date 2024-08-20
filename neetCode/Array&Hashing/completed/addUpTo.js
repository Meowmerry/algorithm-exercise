/*
Q. Given an array, stack each element by adding the sum of the previous elements.

Example:
Input: [1, 2, 3, 0]"
Output: [1, 3, 6, 6] // ["1", "1+2", "1+2+3", "1+2+3+0"]

Plan:
Create an output array
Initialize a sum at 0
Iterate through the input array, 
   sum+0
   [1, 2, 3, 0]



*/
// const addUpTo = arr => {
//   if(arr.length === 0) return []
//   const outputArr = [arr[0]];
//   for(let i = 1 ;i< arr.length; i++){
//     outputArr.push(outputArr[i-1] + arr[i])

//   }
//   return outputArr
// };

// const addUpTo = arr => {
//     let sum = 0;
//     return arr.map((ele)=> sum += ele)

// }

// console.log(addUpTo([])); // []
// console.log(addUpTo([10,20])); // [10,30]
// console.log(addUpTo([1, 2, 3, 0])); // [1, 3, 6, 6]



const addUpToRecursion = (arr, sumArr = [], i = 1) => {
    //Base case
    if (arr.length === 0) return [];
    if (arr[i] === undefined) return sumArr;
    // Recursive case
    if (i === 1) sumArr = [arr[0]];

    sumArr.push(sumArr[i - 1] + arr[i]);
    return addUpToRecursion(arr, sumArr, i + 1);
};

console.log(addUpToRecursion([])); // []
console.log(addUpToRecursion([10, 20])); // [10,30]
console.log(addUpToRecursion([1, 2, 3, 0])); // [1, 3, 6, 6]

/* 

arr = [1, 2 ,3, 0]      sumArr = []   i = 1

Pass 1
  sumArr.push(sumArr[i - 1] + arr[i]);
                  undefined  +   2 =>   NaN

  sumArr = [ NaN ]


  -----------------------------------
add check for i === 1: 

starting with   arr = [1, 2 ,3, 0]      sumArr = []   i = 1

Pass 1

 if (i === 1) sumArr = [arr[0]];  
  sumArr = [1]
  sumArr.push(sumArr[i - 1] + arr[i]);
                      1    +    2 


Pass 2, i = 2
*/



function addUpTo(arr) {
    let sum = 0;
    return arr.reduce((acc, curr) => {
        acc.push(sum += curr);
        return acc;
    }, []);
}


function addUpTo(arr) {
    return arr.reduce((acc, curr) => (acc.push((acc.length ? acc[acc.length - 1] : 0) + curr), acc), []);
}

const addUpTo = arr => arr.reduce((acc, curr) => (acc.push((acc.length ? acc[acc.length - 1] : 0) + curr), acc), []);

console.log(addUpTo([])); // []
console.log(addUpTo([10, 20])); // [10,30]
console.log(addUpTo([1, 2, 3, 0])); // [1, 3, 6, 6]
