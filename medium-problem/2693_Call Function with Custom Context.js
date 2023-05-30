/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    const fn = this
    Object.defineProperty(context, '__fn__', {
        value: fn,
    })

    const result = context.__fn__(...args)

    return typeof result === 'undefined'?undefined: result 
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */