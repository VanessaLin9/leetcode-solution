// You are given an integer array nums of length n, and an integer array queries of length m.

// Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */

// brute force
var answerQueries = function(nums, queries) {
 const result = []
 nums.sort((a, b) => a - b)
 
  for (let j in queries){
    let temp = 0;
    if (queries[j] < nums[0]){
      result[j] = 0
    }
    for(let i=0; i<nums.length; i++){
      temp += nums[i]
      if(temp <= queries[j]) {
        result[j] = i + 1
      } else {
        break
      }
    }
  }
 return result
};
// TC: n^2
// MC: n

// binary search 
// 優化一點TC，直接用原queries接結果回吐省MC -AC 78 ms
var answerQueries = function(nums, queries) {
  nums.sort((a, b) => a - b)
  for(let i=1; i<nums.length; i++){
      nums[i] = nums[i-1] + nums[i]
  }
  for(let j =0; j<queries.length; j++){
      queries[j] = binary(queries[j])
  }
  
  function binary(n){
    let r = nums.length;
    let l = 0
    let mid;
    while(r>=l){
      mid = Math.floor((r+l)/2)
      if(nums[mid] === n){
          return mid + 1
      } else if(nums[mid] < n){
          l = mid + 1
      } else {
          r = mid -1
      }
    }
    return l
  }
  return queries
};

// TC: n log n
// MC: 1

console.log(answerQueries([624082], [972985,564269,607119,693641,787608,46517,500857,140097])) //[1,0,0,1,1,0,0,0]
console.log(answerQueries([736411,184882,914641,37925,214915], [331244,273144,118983,118252,305688,718089,665450])) //[2,2,1,1,2,3,3]