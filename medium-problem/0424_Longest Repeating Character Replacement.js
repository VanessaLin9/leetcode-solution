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