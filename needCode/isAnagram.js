/*
242. Valid Anagram
https://leetcode.com/problems/valid-anagram/

11.3K
357
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 
Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const anagramMap = new Map();

    for (const char of s) {
        anagramMap.set(char, (anagramMap.get(char) || 0) + 1);
    }

    for (const char of t) {
        if (anagramMap.has(char) && anagramMap.get(char) > 0) {
            anagramMap.set(char, anagramMap.get(char) - 1);
        } else {
            return false;
        }
    }
    return true;
};
console.log(isAnagram("anagram", t = "nagaram")); // true
console.log(isAnagram("rat", t = "car")); // false