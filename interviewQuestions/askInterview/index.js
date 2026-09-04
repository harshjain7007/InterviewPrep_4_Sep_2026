// ----  we went remove some property's of object and create new object :-
let obj = { mainData: null, removeData: null };
let { removeData, ...newObj } = obj;
console.log("newObj==>", newObj);
//  they are certain way for achive this

// :--- Compressed string
// function fun(str) {
//   let stt = new RegExp("$[a]^", "gi");
//   console.log(stt.test("a"));
//   for (let i of str) {
//     // console.log(i);
//   }
//   return str;
// }
// let str = "harshjain";
// console.log(fun(str));
