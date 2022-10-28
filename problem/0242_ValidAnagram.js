// 242_ValidAnagram
// https://leetcode.com/problems/valid-anagram/
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// hash table
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  const hash = {}
  for(let i in s){
    if(hash[s[i]] === undefined) hash[s[i]] = 0
    hash[s[i]] += 1
  }
  for(let j in t) {
    if(hash[t[j]] === undefined) return false;
    hash[t[j]] -= 1
  }
  for(let k in hash) {
    if(hash[k] !== 0) return false
  }
  return true
};

// T: O(n)
// S: O(n)

console.log(isAnagram("rat","car"))