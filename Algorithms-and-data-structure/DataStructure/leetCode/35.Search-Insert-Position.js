/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

 

Input: nums = [1,3,5,6], target = 5
Output: 2


Input: nums = [1,3,5,6], target = 2
Output: 1


Input: nums = [1,3,5,6], target = 7
Output: 4


Input: nums = [1,3,5,6], target = 0
Output: 0


Input: nums = [1], target = 0
Output: 0 */

var searchInsert = function (nums, target) {
    return nums.filter(x => x < target).length
};

var searchInsert = function (nums, target) {

    let index = nums.indexOf(target)
    if (index >= 0) {
        return index
    } else {

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < target && nums[i + 1] && target < nums[i + 1]) {
                return i + 1
            } else if (nums[i] < target && !nums[i + 1]) {
                return i + 1
            }
        }
    }
    return 0
};


function searchInsert(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};


function binarySearch(array, target, start, end) {
    // If the target is less then the very last item then insert it at that item index
    // because anything index less then that has already been confirmed to be less then the target.
    // Otherwise insert it at that item index + 1
    // because any index grater then that has already been confirmed to be greater then the target
    if (start > end) return start;

    const midPoint = Math.floor((start + end) / 2);

    // found target
    if (array[midPoint] === target) return midPoint;

    // search the left side
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    // search the right side
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}
var searchInsert = function (nums, target) {
    function withinInterval(a, b) {
        if (a == b) return a;
        let k = a + Math.floor((b - a) / 2);

        if (target <= nums[k]) {
            return withinInterval(a, k);
        } else {
            return withinInterval(k + 1, b);
        }
    }
    return withinInterval(0, nums.length);
};


var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};
const nums = [1, 3, 5, 6], target = 5;
console.log('ans : ', searchInsert(nums, target)) // 2
const nums1 = [1, 3, 5, 6], target1 = 2;
console.log('ans : ', searchInsert(nums1, target1))
const nums2 = [1, 3, 5, 6], target2 = 7;
console.log('ans : ', searchInsert(nums2, target2))
const nums3 = [1, 3, 5, 6], target3 = 0;
console.log('ans : ', searchInsert(nums3, target3))
const nums4 = [1, 3, 5, 6], target4 = 0;
console.log('ans : ', searchInsert(nums4, target4))