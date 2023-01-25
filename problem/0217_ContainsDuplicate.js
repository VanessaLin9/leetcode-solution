//217_ContainsDuplicate
// https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// hash table

// var containsDuplicate = function(nums) {
//   const hash ={}
//   for(let i=0; i<nums.length; i++){
//     if(hash[nums[i]] !== undefined) return true
//     hash[nums[i]] = 0 
//     hash[nums[i]] += 1
//   }
//   return false
// };

// T: O(n)
// S: O(n)


// sort
var containsDuplicate = function(nums) {
  nums.sort()
  for(let i=0; i<nums.length; i++){
    if(nums[i] === nums[i+1]) return true
  }
  return false
}
// T: O(n log n)
// S: O(1)

// set
var containsDuplicate = function(nums) {
    const set = new Set(nums);
    return set.size !== nums.length
};
// T: O(1)
// S: O(n)

console.log(containsDuplicate([1,2,3,4]))