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

// 用三個table接
var findShortestSubArray = function(nums) {
    const counter = {}
    const firstIdx = {}
    const lestIdx = {}
    let max = 0;
    for(let i=0; i<nums.length; i++){
        let k = nums[i]
        counter[k] = (counter[k] || 0) +1;
        max = Math.max(max, counter[k])
        if(firstIdx[k] === undefined){
            firstIdx[k] = i
        }
        lestIdx[k] = i
    }
    let result =Infinity;
    for(let j in counter){
        if(counter[j] === max){
            result = Math.min(result, lestIdx[j] - firstIdx[j] + 1)
        }
    }
    return result
};

// TC: O(n)
// MC: O(n)


// indexOf + lastIndexOf
var findShortestSubArray = function(nums) {
    const hash = {}
    let max;
    let count = 0;
    for(let i=0; i< nums.length; i++){
        hash[nums[i]] = (hash[nums[i]] || 0) + 1;
        if(hash[nums[i]] === count){
            max.push(nums[i])
        }
        if(hash[nums[i]]>count){
            max = [nums[i]]
            count = hash[nums[i]]
        }
    }
    console.log(hash)
    console.log(max, count)
    if(max.length === 1){
        return len(max[0])
    } else {
        let min = Infinity
        max.forEach(item =>{
            min = Math.min(min, len(item))
        })
        return min
    }
    function len(max){
        let l = nums.indexOf(max)
        let r = nums.lastIndexOf(max)
        return r-l +1
    }

};

console.log(findShortestSubArray([1,5,1,1,6,4])) // 4
console.log(findShortestSubArray([1,1,2,2,2,1])) // 3