// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

// A prefix of a string s is any leading contiguous substring of s.

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const arr = sentence.split(' ')
    const word = `^${searchWord}`
    const re = new RegExp(word)
    for(let i=0; i<arr.length; i++){
      if(re.test(arr[i])){
          return i+1
      }
    }
    return -1
};

console.log(isPrefixOfWord("hellohello hellohellohello", "ell"))