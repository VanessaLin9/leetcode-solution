/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let result = 0
    let str = word
    while(sequence.length>=str.length){
        if(sequence.includes(str)){
            str += word
            result ++
        } else {
            return result
        }
    }
    return result
};

console.log(maxRepeating("ababc", "ab"))