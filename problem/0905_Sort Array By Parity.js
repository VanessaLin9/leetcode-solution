// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.
/**
 * @param {number[]} nums
 * @return {number[]}
 */

//two pointer
var sortArrayByParity = function(nums) {
    let l =0, r=nums.length-1;
    while(r>l){
        if(odd(nums[l])){
            l++
        } else if(!odd(nums[r])){
            r--
        } else {
            [nums[r], nums[l]] = [nums[l], nums[r]]
        }
    }
    return nums
};

function odd(n){
    return n%2 === 0
}

//TC: O(n)
//MC: O(1)

var sortArrayByParity = function(nums) {
    const arr = [...nums.filter(a => a%2 === 0), ...nums.filter(a => a%2 === 1)]
    return arr
};

console.log(sortArrayByParity([3,1,2,4])) //[2,4,3,1]