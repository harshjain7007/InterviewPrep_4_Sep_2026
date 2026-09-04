folders = {
  "root": {
        "docs": {
               "reports": {},
  "invoices": {}
        },
  "images": {
  "2024": {
     "name" :{ }
  },
  "2025": {}
}
}
}

// O/P. // [

// "root/docs/reports",

// "root/docs/invoices",

// "root/images/2024",

// "root/images/2025"

// ]

function pathObj(obj, path = ""){
   let result = [];
  for(let key in obj){
    const currentPath = path ? `${path}/${key}` : key
    if(Object.keys(obj[key]).length === 0 ){
      result.push(currentPath)
    }else{
      result = result.concat(pathObj(obj[key], currentPath))
    }
  }
  return result;
}

console.log(pathObj(folders))


 





console.log(Object.keys([11,12,13])) // ['1', '2', '3']



let i;
for(i=0;i<5;i++){
     setTimeout(()=>{
        console.log(i) // 5 5 5 5 5
    },0)
    // fun(i)
}

// function fun(i){
//     setTimeout(()=>{
//         console.log(i)
//     },i*2)
// }






const myTask = ms => new Promise(res => setTimeout(res, ms));
 
const tasks = [
  () => myTask(300).then(() => 1),
  () => myTask(100).then(() => 2),
  () => myTask(200).then(() => 3)
];


// Actual output of this 2,3,1. total it will take 600ms

// need to print this [1,2,3]
async function fun(tasks){
    let result = await Promise.all(
        tasks.map(task => task() )
    )
    return result
    // console.log(result) // here it will take only 300ms within [1,2,3]
}

fun(tasks).then(res => {
  console.log(res)
})






console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);


// 1
// 7
// 3
// 5
// 2
// 6
// 4


// true - true = 0
// true + true =  2
// true - "true"  = NaN
// true + "true" =  "truetrue"





// For findOut the key and values of any object :- 
//  for(let [key, value] of Object.entries(obj)){
//     console.log("key, value", key, value);
//   }


// const double = (x) => x * 2;
// [1,2,3].map(double); // double function reference is passed directly.
// [1,2,3].map((x) => double(x));  
// // both output :- [2,4,6]


// ------ if you want to pass arguments without passing argument and parameter then try this ---- :-
//  function ff(){
//      const args = arguments
//      console.log("args==>",  args);
//      return args
//  }
//  console.log(ff("harshJain", "kmkmkm")); // [Arguments] { '0': 'harshJain', '1': 'kmkmkm' }



// const KK = ( ) =>  {   // bcz arrow function referes a its parent scop
//      console.log(this.name); // undefiend
// }
// KK.call({name: "harsh"})


// function KK(){
//      console.log(this.name);  // harsh
// }
// KK.call({name: "harsh"})


// console.log(1 < 2 < 3); // true
// console.log(3 > 2 < 1); // false  || true < 1 is false bcz 1 < 1


// console.log(a); // undefined
// console.log(b); // ReferenceError: b is not defined
// var a = b = 5;

// a = 22
// var a;
// console.log(a)  // o/p --  22 

// function fun(a){    
//     console.log(a)  //  undefined
// }
// fun(a)
// console.log(a)  //  undefined
// var a = 2

// a = 22 
// let a;
// console.log(a)  // o/p --  ReferenceError: Cannot access 'a' before initialization

// var a = 12;
// var a = 13
// console.log(a)  // o/p --  13 

// let a = 12;
// let a = 13
// console.log(a)  // o/p --  SyntaxError: Identifier 'a' has already been declared

// const a = 10;
// a = 15
// console.log(a)  // o/p -- TypeError: Assignment to constant variable.

// console.log('1st')
// setTimeout(() => {
//     console.log('2nd')
// })
// console.log('3rd')  // o/p --   1st, 3rd, 2nd



// myName = "harsh ";
// console.log(myName); //  o/p 'harsh' normal mode me error ni deta 


// "use strict";
// x = 3.14; 
// console.log(x);  // o/p -- ReferenceError: x is not defined

// const x = { a: 20, b: 30 }
// const y = x
// y.a = 50
// console.log(y) // { a: 50, b: 30 }
// console.log(x) // { a: 50, b: 30 }  // bcz passed by references // non-primitive type

// let arOne = [ 1,2,3 ]
// let arTwo = arOne
// arTwo[1] = 10
// console.log("arTwo", arTwo); // arTwo [ 1, 10, 3 ]
// console.log("arOne", arOne); // arOne [ 1, 10, 3 ] // bcz passed by references // non-primitive type


// let a = 9
// let b = a
// b = 12
// console.log(a, b); // 9 12  // dependes on each other // call by value // primitive type


// const x = { a: 20, b: 30 }
// x.a = 8
// x.c = 10
// console.log(x) // { a: 8, b: 30, c: 10 }

// const x = { a: 20, b: 30 }
// x = {} // TypeError: Assignment to constant variable.

// const x = [ 1,2,3,4,5 ]
// x[3] = "edit"
// x[5] = "extra add"
// x[7] = "check"
// console.log(x) // [ 1, 2, 3, 'edit', 5, 'extra add', <1 empty item>, 'check' ]
// console.log(x[6]) // undefined


