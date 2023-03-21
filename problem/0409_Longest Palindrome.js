// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

/**
 * @param {string} s
 * @return {number}
 */


// brute force
// var longestPalindrome = function(s) {
//   const counter = {}
//   let result = 0;
//   for(let i in s){
//     if(counter[s[i]] === undefined) counter[s[i]] = 0
//     counter[s[i]] ++
//   }
  
//   for(let j in counter) {
//     while(counter[j] >=2 ) {
//       counter[j] -= 2;
//       result += 2;
//     }
//   }
//   for(let k in counter) {
//     if(counter[k] === 1) {
//       result += 1;
//       break
//     }
//   }
//   return result
// };

// brute force 濃縮成一個迴圈
var longestPalindrome = function(s) {
    const hash = {}
    let result=0
    for(let i=0; i<s.length; i++){
        if(!hash[s[i]]) hash[s[i]] = 0;
        hash[s[i]] ++
        if(hash[s[i]] %2 === 0) result += 2;
    }
    return result === s.length? s.length: result +1
};

// [hash set]
// var longestPalindrome = function(s) {
//     const set = new Set();
//     let result =0;
//     for(let i=0; i<s.length; i++){
//         if(set.has(s[i])){
//             result +=2
//             set.delete(s[i])
//         } else {
//             set.add(s[i])
//         }
//     }
//     return set.size === 0?s.length:result + 1;
// };
// TC: n
// MC: n

console.log(longestPalindrome("a"))