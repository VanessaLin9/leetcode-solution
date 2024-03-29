// 0912_SortanArray.js
// https://leetcode.com/problems/sort-an-array/
// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// heap sort
// var sortArray = function(nums) {
//   let heapSize = nums.length-1;

//   function buildMaxHeap(){
//     for(let i=Math.floor(heapSize/2);i>=0; i--){
//       maxHeapify(i)
//     }
//   }

//   function maxHeapify(i){
//     let largest;
//     let l = i * 2 + 1;
//     let r = i * 2 + 2;
//     if(l<= heapSize && nums[l] > nums[i]){
//       largest = l;
//     } else {
//       largest = i;
//     }
//     if(r<= heapSize && nums[r] > nums[largest]){
//       largest = r
//     }

//     if(largest !== i){
//       let temp = nums[i];
//       nums[i] = nums[largest];
//       nums[largest] = temp;
//       maxHeapify(largest)
//     }
//   }

//   buildMaxHeap()
//   for(let j=nums.length-1; j>=0; j--){
//     let temp = nums[j]
//     nums[j] = nums[0];
//     nums[0] = temp;
//     heapSize--;
//     maxHeapify(0)
//   }
//   return nums
// };

// T: O(n log n)
// S: O(1)

// quick sort -AC 差點算不過
var sortArray = function(nums) {
  function partition(p, r){
    let x = nums[r];
    let i = p-1;
    for(let j =p; j<=r-1; j++){
      if(nums[j] <= x){
        i+=1;
        // swap
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
    //swap 把最後一個插到他該去的位置
    let temp = nums[i+1]
    nums[i+1] = nums[r]
    nums[r] = temp

    return i+1
  }

  function quickSort(p, r){
    if(p<r){
      let q = partition(p, r)
      quickSort(p, q-1);
      quickSort(q+1, r);
    }
  }
  
  quickSort(0, nums.length-1)
  return nums
}
// T: O(n log n)
// S: O(1)

// Merge Sort (TS)

function sortArray(nums: number[]): number[] {
    let temp: number[] = new Array(nums.length);
    mergeSort(nums, temp, 0, nums.length - 1);
    return nums;
};

function mergeSort(nums: number[], temp: number[], left: number, right: number): void {
    if (left < right) {
        let mid: number = Math.floor((left + right) / 2);
        mergeSort(nums, temp, left, mid);
        mergeSort(nums, temp, mid + 1, right);
        merge(nums, temp, left, mid, right);
    }
}

function merge(nums: number[], temp: number[], left: number, mid: number, right: number): void {
    let i: number = left;
    let j: number = mid + 1;
    let k: number = left;
    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) {
            temp[k++] = nums[i++];
        }
        else {
            temp[k++] = nums[j++];
        }
    }

    while (i <= mid) {
        temp[k++] = nums[i++];
    }

    while (j <= right) {
        temp[k++] = nums[j++];
    }

    for (let m: number = left; m <= right; m++) {
        nums[m] = temp[m];
    }
}

console.log(sortArray([5,2,3,1]))