// if(true){
//     let a = 20;
// }
// console.log(a) // ReferenceError: a is not defined

// if(true){
// let a = 20;
// }
// let a = 50
// console.log(a) // 50

// if(true){
// var a = 20;
// }
// console.log(a) // 20 // inside (if and for) se var host ho jata hai but let ni hota bcz var is a funnctional scop AND function inside var hai so which hosted only function inside only


// function fun(){
//     console.log(a) //  undefined
//     var a = 50
// }
// fun()
// console.log(a) // ReferenceError: a is not defined


// for(let i = 0; i < 1; i++){
//     console.log(i)
//     let z = 10;
// }
// console.log(z) // ReferenceError: z is not defined 


////// using of "assign" and "copy" method we can easily chang value  without changing previous object values but which not copyied its nested object or arrays 

// const x =  { a: 20, b: 30  }
// let y = Object.assign({}, {...x, a : 999 }) // { a: 88, b: 30}

// let y = Object.assign({}, x)
// y.a = 9999

// let y = { ...x } // using spread operator
// y.a = 999

// console.log(y) // { a: 999, b: 30 }
// console.log(x) // { a: 50, b: 30 }


// without passing function parameter AND function  arguments which is accesse str
// function CheckVowelsDigits(){
//     console.log(str.length) // 12
//     // console.log(obj) //  ReferenceError: Cannot access 'obj' before initialization at CheckVowelsDigits
//     return str
// }
// let str = "testing12345"
// console.log(CheckVowelsDigits())  // o/p  testing12345
// let obj = 334

// const arrA = [1, 2, 3]
// const arrB = arrA; 
// arrB.push(4); 
// console.log(arrA.length); // `arrA` has 4 elements instead of 3.

// let obj = { a: 0 , b: { c: 0}};
// let deepClone = JSON.stringify(obj); // strignfy method convert object to string
// console.log(typeof obj,typeof deepClone) // object string  
 

////  ---  Array.find( () => --//-- ) method  And array.findIndex()

// const prices = [200,150,300,350,400,450,500,600];
// const findElem = prices.find((currVal) =>  currVal < 400 );
// console.log(findElem); // o/p ---  200
// console.log(  prices.find((currVal) => currVal > 1400 )  ); // o/p --  undefined
// console.log(  prices.findIndex((currVal) => currVal > 1400 )  ); // o/p -- -1
// console.log(  prices.findIndex((currVal) => currVal > 499 )  ); // o/p -- 6


// let 9 = 0 // SyntaxError: Unexpected number

// slice(start, end)
// substring(start, end)
// substr(start, length)


// charAt(position) // takes index position return this index character
// charCodeAt(position) // takes index position return utf code
// Property access [ ]


// if you want to get 2 digits after desimal then try this
// Number.toFixed(2) // which give output in string
// Math.round(number (like - 45.4632 ) * 100)/100 // 45.46
// Math.round(number (like - 45.4632 ) * 1000)/1000  // 45.463
// Math.floor, Math.ceil also work









//// DOM Introduction :- The Document Object Model (DOM) is a programming API for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.
/// Dom deal with html element The BOM is the Browser Object Model, which deals with browser components like history, location, navigator and screen


/// why we can use state in react why we don't use variable
// The dif0ference is while a “normal” variable “disappears” when their function exits, the state variables are preserved by React.


// Why state and not a local variable?
// There are two main reasons why we can’t use just any local variable.
// 1. Local variables don’t persist(retain data) between renders. When React renders a component for the second time, it renders it from scratch. It doesn’t consider any changes to the local variables.
// 2. Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

/////  add two number without using plus operator
// function add(num1, num2){
//     if(num2 < 0){
//         while(num2 !== 0){
//             num2++;
//             num1--
//         }
//         return num1
//     }else{
//         while(num2 !== 0){
//           num1++;
//           num2--;
//         }
//         return num1
//     }
// }
// let num1 = 27, num2 = 23
// console.log(add(num1, num2))


// const result = (3 ^ 6).toString(2);
// console.log(result); // ---->  Outputs: "101"

// Swap Two Numbers (Without Temp Variable)
// let a = 5, b = 10;
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a, b); // 10, 5
// “XOR ^, is used in programming for efficient bit manipulation, especially to find unique elements, swap values, and solve optimization problems.”

// ----------------  GPT --- 
// function addWithoutArithmeticOperator(a, b){
//     while(b !== 0){
//         const carry = a & b // Calculate the carry
//         a = a ^ b // XOR operation to add bits without considering the carry
//         b = carry << 1 // Left shift the carry to add it to the sum
//     }
//     return a
// }
// const result = addWithoutArithmeticOperator(5, 3);
// console.log(result); // Outputs: 8


//---- adding two numbers without Arthmetic oprator // Recursion :--- 
// we are use bitwise operators to solve this addition method

// var getSum = function(a, b) {
//     if (b == 0) {
//         return a;
//     } else {
//         return getSum(a ^ b, (a & b) << 1)
//     }
// };


