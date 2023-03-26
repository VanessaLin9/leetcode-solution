// You are given a 0-indexed integer array nums of length n.

// You can perform the following operation as many times as you want:

// Pick an index i that you haven’t picked before, and pick a prime p strictly less than nums[i], then subtract p from nums[i].
// Return true if you can make nums a strictly increasing array using the above operation and false otherwise.

// A strictly increasing array is an array whose each element is strictly greater than its preceding element.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// unfinished 
var primeSubOperation = function(nums) {
    const p = listP(nums[nums.length -1])
    // console.log(p)
    for(let i=0; i<nums.length; i++){
        if(checksorted(nums)) return true;
        let gap = i+1 //上限 p, gap = 1
        // console.log(gap)
        // let mostGap = nums[i]-2 //下限 p = 2, gap = 2
        while(gap <= nums[i]-2){
           if(p.includes(nums[i]-gap)) {
            // console.log(nums[i]-gap)
               nums[i] -= nums[i]-gap
               break;
           } else {
               gap ++
           }
        }
    }
    // console.log(nums)
    return false
};

function checksorted(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i-1] >= arr[i]) return false
    }
    return true;
}

function listP(n){
    const result = [2];
    for(let i=2; i<=n;i++){
        let p = true;
        if(i%2 === 0) {
            p = false;
        } else {
            for(let j=2; j<=Math.sqrt(i); j++){
                if(i%j === 0){
                    p = false;
                    break;
                }
            }
        }
        if(p) result.push(i)
    }
    return result
}

// console.log(primeSubOperation([4,9,6,10])) //true
// console.log(primeSubOperation([6,8,11,12])) //true
// console.log(primeSubOperation([5,8,3])) //false
// -----------以上通過------------
console.log(primeSubOperation([998,2])) //true  <= 沒過 邏輯要大改