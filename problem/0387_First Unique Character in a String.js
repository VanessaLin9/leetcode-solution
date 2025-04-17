// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/
// Tags: Hash Table, String, Easy

var firstUniqChar = function(s) {
    var map = new Map();
    for(let ch of s){
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    for(let i=0; i<s.length; i++){
        let char = s[i]
        if(map.get(char) === 1) return i;
    }
    return -1
};
// TC: O(n)
// SC: O(n)