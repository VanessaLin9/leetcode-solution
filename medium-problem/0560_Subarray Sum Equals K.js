/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// [brute force] -- TLE
var subarraySum = function(nums, k) {
    let count = 0;
    for(let end=0; end<nums.length; end++){
        let sum =0;
        for(let start=end; start>=0; start--){
            sum += nums[start]
            if(sum === k){
                count ++
            }
        }
    }
    return count
};
// TC: O(n^2)
// MC: O(1)

// [hash map]
var subarraySum = function(nums, k) {
  let map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0,1);
  for (let i=0;i<nums.length;i++) {
      sum += nums[i];
      if (map.has(sum-k)) count += map.get(sum-k);
      if (map.has(sum)) map.set(sum, map.get(sum)+1);
      else map.set(sum, 1);
  }
  return count;
}
// TC: O(n)
// MC: O(n)