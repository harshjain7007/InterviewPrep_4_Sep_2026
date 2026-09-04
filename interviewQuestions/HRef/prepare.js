

// 2nd round Question TekSystem...
// .
// .
// .
// .
// 1. How does the <script> tag work in HTML & JavaScript?

// The <script> tag is used to include or write JavaScript in an HTML page. The browser reads the script and executes it.

// <script src="app.js"></script>

// Or inline:

// <script>
//   console.log("Hello");
// </script>

// Important attributes:

// defer → Downloads in parallel and executes after HTML is parsed. (Recommended)
// async → Downloads in parallel and executes as soon as it's ready.

// .
// .
// .
// .
// 2. What are the ways to link CSS?
// 1. Inline CSS
// <h1 style="color:red;">Hello</h1>
// 2. Internal CSS
// <style>
// h1 {
//   color: red;
// }
// </style>
// 3. External CSS (Best Practice)
// <link rel="stylesheet" href="style.css">


// .
// .
// .
// .
// 3. What is a Media Query?

// Media queries make a website responsive by applying CSS based on screen size.

// Example:

// @media (max-width: 768px) {
//   .container {
//     flex-direction: column;
//   }
// }

// Use cases:

// Mobile layout
// Tablet layout
// Desktop layout

// .
// .
// .
// .
// 4. Grid Layout vs Flexbox
// Flexbox	Grid
// One-dimensional	Two-dimensional
// Row or column	Rows and columns
// Best for components	Best for page layouts
// Easier alignment	More control over layout

// Example:

// Navbar → Flexbox
// Dashboard layout → Grid

// .
// .
// .
// .
// 5. Debouncing in Vanilla JavaScript (Practical)

// Debouncing delays a function until the user stops triggering an event.

// Example: Search input

// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

// const search = debounce(() => {
//   console.log("Searching...");
// }, 500);

// document.getElementById("search").addEventListener("input", search);

// Use cases:

// Search box
// Resize event
// Scroll event
// API calls

// .
// .
// .
// .
// 6. Difference between <h1> and <h2>
// <h1> → Main heading of the page (highest priority).
// <h2> → Subheading under <h1>.

// Example:

// <h1>React Tutorial</h1>

// <h2>Introduction</h2>

// <h2>Hooks</h2>

// SEO & Accessibility:

// Use one <h1> for the main page title.
// Use <h2> for major sections.
// Follow a logical heading hierarchy (h1 → h2 → h3).




//___________ TekSystem 1st round Answer:-
// .
// .
// .
// .
// .
// .
// .
// Form Controls: 
// Interview Answer (Short)

// HTML form controls are elements used to collect user input. They include input fields, radio buttons, checkboxes, dropdowns, textareas, and buttons. They help users enter data, and when the form is submitted, the browser sends that data to the server for processing.

// Important Form Controls
// Control	  Purpose
// text	  Single-line text
// password	Hidden text
// email	  Email validation
// number	  Numeric values
// radio	  Single selection
// checkbox	Multiple selection
// textarea	Multi-line text
// select	  Dropdown list
// file	  File upload
// date	  Date selection
// submit	  Submit form
// reset	  Reset form

// .
// .
// .
// .
// what about tags related to Web accessibility ? explain why we need why we can use

// Why do we need Accessibility?
// 1. Everyone can use the website

// Accessibility makes websites inclusive.

// 2. Better SEO

// Search engines understand semantic HTML better.

// 3. Legal requirements

// Many countries require accessible websites.

// 4. Better user experience

// Keyboard navigation and clear structure help all users.


// Important Accessibility Tags
// 1. <label>

// Associates text with a form field.

// <label for="email">Email</label>
// <input id="email" type="email">
// Why?
// Screen readers announce the label.
// Clicking the label focuses the input.

// .
// .
// .
// .
// .
// More questions is related to HTML it self WCAG standards, accessibility, semantics, browser behaviour, and web fundamentals ?
// HTML fundamentals
// Semantic HTML
// Accessibility (WCAG)
// Browser behavior
// Forms
// SEO
// Performance



