// --------------  Why virtual DOM more faster than Real DOM? -----------
// Minimizing DOM Manipulations:

// Directly manipulating the real DOM is a costly operation in terms of performance. Each change to the DOM triggers a reflow and repaint, impacting the rendering performance. The virtual DOM provides a lightweight representation of the DOM in memory, and changes are first applied to the virtual DOM.

// Batching Updates:
// When changes are made in a virtual DOM, they are not immediately applied to the real DOM. Instead, these changes are batched and optimized. The framework can then perform a diffing algorithm to determine the most efficient way to update the real DOM.

// Selective Rendering:
// The virtual DOM allows the framework to determine precisely which parts of the real DOM need to be updated. Instead of updating the entire DOM tree, only the specific elements affected by the changes are updated.

// Reduced Browser Repaints:
// By calculating the optimal set of changes needed and applying them in a batch, the virtual DOM reduces the number of times the browser needs to repaint the screen. This is particularly important for complex web applications with frequent updates.

// Optimizing Network Operations:
// In single-page applications, data often comes from a server. The virtual DOM allows the framework to optimize network operations by batching and combining multiple changes into a single update, reducing the number of requests made to the server.

// Framework-Specific Optimizations:
// Frameworks like React use additional optimizations, such as a reconciliation algorithm, to minimize the number of actual changes needed to update the DOM. This helps in further improving performance

// // // // ---------------
// Single thereded :- One task run at a time
// Non blocking :-  run continuously
// asyncronus :- many thing occur at a time
// v8 is javaScript runTime which has a call stack and Heap
// heap is used for memory allocation & Stack hold the execution
// DOM , xml , setTimeout , hrrpRequest dont exicts in v8 source code

// call Stack :- This example demonstrates the LIFO (Last In, First Out) nature of the call stack. The call stack is a critical concept for understanding how function calls are managed in JavaScript and other programming languages.

// javaScript run only one task at a time but js some opertaions take lot of time but which is not good for web apps etc  so we can use asyncronus js  ( run multiple task at a time )

// Task Queue :- js run one thing at a time, the rest are queued in task queue waiting to executed, these all task will be pushed in stack for excution.

// Event Loop :-  javaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queured sub-tasks
// which pushes the tasks from the queue to the call stack

// setTimeOut is web API, fetch is also API

// // 5️⃣ Hoisting in JavaScript

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.

// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword
// // instead of var. (The other difference is that variables declared
// // with let are local to the surrounding block, not the entire function.)

// // Lexical Scoping means Now, the inner function can get access to
// // their parent functions variables But the vice-versa is not true.

// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references
// // to its surrounding state (the lexical environment).

// // In other words, a closure gives you
// // access to an outer function’s scope from an inner function.

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// // it same like lexical scoping

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);

// Currying :- Function currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument. The curried function returns a new function with each argument until all the arguments are provided, at which point the final result is returned.
// Exmple :-

// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
// sum(5)(3)(8); // 16

// const sum = (num1) => (num2) => (num3) => num1+num2+num3;
// const sumOne = sum(2)
// const sumTwo = sumOne(3)
// const final = sumTwo(4)
// console.log(final); // 9

// // 8️⃣: CallBack Hell :- Callback hell, also known as the "pyramid of doom" or "callback pyramid," is a term used to describe a situation in JavaScript where multiple nested callback functions make the code hard to read and maintain. This typically occurs in asynchronous code where operations depend on the completion of other asynchronous tasks, leading to deeply nested callback functions.

// setTimeout(()=>{
//     console.log(`1️⃣ works is done`);
//     setTimeout(()=>{
//         console.log(`2️⃣ works is done`);
//         setTimeout(()=>{
//             console.log(`3️⃣ works is done`);
//             setTimeout(()=>{
//                 console.log(`4️⃣ works is done`);
//                 setTimeout(()=>{
//                     console.log(`5️⃣ works is done`);
//                     setTimeout(()=>{
//                         console.log(`6️⃣ works is done`);
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// To mitigate (km kerna) callback hell, developers often use techniques such as:
// 1. Named Functions:
// Define functions outside the callback chain and reference them by name in the callbacks. This can help improve readability.

// 2. Promises:
// Use Promises to handle asynchronous code in a more structured way. Promises allow you to chain operations with .then() and handle errors with .catch(), improving readability and avoiding deep nesting.

// 3. Async/Await:
// With the introduction of async/await in ECMAScript 2017 (ES8), asynchronous code can be written in a more synchronous style, making it easier to read and maintain.

// Using Promises or async/await can help flatten the callback structure and make the code more readable and maintainable. It's important to choose the approach that best fits the requirements and the JavaScript environment in which you are working.

// // 7️⃣ AJAX Call using XMLHttprequest

