/*
======================================================================
Write a function which takes two numbers and returns their sum.
======================================================================

1. Can I restate the problem in my own words?
"implement addition"
2. What are the inputs that go into the  problem?
    - ints?
    - floats?
    - what about string for large numbers?

3. What are the outpus that should come  from the solution to the  problems?
    - int? float? string?

4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem

5. How should I label the important pieces of data that are apart of the problem?
*/
const add = (a, b) => {
    let sum
    sum = a + b
    return sum
}
console.log('add: ', add(3, 4))