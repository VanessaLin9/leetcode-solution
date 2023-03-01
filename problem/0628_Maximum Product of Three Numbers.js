// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b)=> b-a)
  let pos = nums[0]*nums[1]*nums[2]
  let neg = nums[0]*nums[nums.length-1]*nums[nums.length-2]
  return Math.max(pos, neg)
};

console.log(maximumProduct([-100,-98,-1,2,3,4])) //39200 
console.log(maximumProduct([-1,-2,-3])) //-6