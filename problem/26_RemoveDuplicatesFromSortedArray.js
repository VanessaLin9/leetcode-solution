// 26_RemoveDuplicatesFromSortedArray
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
// 雖然指定return k而已，但nums還是會被檢查的樣子不處理不會過


// splice
// var removeDuplicates = function(nums) {
//   let n = nums.length;
//   let s = 0
//   for (let i=n; i>=0; i--){
//     if (nums[i] === nums[i-1]){
//       nums.splice(i, 1);
//       s ++
//     }
//   }
//   return (n-s)
// };

// T: O(n)
// S: O(1) (指定)

// two pointer
var removeDuplicates = function(nums){
  let s = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i] !== nums[i-1]){
      nums[s] = nums[i]
      s += 1
    }
  }
  return s
};
// T: O(n)
// S: O(1) (指定)

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))