// 416. Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum/
// Tag: Array, Dynamic Programming, Medium

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// classic 0/1 knapsack Q

// DP
var canPartition = function(nums) {
    if(!nums) return false
    let total = nums.reduce((a,b) => a + b, 0)
    
    if(total%2 != 0) return false
    
    let target = total /2
    let arr = new Array(target + 1).fill(false)
    arr[0] = true
    
    for(let el of nums) {
        
        for(let i = target; i >=0; i--) {            
            let complement = i - el
            console.log(el, i, complement)
            if(!arr[i] && arr[complement]){
                arr[i] = true
            }
            if(arr[target] == true) return true
        }
    }
    
    return false
};

console.log(canPartition([1,5,11,5])) //true