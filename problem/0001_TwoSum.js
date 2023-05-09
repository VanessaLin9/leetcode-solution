// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// [hash map]---------------
var twoSum = function(nums, target) {
    const hash ={}

    for (let i=0; i<nums.length; i++){
        let e = nums[i]
        if(hash[target-e] !== undefined) return [hash[(target-e)], i]
        hash[e]= i 
     }
    
}
// TC: O(n)
// MC: O(n)

// [two pointer]-----------
var twoSum = function(nums, target) {
    const arr = [...nums]
    nums.sort((a, b) => a-b)
    let l =0;
    let r = nums.length-1;
    while(r>l){
        let sum = nums[r] + nums[l]
        if(sum === target){
            break;
        } else if(sum > target){
            r--
        } else {
            l++
        }
    }
    const ans = []
    for(let j=0; j<arr.length; j++){
        if(arr[j] === nums[r] || arr[j] === nums[l]){
            ans.push(j)
        } 
    }
    return ans
};

// TC: O(nlogn)
// MC: O(n)

console.log(twoSum([2,7,11,15],9))