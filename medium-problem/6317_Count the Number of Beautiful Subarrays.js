// You are given a 0-indexed integer array nums. In one operation, you can:

// Choose two different indices i and j such that 0 <= i, j < nums.length.
// Choose a non-negative integer k such that the kth bit (0-indexed) in the binary representation of nums[i] and nums[j] is 1.
// Subtract 2k from nums[i] and nums[j].
// A subarray is beautiful if it is possible to make all of its elements equal to 0 after applying the above operation any number of times.

// Return the number of beautiful subarrays in the array nums.

// A subarray is a contiguous non-empty sequence of elements within an array.
/**
 * @param {number[]} nums
 * @return {number}
 */

var beautifulSubarrays = function(nums) {
  const hash = {}
  for(let i=0; i<nums.length; i++){
    if(hash[nums[i]] === undefined) {
      hash[nums[i]] = binary(nums[i]);
    }
    console.log(hash)
  }
};

function binary(n){
  if(n === 1 || n === 0) return 0;
  let bit = 1;
  let con = 0;
  while(bit<n){
    bit *= 2
    con ++
  }
  return con
}

console.log(beautifulSubarrays([4,3,1,2,4])) //2