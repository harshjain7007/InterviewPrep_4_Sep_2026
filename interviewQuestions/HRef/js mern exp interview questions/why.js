// in node Enviroment if you want to set this value globally 
global.cname = "ccccc" // global
globalThis.name = "kkkk" // universal way
window.name = "wwwwwwww" //  in browser
// other wise 

///////----------- Dont know why reduce method return different outputs..
let str = [2, 3, 4];
const ftStr = str.reduce(
  (accumulator, cur, index) => accumulator + Math.pow(cur, 2),
  0
); // o/p is 29 // which also squared  1st element of array

const newStr = str.reduce((accumulator, cur, index) => {
  console.log(cur, accumulator);
  // return accumulator += Math.pow(cur, 2), 0 // O/p 0
  return (accumulator += Math.pow(cur, 2)); // o/p 27
}); // o/p is 27 // which not squred 1st element of array

console.log(ftStr, newStr); // 29 27



// apply, bind, call method,  
// .
// .
// .
// .
// .
// .
// Defferance between React 19 and React 18  :- https://chatgpt.com/c/695a6662-3938-8324-ba22-0c9889c8c91c
// Key Differences: React 18 vs React 19
// Feature	React 18	React 19
// Concurrent Rendering	:-  Introduced ✔  / 	Improved ✔ 
// Storieasy

// Server Components	:-  Experimental  / 	Stable + enhanced ✔ 
// GeeksforGeeks

// Ref Handling  :- 	Needs forwardRef  / 	Direct ref prop ✔ 
// React

// Suspense	 :-  For code-split and data   /  	Better SSR & partial updates ✔ 
// Storieasy

// Hydration   :-  	Basic hydration   / 	Improved hydration + clearer errors ✔ 
// Vairix

// Metadata & SEO	 :-   Needs external libs  /	Built-in support ✔ 
// Vairix

// Optimistic UI  :- 	Manual patterns	 /  New useOptimistic hook ✔ 
// GeeksforGeeks

// Compiler & Performance  :- 	No built-in compiler  /	New compiler and optimizations ✔ 
// DE

// Summary
// ➡️ React 18 focused on:
// Concurrent Rendering
// Automatic Batching
// Basic Suspense for async UI

// ➡️ React 19 extends those with:
// Full Server Components support
// New hooks (useFormStatus, useOptimistic, use)
// Cleaner APIs (refs, context)
// Metadata & resource loading support
// Enhanced performance and hydration tools


// Redis