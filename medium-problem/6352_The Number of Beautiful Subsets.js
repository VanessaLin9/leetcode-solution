// You are given an array nums of positive integers and a positive integer k.

// A subset of nums is beautiful if it does not contain two integers with an absolute difference equal to k.

// Return the number of non-empty beautiful subsets of the array nums.

// A subset of nums is an array that can be obtained by deleting some (possibly none) elements from nums. Two subsets are different if and only if the chosen indices to delete are different.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// unfinished
var beautifulSubsets = function(nums, k) {
  let result = nums.length ;
  for(let i=2; i<nums.length; i++){
    // i 窗口大小
    
    for(let j=0; j<nums.length-i; j++){
      // j 幾號開始滑
      console.log('j',j)
      if(nums[j+1] - nums[j] !== k){
        result ++
        console.log(result)
      } else {
        break
      }
    }
  }
  return result
};


console.log(beautifulSubsets([2,4,6], 2)) //4