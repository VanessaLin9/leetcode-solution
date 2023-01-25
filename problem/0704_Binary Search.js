// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search  = function(nums, t) {
  return binary(nums, t, 0, nums.length-1)
};

function binary(arr, target, min, max){
  if (min > max) return -1
  let mid = parseInt((min+max)/2, 10)
  if (arr[mid] === target) return mid;
  if (target > arr[mid]) return binary(arr, target, mid+1, max)
  if (target < arr[mid]) return binary(arr, target, min, mid-1) 
}
