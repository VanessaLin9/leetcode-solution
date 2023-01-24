// 35_SearchInsertPosition
// https://leetcode.com/problems/search-insert-position/
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// binary search
var searchInsert = function(nums, target) {
  let R = nums.length -1;
  let L = 0;

  while(R>=L){
    let mid = Math.floor((R+L)/2)
    console.log(mid)
    if (target === nums[mid]) return mid
    if (target > nums[mid]) {
      L = mid + 1
    } else if (target < nums[mid]){
      R = mid - 1
    }
    
  }
  return L  // 沒找到的時候 L會比R多1(出迴圈設定) 插入位idx應該是多一位所以只能寫L，不會是R
};
// T: O(log n) (指定)
// S: O()

console.log(searchInsert([1,3,5,6], 2))