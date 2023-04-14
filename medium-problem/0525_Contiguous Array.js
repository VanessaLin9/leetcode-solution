/**
 * @param {number[]} nums
 * @return {number}
 */

// hash + prefix
var findMaxLength = function(nums) {
    const  hash = {} //紀錄前綴和:出現的位置
    let count = 0
    let max = 0;
    for(let i=0; i<nums.length; i++){
        let curr = nums[i]
        if(curr === 0){
            count --;
        } else {
            count ++;
        }
        if(count === 0){
            max = i + 1;
        }
        if(count in hash){
            max = Math.max(max, i-hash[count])
        } else {
            hash[count] = i
        }
    }
    return max
};
// TC: O(n)
// MC: O(n)

console.log(findMaxLength([0,1,0])) //2
console.log(findMaxLength([1,1,1,1,0,0])) //4