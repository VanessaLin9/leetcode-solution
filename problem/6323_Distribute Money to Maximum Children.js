// You are given an integer money denoting the amount of money (in dollars) that you have and another integer children denoting the number of children that you must distribute the money to.

// You have to distribute the money according to the following rules:

// All money must be distributed.
// Everyone must receive at least 1 dollar.
// Nobody receives 4 dollars.
// Return the maximum number of children who may receive exactly 8 dollars if you distribute the money according to the aforementioned rules. If there is no way to distribute the money, return -1.

// [brute force] -AC 
var distMoney = function(money, children) {
    let result = 0;
    if(money < children) return -1;
    if(money === children) return 0;
    if(money === (children * 8)) return children
    money = money - children //17
    while(money >= 7 && children>0){
      money -= 7
      result ++
      children --
    }

    if(money/children === 3 && children === 1){
      return result -1
    } else if (money && children === 0){
      return result -1
    } else {
      return result
    }
};


console.log(distMoney(20, 3)) //1 分別拿8, 9, 3
console.log(distMoney(17, 2)) //1
console.log(distMoney(23, 2)) //1
console.log(distMoney(16, 3)) //1