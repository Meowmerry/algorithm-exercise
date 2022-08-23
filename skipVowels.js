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
//========= SOLUTION 1 ======================
const skipVowels = (string) => {

    // return string.replace(/[aeiou]/g, '');

    let index = 0;
    const vowels = [...'aeiouAEIOU']

    const result = [];
    while (index < string.length) {
        if (vowels.includes(string[index])) {
            index += 2;
        } else {
            result.push(string[index])
            index++
        }
    }
    return result;
}

console.log(skipVowels("hello")) // ["h", "l"]
console.log(skipVowels("much fun")) // ["m", "h", " ", "f"]
console.log(skipVowels("aaaa")) // []


//========= SOLUTION 1 ======================
const vowels = [...'aeiouAEIOU'];
const skipVowelsRecursive = (string, i = 0, result = []) => {
    if (!string[i]) return result;
    if (vowels.includes(string[i])) i += 2;
    else result.push(string[i++])
    return skipVowelsRecursive(string, i, result)
}

console.log(skipVowelsRecursive("hello")) // ["h", "l"]
console.log(skipVowelsRecursive("much fun")) // ["m", "h", " ", "f"]
console.log(skipVowelsRecursive("aaaa")) // []


//========= SOLUTION 3 ======================

const skipVowels3 = (str) => {
    const vowels = 'aeiouAEIOU';
    const result = [];
    for (let i = 0; i < str.length; i += 1) {
        if (vowels.indexOf(str[i]) !== -1) {
            i += 1;
        } else {
            result.push(str[i])
        }
    }
    return result;
}
console.log(skipVowels3("hello")) // ["h", "l"]
console.log(skipVowels3("much fun")) // ["m", "h", " ", "f"]
console.log(skipVowels3("aaaa")) // []