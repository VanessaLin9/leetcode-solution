// 231. Power of Two
// https://leetcode.com/problems/power-of-two/
// Tag: Math, Bit Manipulation, Recursion, Binary Search, Number Theory, Easy
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

/**
 * @param {number} n
 * @return {boolean}
 */

// Brute force
// var isPowerOfTwo = function(n) {
//   if (n <= 0) return false;
//   if (n === 1) return true;
//   let a = 1;

//   while(a <= n) {
//     a = a*2;
//     if (a === n) return true
//   }
//   return false
// }

// Math.log2
var isPowerOfTwo = function(n){
  if(n === 1) return true
  if( n <= 0) return false
  return (Math.log2(n) % 1) === 0
}

// Bitwise
var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    return (n & n-1) === 0
};

console.log(isPowerOfTwo(16))