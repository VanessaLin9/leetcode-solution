// 0345_ReverseVowelsofaString
// https://leetcode.com/problems/reverse-vowels-of-a-string/

//  Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */


var reverseVowels = function(s) {
  const vowels = /[aeiou]/ig
  const result = s.match(vowels)
  // const resultIdx = [...s.matchAll(vowels)].map(each => each.index) // 本來想用index做後來發現不用了
  let replace = s.replace(vowels, '_')
  const arr = replace.split('') //後面字串要複寫好麻煩所以拆了比較方便QQ
  for(let i=0; i<arr.length; i++){
    if(arr[i] === '_'){  
      arr[i] = result.pop()
    }
  }
  
  return arr.join('')
};
// T: O(n)
// S: O(n)

console.log(reverseVowels("leetcode"))
