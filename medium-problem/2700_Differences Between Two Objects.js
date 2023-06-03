/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */

// 討論區找的第一個解法 --54ms/43mb
function objDiff(obj1, obj2) {
    const result = {}
    compare(obj1, obj2, [], result)
    return result

    function compare(obj1, obj2, path, result){
        if(isObject(obj1) && isObject(obj2)){
            for(let key in obj1){
                if(key in obj2){
                    compare(obj1[key], obj2[key], [...path, key], result)
                }
            }
        } else if (Array.isArray(obj1) && Array.isArray(obj2)) {
            const maxlen = Math.max(obj1.length, obj2.length);
            for(let i=0; i<maxlen; i++){
                if(i in obj1 && i in obj2){
                    compare(obj1[i], obj2[i], [...path, i], result);
                }
            }
        } else if (obj1 !== obj2){
            if(path.length === 0){
                result = [obj1, obj2]
            } else {
                let currentObj = result
                for(let i=0; i<path.length -1; i++){
                    const key = path[i]
                    if(!(key in currentObj)) {
                        currentObj[key] = {}
                    }
                    currentObj = currentObj[key]
                }
                const lastKey = path[path.length-1];
                currentObj[lastKey] = [obj1, obj2]
            }
        }
    }
};

function isObject(val){
    return typeof val === 'object' && val !== null && !Array.isArray(val)
}

// recursion 討論區找的第二個寫法，效率差但教好理解 --83ms/45mb
function objDiff(obj1, obj2) {
    if(obj1 === obj2) return {}
    if(obj1 === null || obj2 === null) return [obj1, obj2]
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object') return [obj1, obj2]
    if(Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2]

    const diffobj = {}

    Object.keys(obj1).forEach( key => {
        if(key in obj2){
            const subdiff = objDiff(obj1[key], obj2[key])
            if(Object.keys(subdiff).length >0){
                diffobj[key] = subdiff
            }
        }
    })

    return diffobj
};