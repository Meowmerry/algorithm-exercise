
/*
 * Complete the 'longestSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// function longestSubarray(arr) {
//     // Write your code here
//     /*
//     - Using Sliding window or two pointer to track subarray
//     - Engure that the subarray contains at most two distince numbers and the difference between those    two numbers is no more tha 1
//     */
//     let longest = 0;
//     let left = 0;
//     const freqMap = new Map();
//     // Iterate throught arr
//     for (let right = 0; right < arr.length; right++) {
//         // Add current number to freqMap
//         freqMap.set(arr[right], (freqMap.get(arr[right]) || 0) + 1);

//         // If more thant two distince values are present, move the left pointer

//         while (freqMap.size > 2) {
//             freqMap.set(arr[left], freqMap.get(arr[left]) - 1);
//             if (freqMap.get(arr[left]) === 0) {
//                 freqMap.delete(arr[left]);

//             }
//             left++;
//         }
//         // If the two distinct numbers differ by more than 1, adjust the window
//         if (freqMap.size === 2) {
//             const keys = Array.from(freqMap.keys());
//             // console.log(keys[0], keys[1]);

//             if (Math.abs(keys[0] - keys[1]) > 1) {
//                 freqMap.set(arr[left], freqMap.get(arr[left]) - 1);
//                 if (freqMap.get(arr[left]) === 0) {
//                     freqMap.delete(arr[left]);
//                 }
//                 left++;
//             }
//         }
//         console.log(right, left);
//         longest = Math.max(longest, right - left + 1);
//     }

//     return longest;
// }


function longestSubarray(arr) {
    const numSet = new Set(arr);
    let longest = 0;
    for (const num of numSet.values()) {
        if (!numSet.has(num - 1)) {
            let len = 1;
            let currNume = num;
            while (numSet.has(currNume + 1)) {
                len++;
                currNume++;
            }
            longest = Math.max(len, longest);
        }
    }
    return longest;
}
console.log(longestSubarray([3, 2, 2, 1])); // 3
console.log(longestSubarray([5, 1, 2, 3, 4, 5])); // 2
console.log(longestSubarray([0, 1, 2, 1, 2, 3])); // 4
console.log(longestSubarray([1, 1, 1, 3, 3, 2, 2])); // 4

