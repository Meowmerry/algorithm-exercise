/*
168. Excel Sheet Column Title
https://leetcode.com/problems/excel-sheet-column-title/description/
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:
Input: columnNumber = 1
Output: "A"

Example 2:
Input: columnNumber = 28
Output: "AB"

Example 3:
Input: columnNumber = 701
Output: "ZY"
 

Constraints:
1 <= columnNumber <= 231 - 1

*/
var convertToTitle = function (columnNumber) {
    let result = '';
    while (columnNumber > 26) {
        let lastLetter = columnNumber % 26;
        lastLetter === 0 ? lastLetter = 26 : 0;
        result += String.fromCharCode(64 + lastLetter);
        columnNumber = (columnNumber - lastLetter) / 26;
    }
    result += String.fromCharCode(64 + columnNumber);
    return result.split('').reverse().join('');
};