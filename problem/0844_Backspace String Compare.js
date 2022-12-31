// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// brute force
var backspaceCompare = function(s, t) {
  const sArr = [];
  const tArr = [];
  for (let i=0; i<s.length; i++){
    if (s[i] === '#'){
      sArr.pop()
    } else {
      sArr.push(s[i])
    }
  }
  for (let j=0; j<t.length; j++){
    if (t[j] === '#'){
      tArr.pop()
    } else {
      tArr.push(t[j])
    }
  }

  return sArr.join() === tArr.join()
};

console.log(backspaceCompare("a#c", "b"))