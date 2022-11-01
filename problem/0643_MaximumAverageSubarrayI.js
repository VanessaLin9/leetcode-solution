// 0643_MaximumAverageSubarrayI
// https://leetcode.com/problems/maximum-average-subarray-i/
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let total = 0;
  if(nums.length < k)return null
  for (let j=0; j<k; j++){
    total += nums[j]
  }
  let result = total/k;

  for(let i=k; i<nums.length; i++){
    total = total - nums[i - k] + nums[i]
    result = total/k > result? total/k: result
  }
  return result
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))

