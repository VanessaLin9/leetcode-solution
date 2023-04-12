// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// DP
var runningSum = function(nums) {
    for(let i=1; i<nums.length; i++){
        [nums[i-1], nums[i]] = [nums[i-1], nums[i]+nums[i-1]]
    }
    return nums
};
// TC: O(n)
// MC: O(1)

// map
var runningSum = function(nums) {
    return nums.map((curr, idx, arr) => {
        return arr[idx] = idx === 0? curr: curr + arr[idx-1]
    })
};
// TC: O(n)
// MC: O(n)

// reduce
var runningSum = function(nums) {
    nums.reduce((a, b, idx, arr) => {
     return arr[idx] += a
    }, 0)
    return nums
};
// TC: O(n)
// MC: O(1)

console.log(runningSum([1,2,3,4])) // [ 1, 3, 6, 10 ]