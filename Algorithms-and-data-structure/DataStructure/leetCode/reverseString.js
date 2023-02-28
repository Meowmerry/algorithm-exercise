/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
*/
// ================ SOLUTION 1 ========================
var reverseString = function (s) {
    return s.reverse()

};
console.log(reverseString(["h", "e", "l", "l", "o"])) // ["o","l","l","e","h"]

// ================ SOLUTION 2 ========================
var reverseString = function (s) {
    let result = [];
    let i = -s.length
    while (i < s.length) {
        const poped = s.pop()
        result.push(poped);
        i++
    }
    return result;
};
console.log(reverseString(["h", "e", "l", "l", "o"])) // ["o","l","l","e","h"]

// ================ SOLUTION 2 ========================
var reverseString = function (s) {
    let result = [];
    let i = -s.length
    while (i < s.length) {
        const poped = s.pop()
        result.push(poped);
        i++
    }
    return result;
};
console.log(reverseString(["h", "e", "l", "l", "o"]))


var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (right - left >= 1) {
        const cacheLeft = s[left];
        s[left++] = s[right];
        s[right--] = cacheLeft;
    }
    return s;
};