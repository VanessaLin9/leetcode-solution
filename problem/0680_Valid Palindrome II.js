// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

/**
 * @param {string} s
 * @return {boolean}
 */

// const validPalindrome = (s) => {
//     for (let i = 0, stop = s.length / 2; i < stop; i++) {
//         let j = s.length - i - 1
//         if (s[i] !== s[j]) {
//             return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
//         }
//     }
//     return true
// };

// const cut = (s, i) => {
//   // console.log(s.substring(0, i) + s.substring(i + 1))
//   return s.substring(0, i) + s.substring(i + 1)
// };

// const isPalindrome = (s) => s === s.split('').reverse().join('');


// 
const validPalindrome = (str, skipped = false) => {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      if (skipped) return false;
      return (
        validPalindrome(str.substring(i, j), true) ||
        validPalindrome(str.substring(i + 1, j + 1), true)
      );
    }
  }
  return true;
};

console.log(validPalindrome("deeee")) //true
console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga")) //true