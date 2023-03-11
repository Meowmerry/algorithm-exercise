/* 
Write a function smallestSecondNumber that accept array of number and return the second smallest
the input can be empty array or no array and without using sort()
*/
const smallestSecondNumber = (array) => {

    if (!Array.isArray(array) || array.length < 2) {
        return array.length === 1 ? array[0] : null;
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const num of array) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return secondSmallest !== Infinity ? secondSmallest : null;
};
console.log(smallestSecondNumber([])); // null
console.log(smallestSecondNumber([7])); // 7
console.log(smallestSecondNumber([1, 50, 88, 70, 90])); // 50
