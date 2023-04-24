/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    if(o1 === o2) return true;

    if(typeof o1 !== 'object' || typeof o2 !== 'object') return false;
    if(Array.isArray(o1) !== Array.isArray(o2)) return false;
    if(Object.keys(o1).length !== Object.keys(o2).length) return false;
  
    for(let i in o1){
        if(!areDeeplyEqual(o1[i], o2[i])) return false
    }
    return true
};