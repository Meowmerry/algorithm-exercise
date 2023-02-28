function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]))



//                 i     
// [1, 2, 3, 4, 5, 6, 4, 4, 5, 6]
//                             j

// i
// [2, 5, 7, 5, 99]
// j
const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }

    }
    //i + 1 คือ index  สุดท้าย บวก 1
    return i + 1

}


console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]))