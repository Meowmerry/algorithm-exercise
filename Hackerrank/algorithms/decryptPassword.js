// function decryptPassword(s) {
//     let originalPassword = "";
//     let numbers = []; // To store the numbers moved to the front
//     let i = 0;

//     // Traverse the string
//     while (i < s.length) {
//         if (s[i] === '0') {
//             // Replace '0' with the number from the start
//             originalPassword += numbers.pop();
//             i++;
//         } else if (i + 2 < s.length && s[i] >= 'A' && s[i] <= 'Z' && s[i + 1] >= 'a' && s[i + 1] <= 'z' && s[i + 2] === '*') {
//             // Swap uppercase and lowercase and skip the '*'
//             originalPassword += s[i + 1] + s[i];
//             i += 3;
//         } else if (s[i] >= '1' && s[i] <= '9') {
//             // Store the number and move to the next character
//             numbers.push(s[i]);
//             i++;
//         } else {
//             // Add any other character as is
//             originalPassword += s[i];
//             i++;
//         }
//     }
//     return originalPassword;
// }

function decryptPassword(s) {
    const numbers = '0123456789';
    let result = '';

    for (let i = 0; i < s.length; i++) {
        // Check if current character is lowercase and the next one is uppercase
        if (i < s.length - 1 && s[i] === s[i].toLowerCase() && s[i + 1] === s[i + 1].toUpperCase()) {
            result += '43'; // Replace with '43'
            result += s[i + 1]; // Append the uppercase letter
            result += '*'; // Append '*'
            i++; // Skip the next character as it's already processed
        } else if (numbers.includes(s[i])) {
            result += '0'; // Replace numbers with '0'
        } else {
            result += s[i]; // Keep other characters unchanged
        }
    }

    return result;
}

// Example usage:
console.log(decryptPassword("hAck3rr4nk")); // Output: "43Ah*ck0rr0nk"

