// 494. Target Sum
// https://leetcode.com/problems/target-sum/
// Tag: Array, Dynamic Programming, Backtracking, Medium

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// DP
var findTargetSumWays = function(nums, S) {
  let sums = new Map([[0, 1]]);
  
  for (let num of nums) {
    const next = new Map();
    
    for (let [sum, amount] of sums) {
      const plus = sum + num;
      const minus = sum - num;

      next.set(plus, next.has(plus) ? next.get(plus) + amount : amount);
      next.set(minus, next.has(minus) ? next.get(minus) + amount : amount);
    }
    
    sums = next;
  }
  
  return sums.has(S) ? sums.get(S) : 0;
};

// TC:O(n*s)
// MC:O(n*s)