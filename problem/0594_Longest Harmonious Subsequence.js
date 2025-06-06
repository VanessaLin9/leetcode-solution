// 594. Longest Harmonious Subsequence
// https://leetcode.com/problems/longest-harmonious-subsequence/
// Tag: Array, Hash Table, Easy

// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.
/**
 * @param {number[]} nums
 * @return {number}
 */
// hash map
var findLHS = function(nums) {
    const hash = {}
    for(let i=0; i<nums.length; i++){
        if(hash[nums[i]] === undefined){
            hash[nums[i]] = 0
        }
        hash[nums[i]] ++
    }
    let result = 0;
    for(let j in hash){
      if(hash[j-1] !== undefined){
        let temp = hash[j] + hash[j-1]
        result = temp>result?temp:result
      }
    }
    return result
};


// use map
var findLHS = function(nums) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 0)
        }
        map.set(nums[i], map.get(nums[i]) + 1);
    }
    let result = 0;
    for(let [key, value] of map){
        if(map.has(key-1)){
            result = Math.max(result, value + map.get(key-1));
        }
    }
    return result;
};

console.log(findLHS([-1,0,-1,0,-1,0,-1])) //7