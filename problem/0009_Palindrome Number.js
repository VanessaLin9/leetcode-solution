// 0009. Palindrome Number
// https://leetcode.com/problems/palindrome-number/
// Tag: Math, String, Easy


// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  if(x < 0) return false;
  const arr = [];
  while(x>0){
    let temp = x % 10
    arr.push(temp)
    x = (x - temp)/10
  } 
  for(let i=0; i<Math.floor(arr.length /2); i++){
    if(arr[i] !== arr[arr.length -1 - i]) return false
  } 
  return true;  
};

console.log(isPalindrome(10))
