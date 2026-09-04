// Execution Context :- they have two component  ( same working in Global Execution context )
// 1. memory component / variable enviromemnt :- all the decalarotion of functions and variable store in-side like key value paire, 1st allocated in globally , which intially store this variable value undefined, and function value is function all cade  
// 2. code component / thread of execution :- code is executed, one line at a time , after completed a funtions its dissapears that function from this execution context



// javaScript is synchronus single threaded 

// during runing any js code two faces is created :- 1. memory creation face :- 2. is code execution face 

// in javaScript each function create its self execution context ( memory, code ),  inside its parent code component , after execution function context automatically deleted 


// Call Stack :- call stack maintain the order of execution of execution context, 1st inside run global execution context , function invoked and its context created inside call stack  and after completed this which  deleted it , which have multiple fancy names like program stack, control stack etc , at the end after completing of all execution stack is empty
// LIFO - pusp, pop

 
// getName() // run... // this function is run bcz memory component (creation face) allocating time getName takes a function code
// console.log(x); // undefined // allocating var have undefined intially
// function getName() {
//      console.log("run...");
// }
// var x = 7


// getName()  // ReferenceError: Cannot access 'getName' before initialization
// console.log(getName); // ReferenceError: Cannot access 'getName' before initialization
// const getName = () => {
//      console.log("run...");
// }


// getName()  // TypeError: getName is not a function
// console.log(getName); // undefined
// var getName = () => {
//      console.log("run...");
// }
// console.log(getName); // [Function: getName]


// console.log(getName); // undefined
// console.log(getName()); // TypeError: getName is not a function
// var getName = function(){
//      console.log("run...");
// }
// console.log(getName); // [Function: getName]
// console.log(getName()); // run...


//  javaScript Engine creates a Windows object (Global Object) which contain many properties,
// chrome have v8 js engine which is reponsible for creating a windows object 
// this is windows object
// Global space means :- top level ke variable any function global space main attach ho jate hai 
// var a = 10  // try only inSide inspect of any web side
// console.log(window.a); // if run in this web browser then o/p :- 10
// console.log(this.a); // // if run in this web browser then o/p :- 10


// let a = 10  // try only inSide inspect of any web side
// console.log(window.a); // if run in this web browser then o/p :- undefined
// console.log(this.a); // // if run in this web browser then o/p :- undefined
// console.log(a); // // if run in this web browser then o/p :- 10



// js is loosly type language 
// var a;
// console.log(a); // undefined
// a = 10
// console.log(a); // 10
// a = "Hello World"
// console.log(a); // Hello World


//  difference between not defined and undefined
// undefined :-  variable not assign a value 
// not defined :- variable is not defined means variable is not deceliared

// var a = umdefined ; // dont do this 
 

// lexical enviroment :- scop, scop chain
// scop mean :- The current context of execution. Scope in JavaScript refers to the accessibility or visibility of variables and expressions. where you can access a specific variable in lot of code in our function, scop id drectly dependet on the lexical enviroment

// scop chain :-  The scope chain is how Javascript looks for variables. When looking for variables through the nested scope, the inner scope first looks at its own scope. If the variable is not assigned locally, which is inside the inner function or block scope, then JavaScript will look at the outer scope of said function or block to find the variable. If Javascript could not find the variable in any of the outer scopes on the chain, it will throw a reference error.

// lexical scop :- So the lexical scoping means that the scope is defined at the location where the variable or function is defined, and not where they run.
// Exmaple :- 
// const userName = "Peter";
// function sayUserName(nm) {
//   console.log(userName, nm);
// //   console.log(extra); // ReferenceError: extra is not defined
// }
// function sayUserNameAgain() {
//   const userName = "Sarah";
//   let extra = "hbk"
//   // Invoke the first function
//   sayUserName(userName);
//   function fun(){
//      console.log("inside fun ==>", userName ); // Sarah
//   }
//   fun()
// }
// sayUserNameAgain(); // Peter Sarah


// lexical enviroment is created when ever execution context is created 
// lexiacal enviroment = A lexical environment in JavaScript is a data structure that stores the variables and functions that are defined in the current scope and all of the outer scopes. It is also known as the lexical scope or the lexical closure. ( local memory + lexical enviroment of parent )


// var , let and const all is hoisted 
// var hoisted in global scop but let , const hoisted and store in a separat memory scop ( inside script, hoisted in block scop )
// Temporal dead zone :- The Temporal Dead Zone (TDZ) in JavaScript refers to the period between the creation of a variable and its initialization where accessing the variable results in a ReferenceError. This occurs specifically with variables declared using let and const keywords.

