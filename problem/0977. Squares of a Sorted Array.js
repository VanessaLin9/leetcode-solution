// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/
// Tag: Array, Two Pointers, Easy

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Brute Force
var sortedSquares = function(nums) {
    for(let n in nums){
        nums[n] *= nums[n];
    }
    return nums.sort((a, b) => a-b);
};
// TC: O(n log n)
// SC: O(1)

// Two Pointers
var sortedSquares = function(nums) {
    const result = [];
    let n = nums.length;
    let l = 0;
    let r = n-1;
    let pos = n-1;
    while(r>=l){
        let lsqr = nums[l] * nums[l];
        let rsqr = nums[r] * nums[r];
        if(rsqr > lsqr){
            result[pos] = rsqr;
            r--;
        } else {
            result[pos] = lsqr;
            l++;
        }
        pos --;
    }
    return result;
};
// TC: O(n)
// SC: O(n)
