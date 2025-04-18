// 283_MoveZeroes
// https://leetcode.com/problems/move-zeroes/
// Tag: Array, Two Pointers, Easy

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// brute
// var moveZeroes = function(nums) {
//   let count = 0;
//   for(let i=nums.length -1; i>=0; i--){
//     console.log(i)
//     if(nums[i] === 0){
//       nums.splice(i, 1)
//       count ++
//     }
//   } 
//   if (count !== 0){
//     for(let j=0; j<count; j++){
//       nums.push(0)
//     }
//   }
//   return nums
// };


// two pointer
var moveZeroes = function(nums) {
  let idx = 0;
  for(let i=0; i<nums.length; i++){
    
    if(nums[i] !== 0){
      nums[idx] = nums[i];
      nums[i] = i === idx ? nums[i]:0;
      idx ++
    } 
    
  }
  return nums
};

// call
console.log(moveZeroes([0,1,0,3,12]))