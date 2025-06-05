// 788. Rotated Digits
// https://leetcode.com/problems/rotated-digits/
// Tag: Math, String, Brainteaser, Medium


// An integer x is a good if after rotating each digit individually by 180 degrees, we get a valid number that is different from x. Each digit must be rotated - we cannot choose to leave it alone.

// A number is valid if each digit remains a digit after rotation. For example:

// 0, 1, and 8 rotate to themselves,
// 2 and 5 rotate to each other (in this case they are rotated in a different direction, in other words, 2 or 5 gets mirrored),
// 6 and 9 rotate to each other, and
// the rest of the numbers do not rotate to any other number and become invalid.
// Given an integer n, return the number of good integers in the range [1, n].

/**
 * @param {number} n
 * @return {number}
 */

// [brute force] -AC 63ms
var rotatedDigits = function(n) {
    let conter = 0;
    for(let i=1; i<=n; i++){
        if(isvalidate(i)) conter ++
    }
    return conter
};

function isvalidate(i){
    let validate = false
    while(i>0){
      let a = i%10;
      if(a===3 || a===4|| a===7) return false
      if(a=== 2||a===5||a===6||a===9) validate = true
      i = Math.floor(i/10)
    }
    return validate
}
// TC: n log n
// MC: 1

var rotatedDigits = function(n) {
    const diff = new Set(['2', '5', '6', '9']);
    const invalid = new Set(['3', '4', '7']);

    let result = 0;
    for(let i=0; i<=n; i++){
        let str = i + "";
        let arr = str.split('');
        let hasdiff = false;
        let isValid = true;
        for(let c of arr){
            if(diff.has(c)){
                hasdiff = true;
            } else if (invalid.has(c)){
                isValid = false;
                break;
            }
        }
        if(hasdiff && isValid){
            result ++;
        }
    }
    return result;

};

console.log(rotatedDigits(857)) //247