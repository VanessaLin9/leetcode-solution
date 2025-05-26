// 504. Base 7
// https://leetcode.com/problems/base-7/
// Tag: Math, String, Easy

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  return num.toString(7)
};

var convertToBase7 = function(num) {
    if(num == 0) return "0";
    let isNegative = num < 0;
    let result = "";
    num = Math.abs(num);
    while(num > 0){
        let temp = num %7;
        result = temp + result;
        num = (num - temp)/7;
    }
    return isNegative ? "-" + result:result;
};

// --- for testing ---
console.log(convertToBase7(100)) //202