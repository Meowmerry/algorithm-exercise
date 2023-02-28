/* 
Palindrome Number
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
*/
/* ============= SOLUTION 1 ======================= */
const isPalindrome = function (x) {
    x = String(x);
    if (!x.length) return true;
    if (x[0] !== x[x.length - 1]) return false;
    return isPalindrome(x.slice(1, -1))
};
console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false
