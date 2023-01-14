// Reverse bits of a given 32 bits unsigned integer.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

function reverseBits(n) {
  return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);
}

console.log(reverseBits(00000010100101000001111010011100)) 
//964176192 (00111001011110000010100101000000)