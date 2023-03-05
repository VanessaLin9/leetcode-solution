// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    nums.reduce((a, b, idx, arr) => {
     return arr[idx] += a
    }, 0)
    return nums
};

console.log(runningSum([1,2,3,4])) // [ 1, 3, 6, 10 ]