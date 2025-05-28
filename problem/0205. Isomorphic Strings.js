// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/
// Tag: String, Hash Table, Easy

// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const maps = new Map();
    const mapt = new Map();
    for(let i=0; i<s.length; i++){
        if(!maps.has(s[i])){
            maps.set(s[i], t[i]);
        } else {
            if(maps.get(s[i]) !== t[i]) return false;
        }
        if(!mapt.has(t[i])){
            mapt.set(t[i], s[i]);
        } else {
            if(mapt.get(t[i]) != s[i]) return false;
        }
    }
    return true;
};

// -- for testing --
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false