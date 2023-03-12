// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// var gcdOfStrings = function(str1, str2) {
//   if(str1 + str2 !== str2 + str1) return '';
//   const gcd = (a, b) => (b === 0?a: gcd(b, a%b))
//   console.log(gcd(str1.length, str2.length))
//   return str1.slice(0, gcd(str1.length, str2.length))
// };

var  gcdOfStrings = function(str1, str2) {
  if(str1+str2 !== str2+str1) {
    return ""
  } else if (str1 === str2){
    return str1
  } else if (str1.length > str2.length){
     return gcdOfStrings(str1.substring(0, str2.length), str2)
  } else if (str2.length > str1.length){
    return gcdOfStrings(str1, str2.substring(0, str1.length))
  }
}

console.log(gcdOfStrings("ABCABC", "ABC"))
console.log(gcdOfStrings("ABABAB", "AB"))