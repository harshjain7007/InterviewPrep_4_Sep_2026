// const express = require('express')
// let n = 5;
// let str = "";
// for(let i = 0; i < n; i++){
//      for(let j = 0; j < n-i; j++){
//           str += '*';
//      }
//      str += '\n'
// }
// console.log(str)



// function print(){
//      console.log("from gadarwara")
// }
// const id = setTimeout(print, 5000)
// console.log('id ---', + id)

// function showTime(){
//      let dt = new Date().toLocaleTimeString()
//      const tm = setTimeout(showTime, 4000)
//      console.log(dt)
//      clearInterval(tm)
//      console.log('clear time out is stopped ')
// }
// showTime()


// function incCount(firstName, lastName){
//      console.log( firstName + lastName )
// }

// setTimeout(incCount, 1000, 'harsh ', 'jain')
// clearTimeout(incCount)

// function funOne(name, myFun){
//      console.log('hello' + name)
//      myFun();
// }
// function funTwo(){
//      console.log('harsh')
// }
// setTimeout(funOne, 2000, ' john', funTwo)
// funTwo()

// let count = true;
// let countValue = new Promise(function(resolved, rejected){
//      rejected("Rejected");
// })
// // console.log(countValue)
// // console.log(typeof(countValue))

// countValue.then(function success(){
//      console.log("result")
// }).catch(function errorOne(){
//      console.log('your error')
// })

// console.log( countValue)

// async function fun(){
//      console.log('async function')
//      return Promise.reject(420)
// }
// fun().then(res => {
//      console.log(res)
// })
// .catch(err => {
//      console.log(err)
// })

// console.log('lkajdn')

// let promise = new Promise(function(resolved, rejected){
//      setTimeout(function(){
//           resolved('RESOLVED')
//      }, 2000)
// })

// async function asynFun(){
//      try {
//           let Result = await promise;
//           console.log(Result)
//      }catch(error){
//           console.log('Your Error' + error)
//      }
// }

// asynFun()
// let count = 1 ;
// let intraId = setInterval(function(firstName, lastName){
//      console.log(count + firstName + lastName)
//      count += 1;
//      if(count === 5){
//           clearInterval(intraId)
//      }
//      let time = new Date().toLocaleTimeString()
//      console.log(time)

// // }, 1000, 'harsh', 'jain')

// let jsonData = {"name" : "harshJain", "age" : 22 };


// // let objData = JSON.parse(jsonData)

// console.log(jsonData)
// console.log(typeof(jsonData))
// // console.log(typeof(objData))


// json object
// const jsonData = { "name": "John", "age": 22 };

// // converting to JavaScript object
// const obj = JSON.stringify(jsonData);

// console.log(obj); // John
// // accessing the data
// console.log(typeof(obj)); // John
// console.log(typeof(jsonData)); // John
// const0g(dt)

// function parent(name){
//      function child(){
//           console.log('my name is ' + name)
//      }
//      return child()
// }
// parent('jj')

// console.log(p())

// function pp(x){
//      function cc(y){
//           console.log("x = ", x)
//           console.log("y = ", y)
//           return x * y
//      }
//      return cc
// }

// const ft = pp(3)
// console.log(ft(5))

// function fun(){
//      let a = 0;
//      function increseSum(){
//           return a = a + 1
//      }
//      return increseSum
// }
// let a = 10;
// const x = fun();
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())

// console.log(a)
// console.log(a)
// console.log(a)
// a = a + 1
// console.log(a)

// console.log('harsh jain')
// let th = this

// th.name = 'Harsh Jain'
// console.log('harsh')


// const obj = {
//      age : 'name',
//      greet() {
//           console.log(this.age)
//      let innerFun = () => {
//           let hi = () => {
//                console.log(this)
//           }
//           hi()
//      }
//      innerFun();
// }}
// obj.greet()

// let fun = () => {
//      console.log(this)
// }
// fun()

// 'use strict';
// this.name = 'harsh';
// function tt(){
//      console.log(name)
// }
// tt()
// console.log('harshjainhbk')
// function fun(){
//      console.log('run')
//      'use strict';
//      name = 'harshJian';
//      console.log(name)
// }
// fun()

// 'use strict';
// name =  'harsh';
// 

