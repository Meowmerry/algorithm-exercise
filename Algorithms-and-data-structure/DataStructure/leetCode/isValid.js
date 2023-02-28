/* 
20. Valid Parentheses
Share
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/
const isValid = function (s) {
    let ss = s.split('').sort()
    console.log('ss', ss)
    const brackets = {
        'key1': '()',
        'key2': '[]',
        'key3': '{}',
    }
    let result = false;
    for (let i = 0; i < s.length; i += 1) {
        for (let key in brackets) {
            if (s[i] + s[i + 1] === brackets[key]) {
                result = true;
            }
        }
    }
    return result

};
// console.log(isValid("()")) // true
// console.log(isValid("()[]{}")) // true
// console.log(isValid("(]")) // false
console.log(isValid("(){}}{")) // false