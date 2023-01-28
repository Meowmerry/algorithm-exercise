/* 
removeVowels
Write a function called removeVowels which will accept a string and return a new string with all the vowels removed. 
You should not consider "y" to be a vowel.
Examples:
removeVowels("Hello!"); // "Hll!"
removeVowels("Tomatoes"); // "Tmts"
removeVowels("Reverse Vowels In The String"); // "Rvrs Vwls n Th Strng"
removeVowels("aeiou"); // ""
removeVowels("why try, shy fly?"); // "why try, shy fly?"
*/
/* ========= SOLUTION 1 =========== */
// const removeVowels = (str) =>{
//     const vowels = 'aeiou';
//     let newStr = '';
//     for(const char of str){
//         if(!vowels.includes(char)){
//             newStr+= char;
//         }
//     }
//     return newStr;
// }
/* ========= SOLUTION 2 =========== */
// const removeVowels = (str) =>{
//     const vowels = 'aeiou';
//     let newStr = "";
//     for(let i = 0 ; i < str.length ; i+=1){
//         if(vowels.indexOf(str[i])=== -1){
//             newStr+= str[i]
//         }
//     }
//     return newStr;
// }

const vowels = [...'aeiouAEIOU'];
const removeVowels = (string, i = 0, newStr = '') => {
     if(!string[i]) return newStr;
     if(vowels.includes(string[i])) i += 1;
     else  newStr += string[i++];
     return removeVowels(string, i , newStr)
}

console.log(removeVowels("Hello!")); // "Hll!"
console.log(removeVowels("Tomatoes")); // "Tmts"
console.log(removeVowels("Reverse Vowels In The String")); // "Rvrs Vwls n Th Strng"
console.log(removeVowels("aeiou")); // ""
console.log(removeVowels("why try, shy fly?")); // "why try, shy fly?"
