/*

Duplicate Integer
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false


Input: nums of Interget
Output: Boolean

Explore:
- Is possible nums is empty --> true
- number in a list can be nagative, zero, positive
- odd length
- even lenth

Brainstrom:
Time: O(n) where N is the length of nums
Space: O(n) where n is the length of map

Plan:
- Using hasMap to store Key and Value
- Iterate through the nums and Key: num , Value: count
    - check if Value is > 1 return true
- return false
[1, 2, 3, 3]
{
1: 1
2: 1
3: 2
}

*/

function hasDuplicate(nums) {

    const numsMap = new Map();

    for (const num of nums) {
        numsMap.set(num, (numsMap.get(num) || 0) + 1);
        if (numsMap.get(num) > 1) {
            return true;
        }
    }
    return false;
}
console.log(hasDuplicate([1, 2, 3, 3])); // true
console.log(hasDuplicate([1, 2, 3, 4])); // false
console.log(hasDuplicate([])); // false
console.log(hasDuplicate([-1, 0, 2, 3, 4, -4])); // false
console.log(hasDuplicate([-1, 0, 2, 3, 4, -1])); // true
console.log(hasDuplicate([0, 0])); // true
