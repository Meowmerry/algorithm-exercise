/*  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: boolean 
*/
// create a function that accept two string
/* 
We will use hashmap to solve this problem

step 1] check the lengths of 2 strings if they are different exit
step 2] loop through first string and push it into hashmap. first check whether char is 
        in hashmap is not assing value 1 if yes then increment value
step 3] loop through second string and push it to hashmap. here the trick is this time if char is available in 
        hashmap we will decrease it.
step 4] loop through the hashmap and check whether values > 0 or values < 0 if either
        of condition true return false
step 5] exit the loop and return true
*/
const isAnagram = (s, t) => {
        //  declear empty object to store value;
        const hashMap = {};
        // check if not equal lenght return false
        if (s.length !== t.length) return false;

        // iterate through s and add to hashMap object, if undefined add 1 to hasMap if alreay exist set to 1;
        for (const i in s) {
                hashMap[s[i]] = hashMap[s[i]] + 1 || 1;
        }
        // iterate through t and check if hasMap alreay has value so decress - 1 from hasMap
        for (const i in t) {
                hashMap[t[i]] = hashMap[t[i]] - 1;
        }

        // iterate through hashMap if less then 0 or grater than 0 return false
        for (const i in hashMap) {
                if (hashMap[i] > 0 || hashMap[i] < 0) return false;
        }

        // return value true;
        return true;
}
const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t))  // true

var isAnagram = function (s, t) {
        let st = s.split('').sort().join('')
        let tt = t.split('').sort().join('')
        return st === tt;
};
const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t)) // true