// // how to handled with the events and callback

// // XMLHttpRequest (XHR) objects are used to interact with servers.
// // You can retrieve data from a URL without having to do a full
// // page refresh. This enables a Web page to update just part
// // of a page without disrupting what the user is doing.
// // XMLHttpRequest is used heavily in AJAX programming.

// -------------- WebMobrile  -----------
const restaurants = [
     { res: "Ind", loc: "Indore", name: "farzi" },
     { res: "Thai", loc: "Indore", name: "dnd" },
     { res: "Thai", loc: "Indore", name: "test11" },
     { res: "Chinese", loc: "Indore", name: "xyz" },
     { res: "Italic", loc: "Indore", name: "abc" },
     { res: "Ind", loc: "Indore", name: "def" },
     { res: "Thai", loc: "Indore", name: "test" },
     { res: "Italic", loc: "Indore", name: "rst" },
     { res: "Chinese", loc: "Indore", name: "social" }]

let res = restaurants.reduce((accum, elem, ind) => {
  if(!accum[elem.res]){
    accum[elem.res] = [ elem ]
  }else{
    accum[elem.res] = [ ...accum[elem.res], elem ]
  }
  return accum
}, {})
console.log("res =>" , res);


// ---------------- Webllisto --------
function fun(str) {
  let result = {};
  for (let i of str) {
    if (!result[i]) {
      result[i] = 0;
    }
    result[i] = ++result[i];
  }
  return result;
}
var strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(fun(strings)); // { apple: 3, banana: 2, orange: 1 }

// ------------- Rashail -------------
function fun(str) {
  let arr = str.split(" ").join("").split("");
  let resultObj = {};
  for (let i of arr) {
    if (!resultObj[i]) {
      resultObj[i] = 0;
    }
    resultObj[i] = ++resultObj[i];
  }
  return resultObj;
}
let str = "An apple a Day keeps Doctor away";
console.log(fun(str));

// ------------ Deqode Interview JS -----------------
// 1st Javascript Question :--
/* Get the second most frequently occurring element, including the frequency count; if two numbers share the same frequency, the smallest one will be selected.*/

function mostRepeatedAndFreq(arr) {
  let countWith = {};
  // Count occurrences of each element
  arr.forEach((num) => {
    countWith[num] = (countWith[num] || 0) + 1;
  });

  // console.log(countWith); // { '1': 1, '2': 1, '4': 3, '6': 4, '7': 3, '9': 1, '10': 1 }

  // Get frequencies and sort them
  let frequencies = Object.values(countWith).sort((a, b) => b - a);

  // Get the second highest frequency
  let secondHighestFreq = frequencies[1];

  // Find the element corresponding to the second highest frequency
  let element = Object.keys(countWith).find(
    (key) => countWith[key] === secondHighestFreq
  );

  return [parseInt(element), secondHighestFreq];
}

const sortedArray = [1, 2, 4, 4, 6, 6, 4, 6, 6, 7, 7, 9, 7, 10];
const result = mostRepeatedAndFreq(sortedArray);
console.log(result); // [4, 3]

// 2nd JavaScript Question :--
/*
Input: [{id:1, value: 20},{id: 2, value: 25},{id:3, value: 2},{id: 1, value: 4},{id: 2, value: 6}]

Output: [{id:1, value: 24},{id: 2, value: 31},{id:3, value: 2}]
*/

const input = [
  { id: 1, value: 20 },
  { id: 2, value: 25 },
  { id: 3, value: 2 },
  { id: 1, value: 4 },
  { id: 2, value: 6 },
];
const merge = () => {
  let result = [];
  result = input.reduce((acc, curElem) => {
    let ind = acc.findIndex((ele) => ele.id === curElem.id);
    if (ind === -1) {
      acc.push(curElem);
    } else {
      acc[ind].value += curElem.value;
    }
    return acc;
  }, []);
  return result;
};
console.log("Output:  ", merge(input));

// Optimize solution. :- 
let ar = [{id:1, value: 20},{id: 2, value: 25},{id:3, value: 2},{id: 1, value: 4},{id: 2, value: 6}]
let re = Object.values(
  ar.reduce((acc, curr) => {
    if (!acc[curr.id]) {
      acc[curr.id] = { ...curr };
    } else {
      acc[curr.id].value += curr.value;
    }
    return acc;
  }, {})
);



// ----------- Alit Infortech ----------
import { useEffect, useState } from "react";

export default function App() {
  const [color, setColor] = useState("");

  useEffect(() => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    setColor("#" + red.toString(16) + green.toString(16) + blue.toString(16)); // .toString(16) representing its hexadecimal (base 16) value
  }, []);

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen !</h2>
      <h1>{color}</h1>
    </div>
  );
}
