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
    constructor(value = '') {
        this.value = value;
        this.empty = false;
    }

    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) {
            this.empty = true;
            return this.value;
        }

        this.value = strs.join(' ');
        return this.value;
    }

    /**
     * Decodes a single string to a list of strings.
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (this.empty) return []; // If the original list was empty, return an empty array
        if (str.length === 0) return [""];
        return str.split(' ');
    }
}

// Example 1:
const input1 = ["neet", "code", "love", "you"];
const solution1 = new Solution();
const encoded1 = solution1.encode(input1);
console.log(encoded1); // "neet code love you"
console.log(solution1.decode(encoded1)); // ["neet", "code", "love", "you"]

// Example 2:
const input2 = ["we", "say", ":", "yes"];
const solution2 = new Solution();
const encoded2 = solution2.encode(input2);
console.log(encoded2); // "we say : yes"
console.log(solution2.decode(encoded2)); // ["we", "say", ":", "yes"]

// Test case with an empty array:
const input3 = [];
const solution3 = new Solution();
const encoded3 = solution3.encode(input3);
console.log(encoded3); // ""
console.log(solution3.decode(encoded3)); // []

// Test case with an array containing an empty string:
const input4 = [""];
const solution4 = new Solution();
const encoded4 = solution4.encode(input4);
console.log(encoded4); // ""
console.log(solution4.decode(encoded4)); // [""]

// Test case with an array containing an empty string:
const input5 = ["The quick brown fox", "jumps over the", "lazy dog", "1234567890", "abcdefghijklmnopqrstuvwxyz"];
const solution5 = new Solution();
const encoded5 = solution5.encode(input5);
console.log(encoded5); // ""
console.log(solution5.decode(encoded5)); // ["The quick brown fox", "jumps over the", "lazy dog", "1234567890", "abcdefghijklmnopqrstuvwxyz"];