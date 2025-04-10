// 13. Roman to Integer
//https://leetcode.com/problems/roman-to-integer/
// Tag: Hash Table, Math, String, Easy

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
  const roman = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
  }
  let sum = 0;
  for(let i=0; i<s.length; i++){
    sum += roman[s[i]]
  
    if(s[i] === "V" || s[i] === "X"){
      if(s[i-1] === "I"){
        sum -= 2;
      }
    }

    if(s[i] === "L" || s[i] === "C"){
      if(s[i-1] === "X"){
        sum -= 20;
      }
    }

    if(s[i] === "D" || s[i] === "M"){
      if(s[i-1] === "C"){
        sum -= 200;
      }
    }
  }
  return sum 
};

console.log(romanToInt("MCMXCIV"))