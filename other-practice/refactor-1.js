// try to refactor:

// function p(arr) {
//   let x = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].active === true) {
//       if (arr[i].name.length > 2) {
//         x.push(arr[i].email);
//       }
//     }
//   }
//   return x;
// }

function getNameOver2Char(users){
    // 使用 filter 過濾出 active 為 true 的使用者，然後使用 map 提取 email
    // 並且確保 name 長度大於 2
    return users.filter(x => isValidate(x)).map(y => y.email);
}

function isValidate(user){
    return user.active === true && user.name.length > 2;
}

// test
const users = [
  { name: 'Ann', email: 'ann@example.com', active: true },
  { name: 'Li', email: 'li@example.com', active: true },
  { name: 'Bob', email: 'bob@example.com', active: false },
  { name: 'John', email: 'john@example.com', active: true }
];

// console.log(p(users))
console.log(getNameOver2Char(users))
// 預期輸出：
// ['ann@example.com', 'john@example.com']