// const getSum = (a,b) => b ? getSum(a ^ b, (a & b) << 1) : a;  ///--- after ES-6


// XOR operator work like if two value are same then which always gives 0 other wise which give 1
// left shift ( number << 1 )  means number * 2   
// rgiht shift ( number >> 1 ) means number / 2 // gives integer val (lower value  ) 
// And operators :- if both side value is true then which return 1 

//// ---  subtract two number without using minus operatos 
///  ~ which is complement operator 
// let num1 = 5
// let num2 = 2
// let sub
// sub = ~num2   // 1's complement 
// sub = sub + 1  //  2's complement
// sub = sub + num1
// console.log(sub)   // o/p :- 3


// --- GPT 
// function subtractWithoutMinusOperator(a, b) {
//     b = (~b) + 1; // Negate the second number using bitwise NOT (~) and add 1
//     return a + b; // Use addition to subtract the negated value
// }
// const result = subtractWithoutMinusOperator(10, 5);
// console.log(result); // Outputs: 5

// console.log(~3 + 1); // -3


////  write a query for Find Second heighest number of salary column 
// SELECT * FROM sqlpracticecol ORDER BY num DESC limit 2,1;
//2 is index number of column and 1 is length of column start from 0 and for asending write "ASC" in place of "DESC"


// //  how can we run javaScript Asynchoronously without using promises and async await keyward  
///  Ans is we can use callback function for Ex. :-
// let arr = ['a', 'b', 'c'];
// arr.forEach(function(item, index, array) {
//     console.log(item, index)  //  which is work step by step
// }); 
// console.log('after for each... ) 


// defferance between  props and state 
// While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).


// for (var i = 1; i < 5; i++) {
//     setTimeout(() => console.log(i), 1000)
// }   // 0/p ( after only 1 second which print 4 times 5 ) // 5 5 5 5

// for (var i = 1; i < 5; i++) 
//     setTimeout(() => console.log(i), 1000*i)
// }   // 0/p ( which is run propr ) // print 5 5 5 5 every time interval

// var array = [1, 2, 3, 4, 5]
// for(var i = 0; i < array.length; i++) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 1000);
// } ///  gives 5 time undefined  bcz i value is 5, if you use let in place of var then i value is 0 to 4 and its give array elements

/////---  why :- The reason being is that for loop only exits until the set condition breaks. For the above for loop,
//// setTimeout function in JavaScript usually takes a callback function as an argument. A callback function is a function that is executed after another function finishes running. In this case, it will run after for loop finishes. At this point, i is already 5 when the console.log([i]) is about to be executed. Due to the closure of JavaScript, the console.log has access to the i =5 which is defined as an outer layer of the setTimeout. Thus, when the console.log is executed, it logs undefined(array[5] = undefined) five times. 


///// solution of this which is print 1,2,3,4,5 only after 1 second
// var array = [1, 2, 3, 4, 5]
// for(var i = 0; i < array.length; i++) {
//   delay(i)
// }
// function delay(i) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 1000);
// }



////////------------------- SELF -----------------------------------------------:-

// What is “React Fiber”?
// Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM

// GPT :- 
// "React Fiber" refers to the new reconciliation algorithm and renderer architecture introduced in React version 16. React Fiber is a complete rewrite of the core algorithm that drives React's rendering. It was a major internal update that aimed to improve the performance, responsiveness, and maintainability of React applications.

// Key features and goals of React Fiber include:

// Incremental Rendering:

// React Fiber introduces the concept of incremental rendering, which allows React to split rendering work into chunks or "fibers" and prioritize rendering based on the urgency of updates. This enables React to maintain a more responsive user interface by working on rendering in smaller units and interleaving rendering with other high-priority tasks.

// Better Support for Async Rendering:

// React Fiber is designed to better support asynchronous rendering, allowing developers to control when rendering work is performed. This is particularly important for building smoother user interfaces and handling large datasets without causing janky user experiences.
// Improved Error Boundaries:

// React Fiber improves error boundaries, making it easier for developers to catch and handle errors within the component tree. This helps prevent entire components or applications from crashing due to a single error in a part of the UI.
// Scheduling and Prioritization:

// React Fiber introduces a more sophisticated scheduling system that enables React to prioritize different types of updates. It allows React to handle rendering, layout, and other tasks in a way that minimizes visual disruption and provides a more predictable rendering pipeline.
// Custom Renderers:

// React Fiber is designed to support custom renderers, making it possible to use React not only for the web but also for other platforms, such as mobile (React Native) and virtual reality. This makes React Fiber more extensible and adaptable to various environments.
// React Fiber represents a significant internal improvement to React's architecture, and its benefits are often transparent to most developers. It allows React to handle complex user interfaces more efficiently and enables the development of more interactive and responsive applications. Keep in mind that React Fiber became the default renderer in React 16, so unless you are using an older version of React, you are likely already benefiting from its features.
// :- GPT





// How Virtual DOM actually make things faster: When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again. 

// HTML events are "things" that happen to HTML elements.
// An HTML event can be something the browser does, or something a user does.


