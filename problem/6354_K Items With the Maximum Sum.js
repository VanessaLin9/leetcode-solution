// There is a bag that consists of items, each item has a number 1, 0, or -1 written on it.

// You are given four non-negative integers numOnes, numZeros, numNegOnes, and k.

// The bag initially contains:

// numOnes items with 1s written on them.
// numZeroes items with 0s written on them.
// numNegOnes items with -1s written on them.
// We want to pick exactly k items among the available items. Return the maximum possible sum of numbers written on the items.

/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    if(k <= numOnes) {
        return k;
    } else if(k <= (numOnes + numZeros)){
        return numOnes;
    } else {
        let a = (numOnes + numZeros)
        return numOnes - (k - a);
    }
};

console.log(kItemsWithMaximumSum(3, 2, 0, 2)) //2