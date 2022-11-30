//1207. Unique Number of Occurrences
//Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let hash = {}
  for(let i=0; i<arr.length; i++){
    if(hash[arr[i]] === undefined) hash[arr[i]] = 0;
    hash[arr[i]] += 1;
  }
  
  const setArr = new Set();
  for (let j in hash){
    if(setArr.has(hash[j])) return false;
    setArr.add(hash[j]);
  }
  return true
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))