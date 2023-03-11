// Given the binary representation of an integer as a string s, return the number of steps to reduce it to 1 under the following rules:

// If the current number is even, you have to divide it by 2.
// If the current number is odd, you have to add 1 to it.
// It is guaranteed that you can always reach one for all test cases.

/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let number = BigInt("0b"+s)
    let result = 0;
    while(number !== 1n){
        if(number%2n !== 1n){
            number /= 2n
        } else {
            number += 1n
        }
        result ++
    }
    return result
};

console.log(numSteps("1101")) //6