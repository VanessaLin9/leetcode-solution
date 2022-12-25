// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid (s) {
  let result = [];
  for(let i=0; i<s.length; i++){
      if(s[i] === "(") {
          result.push(")")
      }else if(s[i] === "{") {
          result.push("}")
      }else if(s[i] === "[") {
          result.push("]")
      } else {
        let pop =  result.pop()
        if(pop !== s[i]) return false
      }
  }
  return result.length === 0
}