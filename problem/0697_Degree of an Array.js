// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

/**
 * @param {number[]} nums
 * @return {number}
 */

//burst force
var findShortestSubArray = function(nums) {
    const hash = {}
    for(let i=0; i<nums.length; i++){
        if(hash[nums[i]] === undefined){
            hash[nums[i]] = []
        }
        hash[nums[i]].push(i)
    }
    // console.log('hash', hash)
    const count = []
    for(let j in hash){
      count.push(hash[j])
    }
    count.sort((a, b)=> b.length - a.length)
    // console.log('count', count)
    let result = (count[0][count[0].length-1] - count[0][0]) + 1
    for(let k=1; k<count.length; k++){
      const long = count[0].length
      const leng = count[k].length
      if(leng >= long){
      let temp = (count[k][leng-1] - count[k][0]) + 1
      result = temp<result?temp:result;
     }
    }
    
    return result
};

console.log(findShortestSubArray([1,5,1,1,6,4])) // 4
console.log(findShortestSubArray([1,1,2,2,2,1])) // 3