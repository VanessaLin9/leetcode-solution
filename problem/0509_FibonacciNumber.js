// 509_FibonacciNumber.js
// https://leetcode.com/problems/fibonacci-number/
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */

// recursion
var fib = function(n) {
    if (n ===0) {
      return 0
    } else if (n === 1){
      return 1
    } else {
      return fib(n-1) + fib(n-2)
    }
};

// DP
var fib = function(n) {
    if(n < 2) return n;
    let a = 0;
    let b = 1;
    for(let i=1; i<n; i++){
        [a, b] = [b, a+b]
    }
    return b
};

console.log(fib(4)) //3
