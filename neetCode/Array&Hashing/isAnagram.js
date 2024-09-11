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

Explore:
- Assumming the string s and t will have > 0
- can be any length
- will be only letter and lowercase

Brainstrom:
Time:
Space: 

Bruth: 
Time: O(n) of s, O(n) of t --> O(n*n)
Space: O(n)
    - sorting s, and t 
    - compare if both the same return true else false

"racecar", "carrace"
sMap 
{
r:2
a:2
c:2
e:1
}

tMap
{
c: 2
a: 2
r: 2
e: 1
}

*/

// class Solution {
//     /**
//      * @param {string} s
//      * @param {string} t
//      * @return {boolean}
//      */
//     isAnagram(s, t) { }
// }

// function isAnagram(s, t) {
//     if (s.length !== s.length) return false;
//     const sortedS = [...s].sort().join('');
//     const sortedT = [...t].sort().join('');
//     return sortedS === sortedT ? true : false;
// }

// Time: O(n) where n is the length of s or t
// Space: O(n) where n is the length of hasMap
function isAnagram(s, t) {

    if (s.length !== t.length) return false;
    // using hasMapS and hasMapT to store Key: char , Value: count 
    const charSMap = new Map();
    const charTMap = new Map();
    // Iterate throug string s and build up Key and value for both Map
    for (let i = 0; i < s.length; i++) {
        charSMap.set(s[i], (charSMap.get(s[i]) || 0) + 1);
        charTMap.set(t[i], (charTMap.get(t[i]) || 0) + 1);
    }

    // Iterate through hasMapS
    // if in hasMapT Value not in hasMapS return false
    for (const [key, value] of charSMap) {
        if (value !== charTMap.get(key)) {
            return false;
        }
    }
    return true;
}
console.log(isAnagram("racecar", "carrace")); // true
console.log(isAnagram("jar", "jam")); // false
console.log(isAnagram("jar", "jarm")); // false
console.log(isAnagram("mjar", "jarm")); // true
