// Q1. Write a polyfill for bind function.
// https://dev.to/uddeshjain/creating-your-own-bind-polyfill-of-bind-433j
// Example :-
// let obj = {
//     name: 'Jack',
// };
// let myFunc = function () {
//     console.log(`${this.name}`);
// };
// Function.prototype.myBind = function (obj) {
//     let func = this;
//     return function () {
//         func.apply(obj);
//     };
// };
// let newFunc = myFunc.myBind(obj)
// newFunc() // Jack

// Q2. Given an expression string exp , write a program to examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
// Example:
// Input: expz = “[()]{}{[()()]()}”
// Output: Balanced
// Input: exp = “[(])”
// Output: Not Balanced

// Q3. What is the output of below program and Explain about your output
// for(let i = 1; i < 6; i++) {
//     setTimeout(()=>{
//        console.log(i);
//     },1000);
//  }
//  console.log('The loop is done!'); // o/p 1st run this and after 1 second which is print 1,2,3,4,5,6 in var case in place of let which is print 6,6,6,6,6,6

// F2F (Round 1 - DataStructure and Algorithm)
// Q4. Write a program for debounce function.
// we can use this function for improve application peformance
// Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page that requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single-threaded language.
// Example :-
// function debounce(func, delay) {
//     let timeoutId;

//     return function() {
//       const context = this;
//       const args = arguments;

//       clearTimeout(timeoutId);

//       timeoutId = setTimeout(() => {
//         func.apply(context, args);
//       }, delay);
//     };
//   }

//   // Example usage:

//   // The function you want to debounce
//   function doSomething() {
//     console.log('Doing something!');
//   }

//   // Create a debounced version of the function with a 500ms delay
//   const debouncedFunction = debounce(doSomething, 500);

//   // Call the debounced function
//   debouncedFunction();

//   // If called again within 500ms, the timer resets
//   debouncedFunction();

//   // After 500ms of inactivity, 'Doing something!' will be logged
// https://www.javatpoint.com/javascript-debouncing
// https://www.geeksforgeeks.org/debouncing-in-javascript/

// Q1. What is Doctype?
// HTML <! DOCTYPE> tag is used to inform the browser about the version of HTML used in the document. It is called as the document type declaration (DTD)
// Ans: The <!DOCTYPE html> declaration is used to inform a website visitor's browser that the document being rendered is an HTML document. While not actually an HTML element itself, every HTML document should be with a DOCTYPE declaration to be compliant with HTML standards.

// Q2. How many types of storage?
// localStorage: It is used to store data on the client-side. It has no expiration time, so the data in the LocalStorage exists always till the user manually deletes it.
// Session Storage: It is used to store data on the client-side. Data in the SessionStorage exist till the current tab is open, if we close the current tab then our data will also erase automatically from the SessionStorage.
// https://www.geeksforgeeks.org/what-are-the-different-types-of-storage-in-html5/

// Q3. If there is a for loop running over some time and your browser is not responding on that particular time. What will you do to make browser available and always responding to the user?
// Ans :-  Break up the long-running task into smaller chunks and use setTimeout or setInterval to process these chunks. This allows the browser to handle other tasks and remain responsive.
//  for(let i = 1; i < 6; i++) {
//     setTimeout(()=>{
//        console.log(i);
//        if(i === 5){
//         console.log('The loop is done!');
//        }
//     },i * 1000); // multiple i by 1000
//  }  //  o/p which is gives the disired o/p  like print each one second 1,2,3,4,5,6 this loop is done
// https://www.freecodecamp.org/news/thrown-for-a-loop-understanding-for-loops-and-timeouts-in-javascript-558d8255d8a4/

// Q4. What is Service worker
// A Service Worker is a script that runs in the background of a web application, separate from the main browser thread, and acts as a programmable proxy between the web page and the network. Service Workers are a part of the broader set of technologies known as Progressive Web Apps (PWAs), and they enable features like offline support, push notifications, and background synchronization.

// Key characteristics and features of Service Workers include:

// Background Processing: Service Workers run in the background, independent of the web page, allowing them to handle tasks such as network requests, push notifications, and caching without directly impacting the user interface.

// Network Proxy: Service Workers can intercept and handle network requests, enabling powerful strategies like caching responses, serving content from cache when offline, or dynamically managing resources based on network conditions.

// Offline Support: One of the significant use cases for Service Workers is providing offline support for web applications. By caching resources, including HTML, CSS, and JavaScript, Service Workers allow a web app to function even when the user is offline.