// 1. What is Semantic HTML?

// Semantic tags describe the meaning of the content.

// Examples:

// <header>
// <nav>
// <main>
// <section>
// <article>
// <footer>
// Why use it?
// Better accessibility
// Better SEO
// Easier maintenance
// Screen readers understand the page structure


// 2. What is WCAG?

// WCAG stands for Web Content Accessibility Guidelines.

// It provides standards to make websites accessible.

// Four principles:

// POUR
// Perceivable
// Operable
// Understandable
// Robust

// Example:

// Images should have alt text.
// Users should navigate using the keyboard.
// Content should be easy to understand.


// 3. Why is alt important?
// <img src="dog.jpg" alt="Brown dog">
// Screen readers read it.
// Improves accessibility.
// Helps when images fail to load.
// Improves SEO.


// 4. Difference between id and class
// id	class
// Unique	Reusable
// One element	Multiple elements
// #id	.class


// 5. What happens when you type a URL in the browser?
// DNS lookup.
// Browser finds IP address.
// TCP connection.
// HTTPS handshake.
// Request sent.
// Server returns HTML.
// Browser parses HTML.
// Downloads CSS and JS.
// Builds DOM and CSSOM.
// Paints the page.

// This is a very common interview question.


// 6. What is the DOM?

// DOM stands for Document Object Model.

// The browser converts HTML into a tree structure.

// <body>
//    <h1>Hello</h1>
// </body>

// JavaScript interacts with this DOM.



// 7. What is the difference between DOM and HTML?

// HTML:

// <h1>Hello</h1>

// DOM:

// document.querySelector("h1")

// HTML is the source code.
// DOM is the browser representation.



// 8. Why should there be only one <h1>?

// Because it represents the main heading.

// Good:

// <h1>Products</h1>
// <h2>Mobile</h2>
// <h2>Laptop</h2>

// This creates a proper document structure.



// 9. What is the difference between <section> and <div>?
// <section>

// Semantic.

// <section>
//    <h2>Services</h2>
// </section>
// <div>

// Non-semantic.

// <div class="services"></div>


// 10. What is the difference between <article> and <section>?
// <article> = independent content.
// <section> = grouped content.

// Examples:

// Blog post → article
// About section → section



// 11. What is progressive enhancement?

// Build the basic HTML first.

// Then:

// Add CSS.
// Add JavaScript.

// The page should still work if JavaScript fails.



// 12. What is graceful degradation?

// The site is built with advanced features but still works in older browsers.



// 13. What is the purpose of lang?
// <html lang="en">

// Helps:

// Screen readers
// Search engines
// Translation tools



// 14. Why use button instead of div?

// Bad:

// <div onclick="save()">Save</div>

// Good:

// <button>Save</button>

// Buttons:

// Support keyboard.
// Support screen readers.
// Are accessible by default.
// 15. What is keyboard accessibility?

// Users should navigate using:

// Tab
// Enter
// Space

// Every interactive element should be accessible without a mouse.

// 16. What is ARIA?

// ARIA = Accessible Rich Internet Applications.

// Example:

// <button aria-label="Close">
//    X
// </button>

// Used when HTML alone is insufficient.

// 17. What is the difference between display:none and visibility:hidden?
// display:none	visibility:hidden
// Removed from layout	Keeps space
// Not visible	Hidden
// No space occupied	Space occupied
// 18. What is the purpose of the viewport meta tag?
// <meta name="viewport"
//       content="width=device-width, initial-scale=1.0">

// Makes websites responsive on mobile devices.

// 19. What is the difference between block and inline elements?
// Block:
// <div>
// <p>
// <h1>

// Take full width.

// Inline:
// <span>
// <a>
// <strong>

// Take only required width.

