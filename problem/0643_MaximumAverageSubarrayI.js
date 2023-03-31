// 0643_MaximumAverageSubarrayI
// https://leetcode.com/problems/maximum-average-subarray-i/
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// brute force
var findMaxAverage = function(nums, k) {
  let total = 0;
  if(nums.length < k)return null
  for (let j=0; j<k; j++){
    total += nums[j]
  }
  let result = total/k;

  for(let i=k; i<nums.length; i++){
    total = total - nums[i - k] + nums[i]
    result = total/k > result? total/k: result
  }
  return result
};
// TC: n
// MC: 1

var findMaxAverage = function(nums, k) {
    let sum = nums.slice(0, k).reduce((a, b)=> a+b, 0)
    let avg = sum/k
    for(let i=k; i<nums.length; i++){
        sum = sum + nums[i] - nums[i-k]
        avg = Math.max(sum/k,  avg)
    }
    return avg
};

// -----------------------------
// 1 loop
var findMaxAverage = function(nums, k) {
    let avg = -Infinity; 
    let sum = 0;
    for(let i=0; i< nums.length; i++){
        sum += nums[i]
        if(i+1 >= k){
            avg = Math.max(avg, sum/k)
            sum -= nums[(i+1) -k]
        }
    }
    return avg
};
// TC: n
// MC: 1

// console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([-6662,5432,-8558,-8935,8731,-3083,4115,9931,-4006,-3284,-3024,1714,-2825,-2374,-2750,-959,6516,9356,8040,-2169,-9490,-3068,6299,7823,-9767,5751,-7897,6680,-1293,-3486,-6785,6337,-9158,-4183,6240,-2846,-2588,-5458,-9576,-1501,-908,-5477,7596,-8863,-4088,7922,8231,-4928,7636,-3994,-243,-1327,8425,-3468,-4218,-364,4257,5690,1035,6217,8880,4127,-6299,-1831,2854,-4498,-6983,-677,2216,-1938,3348,4099,3591,9076,942,4571,-4200,7271,-6920,-1886,662,7844,3658,-6562,-2106,-296,-3280,8909,-8352,-9413,3513,1352,-8825], 90)) //37.25555
