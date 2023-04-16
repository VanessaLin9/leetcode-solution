/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, div) {
  let ans = Infinity
  let count = 0;
  for(let i=0; i<div.length; i++){
    let diver = div[i]
    let temp = 0
    for(let j=0; j<nums.length; j++){
      if(nums[j]%diver === 0){
        temp++
      }
    }
    if(temp>count){
      count = temp
      ans = diver
    }
    if(temp === count){
      ans = Math.min(ans, diver)
    }
  }
  return ans
};

console.log(maxDivScore([73,13,20,6], [56,75,83,26,24,53,56,61])) //10