function findNthLargestMultiple(values, k, n) {
    // remove duplicates from the valuesay
    values = [...new Set(values)];
    // filter out the numbers that are not multiples of k
    values = values.filter(num => num % k === 0);
    // sort the valuesay in descending order
    values.sort((a, b) => b - a);
    // return the nth element or -1 if not exists
    return values[n - 1] || -1;
}
console.log(findNthLargestMultiple([4,9,3,12,6,4,15],4, 3 ))