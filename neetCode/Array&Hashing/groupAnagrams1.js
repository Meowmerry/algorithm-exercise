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


Explore:
Input: string list
Output: Array of string array list

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
- can be any length
- can be empty 

Brainstrom:
Time: O(N) where n is the list of array string input
Space: O(N) using hasMap to stroe and building 

Plan:
Using hasMap to store Key: each string after sort / Value : list
- Iterate throught the list ["act","pots","tops","cat","stop","hat"]
    Iterate through string 
            - sorting string and join back
               if hasMas not have sorteKey:
                 - Build up the hasMap key as sorted 
                 hasMap = {
                      act: []
                      aht: []
                      opst: []
                }
            else hasKey adding each original string to hasMap value
                hasMap = {
                      act: ["act", "cat"]
                      aht: ["hat"]
                      opst: ["pots","tops","stop"]
                }
     return hasMap value as array list


*/

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const strsMap = new Map();

        for (let i = 0; i < strs.length; i++) {
            const currentStr = strs[i];
            const sortedStr = [...currentStr].sort().join('');
            // console.log(sortedStr)
            if (strsMap.has(sortedStr)) { // act: [].push(stcurrentStrr)
                // const newArr = strsMap.get(sortedStr);
                // newArr.push(currentStr);
                // strsMap.set(sortedStr, newArr) //not sure if the syntax here will work
                strsMap.get(sortedStr).push(currentStr);
            } else {
                strsMap.set(sortedStr, [currentStr]);
            }
        }

        // for(let i = 0; i <strs.length; i++) {
        //     const currentStr = strs[i];
        //     const sortedStr = [...currentStr].sort().join('');
        //     // console.log(sortedStr)
        //     if (!strsMap.has(sortedStr)) {
        //         strsMap.set(sortedStr, []) 
        //     } 
        //     strsMap.get(sortedStr).push(currentStr);
        // }

        // console.log({strsMap})
        return Array.from(strsMap.values());
    }
}


const result = new Solution();
console.log(result.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])); //  [["hat"],["act", "cat"],["stop", "pots", "tops"]]
