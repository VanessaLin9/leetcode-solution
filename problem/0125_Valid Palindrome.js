// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
// RegEx
var isPalindrome = function(s) {
   let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
   for(let i=0; i<Math.floor(str.length/2); i++){
       if(str[i] !== str[str.length -1 - i]) return false;
   }
   return true;
};