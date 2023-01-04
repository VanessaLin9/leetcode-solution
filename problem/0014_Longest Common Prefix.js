// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */

// brute force
var longestCommonPrefix = function(strs) {
  let result = "";

  for(let i=0; i<strs[0].length; i++){
    let prefix = strs[0][i]
    for(let j=1; j<strs.length; j++){
      if(prefix !== strs[j][i]) prefix = Infinity;
    }
    if(prefix !== Infinity){
      result += prefix
    } else {
      return result
    }
  }
  return result
};

console.log(longestCommonPrefix(["flower","flow","flight"]))