// const arr = [1,2,3,'harsh', 'jain']
// let arrIte = arr[Symbol.iterator]()
// console.log(arrIte.next())
// console.log(arrIte.next())
// console.log(arrIte.next())
// console.log(arrIte.next())
// console.log(arrIte.next())
// console.log(arrIte.next())


// for(let n of arr[Symbol.iterator]()){
//      console.log(n)
// }

// const arrIte = arr[Symbol.iterator]()
// console.log(arrIte)

// const str = 'string';
// let strIte = str[Symbol.iterator]()
// console.log(strIte)

// function displayElements(arr) {

//      // to update the iteration
//      let n = 0;

//      return {

//          // implementing the next() function
//          next() {

//              if(n < arr.length) {
//                  return {
//                      value: arr[n++],
//                      done: false
//                  }
//              }

//              return {
//                  value: undefined,
//                  done: true
//              }
//          }
//      }
//  }

//  const arr = ['h', 'e', 'l', 'l', 'o'];

//  const arrIterator = displayElements(arr);

//  console.log(arrIterator.next());
//  console.log(arrIterator.next());
//  console.log(arrIterator.next());
//  console.log(arrIterator.next());
//  console.log(arrIterator.next());
//  console.log(arrIterator.next());

// function returnArrNext(arr){
//      let n = 0;
//      return {

//           next(){
//           if( n < 2){
//                return {
//                     value : arr[n++],
//                     done : false
//                }               
//           }
//           return {
//                value : undefined,
//                done : true
//           }
//           }
//      }
// }

// let arr = [ 'h', 'a', 'r', 's', 'h' ] 
// let arrIte = returnArrNext(arr)
// // console.log(arrIte)
// console.log(arrIte.next())
// console.log(arrIte.next())
// console.log(arrIte.next())
// console.log(arrIte.next())
// console.log(arrIte.next())
// console.log(arrIte.next())
// console.log(arrIte.next())

// console.log('hhh')


// // generator function
// function* generatorFunc() {

//      console.log("0. code before the first yield");
//      yield 300;

//      console.log("1. code before the first yield");
//      yield 100;

//     console.log("2. code before the second yield");
//      yield 200;
//  }

//  // returns generator object
//  const generator = generatorFunc();

//  console.log(generator.next());
// function *generator(){

//     yield 100;
//     yield 200;
//     return 123;
//     console.log('not printed')
// }
// const generator_obj =  generator();
// console.log(generator_obj.next())
// console.log(generator_obj.throw( new Error('Error Occurred') ));
// console.log(generator_obj.next())
// console.log(generator_obj.next())

// console.log(generator())


// const regExp = /abc/
// console.log(typeof(regExp))

// const regExp = new RegExp(/^h...h$/)
// console.log(regExp.test('harsh')
// console.log("harsh jain ")

// let update = setInterval(() => {
//      console.log('hbk')
// }, 1000);

// console.log('update')

// let dt = new Date().toLocaleTimeString()
// console.log(dt)

// let dt = '07:05:45PM'
// let myArr  =  dt.split(':')
// let newDt = '';
// for(let i = 0; i < myArr[2].length ; i++){
//   if(myArr[0] === '12'){
//         myArr[0] = '00'
//         let newStr = myArr[2]
//         let st = newStr.replace('P', 'A')
//         myArr[2] = st
//     }else if(myArr[2][i] === 'P'){
//         let kk = parseInt(myArr[0]) + 12
//         myArr[0] = kk.toString()
//     }else{
//         myArr = myArr
//     }
// } 
// let newStr = myArr[0] + ':' + myArr[1] + ':' + myArr[2]
// console.log(newStr)


////  interview pattern 
// 1
// 3   5
// 7   9    11
// 1   3    5    7
// 9   11   1    3   5
// 7   9    11   1   3   5

// let n = 6;  // Self made answer
// let str = '';
// let v = 1;
// for(let i = 1; i <= n; i++){
//     for(let j  = 1; j <= i; j++){
//         str += ` ${v} `
//         if(v < 11){
//             v += 2
//         }else{
//             v = 1
//         }
//     }
//     str += '\n'
// }
// console.log(str)


/////  ===  reverse string using recursion
// function reverseString(str) {
//     if (str === ""){
//         return "";
//     }else{
//         return reverseString(str.substr(1)) + str.charAt(0);
//     }
// }
// let result = reverseString("hello");
// console.log(result)


