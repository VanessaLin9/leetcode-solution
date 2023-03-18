// You are given a 0-indexed integer array nums. You are allowed to permute nums into a new array perm of your choosing.

// We define the greatness of nums be the number of indices 0 <= i < nums.length for which perm[i] > nums[i].

// Return the maximum possible greatness you can achieve after permuting nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
   nums.sort()
   let p = 0
   let s = []
   s.push(nums[0])
   for(let i=1; i<nums.length; i++){
      if(nums[i]>s[s.length-1]){
        s.pop()
        p ++
      } else {
        s.push()
      }
   }
};

console.log(maximizeGreatness([1,3,5,2,1,3,1])) //4
console.log(maximizeGreatness([1,2,3,4])) //3