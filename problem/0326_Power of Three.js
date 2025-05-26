// 326. Power of Three
// https://leetcode.com/problems/power-of-three/
// Tag: Math, Recursion, Binary Search, Number Theory, Easy

// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

/**
 * @param {number} n
 * @return {boolean}
 */

// burst force
// var isPowerOfThree = function(n) {
//   if(n <= 0) return false
//   while(n > 1){
//     n /= 3;
//   }
//   return n === 1
// };

// 使用 log的解法，但浮點數的處裡的部分還不是很看得懂
var isPowerOfThree = function(n) {
  let a = Math.log(n)/Math.log(3)
  return Math.abs(a-Math.round(a)) < 1e-10
}

console.log(isPowerOfThree(27)) // true