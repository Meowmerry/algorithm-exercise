/*
compress
Write a function, compress, that takes in a string as an argument. 
The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed 
into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
You can assume that the input only contains alphabetic characters.

test_00:
compress('ccaaatsss'); // -> '2c3at3s'
test_01:
compress('ssssbbz'); // -> '4s2bz'
test_02:
compress('ppoppppp'); // -> '2po5p'
test_03:
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
test_04:
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
-> '127y'

* * Complexity  **
Two pointers
  n = input string length
  Time = O(n)
  Space = O(n)

*/

const compress = (s) => {
    // todo
    // declare a result variable set to empty array
    const result = [];
    // declare i at the first pointer and j as secound poionter
    let i = 0; // start position
    let j = 0; // end position
    // while j is less then or equul to s length do something
    while (j <= s.length) {
        // check if two pointer are the same, increment j by 1
        if (s[i] === s[j]) j += 1;
        else {
            // decrement index to get number
            const num = j - i;
            // if num is equal to 1, push only string in result;
            if (num === 1) result.push(s[i]);
            else result.push(String(num), s[i]);

            i = j;
        }

    }
    return result.join('');
};
console.log(compress('aaa')); // -> '3a'
console.log(compress('ccaaatsss')); // -> '2c3at3s'

const compress1 = (s) => {

};
console.log(compress1('aaa')); // -> '3a'
console.log(compress1('ccaaatsss')); // -> '2c3at3s'


function compress(str) {
    const result = [];
    let i = 0;
    let j = 0;
    while (j <= str.length) {

        if (str[i] === str[j]) j += 1;
        else {
            const num = j - i;
            if (num === 1) result.push(str[i]);
            else result.push(num, str[i]);
            i = j;
        }

    }
    return result.join('');
}
console.log(compress("aabcccccaaa")); // should return "2a1b5c3a"
console.log(compress("abcdefg")); // should return "abcdefg"
console.log(compress("aaaabbbbcccc")); // should return "4a4b4c"

function compress(str) {
    let compressed = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            if (count === 1) compressed.push(str[i]);
            else compressed.push(count, str[i]);
            count = 1;
        }
    }
    return compressed.join('');
}

console.log(compress("aabcccccaaa")); // should return "2a1b5c3a"
console.log(compress("abcdefg")); // should return "abcdefg"
console.log(compress("aaaabbbbcccc")); // should return "4a4b4c"


const compress2 = (s) => {
    // Time: O(n)  Space: O(n)
    const result = [];

};

console.log(compress2("aabcccccaaa")); // should return "2a1b5c3a"
console.log(compress2("abcdefg")); // should return "abcdefg"
console.log(compress2("aaaabbbbcccc")); // should return "4a4b4c"

