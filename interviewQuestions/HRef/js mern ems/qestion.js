///  difference between null and undefined in JavaScript?
// Undefined means the variable has been declared, but its value has not been assigned. 
// Null is an assignment value. It can be assigned to a variable as a representation of no value.  Null means an empty value or a blank value.

// Type:
// Null: Object 
// Undefined: undefined

// examle  ; null -  you have a bag but inside nothing  ,, undfined - you dont have bag  


/// difference between synchronous and asynchronous programming in JavaScript?
// Asynchronous programming is a multithreaded model that’s most applicable to networking and communications. Asynchronous is a non-blocking architecture, which means it doesn’t block further execution while one or more operations are in progress.

// Synchronous is known as a blocking architecture and is ideal for programming reactive systems. As a single-thread model, it follows a strict set of sequences, which means that operations are performed one at a time, in perfect order. While one operation is being performed, other operations’ instructions are blocked. The completion of the first task triggers the next, and so on.



///////////
//   4 ways to create object
// 1 using an object literal.    Ex - let obj = {}
// 2 By creating instance of Object.    Ex - var objectname=new Object();  
// 3 By using an Object constructor.   Ex -
// function Constur(name){
//     this.name = name
// }
// let obj = new Constur("harsh")
// console.log(obj)
// 4 by using Object.create() method


////////  higher-order functions in JavaScript?
//  A Higher-Order function is a function that receives a function as an argument or returns the function as output.
//  Ex -  Map, Reduce, Filter, ForEach etc


/////// the difference between const and let in JavaScript?
// Scope  - Var is a function scope. Let and Const is block Scope.  
// Hosting allowed in Var ,  let and const variables are hoisted, only they are hoisted without a default initialization
// hosting is not allowed in let & const , which host in private scope


////// Hosting in javaScript  
// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.



//// closure in javaScript 
// A closure is a feature of JavaScript that allows inner functions to access their outer scope. In other words, a closure gives you access to an outer function's scope from an inner function. They provide data encapsulation.


/////// Event bubbleing in javaScript  
// Event bubbling is a method of event propagation in the HTML DOM. Bottom To Top , For break propogation- "event.stopPropagation()" 


//////  What is Event loop in javaScript ..//See in MP
// "event loop - message Queue se uthake kab excution me rakhna task ko" see mp thapa 
// JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java. 
// to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it.
// The event loop is a single-threaded loop that watches the call stack and checks if there's any code to run in the task queue. If the call stack is empty and there're callback functions in the task queue, then they'll be dequeued from the task queue and run by pushing them to the call stack.

///  -> callBack Queue -> Call Stack -> settimeout function  (web Apis) 
// Ex :--  // setTimeout(() => {
//     console.log(" 2 second set time out ")
// }, 2000);

// console.log("hi")

// setTimeout(() => {
//     console.log(" 4 second set time out ")
// }, 4000);

// console.log("how are you")

//////  Stacks And Queue Data Structure  // SELF
// Stacks and Queues are always the most discussed data structures. This is because they both have opposite operations. Stack follows the pattern LIFO — Last In First Out whereas Queues uses FIFO — First In First Out. 
//  A stack is a linear data structure, which means that all elements are arranged in sequential order. 
// A stack data structure has two fundamental operations:
// 1. push—This operation is responsible for inserting or pushing a new element to the stack.
// 2. pop—This operation is responsible for removing the most recent element from the stack.
// A queue is a linear structure of sequential and ordered elements, similar to a stack, with a difference that it works based on the principle of first in first out (FIFO).
// A queue data structure has two fundamental operations:
// enqueue—This operation is responsible for inserting or pushing a new element to the queue.
// dequeue—This operation is responsible for removing the oldest element from the queue.



///////  How do you handle errors in JavaScript?
// JavaScript provides error-handling mechanism to catch runtime errors using try-catch-finally block,
// try: wrap suspicious code that may throw an error in try block.
// catch: write code to do something in catch block when an error occurs. 
// finally: code in the finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.


// GPT :-
// In JavaScript, error handling is crucial for writing robust and reliable code. Errors can occur during the execution of a program, and it's important to gracefully handle them to prevent unexpected issues. Here are some common techniques for handling errors in JavaScript:

// Try-Catch Statement:
// The try-catch statement is used to handle exceptions (errors) that might occur within a block of code. The try block contains the code that might throw an exception, and the catch block handles the exception if it occurs.

try {
    // Code that might throw an exception
  } catch (error) {
    // Handle the exception
  }

//   Throw Statement:
// You can use the throw statement to create a custom error. This is useful when you want to signal that a certain condition has occurred, and you want to handle it in a higher-level scope.

if (someCondition) {
    throw new Error('Custom error message');
  }

//   Finally Block:
// The finally block is used to execute code, regardless of whether an exception is thrown or not. This block is optional, but if present, the code within it will always be executed.

try {
    // Code that might throw an exception
  } catch (error) {
    // Handle the exception
  } finally {
    // Code that always executes
  }

//   Error Object:
// The Error object is a built-in object in JavaScript that provides information about an error. When an exception is thrown, an Error object is created with details about the error, such as the error message.

try {
    // Code that might throw an exception
  } catch (error) {
    console.error(error.message);
  }

//   Custom Error Classes:
// You can create custom error classes by extending the built-in Error class. This allows you to create more specific error types for different scenarios in your application.

try {
    throw new CustomError('This is a custom error');
  } catch (error) {
    console.error(error.name + ': ' + error.message);
  }

//   Promise Error Handling:
// When working with promises, you can use the .catch() method to handle errors in the asynchronous code.

someAsyncFunction()
  .then(result => {
    // Handle the result
  })
  .catch(error => {
    // Handle the error
  });

//   These are some of the fundamental techniques for handling errors in JavaScript. The specific approach you choose depends on the nature of your code and the type of errors you want to handle.








///////////////
// Javascript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming.

////////////
// http - hyper tax transfer protocol , data secure ni hota hai 
// http -  hyper tax transfer protocol secure , incryption hota Encrypt data hota hai ,, raste me if hack v ho jayega toh samjh ni aayega