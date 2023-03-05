// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const arr = [...nums.filter(a => a%2 === 0), ...nums.filter(a => a%2 === 1)]
    return arr
};

console.log(sortArrayByParity([3,1,2,4])) //[2,4,3,1]