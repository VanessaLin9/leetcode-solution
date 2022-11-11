// 1047. Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  let result =[]
  for(let i=0; i<s.length; i++){
    if(s[i] !== result[result.length -1]){
      result.push(s[i])
    } else {
      result.pop()
    }
  }
  return result.join('')
};

console.log(removeDuplicates("aaaaaaaa"))