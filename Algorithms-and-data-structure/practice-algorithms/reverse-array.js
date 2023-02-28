/*
Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

input : array
output : old array with reverse element

iterate thru input array 
    each element 


*/

const reverseArray = array => { //* Tim Complexity  O(n/2)   , Space Complexity O(1)
   
};


const arr = [6];
console.log(reverseArray(arr)) // [6]

const arr1 = [1, 2, 4];
console.log(reverseArray(arr1)) // [4, 2, 1];

const arr2 = [1, 2, 4, 5];
console.log(reverseArray(arr2)) // [5, 4, 2, 1];

/*
Extension: (recommended to solve reverseArray first)
Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.
The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word
*/

const reverseSentence = sentence => {  //* Tim Complexity  O(n) || O(n/2)   , Space Complexity O(n) depend of the input how long of the length so the data will take more space of memory
   
};
const  sentence = 'teriyaki chicken';
console.log(reverseSentence(sentence))

module.exports = { reverseArray, reverseSentence };