// The definition  of "this" object is that it contain the current context. 
// The this object can have different values depending on where it is placed.  
// // this object will not work with arrow function bcz arrow function is bound to class.


// // we have a creation phase and execution phase.
// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.



// // JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain.
// Scope chains establish the scope for a given function. Each function defined has its own nested scope,
// JavaScript has 3 types of scope:
// Block scope.
// Function scope.
// Global scope.


// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


/// ---- Why we need Arrow function :-
// Arrow functions, introduced in ES6, provides a concise way to write functions in JavaScript. Another significant advantage it offers is the fact that it does not bind its own this. In other words, the context inside arrow functions is lexically or statically defined. 
// Unlike other functions, the value of this inside arrow functions is not dependent on how they are invoked or how they are defined. It depends only on its enclosing context. 

// GPT :-
// Arrow functions in JavaScript provide a more concise syntax for writing function expressions, and they come with some important features that make them useful in certain scenarios. Here are some reasons why arrow functions are commonly used:

// 1. Concise Syntax:
// Arrow functions have a shorter syntax compared to traditional function expressions, making the code more concise and easier to read. This is particularly beneficial for short, one-line functions.
// Examole :- 
// Traditional function expression
// const add = function(a, b) {
//     return a + b;
//   };
  
//   // Arrow function
//   const add = (a, b) => a + b;

// 2. Lexical this Binding:
// Arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding scope. This behavior can be advantageous in scenarios where maintaining the same this value as the surrounding context is desired.
// Example :-
// function Counter() {
//     this.count = 0;
  
//     // Traditional function expression
//     setInterval(function() {
//       this.count++; // Incorrectly refers to the global object or undefined (in strict mode)
//     }, 1000);
  
//     // Arrow function
//     setInterval(() => {
//       this.count++; // Refers to the Counter instance
//     }, 1000);
//   }

  // 3. No Binding of arguments:
// Arrow functions do not have their own arguments object. Instead, they inherit the arguments object from the containing scope. This can be beneficial when you want to reference the arguments of the surrounding function.
// Example :-
// function example() {
//   // Traditional function expression
//   const func = function() {
//     console.log(arguments); // Refers to the arguments of `example`
//   };

//   // Arrow function
//   const arrowFunc = () => {
//     console.log(arguments); // Refers to the arguments of `example`
//   };

//   func(1, 2, 3);
//   arrowFunc(1, 2, 3);
// }

// 4. Implicit Return:
// When an arrow function has a single expression, the curly braces and the return keyword can be omitted, and the result will be implicitly returned.
// Example :- 
// Traditional function expression
// const square = function(x) {
//     return x * x;
//   };
  
//   // Arrow function
//   const square = x => x * x;

  // 5. Useful for Short Callbacks:
// Arrow functions are particularly useful when working with array methods or other situations where short, concise callbacks are preferred.
// Example :-
// const numbers = [1, 2, 3, 4, 5];

// // Traditional function expression
// const squared = numbers.map(function(x) {
//   return x * x;
// });

// // Arrow function
// const squared = numbers.map(x => x * x);

// While arrow functions offer concise syntax and useful features, it's essential to be aware of their limitations and use them appropriately. For example, they are not suitable for methods that require their own this context or for functions that need access to the arguments object. Additionally, arrow functions are not hoisted, so they must be defined before they are used in the code.

// :- GPT


 
// This object with normal function // see setTimeout
// function Fun(radius){
//     this.radius = radius,
//     console.log(this)
//     this.info = function(){
//         setTimeout(function() {
//             console.log(this.radius, "its Radius")  // Undefinde its radius
//         }, 500);
//     }
//     this.info()
// }
// let A = new Fun(4)
// console.log(A)

// This object with arrow function inside setTimeOut // see setTimeout
// function Fun(radius){
//     this.radius = radius,
//     console.log(this)
//     this.info = function(){
//         setTimeout(() => {
//             console.log(this.radius, "its Radius")  // 4 its radius
//         }, 500);
//     }
//     this.info()
// }
// let A = new Fun(4)
// console.log(A)

// this object not work with Constructor with arrow function // this not work with arrow function .. and .. arrow function not works with constructor
// let Fun = (name) => {
//     this.name = name
// }
// let nn = new Fun("harsh")
// console.log(nn) // TypeError: Fun is not a constructor


//// ------  currying in javaScript 
// What Is Currying in JavaScript? Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

// --- Benefit  of function currying
// Currying helps you avoid passing the same variable again and again.
// It helps to create a higher order function.

///--- Exmaple of currying
// function sum(a) {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
// console.log(sum(1)(2)(3)) // 6

//--  How Does Currying in JavaScript Work?
// function sum(a){
//     return (b)=>{
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
// let sum1 = sum(3)
// let sum2 = sum1(5)
// let result = sum2(5)
// console.log(result) // o/p - 13

// GPT :-
// currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument. The curried form of a function allows partial application, meaning you can create new functions by fixing some number of arguments of the original function.

// In JavaScript, you can implement currying using closures and function composition. Here's a simple example of currying in JavaScript

