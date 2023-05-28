// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

/**
 * @param {number[]} arr
 * @return {number}
 */

// hash table
var findSpecialInteger = function(arr) {
  const hash = {}
  let count = Math.floor(arr.length/4)
  for(let i=0; i<arr.length; i++){
      hash[arr[i]] = (hash[arr[i]] || 0) + 1
    if(hash[arr[i]] > count) return arr[i]
  }  
  return -1
};



// sliding window
var findSpecialInteger = function(arr) {
  const wd = Math.floor(arr.length/4)
  for(let i=0; i<arr.length -wd; i++){
    if(arr[i] === arr[i+wd]) return arr[i]
  }
  return -1
};

console.log(findSpecialInteger([1,2,3,4,5,6,7,8,9,10,11,12,12,12,12])) //12