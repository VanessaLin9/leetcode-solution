/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
  let lestArgs;
  let shouldCall = true

  function execute(){
    if(lestArgs && shouldCall){
      fn(...lestArgs)
      shouldCall = false;
      lestArgs = null;

      setTimeout(()=> {
        shouldCall = true;
        execute()
      }, t)
      }
  }

  return function(...args) {
    lestArgs = args;
    execute()
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */