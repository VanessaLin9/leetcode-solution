/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// [brute force]
var sortColors = function(nums) {
    let z = 0;
    let one = 0;
    let two = 0;
    for(let i=0; i<nums.length; i++){
      if(nums[i] === 0) {
        z++
      } else if(nums[i] === 1){
        one++
      } else {
        two++
      }
    }
    for(let j=0; j<nums.length; j++){
      if(j<z){
        nums[j] = 0
      } else if (j>=z && j<z+one){
        nums[j] = 1
      } else {
        nums[j] = 2
      }
    }
};
// TC: O(n)
// MC: O(1)
// --------------------------------
// [two pointer] -AC 69 ms
var sortColors = function(nums) {
  function swap(idx1, idx2){
    [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]]
  }

  let l= 0;
  let r= nums.length-1;
  let j=0;
  while(r>=j){
    let temp = nums[j]
    if(temp === 0){
      swap(j, l)
      j++;
      l++
    } else if(temp === 2){
      swap(j, r)
      r--;
    } else {
      j++
    }
  }
}
// TC: O(n)
// MC: O(1)

// --------------------------------
// [heap sort] -AC 67 ms
var sortColors = function(nums) {
  let len = nums.length-1;
  for(let i=Math.floor(nums.length/2); i>=0; i--){
    maxHeapify(i)
  } 
  //maxHeapify
  function maxHeapify(i){
    let l = i*2+1;
    let r = i*2+2;
    let max = i
    if(l<=len && nums[l] > nums[i]){
      max = l
    }
    if(r<=len && nums[r] > nums[max]){
      max = r
    }
    if(max !== i){
      [nums[max], nums[i]] = [nums[i], nums[max]]
      maxHeapify(max)
    }
  }

  for(let j=nums.length-1; j>=0; j--){
    [nums[0], nums[j]] = [nums[j], nums[0]]
    len --;
    maxHeapify(0)
  }
  // return nums
};

// TC: O(nlogn)
// MC: O(1)

console.log(sortColors([2,0,2,1,1,0])) //[0,0,1,1,2,2]