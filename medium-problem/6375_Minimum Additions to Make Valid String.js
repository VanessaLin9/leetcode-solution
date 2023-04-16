/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
  let add = 0
  while(!validate(word)){
    // word = word.replace('abc', '')
    if(word[0] !== 'a'){
      word = 'a'+ word
      add++
    }
    console.log(word)
    if(word[1] !== 'b'){
      word = 'ab'+ word.substring(1)
      add++
    }
    console.log(word)
    if(word[2] !== 'c'){
      word = 'abc'+ word.substring(2)
      add++
    }
    console.log(word)
    word = word.substring(3)
  }
  return add
};

function validate(str){
  let temp = str
  let reg = /(abc)/g
 
  temp =  temp.replace(reg, '')
  return temp === ''
  
}

console.log(addMinimum('b'))
// console.log(validate('b'))