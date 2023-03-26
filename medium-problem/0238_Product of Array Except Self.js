// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 解答區的解法
// var productExceptSelf = function(nums) {

//   let leftArr = [];
//   let leftMultiplication = 1;

//   for (let i=0; i < nums.length; i++) {
//     leftArr[i] = leftMultiplication;
//     leftMultiplication *=  nums[i];
//   }
    
//   let rightArr = [];
//   let rightMultiplication = 1;

//   for (let i=nums.length-1; i >= 0; i--) {
//     rightArr[i] = rightMultiplication;
//     rightMultiplication *= nums[i];
//     rightArr[i] *= leftArr[i]; //this additional step saves us from having another iteration. We can do the multiplication at the spot.
//   }
  
//   return rightArr;
  
// };

// MC: O(n)解
// var productExceptSelf = function(nums) {
//   const leftArr = [];
//   const rightArr = [];
//   for(let i=0; i<nums.length; i++){
//     leftArr[i] = i===0?nums[i]:leftArr[i-1]*nums[i]
//   }
//   // console.log(leftArr)
//   for(let j=nums.length-1; j>=0; j--){
//     rightArr[j] = j===nums.length-1?nums[j]:rightArr[j+1]*nums[j]
//   }
//   // console.log(rightArr)
//   const result = []
//   for(let k=0; k<nums.length; k++){
//     if(k === 0){
//       result[k] = rightArr[k+1]
//     } else if(k === nums.length-1){
//       result[k] = leftArr[nums.length-2]
//     } else {
//       result[k] = leftArr[k-1]*rightArr[k+1]
//     }
//   }
//   return result
// };
// TC: n
// MC: n


// follow up解
var productExceptSelf = function(nums) {
  const result = []
  for(let i=0; i<nums.length; i++){
    result[i] = i===0?nums[i]:nums[i]*result[i-1]
  }
  
  let product = 1;
  for(let j=nums.length-1; j>=0; j--){
    if(j === nums.length-1){
      result[j] = result[j-1]
      product = nums[j]
    } else if(j === 0){
      result[j] = product
    } else {
      result[j] = result[j-1]*product
      product *= nums[j]
    }
  }
  return result
};

console.log(productExceptSelf([1,2,3,4])) // [24, 12, 8 , 6]

