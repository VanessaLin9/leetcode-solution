// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

/**
 * @param {string} s
 * @return {number}
 */


// brute force
var longestPalindrome = function(s) {
  const counter = {}
  let result = 0;
  for(let i in s){
    if(counter[s[i]] === undefined) counter[s[i]] = 0
    counter[s[i]] ++
  }
  
  for(let j in counter) {
    while(counter[j] >=2 ) {
      counter[j] -= 2;
      result += 2;
    }
  }
  for(let k in counter) {
    if(counter[k] === 1) {
      result += 1;
      break
    }
  }
  return result
};

console.log(longestPalindrome("a"))