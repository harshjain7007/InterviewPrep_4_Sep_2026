// console.log(/aeiou/g.test("aeiou")) // o/p -True


// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[TId]/gi;
// const found = paragraph.match(regex);
// console.log("=>", found); // o/p :-  [ 'T', 'i', 't', 'd', 'I', 't', 'd']


// // exmaple of closure
// function sum(a){
//     return function(b){
//         return function(c){ 
//             return a + b + c
//         }
//     }
// }
// console.log(sum(4)(4)(4))

// const sum = a => b => c => a+b+c
// console.log(sum(4)(4)(4))



//////////

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

// function hello(name) {  
//     if(name){
//     let result = name[0].toUpperCase() + name.substr(1).toLowerCase() 
//         return `Hello, ${result}!`
//     }else{
//         return "Hello, World!"
//     }
// }
// console.log(hello("alice"))



// function alternateCase(s) {
//     let newStr = "";
//     for(let i = 0; i < s.length ; i++){
//         // console.log(s[i]>="a" && s[i]<="z")
//         if(s[i] === s[i].toLowerCase()){
//             newStr += s[i].toUpperCase()
//         }else{
//             newStr += s[i].toLowerCase()
//         }
//     }
//     return  newStr;
// }

// console.log(alternateCase('hARSH jAin'))


// function getOrder(input) {
//     let menuCard = [ "Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke" ]

// console.log(/aeiou/g.test("aeiou"))
// for(let i = 0; i < menuCard.length; i++){
//     let reg = new RegExp(menuCard[i], 'gi')   
//     console.log(reg)
// }

// console.log(reg)
// console.log(reg.test(menuCard[0]))


// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[TId]/gi;
// const found = paragraph.match(regex);
// console.log(found);

//     let orderStr = ""
//     let orderArr = []
//     for(let i = 0; i < menuCard.length; i++){
//         // console.log(menuCard[i])
//         let reg = new RegExp(menuCard[i], 'gi')
//         let orderItem = input.match(reg)
//         // console.log(orderItem)
//         if(orderItem){
//             for(let j = 0; j < orderItem.length; j++){
//                 orderArr.push(menuCard[i])
//             }
//         }else{
//             continue;
//         }
//     }
//     orderStr = orderArr.join(" ")
//     return orderStr
// }
// let input = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
// console.log(getOrder(input))

// let arr = []
// let nnn = [1,2,34]
// arr.push(...nnn)
// console.log(arr)

// console.log("harsh".match(/Ha/gi))


///////
// function shortcut (str) {
//     let result = str.replace(/[aeiou]/g, '')
//     return result;
// }
// let str = "goodbye"
// console.log(shortcut(str))


///// match cahracter cases in some conditions
// function sameCase(a, b){
//     if( /[a-zA-Z]/gi.test(a) && /[a-zA-Z]/gi.test(b) ){
//         console.log('run..')
//         if(/[A-Z]/g.test(a) && /[A-Z]/g.test(b) ){
//             return 1
//         }else if( /[a-z]/g.test(a) && /[a-z]/g.test(b) ){
//           return 1
//         }else{
//             return 0
//         }         
//     }else {
//         return -1
//     }
// }
// console.log(sameCase(" ", "h"))


////////// 
// function squareDigits(num){
// let arrNum = Array.from(String(num), res => Number(res))
// let str = ""
// for(let i of arrNum){
//      str += i**2
// }
// }
// console.log(squareDigits(3212))


///// unique single value of array
// function findUnique(numbers) {
//     let uniqueVal;
//     let newArr = numbers.filter((curElem, index) => {
//         return numbers.indexOf(curElem) !== index
//     })

//     for(let j = 0; j < numbers.length; j++){
//         if(newArr.includes(numbers[j])){
//             continue;
//         }else{
//             uniqueVal = numbers[j]
//             break;
//         }
//     }

//    return uniqueVal

// }
// let arr =  [ 1, 8, 4, 4, 6, 1, 8 ]
// console.log(findUnique(arr))




/////
// var getSubstrings = function(str) {  
//   // insert your code here!
//   let totalCharLen = str.length

//   let numberOfSubstr = 0
//   for(let i = 0; i <= totalCharLen; i++ ){
//     numberOfSubstr += i
//   }

// return numberOfSubstr - 1
// };
// let result = getSubstrings("YOLO")
// console.log(result)



////// 
// function century(year) {
//   return Math.ceil(year / 100)
// }
// console.log(century(1801))


// const quarterOf = (month) => {
//     if( month >= 1 && month <= 3 ){
//         return 1
//     }else if(month >= 4 && month <= 6){
//         return 2
//     }else if(month >= 7 && month <= 9){
//         return 3
//     }else{
//         return 4
//     }
// }
// console.log(quarterOf(10))


// function fun(str){
//     return str
// }
// let ss  = "“[()]{}{[()()]()}”"
// console.log(fun(ss))


