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
const isPrime = (num)=>{
    if(num <= 1) return false;
    for(let i = 2 ; i <= num / 2 ; i+=1){
        if(num % i === 0) return false;
    }
    return true
}
console.log(isPrime(7)) // true
console.log(isPrime(2)) // true
console.log(isPrime(17)) // true
console.log(isPrime(20)) // false

const isPrimeRecursive = (num , i = 2)=>{
    if(num <= 1) return false;
    if(i > num / 2) return true;
    if(num % i === 0 ) return false;
    return isPrimeRecursive(num, i +1)
}
console.log(isPrimeRecursive(7)) // true
console.log(isPrimeRecursive(2)) // true
console.log(isPrimeRecursive(17)) // true
console.log(isPrimeRecursive(20)) // false