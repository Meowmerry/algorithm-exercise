function maxValue(nums) {
    let maximum = -Infinity;
    for (const num of nums) {
        if (maximum < num) {
            maximum = num;
        }
    }
    return maximum;
}
console.log(maxValue([4, 7, 2, 8, 10, 9])); // 10
console.log(maxValue([10, 5, 40, 40.3])); // 40.3
console.log(maxValue([-5, -2, -1, -11])); // -1
console.log(maxValue([42])); // 42
console.log(maxValue(([1000, 8, 9000]))); // 9000