/*
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Input : String
Output  : Number

*/

// create a function that accept String as argument
const lengthOfLastWord = (s) => {
    // check if s has space and by using trim() and than converse s to array using a split()
    const sToArr = s.trim().split(" ")
    // check the values of last index and find length
    return sToArr[sToArr.length - 1].length
};

let s = "Hello World"
console.log(lengthOfLastWord(s)) // 5
let s1 = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s1)) // 4
let s2 = "luffy is still joyboy"
console.log(lengthOfLastWord(s2)) // 6
let s3 = "luffy is still joyboy javascript and study  are fun!  "
console.log(lengthOfLastWord(s3)) // 4

// let c = [1, 2, 3]
// c[c.length - 1] = c[c.length - 1]
// console.log(c)