/*
Reverse Array

Given the head of a singly linked list and two integers left and right 
where left <= right, reverse the nodes of the list from position left to position right, 
and return the reversed list.

 Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Input: head = [5], left = 1, right = 1
Output: [5]
*/

function swapArrayElements(arr, leftValue, rightValue) {
    const leftIndex = arr.indexOf(leftValue);
    const rightIndex = arr.indexOf(rightValue);

    if (leftIndex === -1 || rightIndex === -1) {
        return arr; // either leftValue or rightValue is not in the array
    }

    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;

    return arr;
}

console.log(swapArrayElements([1, 2, 3, 4, 5], 2, 4)); // [1,4,3,2,5]
console.log(swapArrayElements([5], 1, 2)); // [5]
console.log(swapArrayElements([1, 2, 3, 4, 5], 1, 5)); // [ 5, 2, 3, 4, 1 ]
console.log(swapArrayElements([1, 2, 3, 4, 5], 1, 2)); // [ 2, 1, 3, 4, 5 ]
console.log(swapArrayElements([1, 2, 3, 4, 5], 6, 7)); // [1,2,3,4,5]
