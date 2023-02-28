/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
 
Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/

// Solution == เวอร์ชั่นคิดเยอะ naive หัดใช้ loop จากโจทย์วันศุกร์ค่ะ5555 === 
var reverseWords = function (s) {
    /* Array-- > create variable Array  result[]
    Array-- > create variable เท่ากับ s split string เพื่อเปลี่ยนให้ เป็น  Array
    loop through Array sSplit หลังจากทำการ split แต่ละชุด เพื่อทำอะไรบางอย่าง โดยค่าเริ่มต้นที่ Index = 0
    for (let index = 0; index < sSplit.length; index++) {
            create variable word เท่ากับ string แต่ละตัว
            นำ word มาทำการ split("") และ reverse() word ทำการ join("") อีกครั้ง push เข้าไปใน result[]
    } 
    return result โดยนำมา join(" ") เพื่อให้เป็น  string  */
    return result.join(" ")
};

var reverseWords = function (s) {
    const result = []
    const splitStr = s.split(/\s+/)
    for (let index = 0; index < splitStr.length; index++) {
        const word = splitStr[index];
        result.push(word.split("").reverse().join(""))
    }
    return result.join(" ")
};
console.log('test 1:', reverseWords("Let's take LeetCode contest"))  // "s'teL ekat edoCteeL tsetnoc"
console.log('test 2:', reverseWords("God Ding")) // "doG gniD"


// Tee Solution refactor
var reverseWords = function (s) {
    return s.split(/\s+/).map((word) => word.split("").reverse().join("")).join(" ")
};
console.log('test 1:', reverseWords("Let's take LeetCode contest"))  // "s'teL ekat edoCteeL tsetnoc"




const path = "C:\\Users\\Win\\Files\\javascript.js";
console.log(path);

const heSaid = `He said, "Hey Foo!"`;
console.log(heSaid);

const sheSaid = "My name ain't Foo!";
console.log(sheSaid);