// Referance Error :- if javaScript engine unble to find out a specific somthing then which give referance error 

// const b;
// b = "tyu" // sysntax error :- missing intialaizer in const error

// const b = "hjk";
// b = "tyuio" //  Type error :- assignment to constant varioble 

// const a ; // SyntaxError: Missing initializer in const declaration

// const is more strict then let , let is more strict then var 


// what is the block in javaScript 
// Block, which is wrapping a multiple statement, it is grouping of multiple statement, where javaScript aspect a one statement

// { --//-- }   this is the block, block is used to combine multiple javaScript statement in to group

// this group of multiple statement can be use in a place where javaScript aspect the single statement Example :-
// if(true) console.log("run..") // o/p :- run.. // single statement
// if(true){
//  console.log("run..")
//  console.log("second line run..")
// }   // o/p :- run.., second line run.. // multiple statement



// Block Scop :- all variables and function accessed inside block as know as block scop

// var a = 100
// let d = 200
// {
//      var a = 10;
//      let b = 12;
//      const c = 15;
//      let d = 20
//      console.log(a, b, c, d); // 10, 12, 15, 20
// }   // after ending block its histed variable is disspears 
// console.log(a); // 10 // bcz of shadowing a value is 10 not 100, bcz which both are pointing in same memory location 
// console.log(d); // 200 
// console.log(b, c); // referance error b & c is not defined


// let a = 20 // you can shadow let using a let
// {
//      let a = 100
// }



// let a = 20 // you can't shadow let using a var
// { // see its baundries connet with parent/global , var is functional scop
//      var a = 100 //  syntax error identify a has been already decelared
// }



// Each and every block its own lexical scop 
// const a = 10
// {
//      const a = 100
//      {
//      const a = 1000
//      console.log(a); // 1000
//      }
//      console.log(a); // 100
// }
// console.log(a); // 10


// All is the scop rules is working same like normal function and arraow functions 



// Closure
// function x(){
//      let a = 7;
//      function y(){
//           console.log(a);
//      }
//      return y
// }

// let z  = x()
// // --- // ---
// z()  // o/p :- 7 // x function context is dissapear then why is return 7 bcz of closure which return a fucntion with ites lexiacal enviroment



// lot of uses of clousures for Example :-
// 1. Module design pattern
// 2. Currying
// 3. Function like onces
// 4. memoize
// 5. maintain state in async world
// 6. setTimeours
// 7. Iterators
// 8. Encapsulation and Data Privacy: // Example :- 
// function createCounter(){
//      let count = 0;
//      function increment(){
//           count++;
//           return count
//      }
//      function decrement(){
//           count--;
//           return count
//      }
//      function getCount(){
//           return count
//      }
//      return {
//           increment,
//           decrement,
//           getCount
//      }
// }
// let counter = createCounter()
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.increment()); // 3
// console.log(counter.decrement()); // 2
// console.log(counter.getCount()); // 2


// 9,  Function Factory :- Closures can be used to create functions dynamically with pre-configured parameters, allowing for the creation of function factories.
// function multiplyBy(factor) {
//      return function(x) {  // x=5/10 
//        return x * factor; // factor is accessible via closure
//      };
// }
// const multiplyByTwo = multiplyBy(2);
// console.log(multiplyByTwo(5)); // Output: 10
// console.log(multiplyByTwo(10)); // Output: 20


// 10, Callback Functions :- Closures are commonly used in callback functions, allowing access to variables from the containing scope even after the outer function has finished execution.
// Example : -
// function delayMessage(message, delay) {
//      setTimeout(function() {
//        console.log(message); // message is accessible via closure
//      }, delay);
//    }
   
//    delayMessage('Hello, world!', 2000); // Output: Hello, world! (after 2 seconds)

// many more uses ....


// setTimeOut + Closure 
// function x(){
//      var i = 7;
//      setTimeout(() => {
//           console.log(i); // 2nd print
//      }, 2000);
//      console.log("jay shree ram");  // 1st print
// }
// x() // o/p :- jay shree ram, after 2 second which print value of i