// Currying can be useful for creating more flexible and reusable functions, and it plays well with functional programming concepts like partial application and function composition. It's often used in scenarios where you want to create specialized versions of a function with some fixed parameters.
// :- GPT





// ----- Closure
// // A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). (the lexical environment). 
// In JavaScript, closures are defined as inner functions that have access to variables and parameters of outer function.
// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function.  Closures are created every time when a function is created. 

//  Why we need closure :- Exmaple 
//  bacause closure return a function with its reference of lexiacal enviroments.

// -------Advantages of closures
// They allow you to attach variables to an execution context.
// Variables in closures can help you maintain a state that you can use later.
// They provide data encapsulation.
// They help remove redundant code.
// They help maintain modular code.

// -------- Disadvantages of closures
// The variables declared inside a closure are not garbage collected. (garbage collection is the process of removing any objects which are not being used by any other objects.)
// Too many closures can slow down your application. This is actually caused by duplication of code in the memory.
////// ---  Closure Exmaples :- 
// const fun = (a) => (b) => (c) => a+b+c
// console.log(fun(5)(4)(6)) // 15

// const makeCounter = () => {
//     let count = 0
//     return () => {
//         return count++;
//     }
// }
// let counterOne = makeCounter()
// let counterTwo = makeCounter()
// console.log(counterOne()) // 0
// console.log(counterOne()) // 1
// console.log(counterOne()) // 2
// console.log(counterTwo()) // 0
// console.log(counterTwo()) // 1

// const closureFun = (a,b,c) => {
//     return {
//         firstTwo: function(){
//             return a + b
//         }, 
//         lastTwo: function(){
//             return b+c
//         },
//         totalSum: function(){
//             return a+b+c
//         }
//     }
// }
// let makeOne = closureFun(5,6,7)
// console.log(makeOne.firstTwo()) // 11
// console.log(makeOne.lastTwo()) // 13
// console.log(makeOne.totalSum()) // 18


////--- What is CallBacks :-  A callback is a function that is passed as an argument to another function that executes the callback based on the result. They are basically functions that are executed only after a result is produced. Callbacks are an important part of asynchronous JavaScript. The most common examples of callback functions in JavaScript are addEventListener, array functions (filter, map, reduce) etc.
// In JavaScript, everything (strings, arrays, functions) is considered an object. Hence, the concept of callbacks lets us pass functions as arguments to another function which will be executed later within the outer function.
// 1st Exmaple :- 
// Main function
// const mainFunction = (callback) => {
//     setTimeout(() => {
//         callback([2, 3, 4]);
//     }, 2000)
// } 
// // Add function 
// const add = (array) => {
//     let sum = 0;
//     for(let i of array) {
//         sum += i;
//     }
//     console.log(sum);
// }
// // Calling main function
// mainFunction(add);

// 2nd example :-
// function divide(x,y){
//     return x/y
// }
// function multiply(x,y){
//     return x*y
// }
// function compute(callBack, x, y){
//     return callBack(x,y)
// }
// console.log(compute(divide, 10, 5))    // 2
// console.log(compute(multiply, 10, 5)) // 50



// asynchronous :- (code will excuted contineouslly) The asynchronous style of programming focuses more on improving the performance of the application and callbacks can also be used in such situations. 



// GPT :- In JavaScript, asynchronous programming is a programming paradigm that allows you to execute code without blocking the execution of the rest of your program. This is particularly important when dealing with operations that may take some time to complete, such as fetching data from a server, reading from a file, or executing a time-consuming task. 

// JavaScript provides several mechanisms for handling asynchronous code, and two common ones are callbacks and Promises. Additionally, with the introduction of ES2017 (ES8), the async/await syntax was introduced, which provides a more concise and readable way to work with asynchronous code.

// we are used for asynchronous programming , callbacks , promises &  asyncAwait(ES6)
//  GPT :-


//// ---  What is callBackHell 
// https://www.scaler.com/topics/callback-hell-in-javascript/
//  callback Hell Example :- https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/
// Callback Hell(greeksForGreeks): Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. 
// Callback hell is a phenomenon that happens when multiple callbacks are nested on top of each other. The two common ways of escaping the callback heare are by using promises and async/await.

// Escaping the Callback Hell
// In a nutshell, the usage of promises and async/await serves as a way to escape the callback hell as mentioned above. Apart from these writing comments and splitting the code into separate components can also be tried out. So, currently most the software engineers prefer using the async/await while building applications.

// Solutions to callback hell
// There are four solutions to callback hell:
// Write comments
// Split functions into smaller functions
// Using Promises 
// Using Async/await


// GPT :- 
// Callback hell, also known as "pyramid of doom" or "callback pyramid," is a term used to describe a situation in JavaScript where multiple nested callbacks make the code difficult to read, understand, and maintain. This usually happens when dealing with asynchronous operations using callbacks, and the code structure becomes deeply nested due to the callback functions being embedded within each other.
//  GPT :-




