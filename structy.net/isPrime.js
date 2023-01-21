/**is prime
Write a function, isPrime, that takes in a number as an argument. 
The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

You can assume that the input number is a positive integer.

test_00:
isPrime(2); // -> true
test_01:
isPrime(3); // -> true
test_02:
isPrime(4); // -> false
test_03:
isPrime(5); // -> true
test_04:
isPrime(6); // -> false
test_05:
isPrime(7); // -> true
test_06:
isPrime(8); // -> false
test_07:
isPrime(25); // -> false
test_08:
isPrime(31); // -> true
test_09:
isPrime(2017); // -> true
test_10:
isPrime(2048); // -> false
test_11:
isPrime(1); // -> false
test_12:
isPrime(713); // -> false


## Complexity  ##
n = input number 
Time: O(n) because we iterate thru each number to check, will iterating through from 2 up to n not include n itself
Space: O(1) because we're just using a handful of variables and we're not using any scaling structures, so 
It is a very classic linear runtime algorithm to check whether or not number is prime

*/

const isPrime = (n) => {
  // todo
  // check if n is less than 2, return false
  if (n < 2) return false;
  // declare a variable prime set to 2
  let prime = 2;
  // while prime less than n,
  while (prime < n) {
    // if num divide prime is equal to 0, return false
    if (n % prime === 0) return false;
    // otherwise increment prime by 1
    prime += 1;
  }

  return true;
};

console.log(isPrime(2)); // -> true
console.log(isPrime(713)); // -> false
console.log(isPrime(5)); // -> true

const isPrime2 = (n, div = 2) => {
  // todo
  if (n < 2 || n === 1) return false;
  if (n === div) return true;
  if (n % div === 0) return false;
  return isPrime2(n, div + 1);
};

console.log(isPrime2(2)); // -> true
console.log(isPrime2(713)); // -> false
console.log(isPrime2(5)); // -> true
console.log(isPrime2(1)); // -> false

/*
n = input number
Time: O(square_root(n))
Space: O(1)
*/

const isPrime3 = (n) => {
  // todo
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(isPrime3(2)); // -> true
console.log(isPrime3(713)); // -> false
console.log(isPrime3(5)); // -> true
console.log(isPrime3(1)); // -> false
