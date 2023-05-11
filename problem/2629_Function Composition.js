/**
 * @param {Function[]} functions
 * @return {Function}
 */

// recursion
var compose = function (functions) {

    let counter = 0; //counter for the functions array
    functions = functions.reverse(); //reverse the array to start from the last function
    return function (x) { //return a function that takes one number as an argument
        var processFunctions = function (x, counter) {
            if (counter === functions.length) { // Base Case: if counter is equal to the length of the array, return x
                return x;
            }
            return processFunctions(functions[counter](x), counter + 1); //recursive function that calls the next function in the array
        }
        return processFunctions(x, counter); //call the recursive function
    };
};

// reduceRight
var compose = function(functions) {
    return x => functions.reduceRight((acc,f)=>f(acc),x)
};


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */