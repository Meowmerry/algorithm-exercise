/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * 
Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.
Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.
*/
// Input : string , Output : number
var minSteps = function (s, t) {
    // check if s.length !== t.lenght then return 0;
    // declear variable object to empty object to store value;
    // declear count and assign to 0;
    // iterate through s using for of loop to check each character, check if object === undefined then add 1 to an object,
    // iterate through t using for of loop to check each character, if object === undefined then decress by 1 or add 0 to an object,
    // iterate through object, check if object[key] !== 0 then add to count
    // return count;
    if (s.length !== t.length) return 0;
    let object = {};
    let count = 0;
    for (let c of s)
        object[c] = object[c] ? object[c] + 1 : 1;
    for (let c of t)
        object[c] = object[c] ? object[c] - 1 : 0;
    for (let key in object)
        if (object[key] !== 0) {
            count += object[key]
        }
    return count;
};

let s = "bab", t = "aba"
let s1 = "leetcode", t1 = "practice"
let s2 = "anagram", t2 = "mangaar"
let s3 = "xxyyzz", t3 = "xxyyzz"
let s4 = "friend", t4 = "family"
console.log(minSteps(s, t)) // 1
console.log(minSteps(s1, t1)) // 5
console.log(minSteps(s2, t2)) // 0
console.log(minSteps(s3, t3)) // 0
console.log(minSteps(s4, t4)) // 4


