
// Solution 1  with naive solution will be  Big-O  ==>  O(n2)
function same(arr1, arr2) {
    // check if arr1 !== arr2 return false
    if (arr1.length !== arr2.length) {
        return false
    }
    // check if arr1 === arr2 retrun true or false by loopting check both array
    for (let i = 0; i < arr1.length; i++) {
        const correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false
        }
        console.log('arr2 :', arr2)
        arr2.splice(correctIndex, 1)

    }
    return true
}
console.log('same', same([1, 2, 3], [9, 1, 4])) // true
console.log('same', same([1, 2, 3], [1, 9])) // false
console.log('same', same([1, 3, 2], [1, 4, 9])) //  true


// Solution 2  with refactored solution ===> Time Complexity ==> O(n)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    // console.log("frequencyCounter1", frequencyCounter1);
    // console.log("frequencyCounter2", frequencyCounter2);
    return true

}
// console.log('same', same([1, 2, 3], [9, 1, 4])) // true
// console.log('same', same([1, 2, 3], [1, 9])) // false
// console.log('same', same([1, 3, 2], [1, 4, 9])) //  true
console.log('same', same([1, 2, 3, 5], [1, 4, 9, 25])) //  true