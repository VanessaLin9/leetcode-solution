// 0088_MergeSortedArray
// https://leetcode.com/problems/merge-sorted-array/
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// select sort -AC 107ms 倒著讀
// var merge = function(nums1, m, nums2, n) {
//   if(n === 0) return nums1

//   for(let j=0; j<n; j++){
//     nums1[j+m] = nums2[j]
//   }
  
//   for(let i =0; i<nums1.length-1; i++){
//     let minIdx = i
//     for(let k=i; k<nums1.length; k++){
//       if( nums1[k]<nums1[minIdx]) minIdx = k
//     }
//     if(minIdx !== i){
//       let temp =nums1[i]
//       nums1[i] = nums1[minIdx]
//       nums1[minIdx] = temp
//     }
//   }
  
//   return nums1
// };
// T: O(n^2)
// S: O(1)

// 討論區看到的答案，自己想過寫splice但是少了 undefined 的部分一直卡住
// AC 114ms
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m)
  let i=0;
  let j=0;
  while(j<nums2.length){
    if(nums1[i] === undefined || nums1[i]>nums2[j]){
      nums1.splice(i, 0, nums2[j])
      j++
    }
    i++
  }
  return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))