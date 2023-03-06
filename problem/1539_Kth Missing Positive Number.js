// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Return the kth positive integer that is missing from this array.
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
//burst force
var findKthPositive = function(arr, k) {
    let a = 0;
    let p = 0;
    for(let i=0; i<=(arr[arr.length-1] + k); i++){
        if(arr[p] !== i){
            if(a === k) return i
            a++
        } else {
            p++
        }
    }
    return -1
};

// 討論區看到解法
// var findKthPositive = function(arr, k) {
//     let prev = 0;
    
//     for(let i = 0; i < arr.length; i++) {
//         const diff = arr[i] - prev - 1;
//         if(k > diff) k -= diff;
//         else return prev + k;
//         prev = arr[i];
//     }
//     return prev + k     
// };

console.log(findKthPositive([2,3,4,7,11], 5)) //9