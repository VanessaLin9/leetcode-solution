/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const hash = {}
    while(n !== 1 && !hash[n]){
        hash[n] = true
        let arr = n.toString(10).split('')
        n = arr.reduce((a, c) => a + c*c, 0)
    }
    return n === 1
};