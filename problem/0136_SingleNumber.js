// 136_SingleNumber
// https://leetcode.com/problems/single-number/
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.
/**
 * @param {number[]} nums
 * @return {number}
 */

// brute force

// var singleNumber = function(nums) {
//   const hash ={}
//   for(let i in nums){
//     if(hash[nums[i]] === undefined) {
//       hash[nums[i]] = 0
//     }
//     hash[nums[i]] += 1
//   }
//   console.log(hash)
//   for (let j in hash) {
//     if(hash[j] === 1){
//       return j
//     }
//   }
// };
// time O(n)
// space O(n)

// *************************
// XOR

var singleNumber = function(nums){
  return nums.reduce((p, c) => p^c)
}




console.log(singleNumber([4,1,2,1,2]))