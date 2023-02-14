// https://leetcode.com/problems/delete-columns-to-make-sorted/

/**
 * @param {string[]} strs
 * @return {number}
 */


var minDeletionSize = function(strs) {
  let result = 0;
  for(let i=0; i<strs[0].length; i++){
    for(let j=1; j<strs.length; j++){
      if(strs[j-1][i].charAt()>strs[j][i].charAt()) {
        result += 1;
        break
      }
    }
  }
  return result
};

console.log(minDeletionSize(["cba","daf","ghi"])) //1