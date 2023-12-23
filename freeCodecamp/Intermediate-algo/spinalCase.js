/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str) {
    const newStr = replaceSpecialAndSplitUpperCase(str);
    // console.log(newStr);
    return newStr.replace(/\s|_/g, '-').toLowerCase();
}

function replaceSpecialAndSplitUpperCase(str) {
    // Replace special characters with spaces
    const stringWithoutSpecial = str.replace(/[^a-zA-Z0-9]/g, '');

    // Split the string at each uppercase letter
    const splitString = stringWithoutSpecial.split(/(?=[A-Z])/).join(' ');

    return splitString;
}


console.log(spinalCase('This Is Spinal Tap')); // this-is-spinal-tap.
console.log(spinalCase('thisIsSpinalTap')); // this-is-spinal-tap.
console.log(spinalCase("The_Andy_Griffith_Show")); // the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh")); // teletubbies-say-eh-oh
console.log(spinalCase("AllThe-small Things")); // all-the-small-things




/*
function isUpperCase(char) {
    return char === char.toUpperCase();
}

function spinalCase(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const nextChar = str[i + 1];

        if (isUpperCase(currentChar)) {
            if (i !== 0 && result.charAt(result.length - 1) !== '-') {
                result += '-';
            }
            result += currentChar.toLowerCase();
        } else if (currentChar === ' ' || currentChar === '_') {
            result += '-';
        } else {
            result += currentChar.toLowerCase();
        }
    }

    return result;
}

console.log(spinalCase('This Is Spinal Tap')); // Output: this-is-spinal-tap
console.log(spinalCase('thisIsSpinalTap')); // Output: this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); // Output: the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh")); // Output: teletubbies-say-eh-oh
console.log(spinalCase("AllThe-small Things")); // Output: all-the-small-things





function isUpperCase(char) {
    return char === char.toUpperCase();
}

function spinalCaseRecursive(str, index = 0, result = '') {
    if (index === str.length) {
        return result.toLowerCase();
    }

    const currentChar = str[index];
    const nextChar = str[index + 1];

    if (isUpperCase(currentChar)) {
        if (index !== 0 && result.charAt(result.length - 1) !== '-') {
            result += '-';
        }
        result += currentChar.toLowerCase();
    } else if (currentChar === ' ' || currentChar === '_') {
        result += '-';
    } else {
        result += currentChar.toLowerCase();
    }

    return spinalCaseRecursive(str, index + 1, result);
}

console.log(spinalCaseRecursive('This Is Spinal Tap')); // Output: this-is-spinal-tap
console.log(spinalCaseRecursive('thisIsSpinalTap')); // Output: this-is-spinal-tap
console.log(spinalCaseRecursive("The_Andy_Griffith_Show")); // Output: the-andy-griffith-show
console.log(spinalCaseRecursive("Teletubbies say Eh-oh")); // Output: teletubbies-say-eh-oh
console.log(spinalCaseRecursive("AllThe-small Things")); // Output: all-the-small-things
*/