/*
most frequent char
Write a function, mostFrequentChar, that takes in a string as an argument. 
The function should return the most frequent character of the string. 
If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.

test_00:
mostFrequentChar('bookeeper'); // -> 'e'
test_01:
mostFrequentChar('david'); // -> 'd'
test_02:
mostFrequentChar('abby'); // -> 'b'
test_03:
mostFrequentChar('mississippi'); // -> 'i'
test_04:
mostFrequentChar('potato'); // -> 'o'
test_05:
mostFrequentChar('eleventennine'); // -> 'e'
test_06:
mostFrequentChar("riverbed"); // -> 'r'
*/
/* ====== SOLUTION 1 ====== 
Complexity
n = string length
Time: O(n)
Space: O(n)
*/
function mostFrequentChar(s) {
    // todo
    let maxCount = 0;
    let maxChar = '';
    const charCount = {};
    for (const key of s) {
        charCount[key] = (charCount[key] || 0) + 1
    }
    for (const count in charCount) {
        if(charCount[count] > maxCount){
            maxCount = charCount[count];
            maxChar = count;
        }
    }
    return maxChar;
}

console.log(mostFrequentChar("bookeeper")); // -> 'e'
console.log(mostFrequentChar("david")); // -> 'd'
console.log(mostFrequentChar("abby")); // -> 'b'
console.log(mostFrequentChar("mississippi")); // -> 'i'


/* ====== SOLUTION 2 ====== */
function mostFrequentChar(str) {
    const charCount = {};
    let maxCount = 0;
    let maxChar = '';
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === undefined) {
            charCount[str[i]] = 1;
        } else {
            charCount[str[i]]++;
        }
        if (charCount[str[i]] > maxCount) {
            maxCount = charCount[str[i]];
            maxChar = str[i];
        }
    }
    return maxChar;
}

console.log(mostFrequentChar("bookeeper")); // -> 'e'
console.log(mostFrequentChar("david")); // -> 'd'
console.log(mostFrequentChar("abby")); // -> 'b'
console.log(mostFrequentChar("mississippi")); // -> 'i'

/* ====== SOLUTION 3 ====== */
function mostFrequentChar(str) {
   const count = {};
   for(const char of str){
        if(!(char in count)){
            count[char] = 0;
        }
        count[char] += 1;
   }
   let maxChar = null;
   for(const char of str){
        if(maxChar === null  || count[char] > count[maxChar]){
            maxChar = char;
        }
   }
   return maxChar;
}

console.log(mostFrequentChar("bookeeper")); // -> 'e'
console.log(mostFrequentChar("david")); // -> 'd'
console.log(mostFrequentChar("abby")); // -> 'b'
console.log(mostFrequentChar("mississippi")); // -> 'i'