// function x(){
//      var i = 7;
//      for (var i = 0; i <= 5; i++) { 
//           setTimeout(() => {
//                console.log(i); // 2nd print six times 6 step bt step bcz closure return referance not the i value  
//           }, i * 1000);    
//      }
//      console.log("jay shree ram");  // 1st print
// }
// x() 
//  For desired output use let keybord in place of var, with the let keybard which create new block every time and each block i have different different values bcz we are cahnges i value in each ittration // let is block scop which creates a new copy of i
// if interviewer ask without using var then wrap this setTimeout in function Example :-
// function x(){
//      var i = 7;
//      for (var i = 0; i <= 5; i++) {
//           function close(x){ // each func. create new execution and new value of i
//                setTimeout(() => {
//                     console.log(x); 
//                }, x * 1000);    
//           }
//           close(i)
//      }
//      console.log("jay shree ram");  // 1st print
// }
// x() 


// Data hiding in ecapsulation :--- Example :-
// function counter(){
//      var count = 0;
//      return function counter(){
//           count++
//           console.log(count);
//      }
// }
// let counter1 = counter()
// counter1() // 1
// counter1() // 2
// counter1() // 3



//  Disadvantage of closure 
// over consumption of memory, variable is not garbage collected 



// diving deep into functions  :- 
// Function Statement/Decalration :- the way of creating a function as know as function statement 
// Example :-
// function a(){
//      console.log("a called");
// }
// a()


// .... Expresion :-  assign function into variable 
// var b = function (){
//      console.log("b called");
// }
// b()


// major differance between fun. expression and statement is hoisting b treated like variable if you call function before intialization then which gives error  "Type error b is not defined"


// Anonymous Function :- when the function used like values, function without name 
// function (){ // not working gives error if you to run then store in this function inside variable 
//      console.log("b called");
// }


// Named Function Expression :-
// var b = function xyz(){
//      console.log(xyz); // we can run xyz in side this xyz function
// }
// b()
// xyz() // gives Error  xyz is not defined 


// Defferance between parameters and arguments :-

// function a(x,y){ // values takes from function arguments which called parameters
//      console.log("a called");
// }
// a(1,2) // the value which can pass inside the function as know as arguments


// First class Function/Citizens :- the ability of funtions to be use as values and pass this to another function as known as first class function 
// Example :-
// function xyz(param1){
//      console.log("runing"); // 1nd run
//      return param1()
// }
// function b(){  // b() is First class function 
//      console.log("run"); // 2st run
//      return "harsh"
// }
// console.log(xyz(b)) // 3rd harsh


// asyncromus operations not possible without the callbacks 



// calback function 
// setTimeout( function(){
//      console.log("timer");     
// }, 2000);

// function x(y){
//      console.log("x");
//      y()
// }
// x(function y(){  // y is callback function
//      console.log("y"); 
// })
// O/p :- x,y,timer



// so many event listeners are and so many closure are not good for web performance bcz which is not garbage collected 



// Yes, in JavaScript, you can achieve asynchronous behavior with the help of the event loop. The event loop is a fundamental concept in JavaScript's runtime environment that handles asynchronous operations
 
// Event Loop :-
// javaScript is single thereded, synchoronus language.  
// call stack is present inside js engine, all the execution run inside call stack 
// call stack run every thing quickly which not wait, 
// stack dont have timer, borwser have timers, also have locale storage, location, setTimeout, fetch, Dom APIs any many more thing inside browser which is called web APIs , and web APIs is not a part of javaScript

// Get webApis super powers in side the stack bcz of windows object 
// windows is global object thats by we can write web apis properties directly

// time related functions hold web apis, when there time is expire then enter callback queue & event loop , web api pass that timer function into call back queue. after event loop check callback queue and then which push this function into call stack 

// event loop check call stack if call stack is empty then event loop push call back functions from queue to stack  one by one

// fetch working is not same like setTimeout or eventListners bcz fetch return promise, fetch waiting for response from server once its get data , its not transfer this callback function into call back queue , which is transfer thi cllback func into microtask queue (" microtask queue is similar to call back queue but it has higer priority")
// microtask queue functions executed first , call back queue inside functions executed later

// in case of network calls and promises, callbacks functions goes from web apis to MICRostack queue

// Working of Event loop :-
// Event loop continuosuly monitering call stack if it is empty then which check 1st microstack queue, bcz its have higer priority if which have any call back function then which push this funtion into stack after which call back queue and push it to stack 



// ---  javaScript runtime enviroment :- which is a container that inside present js engine, call back queue, microstack queue, web apis etc. as know as js runtime enviroment. 
// js engine is the heart of js runtime enviroment
// for example :- browser and nodejs also is javaScript run time enviroment
// all web api is prensented inside javaScript run time enviroment nodejs also, but implemantation of web apis super powers is diffrent 




