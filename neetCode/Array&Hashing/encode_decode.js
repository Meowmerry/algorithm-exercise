/*
https://neetcode.io/problems/string-encode-and-decode
String Encode and Decode
Design an algorithm to encode a list of strings to a single string. 
The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

encode -- use a function to combine the elements into 1 string --> "neet code love you"
decode -- take "neet code love you" and return ["neet", "code", "love", "you"]


Output:["neet","code","love","you"]


Example 2:

Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]


Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.



*/

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    constructor(value = '') {
        this.value = value;
        this.empty = false;
    }


    encode(strs) {

        //  if (strs.length === 0 || strs[0] === "") return this.value  // ""

        if (strs.length == 0) {
            this.empty = true;
            return this.value;
        }

        // if (strs[0] === "") return this.value
        if (strs.length === 1) { // "Test"
            this.value = strs[0]; // strs[0] === "Test"
            return this.value; // Test
        }


        this.value = strs.join(' ');
        return this.value;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) { // ""  , ""

        // []==> encode --> "" -- decode -- []
        // [""] --> encode ---return "" --> decode -->[""]

        if (this.empty) return [""];

        if (str.length === 0) return [];
        return str.split(' ');

    }
}
// const input1 = ["neet","code","love","you"]
// const solution = new Solution()
// const value = solution.encode(input1) // "neet code love you"
// console.log(value)// "neet code love you"
// console.log(solution.decode(value))// ["neet","code","love","you"]
const input1 = [];
console.log('input1', input1);
const solution = new Solution();
const value = solution.encode(input1);
console.log(value);
console.log(solution.decode(value));// []

// const input2 = [""]
// console.log('input2', input2);
// const solution2 = new Solution()
// const value2 = solution2.encode(input2) 
// console.log(value2)// 
// console.log(solution2.decode(value2))// [""]