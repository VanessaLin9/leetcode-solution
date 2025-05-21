// 438. Find All Anagrams in a String
// https://leetcode.com/problems/find-all-anagrams-in-a-string/
// Tag: Hash Table, String, Sliding Window, Medium

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// sliding window
var findAnagrams = function(s, p) {
    const output = [];
    const needChart = {};

    for(let char of p){
        if(char in needChart){
            needChart[char] ++
        } else {
            needChart[char] = 1
        }
    }

    let left = 0;
    let right = 0;
    let count = p.length;

    while(right < s.length){
        if(needChart[s[right]]>0)count --;
        needChart[s[right]] --;
        right ++;

        if(count === 0) output.push(left)
        if(right - left === p.length){
            if(needChart[s[left]]>=0) count ++;
            needChart[s[left]]++
            left ++;
        }
    }
    return output
};