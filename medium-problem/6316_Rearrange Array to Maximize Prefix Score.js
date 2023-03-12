// You are given a 0-indexed integer array nums. You can rearrange the elements of nums to any order (including the given order).

// Let prefix be the array containing the prefix sums of nums after rearranging it. In other words, prefix[i] is the sum of the elements from 0 to i in nums after rearranging it. The score of nums is the number of positive integers in the array prefix.

// Return the maximum score you can achieve.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  nums.sort((a, b) => b-a)
  console.log(nums)
    let result = nums[0];
    for(let i=1; i<nums.length; i++){
      nums[i] = nums[i-1] + nums[i]
      result = nums[i]>result?nums[i]:result
    }
    console.log(nums)
    return result
};

console.log(maxScore([2,-1,0,1,-3,3,-3])) //6