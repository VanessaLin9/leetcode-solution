/**
 * @param {Function} fn
 */
function memoize(fn) {
  const hash = new Map()
    return function(...args) {
      let key = args.join(',')
      if(hash.has(key)){
        return hash.get(key)
      } else {
        let val = fn(...args)
        hash.set(key, val)
        return val
      }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */