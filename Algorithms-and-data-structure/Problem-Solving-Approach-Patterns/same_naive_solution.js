
/* ===========  Freauency Counter Pattern ================ */
function same(arr1, arr2) { // Time Complexity -  O(n^2)
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1)
    }
    return true;
}

console.log(same([1, 2, 3], [9, 1, 4]))
console.log(same([1,2,1], [4,4,1])) // false