/* 
Inputs : Array
Output : Array

Time Complexity : O(n log n) ==>  Linearithmic OR Log linear

Space Complexity : 

*/

function mergeSort(array) {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length) / 2;
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return merge(left, right)

}

function merge(left, right) {
    const result = [];
    let idx1 = 0,
        idx2 = 0;
    while (left[idx1] !== undefined || right[idx2] !== undefined) {
        if (left[idx1] < right[idx2]) {
            result.push(left[idx1++])
        } else if (left[idx1] >= right[idx2]) {
            result.push(right[idx2++])
        } else {
            result.push(left[idx1++] || right[idx2++])
        }
    }
    return result;
}
console.log(mergeSort([5, 2, 1, 4, 3]))