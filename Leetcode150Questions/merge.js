/*

🔎 EXPLORE
What are some other insightful & revealing test cases?
- What if nums1 is empty
- What if nums2 is empty



🧠 BRAINSTORM
Time: O(N)
Space: O(N)


📆 PLAN
- Initialize i and j to store indices of the last element of nums1 and nums2 array respectively..
- Iterate through both nums1 and nums, 
- Start i at m and j at 0, until j less than n length, 
    - Sorting number
        if nums1[i] > nums2[j]
            swape 
         

🛠️ IMPLEMENT


*/

// var merge = function (nums1, m, nums2, n) {
//     let i = m;
//     let j = 0;
//     while (j < n) {
//         nums1[i] = nums2[j];
//         i++;
//         j++;
//     }
//     nums1.sort((a, b) => a - b);
// };

var merge = function (nums1, m, nums2, n) {
    // Pointer for the last element of nums1 at i, nums2 at j
    let i = m - 1, j = n - 1;

    // Pointer for the last element of nums1
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        // Swap element
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    // if nums2 still has element copy to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    return nums1;
};

// [ 1, 2, 3, 2, 5, 6 ]
//   1 < 3 
//   3 == 1 
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0));[1];
console.log(merge([0], 0, [1], 1)); // [1]