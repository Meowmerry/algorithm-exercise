/*
6. ViralContentBalancer

The TikTok engineering team is developing a new feature for analyzing viral trends by studying content sequences 
represented by a string content of length n, consisting of lowercase alphabets. 
The team has discovered that to make a video go viral, each element (character) in th content sequence should have an equal frequency.

In one operation, a character can be appended or removed from the content string. 
Your task is to find the minimum number of operations required to balance the frequency of all characters in the content sequence.

Example
Input: content = "xzyzxa"
Output: 2

Explanation:
For the content "xzyzxa", the characters 'z' and 'x' have higher frequenci than others.
To balance the frequency of all characters, one possible solution is to append one 'a' and one 'y', 
resulting in content = "xzyzxaya Alternatively, removing one 'x' and one 'z' would also achieve a balanced distribution, with the new content sequence content = "xyza".

Both approaches result in a valid balanced content sequence, and the minimum number of operations required is 2.

Function Description
Complete the function balanceContent in the editor below.
balanceContent has the following parameter:

    string content: the original content sequence.

    Returns
    int: the minimum number of operations to balance the content sequence..

Constraints
• 1 sn≤ 105


*/
function balanceContent(content) {
    // Frequency map to store the occurrences of each character
    const frequencyMap = new Map();

    // Count the frequency of each character
    for (const char of content) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // Convert frequency values to an array and sort it
    const frequencies = Array.from(frequencyMap.values()).sort((a, b) => b - a);

    // Calculate the target frequency
    const targetFrequency = Math.floor(content.length / frequencies.length);

    let operations = 0;

    // Balance the string by removing surplus characters
    for (let freq of frequencies) {
        if (freq > targetFrequency) {
            operations += freq - targetFrequency;
        }
    }

    return operations;
}

// Example Usage:
const content1 = "xzyzxa";
console.log(balanceContent(content1)); // Output: 2

const content2 = "ababc";
console.log(balanceContent(content2)); // Output: 1
