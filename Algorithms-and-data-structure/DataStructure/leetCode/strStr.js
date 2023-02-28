/* 
28. Implement strStr()Easy
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/
const strStr = (haystack, needle, i = 0) => {
    if (needle.lenght === 0 || needle === haystack) return 0;
    if (needle === haystack.substring(i, i + needle.length)) return i;
    if (haystack[i] === undefined) return -1;
    return strStr(haystack, needle, i + 1)
};

console.log(strStr("hello", "ll")) // 2
console.log(strStr("aaaaa", "bba")) // -1
console.log(strStr("", "")) // 0
console.log(strStr("", "a")) // -1
console.log(strStr("a", "")) // 0
console.log(strStr("a", "a")) // 0
console.log(strStr("mississippi", "issip")) // 4

