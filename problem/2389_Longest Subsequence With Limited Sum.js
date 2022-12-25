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

console.log(answerQueries([624082], [972985,564269,607119,693641,787608,46517,500857,140097]))