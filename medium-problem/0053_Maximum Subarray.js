// Given an integer array nums, find the subarray with the largest sum, and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */

// DP
var maxSubArray = function(nums) {
    let max = nums[0]
    for(let i=1; i<nums.length; i++){
        nums[i] = Math.max(0, nums[i-1]) + nums[i]
        max = Math.max(max, nums[i])
    }
    return max
};

// TC: n
// MC: 1