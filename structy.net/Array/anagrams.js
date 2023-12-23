/*
anagrams
Write a function, anagrams, that takes in two strings as arguments. 
The function should return a boolean indicating whether or not the strings are anagrams. 
Anagrams are strings that contain the same characters, but in any order.

test_00:
anagrams('restful', 'fluster'); // -> true
test_01:
anagrams('cats', 'tocs'); // -> false
test_02:
anagrams('monkeyswrite', 'newyorktimes'); // -> true
test_03:
anagrams('paper', 'reapa'); // -> false
test_04:
anagrams('elbow', 'below'); // -> true
test_05:
anagrams('tax', 'taxi'); // -> false
test_06:
anagrams('taxi', 'tax'); // -> false
test_07:
anagrams('night', 'thing'); // -> true
test_08:
anagrams('abbc', 'aabc'); // -> false
test_09:
anagrams('po', 'popp'); // -> false
test_10:
anagrams('pp', 'oo') // -> false

Input : String
Output : Boolean
Using hasMap to work on and check if key and value are same, then return true, otherwise return false.

* * Complexity  * *
n = length of string 1
m = length of string 2
Time: O(n + m)
Space: O(n)

LINERA!!!
*/
function anagrams(str1, str2) {
    const newStr1 = [...str1].sort().join("");
    const newStr2 = [...str2].sort().join("");
    if (newStr1 === newStr2) return true;
    return false;
}

console.log(anagrams("restful", "fluster")); // -> true
console.log(anagrams("cats", "tocs")); // -> false
console.log(anagrams("monkeyswrite", "newyorktimes")); // -> true

/*
This function first checks if the two strings have the same length, as an anagram must have the same number of characters. 
If the lengths are not the same, the function returns false.

The function then creates two empty objects, charCount1 and charCount2, to store the count of each character in each string. 
The function then uses two for loops to iterate through each string and add each character to the corresponding character count object, 
initializing the count to 1 if the character has not been encountered before.

The function then uses a for loop to iterate through the keys of the first character count object 
and checks if the count for each character in the first string is equal to the count for the same character in the second string. 
If any count does not match, the function returns false.

If the function has not returned false by this point, it means that the two strings are anagrams, 
so the function returns true.
*/
/*    ==== SOLUTION 1 ==== */
function anagrams(s1, s2) {
    // ==== SOLUTION 1 ====
    // first check if two string are the same length, if not return false
    if (s1.length !== s2.length) return false;
    // declare charCount1 and charCount2 with emptye object for storing KEY, Value pair
    const charCount1 = {};
    const charCount2 = {};

    // loop through two both string to assign KEY, Value 
    // give a key value to charCount, if count to 1 if the character has not been encountered before.
    for (let i = 0; i < s1.length; i += 1) {
        charCount1[s1[i]] = (charCount1[s1[i]] || 0) + 1;

    }

    for (let i = 0; i < s2.length; i += 1) {
        charCount2[s2[i]] = (charCount2[s2[i]] || 0) + 1;
    }

    for (const key in charCount1) {
        if (charCount1[key] !== charCount2[key]) return false;
    }
    return true;
}

console.log(anagrams("restful", "fluster")); // -> true
console.log(anagrams("cats", "tocs")); // -> false
console.log(anagrams("monkeyswrite", "newyorktimes")); // -> true

/* 
Complexity
Time: O(n + m)
Space: O(n)
*/

/*    ==== SOLUTION 2 ==== */
function anagrams(s1, s2) {
    const count = {};
    for (const char of s1) {
        // n
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char] += 1;
    }

    for (const char of s2) {
        // m
        if (char in count) {
            count[char] -= 1;
        } else {
            return false;
        }
    }
    for (const char in count) {
        // n
        if (count[char] !== 0) return false;
    }
    return true;
}

console.log(anagrams("restful", "fluster")); // -> true
console.log(anagrams("cats", "tocs")); // -> false
console.log(anagrams("monkeyswrite", "newyorktimes")); // -> true


/*    ==== SOLUTION 3 ==== */
function anagrams(s1, s2) {
    // first check if two string are the same length, if not return false
    if (s1.length !== s2.length) return false;
    // declare charCount1 and charCount2 with emptye object for storing KEY, Value pair
    const charCount1 = {};
    const charCount2 = {};

    // loop through two both string to assign KEY, Value
    // give a key value to charCount, if count to 1 if the character has not been encountered before.
    for (let i = 0; i < s1.length; i += 1) {
        charCount1[s1[i]] = (charCount1[s1[i]] || 0) + 1;
    }

    for (let i = 0; i < s2.length; i += 1) {
        charCount2[s2[i]] = (charCount2[s2[i]] || 0) + 1;
    }

    for (const key in charCount1) {
        if (charCount1[key] !== charCount2[key]) return false;
    }
    return true;
}

console.log(anagrams("restful", "fluster")); // -> true
console.log(anagrams("cats", "tocs")); // -> false
console.log(anagrams("monkeyswrite", "newyorktimes")); // -> true


const anagrams = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    const charS1 = new Map();
    const charS2 = new Map();
    for (const char of s1) {
        charS1.set(char, (charS1.get(char) || 0) + 1);
    }

    for (const char of s2) {
        charS2.set(char, (charS2.get(char) || 0) + 1);
    }
    for (const [key, value] of charS1) {
        if (value !== charS2.get(key, value)) return false;
    }

    return true;

};
console.log(anagrams("restful", "fluster")); // -> true
console.log(anagrams("cats", "tocs")); // -> false
console.log(anagrams("monkeyswrite", "newyorktimes")); // -> true

function anagrams(s1, s2) {
    const letterMap = new Map();
    for (const s of s1) {
        letterMap.set(s, (letterMap.get(s) || 0) + 1);
    }

    for (const s of s2) {
        if (letterMap.has(s) && letterMap.get(s) > 0) {
            // console.log(letterMap);
            letterMap.set(s, letterMap.get(s) - 1);
        } else {
            return false;
        }
    }
    return true;
}


// console.log(anagrams('monkeyswrite', 'newyorktimes'));
// console.log(anagrams("restful", "fluster")); // -> true
console.log(anagrams("cats", "tocs")); // -> false
// console.log(anagrams("monkeyswrite", "newyorktimes")); // -> true