// Go inside javaScript Engine :-
// different browsers have different js Engins like microsoft have chakra , firefox have spidermonkey , chrome and node have v8 engine
// js engine is normal program, which have 3 major step :- 
//  1st is Parsing :- get token run it with syntax parser give ast - Abstract sysntax tree
// 2nd is Compilation  :- interpretter get ast and convert into code then give to execution, which have JIT just in time compile 
// 3rd is Execution :- heap and stack , heap used assign variable and functions , which also have garbage collector its working principle mark and sweep algorithm

// interpreter is more speed , compiler is more efficient 



// if you with setTime out, some time which break your trust   for example :-

// console.log("start");

// setTimeout(() => {
//   console.log("call back");  // this setTime out work after 10 sec bcz stack is busy on other execution  
// }, 5000);  // setTimout like 5 second ke pehle toh print ni hoga baad main kbhi v ho skta hai 

// console.log("end");
 
// let startDate = new Date().getTime()  // -- Which is main for blocking your main thred
// let endDate = startDate;
// while(endDate < startDate + 10000){
//      endDate = new Date().getTime();
// }

// console.log("While Expires");



//  if you run somthing after main thred 
// console.log("start");
// function cb(){
//      console.log("call back");
// }
// setTimeout(cb, 0); 
// console.log("end");

// OutPut is :- 
// start
// end
// call back




// Higer Order Function :- A function which take another function as arguments ir return a  function which is called higer order fucntion 

// console.log(Math.PI); // 3.141592653589793
// always code write and your working principle is DRY :- Do not repeat your self

//---  Example of higer order function
// function plus(a, b){
//      return a + b
// }
// function minus(a, b){
//      return a - b
// }
// function main(fun, a, b){
//      return fun(a, b)
// }
// console.log(main(plus, 20, 10))
// console.log(main(minus, 20, 190))


// --- create array method
// Array.prototype.calc = function(arr){
//      let outArr = []
//      for(let i = 0; i < arr.length ; i++){
//           outArr.push(arr[i] + 10)
//      }
//      return outArr
// }
// let numbers = [ 1,2,3,4,5 ]
// console.log(numbers.calc(numbers)); // [ 11, 12, 13, 14, 15 ]



// map :- which transform a each element of array and creates a new array 
// filter :- check your given condition and return filtered array  
// reduce :-  take all elements of this array and return single value of array ( which have accumulator accumulate values )
// Reduce method takes 2 arguments 1st is call back function, second is intial value of accumulator if you not give intial value then which is the 1st element of this array
// Example :-
// let red = [10,20,10,10].reduce((acc, curElem) => {
//      return acc += curElem
// }, 900)
// console.log(red); // 950















//- ------------------------------------- Before not saini -------------








// let findMax = [10,20,10,4,150,10].reduce((acc, curElem) => {
//      acc = curElem > acc ? curElem : acc
//      // acc = curElem < acc ? curElem : acc // for find min value
//      return acc 
// }, 0) // give intial value if do not give intial value and your array empty then which gives error
// console.log(findMax); // 150


// find out name only of the user which age above then 30 o/p like [ "nym", "jsn" ]
// let ar = [
//      { name : "harh", age : 30 },
//      { name : "nyn", age : 40 },
//      { name : "jsn", age : 50 }
// ]
// let res = ar.reduce((acc, curElem, index) => {
//      if(curElem.age > 30){
//           acc.push(curElem.name)
//      }
//      return acc
// }, [])
// console.log(res); // [ 'nyn', 'jsn' ]




// console.log(isNaN(123)); // false


// const restaurants = [
//      { res: "Ind", loc: "Indore", name: "farzi" },
//      { res: "Thai", loc: "Indore", name: "dnd" },
//      { res: "Thai", loc: "Indore", name: "test11" },
//      { res: "Chinese", loc: "Indore", name: "xyz" },
//      { res: "Italic", loc: "Indore", name: "abc" },
//      { res: "Ind", loc: "Indore", name: "def" },
//      { res: "Thai", loc: "Indore", name: "test" },
//      { res: "Italic", loc: "Indore", name: "rst" },
//      { res: "Chinese", loc: "Indore", name: "social" }]
// let result = {}
// for(let item of restaurants){
//      if(!result[item.res]){
//           result[item.res] = []
//      }
//      result[item.res] = restaurants.filter( (curElem, index) => {
//           return curElem.res === item.res
//      })
// }
// console.log(result);




