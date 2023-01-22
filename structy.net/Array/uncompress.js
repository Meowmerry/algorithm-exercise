/**uncompress
Write a function, uncompress, that takes in a string as an argument. 
The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.
The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. 
You may assume that the input string is well-formed according to the previously mentioned pattern.

test_00:
uncompress("2c3a1t"); // -> 'ccaaat'
test_01:
uncompress("4s2b"); // -> 'ssssbb'
test_02:
uncompress("2p1o5p"); // -> 'ppoppppp'
test_03:
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
test_04:
uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy 

** Complexity  **
  // todo with two pointers
  // complextiy  n = # of groups
  // m = max nubmer for any group;
  // Time : O(nm)
  // space : O(nm)

*/
const uncompress = (s) => { // will user two pointers
    // todo
    const result = [];
    const numbers = '0123456789';
    let j = 0;
    let i = 0;
    while (j < s.length) {
        if (numbers.includes(s[j])) {
            j += 1;
        } else {
            const num = Number(s.slice(i, j));
            for (let count = 0; count < num; count += 1) {
                result.push(s[j]);
            }
            j += 1;
            i = j
        }
    }
    return result.join('')
};

// console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("127y")); // -> 'yyyyyyyyy....'

/* 
This function uses a for loop to iterate through the compressed string. 
It initializes an empty string variable, uncompressedString, to store the final uncompressed string,
and a string variable, currentGroup, to store the current group being processed.

The loop checks if the current character is not an open or closed parenthesis. 
If it is not, it is added to the currentGroup variable. If it is an open parenthesis, the function extracts 
the number of repetitions and the number of characters to repeat from the string using a nested while loop, and uses the repeat() 
method to repeat the current group the specified number of times. The index of the for loop is then updated to the end of the group being processed.

Finally, the uncompressedString variable is updated with the currentGroup and the function returns the uncompressed string.

*/
const uncompress1 = (s) => { // will user two pointers
    // todo
    let result = ''; // not effection should be array
    const numbers = '0123456789';
    let j = 0;
    let i = 0;
    while (j < s.length) {
        if (numbers.includes(s[j])) {
            j += 1;
        } else {
            const num = Number(s.slice(i, j));
            for (let count = 0; count < num; count += 1) {
                result += s[j]; // because we join string O space will be O(n) 
            }
            j += 1;
            i = j
        }
    }
    return result;
};

console.log(uncompress1("2c3a1t")); // -> 'ccaaat'

function uncompress(compressedString) {
    // Initialize empty string to store uncompressed string
    let uncompressedString = "";

    // Loop through each character in the compressed string
    for (let i = 0; i < compressedString.length; i++) {
        // Check if the current character is a digit
        if (compressedString[i].match(/\d/)) {
            // Extract the number following the digit (the number of repetitions)
            let numRepetitions = "";
            while (compressedString[i].match(/\d/)) {
                numRepetitions += compressedString[i];
                i++;
            }
            // Convert the number of repetitions to an integer
            numRepetitions = parseInt(numRepetitions);

            // Add the next character (the character to repeat) to the uncompressed string, repeated the specified number of times
            for (let j = 0; j < numRepetitions; j++) {
                uncompressedString += compressedString[i];
            }
        } else {
            // If the current character is not a digit, add it to the uncompressed string as is
            uncompressedString += compressedString[i];
        }
    }
    return uncompressedString;
}

console.log(uncompress("2c3a1t")); // -> 'ccaaat'





function uncompress(compressedString) {
    // Initialize empty array to store uncompressed string
    let uncompressedString = [];

    // Loop through each character in the compressed string
    for (let i = 0; i < compressedString.length; i++) {
        // Check if the current character is a digit
        if (compressedString[i].match(/\d/)) {
            // console.log('digit-->', compressedString[i])
            // Extract the number following the digit (the number of repetitions)
            let numRepetitions = "";
            while (compressedString[i].match(/\d/)) {
                numRepetitions += compressedString[i];
                i++;
            }
            // Convert the number of repetitions to an integer
            numRepetitions = parseInt(numRepetitions);

            // Add the next character (the character to repeat) to the uncompressed string, repeated the specified number of times
            for (let j = 0; j < numRepetitions; j++) {
                uncompressedString.push(compressedString[i]);
            }
        } else {
            // If the current character is not a digit, add it to the uncompressed string as is
            uncompressedString.push(compressedString[i]);
        }
    }
    return uncompressedString.join('');
}

console.log(uncompress("2c3a1t")); // -> 'ccaaat'