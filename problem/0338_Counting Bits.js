// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function(n) {
  const sum = [0]
  if(n >= 1) sum.push(1);

  for(let i=2; i<=n; i++){
    let temp = sum[Math.floor(i/2)] + sum[i%2]
    sum.push(temp)
  }
  return sum
};

console.log(countBits(5))