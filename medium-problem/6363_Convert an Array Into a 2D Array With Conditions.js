/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const set = new Set(nums)
    const hash = {}
    for(let i=0; i<nums.length; i++){
        if(!hash[nums[i]]) hash[nums[i]] = 0;
        hash[nums[i]]++
    }

    const result = []
    
    // let len = set.size
    while(true){
        const temp = []
        for(let k in hash){
            if(hash[k]>0){
                temp.push(k)
                hash[k] --
            } 
        }
        if(temp.length === 0) break;
        result.push(temp)
        
    }
    return result
};

console.log(findMatrix([3,5,3,3,8,3,2,5])) //[[3,5,8,2],[3,5],[3],[3]]
console.log(findMatrix([1,3,4,1,2,3,1])) //[[1,3,4,2],[1,3],[1]]