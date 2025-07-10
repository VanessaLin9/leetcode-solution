// 1929. Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/
// Tag: Array, Easy

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// -----------[0. concat]------------------------
// var getConcatenation = function(nums) {
//     return nums.concat(nums)
// };
// TC: O(n)
// MC: O(n)

// -----------[1. brute force]-----------------
// 1-0
// var getConcatenation = function(nums) {
//     const ans = new Array((nums.length)*2)
//     for(let i=0; i<nums.length; i++){
//         ans[i] = nums[i]
//         ans[i+nums.length] = nums[i]
//     }
//     return ans
// };
// TC: O(n)
// MC: O(n)

// 1-1
var getConcatenation = function(nums) {
  let len = nums.length 
  for(let i=0; i<len; i++){
    nums[len + i] = nums[i]
  }
  return nums
}
// TC: O(n)
// MC: O(1)

//-----------[2. Spread Operator]---------
// 2-0
// var getConcatenation = function(nums) {
//   return [...nums, ...nums]
// }
// TC: O(n)
// MC: O(n)

// 2-1
// var getConcatenation = function(nums) {
//   nums.push(...nums)
//   return nums
// }
// TC: O(n)