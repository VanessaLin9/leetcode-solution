// 1044. Longest Duplicate Substring
// https://leetcode.com/problems/longest-duplicate-substring/
// Tags: Hashing, Binary Search, String, Rolling Hash, Hard


/**
 * @param {string} s
 * @return {string}
 */

// brute force solution(will not AC)
// LTE with large inputs
var longestDupSubstring = function(s) {
    let result = '';
    let long = 0;
    for(let i=0; i<s.length; i++){
        for(let j=i+1; j<s.length; j++){
            const sub = s.substring(i, j);
            if(s.includes(sub)){
                if(s.indexOf(sub) !== s.lastIndexOf(sub)){
                    if(sub.length >= long){
                        result = sub;
                        long = sub.length
                    }
                }
            }
        }
    }
    return result;
};
// TC: O(n^3) - due to nested loops and substring search
// SC: O(n) - for storing the result substring




// -- for testing --
console.log(longestDupSubstring("banana")); // "ana"
console.log(longestDupSubstring("abcd")); // ""