// Push Notifications: Service Workers enable web applications to receive push notifications even when the app is not open. This capability is crucial for engaging users and keeping them informed about updates, messages, or other relevant information.

// Background Sync: Service Workers can schedule background sync tasks to periodically synchronize data between the web application and the server. This is useful for scenarios where real-time data updates are not critical, and the synchronization can occur when the device has a stable internet connection.

// Improved Performance: Service Workers can enhance the performance of web applications by caching resources locally, reducing the need to fetch them from the network on subsequent visits.

// Q5. What is Defer and async
// defer and async are attributes used with the <script> tag in HTML to control the way scripts are loaded and executed on a web page. They affect the order in which scripts are executed and how they interact with the HTML parsing and rendering process.
// Both defer and async are used to improve the loading and execution of scripts by allowing the HTML parser to continue its work without being blocked by script execution.
// The key difference is in the order of execution and the dependency on HTML parsing. defer scripts are executed in order after HTML parsing, while async scripts can execute as soon as they are available, potentially before the HTML document is fully parsed.
// It's common to use defer when the script relies on the order of elements in the HTML document, and async when the order of execution is not critical.

// Q6. What is box model
// The CSS box model is a fundamental concept that describes the layout and rendering of elements in a web page. Each HTML element can be thought of as a rectangular box, and the box model defines how the content, padding, border, and margin of this box are calculated and interact with each other.

// The CSS box model consists of the following components:

// Content:

// The innermost part of the box that contains the actual content, such as text, images, or other media.
// Padding:

// The padding is the space between the content and the inner edges of the box. It provides internal spacing and helps control the distance between the content and the border.
// Border:

// The border surrounds the padding and content. It can have a width, style, and color, defining the visual boundary of the box.
// Margin:

// The margin is the space outside the border. It creates space between the border of one box and the border of its neighboring box. Margins do not have a background color, and they do not contribute to the size of the box.

// Q7. What is the difference between inline vs inline-block
// Compared to display: inline , the major difference is that display: inline-block allows to set a width and height on the element. Also, with display: inline-block , the top and bottom margins/paddings are respected, but with display: inline they are not.
// https://www.w3schools.com/css/css_inline-block.asp#:~:text=The%20display%3A%20inline%2Dblock%20Value,display%3A%20inline%20they%20are%20not.

// Q8. What is the difference between absolute vs relative position
// Relative - the element is positioned relative to its normal position.
// Absolute - the element is positioned absolutely to its first positioned parent.
// https://www.geeksforgeeks.org/difference-between-relative-and-absolute-position-in-css/

// Q9. How can you align a div at center

// Q10. What is the difference between svg vs canvas
// SVG (Scalable Vector Graphics) and Canvas are both technologies used in web development for rendering graphics, but they have different approaches and use cases.

// SVG (Scalable Vector Graphics):
// Graphics Description:

// Vector Graphics: SVG is based on vector graphics, which means that images are described using geometric shapes like lines, circles, and polygons. As a result, SVG graphics can be scaled to any size without losing quality.
// Markup Language:

// XML-based: SVG is an XML-based markup language. This makes it easy to create and manipulate SVG graphics using HTML and XML tools.
// Interactivity and Accessibility:

// Structured Elements: SVG elements are part of the DOM (Document Object Model), making it easy to interact with and manipulate them using JavaScript. SVG also supports adding event listeners, making it suitable for interactive graphics.
// Accessibility: SVG graphics are inherently accessible because they are part of the document structure and can include descriptive text.
// Animations:

// SMIL Animation: SVG supports declarative animations through the Synchronized Multimedia Integration Language (SMIL), allowing you to define animations using XML tags.
// Use Cases:

// Diagrams and Icons: SVG is often used for diagrams, icons, logos, and other graphics where scalability and interactivity are important.
// Canvas:
// Graphics Rendering:

// Raster Graphics: Canvas is based on raster graphics. It provides a pixel-based drawing surface where developers can draw shapes, images, and other graphics directly onto the canvas.
// Imperative Drawing:

// JavaScript Drawing API: In Canvas, graphics are drawn using JavaScript through a set of drawing API methods. It's more imperative, meaning you instruct the canvas to draw specific pixels or shapes.
// Resolution Dependence:

// Fixed Resolution: Canvas graphics are resolution-dependent, meaning that the quality of the graphics can degrade if the canvas is scaled.
// Interactivity and Accessibility:

