/**
 * @param {Array} arr
 * @return {Matrix}
 */
/**
 * @param {Array} arr - Array of objects
 * @return {Matrix} - Matrix representation of the input array
 */
function jsonToMatrix(arr) {
  // Function to flatten an object recursively
  const flattenObject = (obj, prefix = "") => {
    let result = {};

    // Iterate over object properties
    for (let key in obj) {
      let value = obj[key];

      // If value is an object, recursively flatten it
      if (typeof value === "object" && value !== null) {
        let flattened = flattenObject(value, prefix + key + ".");
        result = { ...result, ...flattened }; // Merge flattened object into the result
      }
      // Otherwise, add the value to the result object with the prefixed key
      else {
        result[prefix + key] = value;
      }
    }

    return result;
  };

  // Flatten each object in the input array
  let flattenedArr = arr.map(obj => flattenObject(obj));

  // Collect all unique keys/columns from the flattened objects
  let columnSet = new Set();
  flattenedArr.forEach(obj => {
    Object.keys(obj).forEach(key => columnSet.add(key));
  });

  // Sort the columns in lexographically ascending order
  let columns = Array.from(columnSet).sort();

  // Initialize the matrix with the column names as the first row
  let matrix = [columns];

  // Populate the matrix with values from the flattened objects
  flattenedArr.forEach(obj => {
    // Create a row by mapping the columns and retrieving the corresponding value from the object
    let row = columns.map(key => (obj[key] !== undefined ? obj[key] : ""));

    // Add the row to the matrix
    matrix.push(row);
  });

  return matrix; // Return the resulting matrix
}

// 討論區找了第二個解法
var jsonToMatrix = function(arr) {
    function isObj(obj){
        return obj !== null && typeof obj === 'object'
    }

    function getkeys(obj) {
        if(!isObj(obj)) return ['']
        const result = []
        for(let key of Object.keys(obj)){
            const childkeys = getkeys(obj[key])
            for(let childkey of childkeys){
                result.push(childkey? `${key}.${childkey}`: key)
            }
        }
        return result
    }

    function getValue (obj, path){
        const paths = path.split('.');
        let i=0;
        let value = obj;
        while(i<paths.length && isObj(value)){
            value = value[paths[i++]]
        }
        return i < paths.length || isObj(value) || value === undefined? '': value;
    }

    const keys = Array.from(new Set(arr.reduce((acc, curr) => {
        getkeys(curr).forEach(x => acc.add(x))
        return acc
    }, new Set()))).sort();
    console.log(keys)

    const matrix = [keys]
    arr.forEach(obj => {
        matrix.push(keys.map(key => getValue(obj, key)))
    })

    return matrix
};