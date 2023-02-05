/*
Q. Return true if and only if num is a prime number.

A prime number is a positive integer greater than 1 that is only evenly divisible by 1 and itself:
Prime numbers: 2, 3, 5, 7, 11, ...
Not prime numbers: 1, 4, 6, 8, 9, 10, ...
Approach:

Iterate through all the numbers starting from 2 to (num/2) using a for loop.
For every number check if there exists any number that divides num.
[execution time limit] 4 seconds (js)

[input] integer num

[output] boolean

true if and only if num is prime
*/