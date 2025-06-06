// 476. Number Complement
// https://leetcode.com/problems/number-complement/
// Tag: Bit Manipulation, Easy

/**
 * @param {number} num
 * @return {number}
 */


var findComplement = function(num) {
    let bi = num.toString(2);
  
    let complement = '';
    for(let i=0; i<bi.length; i++){
        complement += bi[i] === "1"? "0":"1";
    }
    return parseInt(complement, 2);
};