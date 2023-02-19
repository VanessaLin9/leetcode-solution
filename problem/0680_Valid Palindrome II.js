// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

/**
 * @param {string} s
 * @return {boolean}
 */

const validPalindrome = (s) => {
    for (let i = 0, stop = s.length / 2; i < stop; i++) {
        let j = s.length - i - 1
        if (s[i] !== s[j]) {
            return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
        }
    }
    return true
};

const cut = (s, i) => {
  // console.log(s.substring(0, i) + s.substring(i + 1))
  return s.substring(0, i) + s.substring(i + 1)
};

const isPalindrome = (s) => s === s.split('').reverse().join('');

console.log(validPalindrome("deeee")) //true
console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga")) //true