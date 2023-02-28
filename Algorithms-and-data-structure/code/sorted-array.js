/*
Given a sored array  of integers, write a function called search, that accepts a value and returens the
index where the  value passed to the function is 
located.  if the  value is not  found, return -1;
*/
// naive function 
const searchIndex = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i;
    }
    return -1
}
console.log('index : ', searchIndex([1, 2, 3, 4, 5, 6, 7], 5))

// naive function 
const searchIndex = (arr, num) => {
    let temp = -1;
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            temp = i
        } else {
            temp
        }
    }
    return temp;
}
console.log('index : ', searchIndex([1, 2, 3, 4, 5, 6, 7], 5))

// binary search  with Time complexity -  Log(N) -  Binary Search!
const searchIndex = (arr, val) => {
    // set min = 0 ; max arr.length - 1;
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        console.log('middle', middle)
        let currentElement = arr[middle]
        if (currentElement < val) {
            min = middle + 1;
        } else if (currentElement > val) {
            max = middle - 1;
        } else {
            return middle
        }
    }
    return -1
}
console.log('index : ', searchIndex([1, 2, 3, 4, 5, 6, 7], 5)) //4