// 20. What is the difference between cookies, localStorage, and sessionStorage?
// Feature	Cookie	localStorage	sessionStorage
// Size	4KB	5-10MB	5MB
// Sent to server	Yes	No	No
// Expiration	Configurable	Permanent	Tab close
// Frequently Asked HTML Interview Questions
// What is semantic HTML?
// What is WCAG?
// What is accessibility?
// What is ARIA?
// What is the DOM?
// What happens when a URL is entered?
// Difference between section and div?
// Why use alt attributes?
// What is the viewport meta tag?
// Difference between localStorage and cookies?
// Why use labels in forms?
// What is keyboard accessibility?
// Difference between article and section?
// Why should headings follow hierarchy?
// What is progressive enhancement?

// These topics are frequently asked in frontend interviews for developers with 2–5 years of experience.




// .
// .
// .
// .
// .
// WCAG
// What is WCAG?

// WCAG stands for Web Content Accessibility Guidelines.

// It is an international standard that provides rules and recommendations for making websites accessible to everyone, including people with disabilities.

// It was created by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C).

// Why do we need WCAG?

// Not everyone uses a website in the same way.

// Some users may:

// Be visually impaired and use screen readers.
// Have hearing impairments.
// Be unable to use a mouse.
// Have color blindness.
// Have cognitive or learning disabilities.

// WCAG helps developers build websites that all users can access and use.

// The Four Principles of WCAG (POUR)
// 1. Perceivable

// Users must be able to perceive the content.

// Examples:

// Images should have alt text.
// Videos should have captions.
// Text should have sufficient color contrast.
// <img src="dog.jpg" alt="Brown dog playing in a park"></img>


// 2. Operable

// Users must be able to operate the interface.

// Examples:

// All functionality should work with a keyboard.
// Buttons should be reachable using the Tab key.
// Users should have enough time to read content.
// <button>Submit</button>


// 3. Understandable

// Content and UI should be easy to understand.

// Examples:

// Clear labels.
// Predictable navigation.
// Helpful error messages.
// <label for="email">Email Address</label>
// <input id="email" type="email"></input>

// 4. Robust

// Content should work across:

// Different browsers
// Screen readers
// Assistive technologies
// Future technologies

// Using proper HTML helps.

// <nav>
//   <a href="/">Home</a>
// </nav>


// WCAG Conformance Levels

// There are three levels:

// Level	Meaning
// A	Minimum accessibility requirements
// AA	Recommended standard (most companies target this)
// AAA	Highest accessibility level

// Most organizations aim for WCAG 2.1 AA.


// Interview Answer

// WCAG stands for Web Content Accessibility Guidelines. It is a set of standards created by W3C to make websites accessible to people with disabilities. WCAG is based on four principles called POUR: Perceivable, Operable, Understandable, and Robust. It helps developers build websites that work well with screen readers, keyboards, and assistive technologies.

// Short Answer (30 seconds)

// WCAG is a standard for web accessibility. It ensures that websites can be used by everyone, including people with disabilities. The four principles are Perceivable, Operable, Understandable, and Robust, commonly known as POUR. Most companies follow WCAG 2.1 AA guidelines.



// .
// .
// .
// .
// .
// JS 
// JavaScript is Single Threaded
// JavaScript executes one task at a time.

// JavaScript Runtime Components
// 1. Call Stack

// Executes functions.

// 2. Web APIs

// Provided by the browser.

// Examples:

// setTimeout
// fetch
// DOM events
// 3. Callback Queue

// Stores completed callbacks.

// 4. Event Loop
// Checks:
// "Is the call stack empty?"=
// If yes:
// Moves callbacks to the stack.


// How JS Works :-
// Complete Flow
// 1. Browser loads JS
// 2. JS Engine starts
// 3. Memory Creation Phase
// 4. Execution Phase
// 5. Global Execution Context created
// 6. Functions pushed to Call Stack
// 7. Web APIs handle async tasks
// 8. Event Loop monitors stack
// 9. Callback Queue executes callbacks

// Interview Answer (1 Minute)

