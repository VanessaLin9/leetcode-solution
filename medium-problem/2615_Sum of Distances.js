// You are given a 0-indexed integer array nums. There exists an array arr of length nums.length, where arr[i] is the sum of |i - j| over all j such that nums[j] == nums[i] and j != i. If there is no such j, set arr[i] to be 0.

// Return the array arr.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 我的解法，超時了
// var distance = function(nums) {
//   let hash = {}
//   for(let i=0; i<nums.length; i++){
//     if(!hash[nums[i]]) {
//       hash[nums[i]] = [];
//     }
//     hash[nums[i]].push(i)
//   }
  
//   for(let j=0; j<nums.length; j++){
//     let n = hash[nums[j]].reduce((a, curr) => a + Math.abs(j-curr), 0)
//     nums[j] = n
//   }
//   return nums
// };

// 參考大神改寫的解法 -AC 
var distance = function(nums) {
  const n = nums.length;
  const ans = Array(n).fill(0);
  const ct = new Map();
  const sum = new Map();
  
  for (let i = 0; i < n; i++) {
    if (ct.has(nums[i])) {
      ans[i] += i * ct.get(nums[i]) - sum.get(nums[i]);
    }
    ct.set(nums[i], ct.get(nums[i]) + 1 || 1);
    sum.set(nums[i], sum.get(nums[i]) + i || i);
  }
 
  ct.clear();
  sum.clear();
  
  
  for (let i = n - 1; i >= 0; i--) {
    if (ct.has(nums[i])) {
      ans[i] += sum.get(nums[i]) - i * ct.get(nums[i]);
    }
    ct.set(nums[i], ct.get(nums[i]) + 1 || 1);
    sum.set(nums[i], sum.get(nums[i]) + i || i);
  }
  
  return ans;
};

console.log(distance([1,3,1,1,2])) //[5,0,3,4,0]