// No DOM Elements: Unlike SVG, Canvas does not create individual DOM elements for each graphic. Interactivity must be handled programmatically, and Canvas graphics are not inherently accessible.
// Animations:

// JavaScript Animation: Animations in Canvas are typically created using JavaScript code to redraw the canvas at regular intervals.
// Use Cases:

// Games and Dynamic Graphics: Canvas is often used for dynamic graphics, games, charts, and other scenarios where pixel-level control is required.
// Choosing Between SVG and Canvas:
// Static vs. Dynamic: If you have static graphics that need to scale well and be interactive, SVG might be more suitable. If you're creating dynamic graphics, games, or applications with frequent updates, Canvas might be a better choice.

// Accessibility: If accessibility is a priority and you need graphics to be part of the document structure, SVG is a better fit. Canvas requires more effort to ensure accessibility.

// Drawing Approach: If you prefer a declarative approach where graphics are defined in the document structure, SVG is more natural. If you prefer an imperative approach where graphics are drawn using JavaScript, Canvas may be more appropriate.

// In many cases, the choice between SVG and Canvas depends on the specific requirements of the project and the type of graphics you need to create. Some projects might even use a combination of both technologies for different purposes.

// Q11. What is pseudo-class
// CSS pseudo-classes are used to add styles to selectors, but only when those selectors meet certain conditions. A pseudo class is expressed by adding a colon (:) after a selector in CSS, followed by a pseudo-class such as "hover", "focus", or "active", like this: a:hover { /* your style here */ }
// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

// Q12. Hoisting
// JavaScript hoisting is a behavior where variable and function declarations are moved, or "hoisted," to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions in your code even before they are declared.

// Here are a few key points about JavaScript hoisting:

// Variable Hoisting:

// Variable declarations using var are hoisted to the top of their scope. However, only the declaration is hoisted, not the initialization. This means that the variable is assigned the value undefined until the assignment statement is encountered.

// Example :-
// console.log(x); // undefined
// var x = 5;
// console.log(x); // 5

// In the above example, the declaration var x; is hoisted to the top of the scope, but the assignment x = 5; remains in place.

// Note: With the introduction of let and const in ECMAScript 6 (ES6), variables declared with them are still hoisted, but they are not initialized until the actual declaration statement is reached.

// Function Hoisting:
// Function declarations are fully hoisted, including both the declaration and the function definition. This allows you to use a function before it appears in the code.

// example :-
// sayHello(); // "Hello, World!"
// function sayHello() {
//   console.log("Hello, World!");
// }

// In the example above, the function sayHello is hoisted to the top, so it can be invoked before the actual declaration.

// Function Expressions:
// Function expressions (where a function is assigned to a variable) are hoisted differently. Only the variable declaration is hoisted, not the function definition.

// Not hoisted
// myFunction(); // Error: myFunction is not a function

// var myFunction = function() {
//   console.log("Hello!");
// };

// In this case, the variable myFunction is hoisted, but its assignment is not hoisted. The function can only be called after the assignment statement.

// It's important to understand hoisting to avoid unexpected behavior in your code. While hoisting can be convenient, it's generally recommended to declare variables at the beginning of their scope and to define functions before they are used for code clarity and to prevent potential issues.

// Q13. What is difference between function expression and function declaration
// function decalration -  A function declaration must have a function name. its hoisted
// function expression  which is means - we can store fun in side of variables we can not write function name , its not hoisted

// --------- GPT -------
// Function expressions and function declarations are two ways to define functions in JavaScript, and they have some key differences:
// Hoisting :-
// Function Declaration: Hoisted to the top of the enclosing scope. This means you can call the function before it is declared in the code.
// Function Expression: Not hoisted. You need to define the function before you can call it.
// Syntax:
// Function Declaration: Starts with the function keyword, followed by the function name, parameters, and the function body.
// Function Expression: Involves assigning a function to a variable or property. The function can be named (in which case it's called a named function expression) or anonymous.
// Usage:
// Function Declaration: Can be used anywhere in the code, including before the declaration.
// Function Expression: Needs to be defined before it is used; otherwise, you'll encounter an error.

// Example :-
// Function Declaration
// hoistedFunction(); // Works even though it's called before the declaration
// function hoistedFunction() {
//   console.log("I'm hoisted!");
// }
// // Function Expression
// // nonHoistedFunction(); // Would result in an error if uncommented
// var nonHoistedFunction = function() {
//   console.log("I'm not hoisted!");
// };

