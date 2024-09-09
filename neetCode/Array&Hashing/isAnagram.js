/*
Is Anagram
https://neetcode.io/problems/is-anagram
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.


*/

// class Solution {
//     /**
//      * @param {string} s
//      * @param {string} t
//      * @return {boolean}
//      */
//     isAnagram(s, t) { }
// }

function isAnagram(s, t) {
    // check if length not the same return false
    if (s.length !== t.length) return false;
    // Create two object, sMap and tMap
    const sMap = new Map();
    const tMap = new Map();

    // company each map to each other
    // Iterate throuth the s
    // build tMap on Key: letter, Value: Number 1++
    for (const char of s) {
        //  sMap.set(char, (sMap.get(char)|| 0 ) + 1);
        if (sMap.get(char)) {
            sMap.set(char, sMap.get(char) + 1);
        } else {
            tMap.set(char, 1);
        }
        //  tMap.set(char, (tMap.get(char)|| 0 ) + 1);
        if (tMap.get(char)) {
            tMap.set(char, tMap.get(char) + 1);
        } else {
            tMap.set(char, 1);
        }
    }

    for (const [key, value] of sMap) {
        if (value !== tMap.get(key)) {
            return false;
        }
    }
    return true;

}
console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("jar", "jam"));
console.log(isAnagram("jar", "jarm"));
