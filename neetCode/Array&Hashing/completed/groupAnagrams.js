/*
Anagram Groups
https://neetcode.io/problems/anagram-groups
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.



*/
class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // groupAnagrams(strs) {
    //     const groupMap = new Map();
    //     // Iterate through the stars
    //     for (const str of strs) {
    //         // build up graupMap with string 
    //         const sorted = str.split('').sort().join('');
    //         console.log(sorted);
    //         // set sorted as KEY and [] as Value 
    //         if (!groupMap.get(sorted)) {
    //             groupMap.set(sorted, []);
    //         }
    //         groupMap.get(sorted).push(str);
    //     }
    //     return Array.from(groupMap.values());
    // }

    groupAnagrams(strs) {
        const groupMap = new Map();
        for (const str of strs) {
            // buid freq with 26 letter in english and fill each value at 0
            const freq = Array(26).fill(0);


            // Iterate each str to add each value to number
            for (const s of str) {
                // Buill each s with unique value
                freq[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            // convert frequenc array to string to use as a key
            const key = freq.join('#');
            if (!groupMap.has(key)) {
                groupMap.set(key, []);
            }
            groupMap.get(key).push(str);
        }
        return Array.from(groupMap.values());
    }
}
const result = new Solution();
console.log(result.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])); //  [["hat"],["act", "cat"],["stop", "pots", "tops"]]