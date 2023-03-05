// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

/**
 * @param {number[]} arr
 * @return {number}
 */
// hash
var findLucky = function(arr) {
    const hash ={}
    for(let i=0; i<arr.length; i++){
        if(hash[arr[i]] === undefined){
            hash[arr[i]] = 0
        }
        hash[arr[i]] ++
    }
    let result = -1
    for (let j in hash){
        if(j === hash[j].toString(10)){
            result = hash[j]> result? hash[j]: result
        }
    }
    return result
};