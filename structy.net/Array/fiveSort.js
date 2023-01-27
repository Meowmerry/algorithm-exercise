/*
five sort
Write a function, fiveSort, that takes in an array of numbers as an argument. 
The function should rearrange elements of the array such that all 5s appear at the end. 
Your function should perform this operation in-place by mutating the original array. 
The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

test_00
fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5] 
test_01
fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
test_02
fiveSort([5, 5, 5, 1, 1, 1, 4]);
// -> [4, 1, 1, 1, 5, 5, 5] 
test_03
fiveSort([5, 5, 6, 5, 5, 5, 5]);
// -> [6, 5, 5, 5, 5, 5, 5] 
test_04
fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 
test_05
const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const nums = [...fives, ...fours];
fiveSort(nums);
// twenty-thousand 4s followed by twenty-thousand 5s
// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]

*/

const fiveSort = (nums) => {
    // todo
    const newArr = [];
    const arrFive = []
    for (const num of nums) {
        if (num !== 5) {
            newArr.push(num)
        } else {
            arrFive.push(num)
        }
    }
    return newArr.concat(arrFive)
}
function fiveSort(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            count++;
        } else {
            arr[i - count] = arr[i];
        }
    }
    for (let j = 1; j <= count; j++) {
        arr[arr.length - j] = 5;
    }
    return arr;
}

/*
n = array size
Time: O(n)
Space: O(1)
*/
function fiveSort(nums) {
    // use two pointer from firstIndex and lastIndex
    let i = 0;
    let j = nums.length - 1;
    // while first index less then lastIndex
    while (i < j) {
        // if element at lastIndex is equal to 5, then decrement lastIndex
        if (nums[j] === 5) {
            j -= 1;
        } else if (nums[i] === 5) {// else if the first element is equal to 5, than swap elemtn between
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else { // else increment first index
            i += 1
        }
    }
    return nums;
}
console.log(fiveSort([12, 1, 12, 7]));// -> [12, 7, 1, 12, 5, 5] 
console.log(fiveSort([12, 5, 1, 5, 12, 7]));// -> [12, 7, 1, 12, 5, 5] 
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])); // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
console.log(fiveSort([5, 5, 5, 1, 1, 1, 4])); // -> [4, 1, 1, 1, 5, 5, 5] 