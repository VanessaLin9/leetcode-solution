// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// 幾階:   1, 2, 3, 4, 5..... 
// output: 1, 2, 3, 5, 8.....
// 就是 fibonacci 數列 

/**
 * @param {number} n
 * @return {number}
 */

// recurrsion
// var climbStairs = function(n) {
//   if ( n === 0) {
//     return 1;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return climbStairs(n-1) + climbStairs(n-2)
//   }
// };

// 可以算但是數字大的時候(例如43)會超時

// with out recurrsion
var climbStairs = function(n) {
  if( n === 0) return 0;
  if( n === 1) return 1;
  if( n === 2) return 2;
  let arr = [1, 2]
  for( let i=2; i<n; i++){
    arr[i] = arr[i-1] + arr[i-2]
  }
  return arr[n-1]
}

console.log(climbStairs(44))