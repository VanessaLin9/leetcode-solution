// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

/**
 * @param {string} word
 * @return {boolean}
 */

// brute force
// var detectCapitalUse = function(word) {
//   for(let i=word.length -1 ; i>=0; i--){
//     if(word.charAt(i) >= "A" && word.charAt(i) <= "Z"){
//       if(word.charCodeAt(i-1) >= 97 && word.charCodeAt(i-1) <= 122) {
//         return false
//       }
//     } else {
//       if(word.charCodeAt(i-1) >= 65 && word.charCodeAt(i-1) <= 90) {
//         if(word[i-2] !== undefined) {
//           return false
//         }
//       }
//     }
  
//   }
//   return true
// };

// RegExp
const detectCapitalUse = word => /^([A-Z]*|.[a-z]*)$/.test(word)

console.log(detectCapitalUse("UaaF"))