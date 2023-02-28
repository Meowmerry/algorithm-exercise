// Recursively sum all th dintergers in nested 
// sumNestedArrays([1,[2,3,[4]]])

const sumNestedArrays = (array) => { // Time complexity = O(n)
    return array.reduce((acc, cur) => {
        return Array.isArray(cur) ? acc += sumNestedArrays(cur) : acc += cur
    }, 0)
}
console.log(sumNestedArrays([1,[2,3,[4]]])) // 10 