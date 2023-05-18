/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// sort
var groupAnagrams = function(strs) {
    const obj = {};
    for(let str of strs){
        let letter = str.split('').sort().join()
        obj[letter]? obj[letter].push(str) : obj[letter] = [str];
    }
    return Object.values(obj)
};
// TC: O(n*k log k)
//  MC: O(n*k)

// 

