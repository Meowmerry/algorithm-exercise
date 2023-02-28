const solution = (numbers) => {
    var largestSum = 0;
    var numbers = numbers;
    while (numbers.length > 0) {
        var previousNumber = numbers.shift()
        if (previousNumber == -1) {
            return -1;
        }

        var sum = previousNumber;
        for (number of numbers) {
            sum += number;
            previousNumber = number;
        }

        largestSum = Math.max(largestSum, sum);
    }

    return largestSum;
}
console.log(solution( [9, 5, 12, 6, 5, 4, 1])) // 15