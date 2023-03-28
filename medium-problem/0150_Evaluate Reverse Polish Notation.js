// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

/**
 * @param {string[]} tokens
 * @return {number}
 */


var evalRPN = function(tokens) {
  let number = /[0-9]/
  const stack = [];
  const calculations = {
    "+": (a, b) => (a+b),
    "-": (a, b) => (a-b),
    "*": (a, b) => (a*b),
    "/": (a, b) => (Math.trunc(a/b))
  }
  for(let i=0; i<tokens.length; i++){
    if(number.test(tokens[i])){
      stack.push(tokens[i]/1)
    } else {
      let sec = stack.pop()
      let first = stack.pop()
      stack.push(calculations[tokens[i]](first, sec))
    }
  }
  
  return stack.pop()
};

// TC: n
// MC: n


console.log(evalRPN(["2","1","+","3","*"])) //9