/////----  Promises
// A promise is an object with a syntactical coating introduced by ES6 which became another way of skipping writing callbacks to implement asynchronous operations. we can use promises for handle async js. Web APIs like fetch() are implemented using the promising methodology. It makes the code more readable and is a solution to escape the callback hell.
// Promises mainly have three stages such as resolved, rejected, and pending. It makes the code more maintainable and understandable.
// promises generally have three states :
// Fulfilled: the desired action has been resolved or completed successfully.
// Pending : the desired action has neither been resolved nor been rejected and still in its initial state.
// Rejected : the desired action has been rejected causing the desired operation to fail.

// example 
// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
//       myResolve(); // when successful
//       myReject();  // when error
//     });
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );
// o/p  fullfiled - result of value 
//      pendind -  undefined
//      rejected - gives Error


///  ---- ASync Await
//   Async/await is a better way than promises to resolve the callback hell situation. By removing the .then() and .catch() methods of promises, it uses async/await keywords which not only reduces the code complexity but also makes the error handling easier as it can be written within a try/catch block.
// async function always return a promises

// // XMLHttpRequest (XHR) objects are used to interact with servers.  
// // XMLHttpRequest is used heavily in AJAX programming.






// What is AJAX and why it is used?
// AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files

// GPT :- 
// AJAX (Asynchronous JavaScript and XML) is a technology used in web development to create dynamic and interactive user interfaces. AJAX enables the asynchronous exchange of data between the client (browser) and the server without requiring a full page reload. This allows web pages to update content dynamically, enhancing the user experience by providing smoother and more responsive interactions.

// Key components of AJAX include:

// Asynchronous Operation:
// AJAX allows web applications to send and receive data asynchronously. This means that the client can make requests to the server and receive responses without having to wait for the entire page to reload.

// JavaScript:
// JavaScript is a crucial part of AJAX. It is used to make asynchronous requests to the server, handle responses, and update the DOM (Document Object Model) to reflect the changes without reloading the entire page.

// XMLHttpRequest (XHR) Object:
// XMLHttpRequest is a JavaScript object that provides functionality to interact with servers. It allows you to send HTTP requests to the server and handle the responses. While the name suggests XML, AJAX is not limited to XML and can work with other data formats, such as JSON.

// Server-Side Technologies:
// On the server side, AJAX relies on server-side technologies (e.g., PHP, Python, Ruby, ASP.NET) to handle requests and return appropriate responses. These responses are often in formats like XML or JSON.

// DOM Manipulation:
// AJAX enables dynamic updates to the DOM, allowing developers to change the content of specific elements on a web page without requiring a full page reload. This provides a smoother and more interactive user experience.

// Reasons for using AJAX in web development include:

// Improved User Experience:
// AJAX enables seamless and responsive user interfaces. With asynchronous updates, users can interact with the application without experiencing the delays associated with full page reloads.

// Reduced Server Load:
// AJAX allows for partial updates of web pages, reducing the amount of data transferred between the client and the server. This can lead to decreased server load and improved performance.

// Dynamic Content Loading:
// Web applications can dynamically load content as needed, fetching additional data from the server without reloading the entire page. This is particularly useful for single-page applications (SPAs) where the page structure remains constant, and only the content changes.

// Interactive Forms:
// AJAX is commonly used to validate and submit form data without refreshing the entire page. This provides a smoother form submission process for users.

// Real-Time Updates:
// AJAX facilitates real-time updates by allowing the client to periodically check the server for new data or receive updates through technologies like WebSockets.

// In summary, AJAX is used to create more dynamic and responsive web applications by enabling asynchronous communication between the client and the server, resulting in a better user experience and reduced server load.
// GPT -:




// var freq = Array(26).fill(0);
//   o/p =  [
//   0, 0, 0, 0, 0, 0, 0, 0,      
//   0, 0, 0, 0, 0, 0, 0, 0,      
//   0, 0, 0, 0, 0, 0, 0, 0,      
//   0, 0
// ]

// Math.round() //   nearest 
// Math.ceil() //  top  
// Math.trunc() //  down

// if you want to sort Array with sort method so try this
// let arr = [ 1,2,3,100,10 ]
// console.log(arr.sort((a, b) => a - b))
// console.log(arr) // [ 1, 2, 3, 10, 100 ]

// let arr = [ 1, 2, 3, 10, 100 ]
// arr.length = 3
// console.log(arr) // [ 1, 2, 3 ]

// console.log(  typeof(124n), typeof(Number(124n)) ) // bigint number

///---  if you want to convert push number data into array without using loop
// Array.from(String name), res => Number(res) )
 

// The linked list in Javascript is a data structure that stores a collection of ordered data that can only be accessed sequentially.


// let arr = [ 1,2]
// console.log(arr)  //  o/p - [ 1, 2 ]
// if(5 === arr.pop()){}
// console.log(arr)  // o/p - [ 1 ]

 

// use strict mode
// let a = 02; // SyntaxError: Octal literals are not allowed in strict mode.

////===  if want generator random number in between 50 to 100
// console.log(parseInt(Math.random()*(100-50)+50))

// const number = 6 
// const result = number.toString(2); // convert to binary
// console.log('Binary:' + ' ' + result);  // 110


