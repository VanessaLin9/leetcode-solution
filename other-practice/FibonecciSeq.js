// f(0) = 0
// f(1) = 1
// f(n) = f(n-1) + f(n-2)
function fibonacciSeq(n){
  if(n === 0){
    return 0
  } else if (n === 1){
    return 1
  } else {
    return fibonacciSeq(n-1) + fibonacciSeq(n-2)
  }
}


console.log(fibonacciSeq(6))