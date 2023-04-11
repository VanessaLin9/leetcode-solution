/**
 * @param {number[]} nums
 * @return {number}
 */

// hash set
// var longestConsecutive = function(nums) {
//     const set = new Set(nums)
//     let max = 0;
//     for(let n of set){
//         if(set.has(n-1)) continue;
//         let temp = 1;
//         let curr = n;
//         while(set.has(curr+1)){
//             temp ++;
//             curr ++;
//         }
//         max = Math.max(max, temp)
//     }
//     return max
// };
// TC: O(n)
// MC: O(n)

// hash table w/ two pointer
var longestConsecutive = function(nums) {
    const hash = {}
    let max = 0;

    for(let n of nums){
        if(hash[n] !== undefined) continue;
        let l = hash[n-1] || 0
        let r = hash[n+1] || 0
        let len = r + l + 1

        hash[n] = len
        hash[n+r] = len
        hash[n-l] = len

        max = Math.max(max, len)
    }
    return max
};

// TC: O(n)
// MC: O(n)


console.log(longestConsecutive([100,4,200,1,3,2])) //4