/////--------- unidirectional & bidirectional flow of data
// What is meant by unidirectional data flow?
// Unidirectional data flow describes a one-way data flow where the data can move in only one pathway when being transferred between different parts of the program. React, a Javascript library, uses unidirectional data flow. The data from the parent is known as props.
//By enforcing this one-way flow of data, unidirectional data flow architectures can help simplify the application's logic and make it easier to reason about the flow of data within the application. It also helps prevent certain types of bugs that can arise from complex data flow patterns.

// What is bidirectional data flow in react?
// In React, data coming from a parent is called props. Angular makes use of bi-directional binding in which the data flow takes place in both directions. React doesn't support bi-directional binding to make sure you are following a clean data flow architecture

// GPT :- 
// The terms "unidirectional" and "bidirectional" flow of data refer to the direction in which data is exchanged between components or systems. These concepts are commonly used in the context of data flow within software architectures, especially in the design of user interfaces and communication patterns between different parts of an application.

// Unidirectional Data Flow:
// Definition:
// In unidirectional data flow, data has a single, well-defined path through which it flows. This means that data moves in one direction, typically from a parent component to its child components, and any changes to the data are managed in a predictable and controlled manner.

// Characteristics:

// Single Flow Direction: Data flows in a single direction, often from a parent component down to its child components.
// Predictable State Changes: Changes to the data are managed in a controlled and predictable way, usually through explicit actions or events.
// One-Way Binding: UI components are typically bound to a single source of truth, and updates to the UI are a result of changes in that source.
// Example:
// React.js is an example of a library that encourages unidirectional data flow. In React, data flows from parent components to child components through props, and changes to the data are managed through state updates.

// Bidirectional Data Flow:
// Definition:
// In bidirectional data flow, data can flow in both directions between components. This means that changes to the data in one component can directly affect another component, creating a more interconnected system.

// Characteristics:

// Two-Way Binding: Changes in one component can immediately influence the state of another component, and vice versa.
// Less Predictable State Changes: State changes may be less predictable because changes in one part of the system can have immediate effects on other parts.
// Complex Synchronization: Managing synchronization between components becomes crucial to prevent unexpected behavior.
// Example:
// Angular.js (the first version of Angular) is an example of a framework that uses bidirectional data binding. In Angular.js, changes to the model (data) automatically update the view, and changes in the view can also update the model.

// Comparison:
// Unidirectional Data Flow:

// Pros: Predictable state changes, easier to reason about, easier debugging.
// Cons: May require additional effort for synchronization between components.
// Bidirectional Data Flow:

// Pros: Immediate updates, less boilerplate code for data binding.
// Cons: Increased complexity, potential for unexpected interactions, more challenging debugging.
// The choice between unidirectional and bidirectional data flow often depends on the specific requirements of the application and the development framework or library being used. Each approach has its advantages and trade-offs, and the decision should be based on factors such as maintainability, scalability, and the complexity of the application.
// GPT -:






/// diff Between factoriFunction & constructorFun 
// we can use both for create multiple object with same properties
// The factory function pattern is similar to constructors, but instead of using new to create an object, factory functions simply set up and return the new object when you call the function.
// factory function used return keyward 
// constructor used "this" and "new" keyward   



// The String.fromCharCode() method converts Unicode values to characters.
// The String.fromCharCode() is a static method of the String object.
// EX:-  console.log(String.fromCharCode(76,44,66))


// For matrix based operations
// https://mathjs.org/docs/datatypes/matrices.html



//////////  function with same name ( methods Overloading )
// function multiplyNum(x, y, z) {  
//     return x * y * z;  
// }  
// function multiplyNum(x, y) {  
//     return x * y;  
// }  
// var result = multiplyNum(1, 2, 3);  
// console.log(result);   // o/p :- IN normal mode which gives 2 BUT in strict mode which gives ERROR -  "SyntaxError: Identifier 'multiplyNum' has already been declared"


// MethodOverrinding :- In JavaScript, method overriding refers to the ability to provide a new implementation for a method in a derived class that is already defined in its base class. Unlike some other object-oriented programming languages, JavaScript does not have a strict concept of classes in the traditional sense, but you can achieve method overriding using prototypes and inheritance


// difference between function AND methods
// A method, like a function, is a set of instructions that perform a task. The difference is that a method is associated with an object, while a function is not

// Math.abs(-6)  // "abs" function  always gives positive integer 



// webApp - singlePageApplication - withoutRealoading 
// webSite - containManyPages





// let c = 4/0
// console.log(typeof c, c) // number Infinity // which type is = number




// difference between http AND https 
// HTTPS - ( data transfor in ecrypted form but http not)
// HTTPS is HTTP with encryption and verification. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses, and to digitally sign those requests and responses. As a result, HTTPS is far more secure than HTTP.  



// Difference betbeen HTML and HTML5
// HTML5 is more complete and easier than HTML4, 
/// HTML // HTML5
// HTML does not support  video and audio tags. // it has lots of new tags like <header>, <footer>, <navy>, <Audio>, <video>, <main> etc. It also supports graphics. In the following image.
// for temporary storage use only cache memory // its have more options for temprory storage like SQL, cache, dataBase, web Storage
// Uses cookies to store data. //  Uses local storage instead of cookies
//  not possible to create shapes like circles, rectangles, triangles. // We can draw shapes like circles, rectangles, triangles.
// Works with all older browsers // all Browsers not support HTML5 only new Browsers supports this.

