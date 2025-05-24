// 344. Reverse String
// https://leetcode.com/problems/reverse-string/
// Tag: Array, String, Easy

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    for(let i=0; i<s.length/2; i++){
        [s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]];
    }
};

// --- for testing ---
let arr = ["h","e","l","l","o"]; // Output: ["o","l","l","e","h"]
reverseString(arr);
console.log(arr); // ["o","l","l","e","h"]