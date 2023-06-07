// 1047. Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

/**
 * @param {string} s
 * @return {string}
 */
// string concat
var removeDuplicates = function(s) {
    let r = 0;
    while(r<s.length){
        if(s[r] ===s[r-1]){
            s = s.substring(0, r-1)+s.substring(r+1)
            r--
        } else {
            r++
        }
    }
    return s
};

// stack
var removeDuplicates = function(s) {
  let stack=[]
  for(let i=0; i<s.length; i++){
    if(s[i] !== stack[stack.length -1]){
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }
  return stack.join('')
};

console.log(removeDuplicates("aaaaaaaa"))