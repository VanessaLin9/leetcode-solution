// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */


var productExceptSelf = function(nums) {

  let leftArr = [];
  let leftMultiplication = 1;

  for (let i=0; i < nums.length; i++) {
    leftArr[i] = leftMultiplication;
    leftMultiplication *=  nums[i];
  }
    
  let rightArr = [];
  let rightMultiplication = 1;

  for (let i=nums.length-1; i >= 0; i--) {
    rightArr[i] = rightMultiplication;
    rightMultiplication *= nums[i];
    rightArr[i] *= leftArr[i]; //this additional step saves us from having another iteration. We can do the multiplication at the spot.
  }
  
  return rightArr;
  
};

console.log(productExceptSelf([1,2,3,4])) // [24, 12, 8 , 6]

