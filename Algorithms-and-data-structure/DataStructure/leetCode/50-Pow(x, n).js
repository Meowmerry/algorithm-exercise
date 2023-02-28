/* 
50. Pow(x, n)
Medium

3615

4743

Add to List

Share
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
    if (n === 0) return 1;
    if (n < 0) [x, n] = [1 / x, -n];
    if (n % 2 === 0) {
        return myPow(x * x, n / 2)
    } else {
        return x * myPow(x, n - 1)
    };
};

/* ========================== SOLUTION 2  ======================================
================================================================================ */
const myPow1 = (x, n) => {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n === 2) return x * x;
    if (n < 0) [x, n] = [1 / x, -n];
    const remainder = n % 3;
    if (!remainder) {
        return myPow1(x * x * x, n / 3);
    } else {
        return myPow1(x, remainder) * myPow(x, n - remainder);
    };
};