// let arr = [ 1, 5, 'har', 2 , 3, 'jain']
// let obj  =  {
//     name : "harsh",
//     age : 23
// }
// let newnote = arr.concat(obj)
// console.log(newnote)
// let am =  arr[index]
// console.log(am)

// for(let i in arr){
//     console.log(i)
// }

// function check(e, index){
//     return e == 10 
// }
 
// console.log(arr.find(check))


// let num = [2,5,5,11]
// let target = 10

// var twoSum = function(nums, target) {
//     let newArray = []
//     for(let i = 0;i < nums.length - 1; i++){
//         // let j;
//         for(let j = 1; j < nums.length ;j++){
//             if (nums[i] + nums[j] === target){
//                 // j = 2
//                 newArray.push(i,j)
//                 return newArray
//             }else{
//                 break;
//             }
//         }
//         nums.unshift()
//     }     
// };

// console.log(twoSum(num, 10))


//////////////   ======== for non first non repeatable character 

// function firstNonRepeatedCharacter(string) {
//     for (var i = 0; i < string.length; i++) {
//       var c = string.charAt(i);
//       if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
//         return c;
//       }
//     }
//     return null;
//   }



// function FirstNonRepeat(s){
//     for(let i = 0; i < s.length; i++)
//     {
//         if (s.indexOf(s.charAt(i),s.indexOf(s.charAt(i))+1) == -1)
//         {
//             document.write(s[i])
//             break
//         }
//     }
//     return
//  }
//  // driver code
//  let s = 'geeksforgeeks'
//  FirstNonRepeat(s)

// function find_FirstNotRepeatedChar(str) {
//     var arra1 = str.split('');
//     var result = '';
//     var ctr = 0;
//     for (var x = 0; x < arra1.length; x++) {
//       ctr = 0;
//       for (var y = 0; y < arra1.length; y++) 
//       {
//         if (arra1[x] === arra1[y]) {
//           ctr+= 1;
//         }
//       }
   
//       if (ctr < 2) {
//         result = arra1[x];
//         break;
//       }
//     }
//     return result;
//   }
//   console.log(find_FirstNotRepeatedChar('zabacddbec'));




// function powerSum(X, N) {
//     const p = (R, e) => {
//         const M = R - Math.pow(e, N)
//         return M < 0 ? 0 : M ? p(R, e+1) + p(M, e+1) : 1
//     }
//     return p(X, 1)
// }

// console.log(powerSum(100, 3))

// console.log('kkk')

// console.log('1st')
// setTimeout(() => {
//     console.log('2nd')
// })
// console.log('3rd')  // o/p --   1st, 3rd, 2nd

// var a = 12;
// var a = 13
// console.log(a)  // o/p --  13 


//// == using recursion :--  PRIME NUMBER :-
// function isPrime(num, div = 2) {
//     // BASE CASE: 
//     if(num <= div ) return false; // IF num less than OR equal to  2 RETURN false 
//     // IF num MOD has a remainder of zero   
//     if(num % 2 === 0) return false  // RETURN false 
//     return true; // RETURN true
//     // RECURSIVE CALL:
//     return isPrime(num)
//   }

//   console.log(isPrime(1)); //-> false//   console.log(isPrime(2)); //-> true
//   console.log(isPrime(3)); //-> true
//   console.log(isPrime(4)); //-> false

// prime number 
// function prime(number){
//     let isPrime = false
    
//     if(number < 0){
//         return 'negative number'
//     }else if( number === 1 || number === 0 ){
//         return 'not prime number'
//     }else {

//         for(let i = 2; i < number ; i++){
//             if(number%i === 0){
//                 isPrime = true;
//                 break
//             }else {
//                 isPrime = false
//             }
//         }

//     }

//     if(isPrime){
//         return `${number} its NOT a prime number`
//     }else {
//         return `${number} its prime number`
//     }
// }
// let num = 120
// let result = prime(num)
// console.log(result)


//// ----  FACTORIAL NUMBER
// let num = 5
// let fact = 1
// for(let i = 1; i <= num; i++){
//     fact *= i
// }
// console.log(fact)

