/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let str = word
    let counter = 0
    while(sequence.includes(str)){
        counter ++
        str += word
    }
    return counter
};

console.log(maxRepeating("ababc", "ab"))