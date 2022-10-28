// two pointer

function palindrome(str) {
  let point = str.length -1;
  for(let i=0; i<str.length/2; i++){
    if(str[i] !== str[point - i]){
      return false
    }
  }
  return true
}

console.log(palindrome("tacocat"))
console.log(palindrome("amanaplanacanalpanama"))