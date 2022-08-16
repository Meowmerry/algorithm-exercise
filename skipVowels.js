/* 
skipVowels
Write a function called skipVowels that accepts a string an returns an array. 
The function should iterate through the string and if it encounters a vowel, 
it should skip the current character and the next character. 
Otherwise, it should add that current character to the array.
Examples:
skipVowels("hello") // ["h", "l"]
skipVowels("much fun") // ["m", "h", " ", "f"]
skipVowels("aaaa") // []

Input : String
Output : Array

*/

const skipVowels = (string) => {
    return string.replace(/[aeiou]/g, '');
}

console.log(skipVowels("hello")) // ["h", "l"]
console.log(skipVowels("much fun")) // ["m", "h", " ", "f"]
console.log(skipVowels("aaaa")) // []