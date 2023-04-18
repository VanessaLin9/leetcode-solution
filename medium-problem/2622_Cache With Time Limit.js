var TimeLimitedCache = function() {
  this.catch = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  let found = this.catch.has(key)
  if(found){
    clearTimeout(this.catch.get(key).ref)
  }
  this.catch.set(key, {
    value,
    ref: setTimeout(() => this.catch.delete(key), duration)
  })
  return found
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.catch.has(key)? this.catch.get(key).value:-1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.catch.size
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */