// 303. Range Sum Query - Immutable
// https://leetcode.com/problems/range-sum-query-immutable/
// Tag: Array, Prefix Sum, Easy


// brute force solution
// in ES5 syntax
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = [];
    this.arr[0] = nums[0];
    for(let i=1; i<nums.length; i++){
        this.arr[i] = this.arr[i-1] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left === 0){
        return this.arr[right];
    } else {
        return this.arr[right] - this.arr[left -1];
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// ES6 syntax
class NumArray {
    constructor(nums) {
        this.arr = [];
        this.arr[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            this.arr[i] = this.arr[i - 1] + nums[i];
        }
    }

    sumRange(left, right) {
        return left === 0 ? this.arr[right] : this.arr[right] - this.arr[left - 1];
    }
}

// ES6 syntax with reduce for prefix sum
class NumArray { 
    constructor(nums) {
        this.prefixSum = nums.reduce((acc, cur, i) => {
            acc[i] = (i === 0)? cur : acc[i-1] + cur;
            return acc;
        }, []);
    }
    sumRange(left, right){
        return left === 0? this.prefixSum[right] : this.prefixSum[right] - this.prefixSum[left -1];
    }
};