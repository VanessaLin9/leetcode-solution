// You are given the array nums consisting of n positive integers. You computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.

// Return the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 109 + 7.

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

// brute force
var rangeSum = function(nums, n, left, right) {
    const arr = []
    for(let i=0; i<nums.length; i++){
        let temp = 0;
        for(let j=i; j<nums.length; j++){
            temp += nums[j]
            arr.push(temp)
        }
    }
    arr.sort((a, b) => a-b)
    let result = 0;
    for(let k=left-1; k<right; k++){
        result += arr[k]
    }
    console.log(arr)
    return result % (Math.pow(10,9)+7);
};
// TC: n^2
// MC: n^2
// --------------------------------------
// [min heap] 還是錯的沒有完成
// var rangeSum = function(nums, n, left, right) {
//     let heapSize = nums.length -1;
//     function buildMinHeap(){
//         for(let i=Math.floor(heapSize/2); i>=0; i--){
//             minHeapify(i)
//         }
//     }
//     function minHeapify(i){
//         let min;
//         let l = i * 2 + 1;
//         let r = i * 2 + 2;
//         if(l <= heapSize && nums[l] < nums[i]){
//             min = l
//         } else {
//             min = i
//         }
//         if(r <= heapSize && nums[r] < nums[min]){
//             min = r
//         }
//         if(min !== i){
//             let temp = nums[i]
//             nums[i] = nums[min]
//             nums[min] = temp
//             minHeapify(min)
//         }
//     }
//     buildMinHeap()
//     let result = 0
//     let sumArr = []
// 
//     for(let k=0; k<right; k++){
//       sumArr.push(nums[0])
//       nums[0] = nums[0] + nums[1]  // 這邊有很大的問題
//       minHeapify(0)
//     }
//     console.log(sumArr)
//     for(let m=left-1; m<sumArr.length; m++){
//       result += sumArr[m]
//     }
//     return result % (Math.pow(10, 9) + 7)
// };

console.log(rangeSum([4, 3, 1, 2], 4, 1, 5)) //13
console.log(rangeSum([1, 2, 3, 4], 4, 1, 10)) //13