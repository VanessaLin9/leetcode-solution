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


// Binary Search with Rolling Hash solution
// AC
var longestDupSubstring = function(s) {
    return binarySearch(s);
};

function rollingHash(str, window) {
    const multiplier = 31;
    const mod = 1000000007;
    
    let hashedValue = 0;
    for (let i = 0; i < window; i++) {
        hashedValue = (hashedValue * multiplier + (str.charCodeAt(i) - 'a'.charCodeAt(0) + 1)) % mod;
    }
    
    let power = 1;
    for (let i = 1; i < window; i++) {
        power = (power * multiplier) % mod;
    }
    
    const map = new Map();
    hashedValue %= mod;
    map.set(hashedValue, 0);
    
    for (let i = 1; i + window <= str.length; i++) {
        hashedValue -= ((str.charCodeAt(i - 1) - 'a'.charCodeAt(0) + 1) * power);
        while (hashedValue < 0) {
            hashedValue += mod;
        }
        hashedValue %= mod;
        
        hashedValue *= 31;
        hashedValue %= mod;
        hashedValue += (str.charCodeAt(i + window - 1) - 'a'.charCodeAt(0) + 1);
        hashedValue %= mod;
        
        if (map.has(hashedValue)) {
            const start = map.get(hashedValue);
            const oldStr = str.substring(start, start + window);
            const newStr = str.substring(i, i + window);
            if (oldStr === newStr) {
                return newStr;
            }
        }
        map.set(hashedValue, i);
    }
    return "";
}

function binarySearch(s) {
    let start = 1;
    let end = s.length - 1;
    let result = "";
    
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        const temp = rollingHash(s, mid);
        if (temp !== "") {
            result = temp;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return result;
}
// TC: O(n* n log n) - due to binary search and rolling hash
// SC: O(n) - for storing the map in rolling hash


// -- for testing --
console.log(longestDupSubstring("banana")); // "ana"
console.log(longestDupSubstring("abcd")); // ""