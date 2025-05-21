// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/
// Tag: Hash Table, String, Sliding Window, Medium

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 關聯題(簡單到難): 1004 → 2024 → 424

// sliding window
var characterReplacement = function(s, k) {
    let l =0; 
    let r =0;
    let maxCharCount = 0;
    const hash = {};

    while(r<s.length){
        const char = s[r]
        hash[char] = (hash[char] || 0) +1

        if(hash[char] > maxCharCount) maxCharCount = hash[char];

        if(r-l + 1 - maxCharCount > k){
            hash[s[l]] --;
            l++
        }
        r++
    }

    return r-l
};

// TC: O(n)
// SC: O(1)


// 照樣用比較理解的1004的解法下去改寫的
var characterReplacement = function(s, k) {
    const arr = s.split('')
    const set = new Set(arr)
    let max =0;

    for(let letter of set){
        max = Math.max(max, len(letter, k))
    }
    return max

    function len(w, count){
        let l =0;
        for(let i=0; i<arr.length; i++){
            if(arr[i] !== w) count --;
            if(count<0){
                if(arr[l] !== w)count++;
                l++
            }
        }
        return arr.length -l
    }
};