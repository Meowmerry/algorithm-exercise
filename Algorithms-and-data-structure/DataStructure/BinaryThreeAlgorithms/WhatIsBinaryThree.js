/*
What is Binary Threes.
Three is content many Node and point to many numbers of Node
*/


const binaryThree = (arr) => {
    // Type your solution here 
     let result = ''
    if(arr.length === 0) return result;
    if(arr.length === 1) return result;
    let left = 0;
    let right = 0;
    // filter newArr if have negative fill out
    const newArr = []
  
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if(current > 0){
            newArr.push(current)
        }
    }
    // iterate thru new array and check both left and right 
    const root = arr[0];
    for (let i = 1; i < newArr.length; i++) {
        const current = newArr[i];
        if(i % 2 !== 0){
            left += current;
        }else{
            right +=current;
        }
    }

    if(left > right) result += 'Left';
    else if (right > left) result += 'Right';
    else result;
    return  result;
};


console.log(binaryThree( [1, 10, 5, 1, 0, 6]))
// console.log(binaryThree([1]))
// console.log(binaryThree([3,6,2,9,-1,10]))

