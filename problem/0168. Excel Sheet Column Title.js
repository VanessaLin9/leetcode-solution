// 168. Excel Sheet Column Title
// https://leetcode.com/problems/excel-sheet-column-title/
// Tag: Math, String, Easy

/**
 * @param {number} columnNumber
 * @return {string}
 */

// brute force
var convertToTitle = function(columnNumber) {
    let str = '';
    let n = columnNumber;
    while(n > 0){
        let temp = n % 26;
        if(temp === 0){
            str = 'Z' + str;
            n = Math.floor(n/26) -1;
        } else {
            let char = String.fromCharCode(64 + temp);
            str = char + str;
            n = Math.floor(n/26);
        }
    }
    return str;
};
// TC : O(log26(n))
// SC : O(1)
