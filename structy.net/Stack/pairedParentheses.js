/*
paired parentheses
Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or not the string has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.

*/
function pairedParentheses(string) {
    let count = 0;
    for (const s of string) {
        if (s === '(') {
            count += 1;
        } else if (s === ')') {
            if (count === 0) return false;
            count -= 1;
        }
    }
    return count === 0;
}


console.log(pairedParentheses("(david)((abby))") === true); // -> true
console.log(pairedParentheses("()rose(jeff") === false); // -> true
console.log(pairedParentheses(")(") === false); // -> true
console.log(pairedParentheses("()") === true); // -> true
console.log(pairedParentheses("(((potato())))") === true); // -> true
console.log(pairedParentheses("(())(water)()") === true); // -> true
console.log(pairedParentheses("(())(water()()") === false); // -> true
console.log(pairedParentheses("") === true); // -> true
console.log(pairedParentheses("))()") === false); // -> true