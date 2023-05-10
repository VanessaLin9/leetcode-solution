/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// brute force --TLE
// var maxSlidingWindow = function(nums, k) {
//     const ans = []
//     for(let i=0; i<=nums.length-k; i++){
//         let max = nums[i]
//         for(let j=i; j<i+k; j++){
//             max = Math.max(max, nums[j])
//         }
//         ans.push(max)
//     }
//     return ans
// }

// TC: O(n^2)
// MC: O(1)

// Monotonic deque
var maxSlidingWindow = function(nums, k) {
    const q = [];  // stores *indices* 存idx
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) { // 比新進的小的話就pop掉
            q.pop();
        }
        q.push(i);
        // remove first element if it's outside the window
        if (q[0] === i - k) { //首位超出window的話就移掉
            q.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) { //記結果
            res.push(nums[q[0]]);
        }
    }
    return res;    
};
// TC: O(n)

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));