// Q14. Closure
// In JavaScript, a closure is created when a function is defined within another function, allowing the inner function to access variables from the outer (enclosing) function's scope. Closures are a powerful and fundamental concept in JavaScript, and they provide a way to create private variables, maintain state, and implement various design patterns.

// if(i===1 && i === 2 && i === 3)
// console.log(“yes”)
// else console.log(“yes”)
// What will you implement " i " so that we always get “yes”
// i  think its body is : -
// let i = 1
// if(i===1 && i === 2 && i === 3)
// console.log("yes")
// else console.log("no")

// Q15. Write a program for sum(1)(2)
// function sum(a){
//     return function(b){
//         return a + b
//     }
// }

// Q16. What is the difference between forEach vs map
// Q17. What the multiple ways to create object
// Q18. What is the difference between Object.create vs new
// Q19. What is the difference between Shallow copy vs Deep copy
// Q20. Write a program for shallow compare vs deep compare
// Q21. What is the difference between   vs prototype
// Q22. What is the prototype chain
// Q23. What is Prototype inheritance

// Q24. What is Promise, Why we should have to use it instead of call back
// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
// It provides a cleaner and more structured way to handle asynchronous code compared to traditional callback functions. Promises help in avoiding "callback hell" and make it easier to reason about the flow of asynchronous operations.
// Here are some key aspects of promises and reasons why they are often preferred over callbacks:

// 1. Readability and Maintainability:
// Promises provide a more structured and readable way to handle asynchronous code, especially when dealing with multiple asynchronous operations in sequence or parallel. This leads to more maintainable and less error-prone code.
// 2. Chaining:
// Promises support method chaining, allowing you to chain multiple asynchronous operations together. This results in code that flows in a more linear and sequential manner, making it easier to understand.
// 3. Error Handling:
// Promises have built-in error handling through the .catch() method, making it convenient to handle errors in one central location rather than scattered throughout the code.
// 4. Avoiding Callback Hell:
// Promises help in avoiding the "callback hell" or "pyramid of doom," a situation where multiple nested callbacks become hard to read and maintain.
// 5. Asynchronous Code Flow:
// Promises allow for a more natural flow of asynchronous code, making it easier to reason about the order of execution and dependencies between different asynchronous tasks.

// In summary, while callbacks are a valid approach for handling asynchronous operations, promises offer a more elegant and organized solution, making code more readable, maintainable, and less error-prone. As a result, promises have become the standard for handling asynchronous code in modern JavaScript.

// https://www.programiz.com/javascript/promise
// https://www.geeksforgeeks.org/javascript-promises/
// Key Difference Between Callbacks and Promises
// A key difference between the two is when using the callback approach, we’d normally just pass a callback into a function that would then get called upon completion in order to get the result of something. In promises, however, you attach callbacks on the returned promise object.
// Promise, Why we should have to use it instead of call back
// JavaScript promises let your async call return a value like synchronous function, that value is an object that promises success or failure value. This small change make it really powerful to use.
// for protecting from callBack hell we use promises instead of callbacks.
// One common issue for using the callback approach is that when we end up having to perform multiple asynchronous operations at a time, we can easily end up with something that is known as callback hell, which can become a nightmare as it leads to unmanageable and hard-to-read code. In other words, it’s every developer’s worst nightmare.

// Q25. What is Async await
// async and await are features in JavaScript that simplify the process of working with asynchronous code, especially when dealing with promises. They were introduced in ECMAScript 2017 (ES8) to make asynchronous programming more readable and concise.
// Benefits:
// Readability:

// Async/await syntax makes asynchronous code look more like synchronous code, improving readability and maintainability.
// Error Handling:

// It simplifies error handling by allowing the use of traditional try/catch blocks.
// Sequencing:

// It facilitates the sequencing of asynchronous operations in a way that mirrors synchronous code.
// Avoiding Callback Hell:

// It helps avoid "callback hell" by allowing code to be written in a more linear and structured way.

// Q26. What is event capturing vs event bubbling
// Q27. How to enable event capturing
////    element.addEventListener(event, handler, true);  By default, it is set to bubbling: false .

// Q28. What is the difference between prevent default vs stop propagation

// Q29. Since both promise and setTimeout is async function which will execute first if both is available in queue at time T.
// setTimeout delays the execution of the code block by a specific time duration. Promises are an interface to allow async execution of code.
// A promise allows code to continue executing while you wait for another action to complete. Usually this is a network call. So anything in your then() call will be executed once the network call (or whatever the promise is waiting for) is completed. The time difference between the start of the promise and the resolution of the promise entirely depends on what the promise is executing, and can change with every execution.
// The reason the promise is executing before your timeout is that the promise isn't actually waiting for anything so it resolved right away.

