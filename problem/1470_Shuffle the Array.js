// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const result = [];
    for(let i=0; i<n; i++){
        result.push(nums[i])
        result.push(nums[i+n])
    }
    return result
};

// map()
var shuffle = function(nums, n) {
    return nums.map((c, i) => {
        if(i%2 === 0){
            return nums[i/2]
        } else {
            return nums[n+(i-1)/2]
        }
    })
};

console.log(shuffle([2,5,1,3,4,7])) //[2,3,5,4,1,7]