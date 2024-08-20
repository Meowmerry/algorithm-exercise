/*
Q. Given an array of indices and an array of integer values, 
return an array of all the values at those indices. 
Any out of bounds indices should be filled in with a 0. 
Indices follow a zero-based numbering rule (i.e. The index of the first element is 0 not 1).

Example:
Input: indicies: [0, 0, 5, 2, 3], values: [7, 6, 5, 4, 3]
Output: [7, 7, 0, 5, 4]
[execution time limit] 4 seconds (js)

[input] array.integer indices

[input] array.integer values

[output] array.integer


Explore: 
Input both should have same length
Input: indicies: [5, 7, 6, 8, 9], values: [7, 6, 5, 4, 3]
return : [0, 0, 0, 0, 0]


Brainstrom:
Time:
Space:

Plan:
Create a output with empty array
Interate of the indicies input
    access value idex of values array
    push the value output array
    if value undefine push 0
 



*/

function arrayOfIndices(arrIndex, arrValue) {
    const output = [];
    for(let i = 0;  i < arrIndex.length ;i++){
        console.log("currInd", arrIndex[i])
        let currInd = arrIndex[i];
        if(arrValue[currInd] !== undefined){ // 7
            output.push(arrValue[currInd])
        }else {
            output.push(0)
        }
    }
    return output
}
// console.log(arrayOfIndices([], [])); //[ ]
// console.log(arrayOfIndices([0, 0, 5, 2, 3], [7, 6, 5, 4, 3])); //[ 7, 7, 0, 5, 4 ]

// function arrayOfIndices(arrIndex, arrValue) {
//     for(let i = 0;  i < arrIndex.length ;i++){
//         let currInd = arrIndex[i];
//         if(arrValue[currInd]){ 
//             arrValue[i] = arrValue[currInd]
//         }else {
//             // output.push(0)
//             // arrValue.push(0)
//             arrValue[i] = [0]
           
//         }
//         console.log("currInd", currInd, "arrValue", arrValue)
//     }
//     return arrValue;
// }
console.log(arrayOfIndices([], [])); //[ ]
console.log(arrayOfIndices([0, 0, 5, 2, 3, 1], [7, 6, 5, 4, 3])); //[ 7, 7, 0, 5, 4 , 6]