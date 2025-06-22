// 16. 3Sum Closest
// https://leetcode.com/problems/3sum-closest/
// Tag: Array, Two Pointers, Sorting, Medium


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if(nums.length <= 3) {
    return nums.reduce((a, c) => a+c, 0)
  }
  nums.sort((a, b) => a-b)
  let min = Infinity
  for(let i =0; i<nums.length-2; i++) {
    let l = i+1, r = nums.length-1
    while(l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if(sum === target) {
        return sum
      }
      if(Math.abs(sum-target) < Math.abs(min-target)) {
        min = sum
      }
      if(sum < target) {
        l++
      } else {
        r--
      }
    }
  }
  return min
};