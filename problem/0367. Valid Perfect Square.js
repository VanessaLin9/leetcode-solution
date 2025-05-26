// 367 Valid Perfect Square
// https://leetcode.com/problems/valid-perfect-square/
// Tag: Math, Binary Search, Easy

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num == 1)return true;
    let l =0;
    let r = num;
    while(r >= l){
        let mid = Math.floor(l + (r-l)/2);
        let sqr = mid * mid;
        if(sqr == num){
            return true;
        } else if(sqr > num){
            r = mid -1;
        } else {
            l = mid + 1;
        }
    }
    return false;
};


// --- for testing ---
console.log(isPerfectSquare(16)); // true