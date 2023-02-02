// 268_MissingNumber
// https://leetcode.com/problems/missing-number/
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
/**
 * @param {number[]} nums
 * @return {number}
 */

// [內建sort()] -AC 156ms
// var missingNumber = function(nums) {
//   nums.sort((a, b) => a-b)
//   if(nums[0] !== 0) return 0
//   for(let i=0; i<nums.length; i++){
//     if(nums[i+1] !== nums[i]+1) return nums[i]+1
//   }
//   return nums[nums.length -1]+1
// };
// T: O(n log n)~O(n) 看stackoverflow 似乎是看使用的browser 
// S: O(1)

// ________________________________________________________
// [bubble sort]  -AC 1468ms
// var missingNumber = function(nums) {
//   for(let i=0; i<nums.length; i++){ //固定的sorted arr
//     for(let j=nums.length-1; j>i; j--){
//       if(nums[j-1]>nums[j]){
//         let temp = nums[j]
//         nums[j] = nums[j-1]
//         nums[j-1] = temp
//       }
//     }
//   }
//   if(nums[0] !== 0)return 0
//   if(nums[nums.length -1] !== nums.length) return nums.length
//   for(let k=0; k<nums.length; k++){
//     if(nums[k+1] !== nums[k]+1 )return nums[k] +1
//   }
// }
// T: O(n^2)
// S: O(1)

// ________________________________________________________
// [insertion sort] -AC 407ms
// var missingNumber = function(nums) {
//   for(let i=0; i<nums.length; i++){
//     let key = nums[i]
//     let j = i-1
//     while(j>=0 && nums[j]>key){
//       nums[j+1] = nums[j]
//       j -=1
//     }
//     nums[j+1] = key
//   }
//   if(nums[0] !== 0) return 0
//   if(nums[nums.length-1] !== nums.length) return nums.length
//   for(let k=0; k<nums.length; k++){
//     if(nums[k+1] !== nums[k]+1) return nums[k] +1
//   }
// }
// T: O(n^2) 跟課本的說法一樣，雖然複雜度一樣但跑起來真的有比bubble稍微快一點
// S: O(1)

// ________________________________________________________
// [hash table] -AC 131ms
// var missingNumber = function(nums) {
//   const hash ={}
//   for(let i=0; i<nums.length;i++){
//     hash[nums[i]] = 1
//   }
//   if(hash[0] === undefined) return 0
//   if(hash[nums.length] === undefined) return nums.length
//   for(let j=1; j<nums.length; j++){
//     if(hash[j] === undefined) return j
//   }
// }
// T: O(n)
// S: O(n)
// 
// _____________________________________________________________
// 
//bitwise
var missingNumber = function(nums) {
    let result = 0;
    for(let i=0; i<nums.length; i++){
        result = result ^ i ^ nums[i]
    }
    return result ^ nums.length
};
// T: O(n)
// S: O(1)

console.log(missingNumber([9,6,4,2,3,5,7,0,1])) //8
console.log(missingNumber([0,1])) //2