// function fib(n){  ///  using recursion
//     if(n < 2){
//         return 1
//     }else{
//         return fib(n - 1) * n
//     }
// }
// let num = 5
// console.log(fib(num))


// ---- Armstrong number

// function arm(number){
//     if(number <= 0){
//         return 'no'
//     }else{
//     let numArr = String(number).split('')
//     let check = 0;
//     let mul = numArr.length 
//     for(let i = 0 ; i < mul; i++){
//         check += (Number(numArr[i])**mul)
//     }
//     if(check === number){
//         return 'yes'
//     }else{
//         return 'no'
//     }
// }}
// for(let i = 0; i < 2000; i++){
//     if(arm(i) === 'yes'){
//         console.log(i)
//     }else{
//         continue
//     }
// }


// let number;  ///  Programiz
// number = 1634; // taking a number as an input, we will check whether this number is Armstrong or not?
// let n = String(number).length; // The number of digits in the 'number' will be stored in the variable 'n'
// let sum = 0; // we will store sum of nth power of all the digits in the 'sum' variable

// for(let i=0;i<n;i++)
// {
//     let digit = number[i]-'0'; // extracting the i’th digit of 'number'
//     sum = (sum + Math.pow(digit,n)); // adding the nth power of the digit to the variable 'sum'
// }

// if(sum == number) // if sum is same as number, then it is an armstrong number
// {
//     console.log(number, "is an Armstrong Number");
// }
// else{
//     console.log(number, "is not an Armstrong Number");
// }



/// repeating and not repeating Elements in array
// let Arr = [ 'harsh', 'harsh', 'jain', 1, 2, 2 ]
// let newArr = Arr.filter((curElem, index) => {
//     // return Arr.indexOf(curElem) === index ///  Non reapeating || unique Values
//     // return Arr.indexOf(curElem) !== index ///  reapeating
// })  
// console.log(newArr)


// simple Intrest
// let p = 1000
// let r = 10
// let t = 2
// let si = ( p*t*r )/ 100
// console.log(si)

/// compound intrest 
// let principal = 10000, rate = 5, time = 2;
// let A = principal * (Math.pow((1 + rate / 100), time));
// let CI = A - principal;
// console.log("Compound interest is " + CI);


/// Pattern programming
// 12345
// 1234
// 123
// 12
// 1


// let str = '';
// let n = 5
// for(let i = 0; i < n ; i++){
//     for(let j = 1; j <= n - i ; j++ ){
//         str += j
//     }
//     str += '\n'
// }
// console.log(str) ///--- O/p String me hai 



// fib nacchi series 
// function fib(number){ // Using recursion
//     if(number < 2){
//         return number
//     }else{
//         return fib(number - 1) + fib(number - 2)
//     }
// }
// let n = 10
// for(let i = 0; i < n; i++){
//     let result =  fib(i)
//     console.log(result)
// }

// let n = 10  // USiNG For loop 
// let n0 = 0, n1 = 1
// for(let i = 0; i < n; i++){
//     console.log(n0)
//     temp = n0 + n1;
//     n0 = n1;
//     n1 = temp
// }


// let arr = [ 'harsh', 23, true ]
// let obj = { name: 'harsh', age : 23 }
// let arrJson = JSON.stringify(arr)
// let objParse = JSON.parse(arrJson)
// console.log(arrJson)
// console.log(objParse)


// function fact(n){
//     if(n < 2){
//         return n
//     }else{
//         return n * fact(n-1)
//     }
// }
// let n = 5
// console.log(fact(n))


// let orgArr = [ 1,2,3,4,5,7,8,9,10,12,13,15] 
// let arr = [...orgArr]
// let newArr = []
// while(arr.length !== arr[arr.length - 1] ){
//     for(let i = 0; i < arr.length ; i++ ){
//         if(arr[i] !== i + 1 ){
//             newArr.push(i + 1)
//             arr.splice(i, 0, i + 1)
//         }
//     }
// }
// console.log(orgArr)
// console.log(newArr)


// let n = 6; 
// let str = ""
// for(let i = 1; i <= n/2; i++){
//     for(let j = 1; j <= n/2 - i ; j++){
//         str += "#"
//     }
//     for(let j = 0; j < i*2-1; j++){
//         str += "*"
//     }
//     str += "\n"
// }
// console.log(str)
// ##*
// #***
// *****

