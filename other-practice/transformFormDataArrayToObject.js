// 題目：
// 請你實作一個 function，將 client 傳來的表單資料做整理。資料格式如下：
// [
//   { field: "email", value: "user@example.com" },
//   { field: "name", value: "john" },
//   { field: "age", value: 25 }
// ]

// 請轉換成：
// {
//   email: "user@example.com",
//   name: "john",
//   age: 25
// }

// reduce solution
// function transformFormData(formData) {
//     return formData.reduce((acc, cur) => {
//         acc[cur.field] = cur.value;
//         return acc;
//     }, {})
// }

// for...in solution
function transformFormData(formData) {
  const map = {};
  for(let item in formData){
    const {field, value} = formData[item];
    map[field] = value;
  }
  return map;
}

// 測試
const formData =  [
  { field: "email", value: "user@example.com" },
  { field: "name", value: "john" },
  { field: "age", value: 25 }
];
console.log(transformFormData(formData));
// 輸出：
// {
//   email: "user@example.com",
//   name: "john",
//   age: 25
// }