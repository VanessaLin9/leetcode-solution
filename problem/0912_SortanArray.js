// 0912_SortanArray.js
// https://leetcode.com/problems/sort-an-array/
// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  let heapSize = nums.length-1;

  function buildMaxHeap(){
    for(let i=Math.floor(heapSize/2);i>=0; i--){
      maxHeapify(i)
    }
  }

  function maxHeapify(i){
    let largest;
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    if(l<= heapSize && nums[l] > nums[i]){
      largest = l;
    } else {
      largest = i;
    }
    if(r<= heapSize && nums[r] > nums[largest]){
      largest = r
    }

    if(largest !== i){
      let temp = nums[i];
      nums[i] = nums[largest];
      nums[largest] = temp;
      maxHeapify(largest)
    }
  }

  buildMaxHeap()
  for(let j=nums.length-1; j>=0; j--){
    let temp = nums[j]
    nums[j] = nums[0];
    nums[0] = temp;
    heapSize--;
    maxHeapify(0)
  }
  return nums
};



console.log(sortArray([5,2,3,1]))