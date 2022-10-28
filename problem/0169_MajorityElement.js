// 169_MajorityElement
// https://leetcode.com/problems/majority-element/
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */

// hash table
// var majorityElement = function(nums) {
//   if (nums.length === 1) return nums[0];
//   const hash = {}
//   for(let i=0; i<nums.length; i++){
//     if(hash[nums[i]] === undefined) hash[nums[i]] = 0;
//     hash[nums[i]] += 1
//   }
//   const n = parseInt((nums.length)/2);
//   for (let j in hash){
//     if(hash[j] > n) return j/1
//   }
// };
// T: O(n)
// S: O(n)


// sort
var majorityElement = function(nums){
  nums.sort((a, b) => a-b)
  return nums[Math.floor(nums.length/2)]
};
// T: O(n log n)
// S: O(1)

 
console.log(majorityElement([3,2,3]))