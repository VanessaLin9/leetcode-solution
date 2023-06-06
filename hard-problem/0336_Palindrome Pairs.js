/**
 * @param {string[]} words
 * @return {number[][]}
 */

// brute force --TLE
var palindromePairs = function(words) {
    const ans = []
    for(let i=0; i<words.length; i++){
        let pre = words[i]
        for(let j=0; j<words.length; j++){
            if(j === i) continue;
            let pos = words[j]
             if(isPalindrome(pre+pos)) ans.push([i, j])
        }
    }
    return ans
};

function isPalindrome(str){
    return str === str.split('').reverse().join('')
}

// TC: O(n^2 *k)
// MC: O(n*k)


// hash map
var palindromePairs = function(words) {
    const map = new Map()
    const set = new Set()
    const n = words.length

    for(let i=0; i<n; i++){
        map.set(words[i], i)
        set.add(words[i].length)
    }

    let len = Array.from(set).sort((a, b) => a-b)
    const ans = []

    for(let j=0; j<n; j++){
        let length = words[j].length

        if(length === 1){
            if(map.has('')){
                ans.push([j, map.get('')])
                ans.push([map.get(''), j])
            }
        } else {
            const reverse = words[j].split('').reverse().join('')
            if(map.has(reverse) && map.get(reverse) !== j){
                ans.push([j, map.get(reverse)])
            } 

            for(const k of len){
                if(k === length) break;
                if(isPalindrome (reverse, 0, length -1 -k)){
                    const s1 = reverse.substring(length -k)
                    if(map.has(s1)){
                        ans.push([j, map.get(s1)])
                    }
                }
                if(isPalindrome (reverse, k, length -1)){
                    const s2 = reverse.substring(0, k)
                    if(map.has(s2)){
                        ans.push([map.get(s2), j])
                    }
                }
            }

        }
    } 
    return ans
};

function isPalindrome (s, l, r){
    while(r>l){
        if(s[l++] !== s[r--]) return false
    }
    return true
}