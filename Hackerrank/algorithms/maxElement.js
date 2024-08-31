
/*
 * Complete the 'maxElement' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER maxSum
 *  3. INTEGER k
 */

// Input: n: the size of the array, maxSum: Int, k: Number
// Output: Interger
function maxElement(n, maxSum, k) {
    let low = 1, high = maxSum, answer = 1;

    // Helper function to calculate the sum of the arithmetic series
    const sumOfSeries = (maxValue, length) => {
        if (maxValue >= length) {
            return (maxValue * (maxValue + 1)) / 2 - ((maxValue - length) * (maxValue - length + 1)) / 2;
        } else {
            return (maxValue * (maxValue + 1)) / 2 + (length - maxValue);
        }
    };

    // Binary search to find the maximum element at index k
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let leftLength = k, rightLength = n - k - 1;

        let leftSum = sumOfSeries(mid - 1, leftLength);
        let rightSum = sumOfSeries(mid - 1, rightLength);

        let totalSum = mid + leftSum + rightSum;

        if (totalSum <= maxSum) {
            answer = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return answer;
}