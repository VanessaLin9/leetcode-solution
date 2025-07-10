/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Brute Force Solution
var countPairs = function(nums, k) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], [i]);
        } else {
            map.get(nums[i]).push(i);
        }
    }
    let result =0;
    for(let [key, arr] of map.entries()){
       for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if ((arr[i] * arr[j]) % k === 0) {
                    result++;
                }
            }
        }
    }

    return result;
};
// TC: O(n^2)
// SC: O(n)

// 跟上面的差不多, 只是找到不是第ㄧ次出現就檢查一遍
var countPairs = function(nums, k) {
    const map = new Map();
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (map.has(val)) {
            const arr = map.get(val);
            for (let j of arr) {
                if ((i * j) % k === 0) {
                    result++;
                }
            }
            arr.push(i);  // 儲存 index
        } else {
            map.set(val, [i]);
        }
    }

    return result;
};
// TC: O(n^2)
// SC: O(n)