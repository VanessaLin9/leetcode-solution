// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const hash = {};
    for(let i=0; i<26; i++){
        hash[order[i]] = i
    }
    // console.log(hash)
    for(let j=1; j<words.length; j++){
        let from = words[j -1];
        let post = words[j];
        for(let k=0; k<from.length; k++){
            let fromIdx = hash[from[k]];
            let postIdx = hash[post[k]];
            if(fromIdx < postIdx) break;
            if(fromIdx > postIdx) return false;
        }
        if(from.length > post.length && from.substring(0, post.length) === post) return false
    }
    return true;
};

// console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")) //false
console.log(isAlienSorted(["ubg","kwh"], "qcipyamwvdjtesbghlorufnkzx")) //true