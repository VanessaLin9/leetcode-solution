// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function(pattern, s) {
  const sArr = s.split(' ');
  const hash = {};
  const sSet = new Set(sArr)
  if(pattern.length !== sArr.length) return false;

  for(let i=0; i<pattern.length; i++){
    if(hash[pattern[i]] === undefined){ 
      hash[pattern[i]] = sArr[i];
    } else if(hash[pattern[i]]){
      if(hash[pattern[i]] !== sArr[i]) return false
    }
  }
  if(Object.keys(hash).length !== sSet.size) return false;
  return true
};

console.log(wordPattern("abba", "dog cat cat fish"))