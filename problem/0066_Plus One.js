// 0066. Plus One
// https://leetcode.com/problems/plus-one/
// Tag: Array, Math, Easy

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = digits.length-1
    let flag = true
    while(flag && num>=0){
       let dig = digits[num] + 1
       if(dig <10){
           digits[num] = dig
           flag = false
       } else {
           digits[num] = dig - 10
           num --
       }
    }
    flag ? digits.unshift(1): digits
    return digits
};