// Q30. what is job queue
// The job queue is a component of the JavaScript runtime environment that manages the execution of tasks, particularly those related to asynchronous operations. It is closely related to the event loop and plays a crucial role in handling callbacks, promises, and other asynchronous code.
// The job queue is a component of the JavaScript runtime environment that manages the execution of tasks, particularly those related to asynchronous operations. It is closely related to the event loop and plays a crucial role in handling callbacks, promises, and other asynchronous code.

// Here's a brief overview of how the job queue works within the context of the event loop:

// Event Loop:

// The event loop is a continuous process that constantly checks the message queue for messages (tasks) to execute.
// Execution Context:

// When a script is run, it creates a global execution context. Asynchronous tasks, such as callbacks from events or resolved promises, create additional execution contexts.
// Message Queue:

// The message queue stores messages (tasks) that need to be processed. Messages are typically generated as a result of asynchronous operations or events.
// Job Queue:

// The job queue (or microtask queue) is a special queue that has higher priority than the regular message queue. It's used for tasks that need to be executed before the next rendering or user input handling.
// How it Works:
// When an asynchronous operation is completed, a corresponding task is added to the job queue. The event loop checks the job queue before checking the regular message queue, ensuring that these tasks are executed as soon as possible

// Example :-
// console.log('Start');
// setTimeout(() => {
//   console.log('Timeout callback');
// }, 0);
// Promise.resolve().then(() => {
//   console.log('Promise resolved');
// });
// console.log('End');

// OutPut :-
// Start
// End
// Promise resolved
// Timeout callback

// Use Cases:
// Promise Resolution:

// When a promise is resolved or rejected, the associated callbacks (.then() or .catch()) are added to the job queue.
// Mutation Observers:

// Mutation observers, which monitor changes to the DOM, schedule their callbacks in the job queue.
// Process Next Tick:

// Certain libraries or environments provide functions like process.nextTick (in Node.js) that schedule tasks in the job queue.
// Understanding the job queue is important for writing efficient and predictable asynchronous JavaScript code. It helps ensure that certain tasks are executed in a timely manner and provides a mechanism for managing the flow of asynchronous operations.

// Q31. ES6 feature - What is arrow function and when we have to use it, How it is different from normal function
// Arrow functions are a concise way to write anonymous functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions. Arrow functions are often used in scenarios where a short, simple function is needed.

// Syntax:
// The basic syntax of an arrow function is as follows:

// Example :-
// No parameters
const arrowFunction = () => {
  // Function body
};

// Single parameter (parentheses are optional if there's only one parameter)
const addOne = (x) => x + 1;

// Multiple parameters
const sum = (a, b) => a + b;

// Implicit return for a single expression (no curly braces needed)
const square = (x) => x * x;

//   Key Characteristics:
// Conciseness:

// Arrow functions are often more concise than traditional function expressions, especially for short functions with simple logic.
// this Binding:

// One notable difference is that arrow functions do not have their own this context. Instead, they inherit this from the enclosing scope. This can be beneficial in certain scenarios, especially when dealing with callback functions or methods inside objects.

// Implicit Return:

// Arrow functions allow for implicit return if there's only a single expression in the function body, without the need for the return keyword.

// When to Use Arrow Functions:
// Shorter Functions:

// Arrow functions are well-suited for short functions, especially when the function logic is concise.
// Avoiding this Issues:

// Arrow functions are useful when you want to maintain the lexical scoping of this (inheriting this from the enclosing scope) rather than having a new this context.
// Callback Functions:

// They are commonly used for callback functions, where the concise syntax can make the code more readable.
// Functional Programming:

// Arrow functions fit well with functional programming concepts, making code more expressive and focused on transformations.
// When Not to Use Arrow Functions:
// Methods in Objects:

// Avoid using arrow functions for object methods when you need to access the object's properties or methods via this. Traditional functions are preferable in this case.

// Constructors:

// Arrow functions cannot be used as constructors. If you need a constructor function with new, use a traditional function.

// In summary, arrow functions are a concise and powerful addition to JavaScript, but their usage should be considered based on the specific context and requirements of your code. They are particularly handy for short, anonymous functions and situations where this scoping behavior aligns with the lexical scoping of the surrounding code.
