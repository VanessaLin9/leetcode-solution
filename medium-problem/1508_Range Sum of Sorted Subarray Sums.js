// You are given the array nums consisting of n positive integers. You computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.

// Return the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 109 + 7.

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

// brute force
var rangeSum = function(nums, n, left, right) {
    const arr = []
    for(let i=0; i<nums.length; i++){
        let temp = 0;
        for(let j=i; j<nums.length; j++){
            temp += nums[j]
            arr.push(temp)
        }
    }
    arr.sort((a, b) => a-b)
    let result = 0;
    for(let k=left-1; k<right; k++){
        result += arr[k]
    }
    return result % (Math.pow(10,9)+7);
};

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5)) //13