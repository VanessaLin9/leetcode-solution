// Given two binary strings a and b, return their sum as a binary string.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// BigInt and toString
var addBinary = function(a, b) {
  let aBig = `0b${a}`;
  let bBig = `0b${b}`;
  let sum = BigInt(aBig) + BigInt(bBig);
  return sum.toString(2)
};

console.log(addBinary('11', '1'))