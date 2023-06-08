/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const ans = []
    const set = new Set(nums)
    nums.sort((a, b) => a-b)
    let max = Math.max(nums[nums.length-1], nums.length)
    console.log(max)
    for(let i=1; i<=max; i++){
        if(!set.has(i)) ans.push(i)
    
    }
    return ans
};