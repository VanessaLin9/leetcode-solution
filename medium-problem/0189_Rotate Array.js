/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// revers
var rotate = function(nums, k) {
    k %= nums.length
    function revers(i, j){
        while(i<j){
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
            j--
        }
    }
    revers(0, nums.length-1)
    revers(0, k-1)
    revers(k, nums.length-1)
};
// TC: O(n)
// MC: O(1)



// unshift
var rotate = function(nums, k) {
    k %= nums.length
    nums.unshift(...nums.splice(nums.length - k, k))
};
// TC: O(n)
// MC: O(K)

console.log(rotate([1,2,3,4,5,6,7], 3)) //[5,6,7,1,2,3,4]