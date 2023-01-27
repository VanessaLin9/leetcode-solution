// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

/**
 * @param {number} n
 * @return {number}
 */

// DP
var tribonacci = function(n) {
    if(n === 0) return n;
    if(n === 1 || n === 2) return 1;
    let a =0;
    let b =1;
    let c =1;

    for(let i=2; i<n; i++){
        [a, b, c] = [b , c, a+b+c]
    }
    return c
};

// 用 recursion 會超時TLE