// var fibGenerator = function*() {
//      return [1, 3]    
// };
//  const gen = fibGenerator();
//  gen.next().value; // 0
//  gen.next().value; // 1


// var fibGenerator = function*() {
//      let val = 0

//     function fun(){
//         console.log(val);
//         val++
//         return val
//      // for(let i = 0; i < val; i++){
//      //      return val
//      // }
//     }

// //     let dd = fun()
//     for(let i = 0; i < fun(); i++){
//          yield fun()
//     }
//  };
// const generator = fibGenerator();
// console.log("1st==>", generator.next()); // { value: 1, done: false }
// console.log("2nd==>", generator.next()); // { value: 3, done: false }
// console.log("3rd==>",generator.next()); // { value: undefined, done: true }




// let args = [ 'harsh', 'jain', 23 ] 
// function fun(name, lName){
// console.log(this.name, this.age ,`${name}  ${lName}`);
// }
// // fun.apply(this, args ) // o/p harsh jain // for passeing the multiple arguments we are use apply mehtod
// let obj = {name: "josh", age: 678}
// fun.apply(obj, args) // o/p :-  harsh jain
// let objMKM = {name: "joshkkkkkkk", age: 99999678}
// fun.apply(objMKM, args) // o/p :-  harsh jain



// console.log(+"a3"); // NaN 
// let arrOne = [ 4,2,3, 8, ] 
// let arrTwo = [ 4,2,3, 8]
// let res = arrTwo.every((curElem, index) => curElem === arrOne[index])
// console.log(res); // false



// let arr = [ 10,20,30, 40 ]
// console.log(arr); // [ 10, 20, 30, 40 ]
// [arr[1], arr[2], arr[3]] = [arr[2], arr[1], arr[0]] 
// console.log(arr); // [ 40, 30, 20, 10 ]


// for(var i = 0; i < 3; i++){ // i ka value last time b badhega i is 3
//      console.log(i);
//   setTimeout(() => {
//        console.log(i);
//   }, 1000 * i);
//   console.log(i);

// }


// let obj = {
//      name: "harsh",
//      nestedObj : {
//           age: 23,
//           gender: "male"
//      }
// }

// function fun(ob){
//      return ob
// }
// let newObj = fun(obj)
// newObj.name = "chnged"
// newObj.nestedObj.age = 24
// newObj.nestedObj.gender = 24
// console.log(newObj);
// console.log(obj);


// function deepCopy(obj) {
//   if (typeof obj !== 'object' || obj === null) {
//     return obj;
//   }

//   let copy = Array.isArray(obj) ? [] : {};

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       copy[key] = deepCopy(obj[key]);
//     }
//   }

//   return copy;
// }

// function deepCopy(orgArr){
//      if(typeof orgArr !== "object" || orgArr === null){
//           return orgArr
//      }

//      let copy = Array.isArray(orgArr) ? [] : {}

//      for(let key in orgArr){
//           if(orgArr.hasOwnProperty(key)){
//                copy[key] = deepCopy(orgArr[key])
//           }
//      }

//      return copy
// }

// let originalArray = [1, 2, [3, 4]];
// let deepCopyArray = deepCopy(originalArray);

// deepCopyArray[2][0] = 99;

// console.log(originalArray);    // Output: [1, 2, [3, 4]]
// console.log(deepCopyArray);    // Output: [1, 2, [99, 4]]



// let obj = {
//      name: "harsh",
//      nestedObj : {
//           age: 23,
//           gender: "male"
//      }
// }
// console.log(["nam"].hasOwnProperty());
// for (let value in obj) {
//      console.log(obj[value]);
// }
// console.log(Object.values(obj));
// obj["mkmk"] = "mkmk"
// console.log(obj);

// let obj = {
//      name: "harsh",
//      nestedObj : {
//           age: 23,
//           gender: "male"
//      }
// }

// let copiedObj = JSON.parse(JSON.stringify(obj));
// copiedObj.nestedObj.age = 343
// console.log(obj); // { name: 'harsh', nestedObj: { age: 23, gender: 'male' } }
// console.log(copiedObj); // { name: 'harsh', nestedObj: { age: 343, gender: 'male' } }


// let arr = [1,2,34,5,2,1]
// let arr = [1,2,34,5,2,1]
// let ns = new Set(arr)
// let nn = Array.from(ns)
// console.log(nn);




