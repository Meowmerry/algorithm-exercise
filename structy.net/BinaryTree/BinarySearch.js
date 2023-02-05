// https://leetcode.com/problems/binary-search/solutions/423162/binary-search-101/

const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    /* 2. mid
        The mid variable indicates the middle element within the boundary. It separates our boundary into 2 parts. Remember how I said binary search works by keep cutting the elements in half, the mid element works like a traffic police,
        it indicates us which side do we want to cut our boundary to.
        Note when an array has even number of elements, it's your decision 
        to use either the left mid (lower mid) or the right mid (upper mid)
       
        let mid = lo + Math.floor((hi - lo) / 2); // left/lower mid

        let mid = lo + Math.floor((hi - lo + 1) / 2); // right/upper mid
    */
    let mid = left + Math.floor((right - left + 1) / 2);
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return nums[left] === target ? left : -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
