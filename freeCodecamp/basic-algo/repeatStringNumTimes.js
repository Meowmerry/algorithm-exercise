/* 
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/
/* 
=============  SOLUTION 1 ================
- Create an empty string variable to store the repeated word.
- Use a for loop or for loop to repeat code as many times as needed according to num
- Then we add the string to the variable created on step one inside of the loop.
- At the end of the loop, return the variable for the repeated word.
*/
function repeatStringNumTimes(str, num) {
    let results = '';
    for(let i = 0 ; i < num ;i ++){
        results += str;
    }
    return results;
}

console.log(repeatStringNumTimes("abc", 3)); //abcabcabc
/* 
=============  SOLUTION 2 ================
- This solution uses recursion.
- We check if num is negative and return an empty string if true.
- If not, we add the string to a call of our function with num being decreased by 1, 
which will add another str and another… until eventually num is 1. And return that whole process.
*/
function repeatStringNumTimes(str, num) {
    // if(num < 1) return '';
    // return str + repeatStringNumTimes(str, num - 1)
    return num < 1 ? '': str + repeatStringNumTimes(str,num - 1)
}

console.log(repeatStringNumTimes("abc", 3)); //abcabcabc