// JavaScript is a single-threaded, synchronous language that executes code line by line using a Call Stack. When JavaScript starts, it creates a Global Execution Context consisting of a memory phase and an execution phase. For asynchronous operations like setTimeout and fetch, the browser provides Web APIs. Once these operations complete, their callbacks enter the Callback Queue, and the Event Loop pushes them to the Call Stack when it becomes empty.

// Important Keywords
// JavaScript Engine
// Execution Context
// Memory Phase
// Execution Phase
// Call Stack
// Web APIs
// Callback Queue
// Event Loop
// Single Threaded
// Synchronous and Asynchronous

// This entire topic is one of the most frequently asked JavaScript interview questions.


// .
// .
// .
// .
// .
// What Tag are playing important role for SEO , like meta tags explain me priority wise
// "Which HTML tags are important for SEO?"

// Interviewers usually expect:

// Which tags affect SEO?
// Why are they important?
// What is their priority?
// SEO Important Tags (Priority Wise)
// 1. <title> ⭐⭐⭐⭐⭐ (Highest Priority)
// <title>Best React Interview Questions for 2026</title>
// Why?
// Appears in Google search results.
// Appears in browser tabs.
// Helps search engines understand the page.
// Best Practice:
// 50–60 characters.
// Unique for every page.
// 2. <meta name="description"> ⭐⭐⭐⭐⭐
// <meta
//   name="description"
//   content="Top React interview questions and answers for experienced developers."
// >
// Why?
// Often shown in Google search snippets.
// Improves click-through rate.
// Best Practice:
// 150–160 characters.
// 3. Headings (h1–h6) ⭐⭐⭐⭐⭐
// <h1>React Interview Questions</h1>
// <h2>JavaScript Questions</h2>
// Why?
// Defines content hierarchy.
// Helps search engines understand the topic.
// Best Practice:
// One h1 per page.
// Use proper heading order.
// 4. <img alt=""> ⭐⭐⭐⭐
// <img src="react.png" alt="React Logo">
// Why?
// Helps image SEO.
// Important for accessibility.
// Search engines cannot understand images directly.
// 5. Semantic HTML Tags ⭐⭐⭐⭐
// <header>
// <nav>
// <main>
// <article>
// <section>
// <footer>
// Why?
// Improves page structure.
// Helps search engines understand content.
// 6. Canonical Tag ⭐⭐⭐⭐
// <link rel="canonical" href="https://example.com/react-guide">
// Why?

// Prevents duplicate content issues.

// 7. Viewport Meta Tag ⭐⭐⭐⭐
// <meta name="viewport"
//       content="width=device-width, initial-scale=1.0">
// Why?
// Makes pages mobile-friendly.
// Mobile friendliness affects SEO rankings.
// 8. Language Attribute ⭐⭐⭐
// <html lang="en">
// Why?
// Helps search engines understand language.
// Improves accessibility.
// 9. Open Graph Meta Tags ⭐⭐⭐
// <meta property="og:title" content="React Guide">
// <meta property="og:image" content="image.jpg">
// Why?

// Controls how pages appear on social media.

// 10. Robots Meta Tag ⭐⭐⭐
// <meta name="robots" content="index, follow">
// Why?

// Controls search engine crawling.

// Examples:

// <meta name="robots" content="noindex">
// Complete Example
// <head>
//   <title>React Interview Questions</title>

//   <meta
//     name="description"
//     content="Top React interview questions and answers."
//   >

//   <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1.0"
//   >

//   <meta name="robots" content="index, follow">

//   <link
//     rel="canonical"
//     href="https://example.com/react"
//   >
// </head>

// Common Interview Questions
// Why is the title tag important?

// Because it tells search engines and users what the page is about.

// Why should there be only one h1?

// Because it represents the main topic of the page.

// Does the meta keywords tag help SEO?
// <meta name="keywords" content="react,javascript">

// No. Modern search engines largely ignore it.

// Short Interview Answer

// The most important SEO tags are the title tag, meta description, heading tags (h1–h6), image alt attributes, semantic HTML tags, canonical tags, and viewport meta tags. These help search engines understand the page content, improve accessibility, and enhance search rankings.



