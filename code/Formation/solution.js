/*
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
solution(n) = 11.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive two-digit integer.

Guaranteed constraints:
10 ≤ n ≤ 99.

[output] integer

The sum of the first and second digits of the input number.
 */
function solution(n) {
  let sum = 0;
  let nums = String(n).split('');
  for(const num of nums){
    sum += Number(num)
  }
  return sum;
  
}
console.log(solution(26))

let input = 15
output = Math.ceil(input/2) % 5 * 2
console.log(output)

