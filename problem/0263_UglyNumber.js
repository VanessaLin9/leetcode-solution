// 263_UglyNumber
// https://leetcode.com/problems/ugly-number/
// Tag: Math, Number Theory, Easy

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

/**
 * @param {number} n
 * @return {boolean}
 */

var isUgly = function(n) {
    if(n<=0) return false
    while((n/5)% 1 === 0){ n /= 5};
    while((n/3)% 1 === 0){ n /= 3};
    while((n/2)% 1 === 0){n /= 2};
    return n === 1
};

console.log(isUgly(14))