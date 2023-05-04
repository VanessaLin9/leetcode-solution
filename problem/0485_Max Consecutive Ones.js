/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ans = 0;
    let point = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
            point = 0
        } else {
            point++
        }
        ans = Math.max(ans, point)
    }
    return ans
};