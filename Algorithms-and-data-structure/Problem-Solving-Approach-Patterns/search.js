function search(array, val) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        if (array[middle] < val) {
            min = middle + 1;
        } else if (array[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

const search = (arr, val, i = 0) => {
    if (!arr[i]) return -1;
    if (arr[i] === val) return i;
    if (arr[i] !== val) i++;
    return search(arr, val, i)
}
console.log(search([1, 2, 3, 4, 5], 5)) //4
console.log(search([10, 21, 33, 44, 55], 45)) // -1
console.log(search([10, 21, 33, 44, 55, 60], 60)) // 5