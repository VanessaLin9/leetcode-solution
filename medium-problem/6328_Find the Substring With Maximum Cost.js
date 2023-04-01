/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */

//  AC
var maximumCostSubstring = function(s, chars, vals) {
    const hash = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26,
    }
    const c = chars.split('')
    for(let i=0; i<c.length; i++){
        hash[c[i]] = vals[i]
    }
    // console.log(hash)
    let point = hash[s[0]]
    let sum = Math.max(0, point)
    for(let j=1; j<s.length; j++){
       let n = hash[s[j]]
        if((point+n)>n){
           point += n
           } else {
            point = n
           }
      sum = Math.max(sum, point)     
    }
    return sum
};

console.log(maximumCostSubstring("kqqqqqkkkq","kq",[-6,6])) //30
console.log(maximumCostSubstring("hwwqwwqqqh","wihq",[-2,-5,-4,4])) //12
console.log(maximumCostSubstring("zox","zoxr",[2,-5,-4,-5])) //2
console.log(maximumCostSubstring("yyxjy","xyj",[-3,-3,6])) //6
console.log(maximumCostSubstring("ibu","ibu",[-1,-3,6])) //6