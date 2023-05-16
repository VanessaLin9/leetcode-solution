/**
 * @param {number[]} nums
 * @return {number}
 */

// brute force
var arrayPairSum = function(nums) {
    nums.sort((a, b) => b-a)
    let result = 0
    for(let i=1; i<nums.length; i+=2){
        result += nums[i]
    }
    return result
};

// reduce 縮寫
var arrayPairSum = function(nums) {
    nums.sort((a, b) => b-a)
    return nums.reduce((a, c, idx) => (idx%2 === 1)?a+=c: a, 0)
};

// TC: O(n log n)
// MC: O(1)

// better solution