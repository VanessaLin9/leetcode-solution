// 383. Ransom Note
// https://leetcode.com/problems/ransom-note/
// Tag: Hash Table, String, Counting, Easy

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
  let hash = {};
  for(let i in magazine){
    if(hash[magazine[i]] === undefined) hash[magazine[i]] = 0;
    hash[magazine[i]]++
  }
  for(let j in ransomNote) {
    if(hash[ransomNote[j]] > 0) {
      hash[ransomNote[j]] --
    } else {
      return false
    }
  }
  return true
};

console.log(canConstruct("ab","aa"))