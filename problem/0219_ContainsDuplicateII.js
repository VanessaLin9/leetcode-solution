// 0219_ContainsDuplicateII
// https://leetcode.com/problems/contains-duplicate-ii/
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// hash table
// var containsNearbyDuplicate = function(nums, k) {
//   const hash = {};
//   for(let i=0; i<nums.length; i++){
//     if(hash[nums[i]] !== undefined) {
//       if ((i-hash[nums[i]]) <= k) return true
//     }
//     hash[nums[i]] = i
//   }
//   return false
// };

// sliding window
// 要搭配set或是 map
var containsNearbyDuplicate = function(nums, k) {
  const set = new Set();
  for(let i=0; i<nums.length; i++){
    if(set.size > k){
      set.delete(nums[i - k - 1])
    }
    if(set.has(nums[i])) return true
    set.add(nums[i])
  }
  return false
}

console.log(containsNearbyDuplicate([1,2,3,1], 3))  //true
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)) //false