// HTML5 supports new types of form controls, such as date and time, email, number, category, title, Url, search, etc.
// Many elements have been introduced in HTML5. Some of the most important are time, audio, description, embed, fig, shape, footer, article, canvas, navy, output, section, source, track, video, etc.




// Some semantic means = 
//  Semantic tag Clearly defines its content. used to define different parts of a web page. Semantic tags are generally preferred for better accessibility, search engine optimization (SEO), and overall understanding of the document structure. Here are some examples of semantic tags: - 
{/* <header>: Represents the header of a document or a section.
<nav>: Represents a navigation menu.
<article>: Represents an independent piece of content within a document, such as a blog post.
<section>: Represents a generic section of a document.
<aside>: Represents content that is tangentially related to the content around it.
<footer>: Represents the footer of a document or a section. */}


// Non-semantic tag - Tells nothing about its content  The element has no special meaning at all. It represents its children. it's generally recommended to use semantic tags whenever possible for improved clarity and accessibility. Here are some examples of non-semantic tags: exmaple - 
{/* <div>: A generic container used for grouping and applying styles to block-level elements.
<span>: A generic container used for grouping and applying styles to inline elements.
<br>: Represents a line break.
<hr>: Represents a horizontal rule, often used to separate sections of content.
<strong>: Represents strong importance or emphasis, typically displayed as bold text.
<em>: Represents emphasized text, typically displayed as italicized text. */}

// It's worth noting that some tags, like <b> and <i>, have traditionally been used for formatting (bold and italic, respectively), but using <strong> and <em> is considered more semantically meaningful in modern HTML.





/// javaScirpt and v8 dont know  setTimeOut  but nodejs which is creates implementation of setTimeOut using c++ and provides it to


// Call Stack takes only excution stack like global excution and functional excution working principle like LIFO . 
// Event loop setTimeOut events ko tabhi push kerta jab callstack empty ho 


// Implicit Type Coercion 
// Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types
// let abc = "10" + 3 + 4 
// console.log(abc) // 1034
// let abc =  3 + 4  + "10"
// console.log(abc) // 710
// let abc =  3 + 4  + "10"  + 5 + 6
// console.log(abc)  // 71056  /// -- Note:- which mean which is all work left to right 
// let abc =   5 - "10" 
// console.log(abc) // -5  with Number dataType 
// let abc =   "10" - 5   
// console.log(abc) // 5 Number dataType
// let abc =   5 - "harsh" 
// console.log(abc)  // NaN 
// let abc =   5 + "harsh" 
// console.log(abc)  // 5harsh // The addition operator performs concatenation when one operand is a string,
// console.log(3 + +"8" ); // 11



// Operator Precedence in JavaScript
// 10 + 10 + 10 : LEFT TO RIGHT
// 12 - 2 * ( 15 + 5 ) : RIGHT TO LEFT
// console.log(3 +  5 * 15 / 3  - 2) // o/p :- 26  First run divide, then multification, then left to right 


/// An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.
// (function (){
//     //Do something;
//   })();


//////---  if you want to take the input from user then use prompt()
// var username = Number(prompt()); //  prompt() which is not this terminal try its in browser enviroment


///----  print odd number pyaramid 
// ###1
// ##333
// #55555
// 7777777

// let n = 7
// let str = "";
// let arr = []
// for(let i = 0; i <= n; i++ ){
//     if(i%2 !== 0){
//         arr.push(i)
//     }
// }
// for(let i = 1; i <= Math.ceil(n/2) ; i++ ){
//     for(let j = 0; j < Math.ceil(n/2) - i; j++){
//         str += "#"
//     }
//     for(let k = 0; k < i*2-1  ; k++){
//         str += arr[i - 1]
//     }
//     str += "\n"
// }
// console.log(str) 


// with out using extra array :- 
// let n = 7
// let str = ""
// for(let i = 1; i <= n; i++){
//      if(i % 2 !== 0){
//      for(let j = 0; j < Math.ceil(n/2) - Math.ceil(i/2); j++){
//            str += "#"
//      }
//      for(let k = 0; k < Math.ceil(i/2)  * 2 - 1; k++){
//             str += i 
//      }
//       str += '\n'
//      }
// }
// console.log(str);


// let n = 5;
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write('#')
//   }
//   // printing stars
//   for (let k = 0; k < 2 * i - 1; k++) {
//     process.stdout.write('*')
//   }
//   console.log();
// }
// ####*
// ###***
// ##*****
// #*******
// *********


////---- Convert binary to desimal
// console.log(parseInt("1001", 2)) // o/p :- 9 (Number)

//////---  Convert desimal to binary 
// let num = 9
// console.log( num.toString(2) ) // o/p :- 1001 (String)


///---- for fiending unicode of index charaacter ...
// for upperCase 
// "Z".charCodeAt() - 64 // 26  
// for lowerCase
// "z".charCodeAt() - 97 // 26  
