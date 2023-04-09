// 0345_ReverseVowelsofaString
// https://leetcode.com/problems/reverse-vowels-of-a-string/

//  Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */

// regExp
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

// ----------------------------------------------------------
// tow pointers
// set
var reverseVowels = function(s) {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const arr = s.split('')
    let L = 0;
    let R = arr.length-1;
    while(R>L){
        if(!set.has(arr[L])) {
            L ++
        }
        if(!set.has(arr[R])){
            R--
        }
        if(set.has(arr[L]) && set.has(arr[R])){
            let temp = arr[L]
            arr[L] = arr[R]
            arr[R] = temp;
            L ++;
            R --;
        }
    }
    return arr.join('')
};
// RegExp
var reverseVowels = function(s) {
    const vowels = /[aeiou]/i
    const arr = s.split('')
    let r = arr.length-1;
    let l = 0
    while(r>l){
        if(vowels.test(arr[r]) && vowels.test(arr[l])){
            [arr[r], arr[l]] = [arr[l], arr[r]]
            r--;
            l++
        } else if(!vowels.test(arr[r])){
            r--;
        } else if(!vowels.test(arr[l])){
            l++;
        }
    }
    return arr.join('')
};

console.log(reverseVowels("leetcode"))
