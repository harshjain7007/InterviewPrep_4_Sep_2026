// -------- Github is CICD :-
// GitHub itself is not a CI/CD (Continuous Integration/Continuous Deployment) tool, but it provides integrations and features that support CI/CD workflows. The primary tool offered by GitHub for CI/CD is GitHub Actions.

// Key Points:
// GitHub Actions:

// GitHub Actions is an automation tool built into GitHub, enabling developers to create workflows that automatically run on specific events, such as pushing code or opening a pull request.
// It supports CI/CD processes by allowing developers to build, test, and deploy their applications directly from their GitHub repositories.
// You can define workflows in YAML files (.github/workflows/) to specify the CI/CD pipeline, automating tasks like running tests, linting, building, and deploying code.
// Integration with CI/CD Tools:

// Besides GitHub Actions, GitHub integrates with many external CI/CD tools such as Jenkins, CircleCI, Travis CI, and GitLab CI/CD. These tools can pull your code from GitHub, run automated pipelines, and deploy your code to production environments.
// Continuous Integration (CI):

// GitHub supports CI by allowing automated builds and tests to be triggered whenever new code is pushed to the repository, ensuring that code changes do not break the build.
// Continuous Deployment (CD):

// GitHub Actions can also handle continuous deployment, allowing your application to be deployed automatically to various environments, such as AWS, Heroku, or Docker, whenever new code is merged.
// Summary:
// GitHub itself is not a CI/CD tool, but with GitHub Actions, it provides built-in capabilities for automating CI/CD pipelines, helping developers streamline their development processes.



// Some popular tools for CICD Exmaple :-
// 8. Azure DevOps
// 3. Jenkins
// 7. AWS CodePipeline
// 2. GitLab CI/CD
// 9. Docker and Kubernetes 





// ------  What is EsLint :- 
// ESLint is a widely-used JavaScript linter that analyzes your code to detect potential errors, enforce coding standards, and improve overall code quality. It helps developers avoid bugs and adhere to best practices by providing consistent rules and guidelines across the entire codebase. ESLint can be customized to fit specific project requirements and supports plugins for various frameworks and libraries, including React, Vue, and Node.js.

// Key Features of ESLint:
// Error and Bug Detection: ESLint identifies both syntax and logical errors in the code. For example, it can flag issues such as unused variables, undefined variables, or common coding mistakes like forgetting a return statement.

// Enforcing Code Style: ESLint can enforce consistent code style rules (e.g., indentation, spacing, naming conventions), ensuring that the entire development team follows the same coding patterns.

// Configurable Rules: ESLint allows you to define specific rules in a configuration file (.eslintrc.json), which can be customized or extended with plugins and predefined rule sets such as Airbnb or Google style guides.

// Supports Modern JavaScript: ESLint is compatible with the latest versions of JavaScript (ES6+), as well as popular frameworks and libraries like React and Vue.

// Integration with Code Editors: ESLint integrates well with popular editors like VSCode, Atom, and Sublime Text, offering real-time feedback on potential issues as you write code.

// Use Cases of ESLint:
// Preventing Bugs: By analyzing the code for potential issues before running it, ESLint can help developers prevent common bugs and errors early in the development process.

// Maintaining Code Quality in Large Projects: ESLint helps enforce consistent coding standards across large teams, making it easier to collaborate on projects with multiple developers.

// Code Review and Automation: ESLint can be integrated into CI/CD pipelines, ensuring that code quality checks are automatically performed before merging code into the main branch.

// Improving Code Readability: By enforcing code style guidelines, ESLint improves the overall readability and maintainability of code, making it easier for new team members to understand the project.

// React and JSX Support: For React developers, ESLint can lint JSX and offer specific rules to ensure that best practices are followed while building React components.

// Example of ESLint in a Project:
// You can install ESLint and initialize it in a Node.js or JavaScript project like this:

// Once configured, it will analyze your code based on the rules you specify and flag any issues or inconsistencies.

// In summary, ESLint is essential for maintaining clean, error-free, and consistent code in modern JavaScript development, especially in large-scale projects and collaborative environments.




// ----------- What is fire event in react :-
// In React, firing events refers to triggering or invoking certain actions when specific user interactions or events occur within the application. React events are very similar to native DOM events, but with some important differences, such as naming conventions and how they handle cross-browser compatibility.

// In summary, firing events in React involves attaching event handlers to elements, handling synthetic events, managing event propagation, and programmatically triggering events when necessary.

// Key Concepts of Firing Events in React
// Synthetic Events:

// React uses a wrapper around native browser events called Synthetic Events. This ensures cross-browser compatibility and provides a consistent API.
// For example, when a user clicks a button, React captures the native event and passes it as a synthetic event to your event handler.
// Event Handlers:

// In React, you assign event handlers (functions) to elements using camelCase syntax.
// Common Event Types: React supports a wide variety of events, such as:

// Mouse Events: onClick, onDoubleClick, onMouseEnter, onMouseLeave
// Form Events: onChange, onSubmit, onInput
// Keyboard Events: onKeyPress, onKeyDown, onKeyUp
// Focus Events: onFocus, onBlur
// Prevent Default Actions:

// Similar to native JavaScript, you can call event.preventDefault() within an event handler to stop the default behavior (e.g., preventing a form submission).
// Event Propagation (Bubbling & Capturing):

// By default, events in React bubble up from the target element to the parent elements. You can stop propagation using event.stopPropagation().
// Triggering Events Programmatically:

// You can trigger events manually using JavaScript. For example, you can use the dispatchEvent method for native DOM events. However, in React, it's more common to simulate a user action programmatically for testing purposes using testing libraries like React Testing Library or Enzyme.


// Why Use Synthetic Events in React?
// React uses Synthetic Events, a cross-browser wrapper around the native browser events, for consistency across different platforms. This ensures:

// Performance optimizations by reusing event objects.
// Compatibility with various browsers.
// In summary, firing events in React is essential to make your application interactive, dynamic, and user-friendly. It forms the core of how users interact with your app.

// Simple Way to Remember
// Synthetic Event = Real app event (handled by React)
// fireEvent = Fake event (used in testing)


// ------ What is your texTexh :-
// This shows your practical approach to TaxTech using the MERN stack, emphasizing automation, security, and integration of tax regulations
// "My focus on TaxTech is to automate tax processes, minimize manual errors, and ensure compliance with evolving tax regulations, making tax management more efficient for users."
// "In the context of my work as a MERN stack developer, my 'TaxTech' refers to the set of tools and practices I use to build, manage, and optimize tax-related applications. Specifically, I use:

// MongoDB to store tax data securely and efficiently.
// Express.js and Node.js to handle the backend logic, perform tax calculations, and ensure the application complies with regional tax laws.
// React for the frontend, enabling users to interact with real-time tax calculations, create invoices, and generate reports seamlessly.
// APIs for integrating with third-party tax services or government tax databases to pull in real-time tax rates or submit filings.
// Security measures like data encryption and compliance with privacy regulations (GDPR, CCPA) to protect sensitive financial and personal information."
// "My focus on TaxTech is to automate tax processes, minimize manual errors, and ensure compliance with evolving tax regulations, making tax management more efficient for users."

// This shows your practical approach to TaxTech using the MERN stack, emphasizing automation, security, and integration of tax regulations.




// -------  Ways of writing MERN code more optimize and better ways :-
// 1. Code Structuring & Organization
// Modular Code: Break down your code into smaller, reusable modules. This improves maintainability and readability.
// Folder Structure: Maintain a well-organized folder structure that separates concerns, e.g., routes, controllers, models, services, middleware, and utilities in your backend, and components, pages, hooks, and context in your frontend (React).
// MVC Pattern: Follow the Model-View-Controller pattern in the backend. Models define your data structure, controllers handle the logic, and routes define endpoints.
// 2. Consistent Coding Style
// Linting: Use tools like ESLint or Prettier to enforce consistent coding styles, including formatting and avoiding common mistakes.
// Naming Conventions: Follow consistent naming conventions for variables, functions, and files. Use camelCase for JavaScript, and keep names descriptive.
// 3. Error Handling & Validation
// Backend:
// Validation: Use libraries like Joi or validator.js to validate incoming data in routes.
// Error Handling: Implement global error handling in Express using try-catch blocks or middleware.
// Frontend:
// Form Validation: Use libraries like Formik or React Hook Form to manage form validation and state efficiently.
// Error Boundaries: Use React error boundaries to handle errors gracefully on the client-side.
// 4. Optimize API and Database Performance
// Pagination: Implement pagination in API responses to avoid fetching too much data at once.
// Caching: Use caching mechanisms like Redis to store frequently accessed data. For MongoDB, enable indexing on commonly queried fields.
// Batch Operations: Optimize database operations by batching requests when possible, e.g., using insertMany() in MongoDB.
// 5. Asynchronous Programming
// Use async/await for asynchronous code in both the backend and frontend to manage promises more cleanly and avoid callback hell.
// Handle promise rejections properly to avoid unhandled rejections that can crash your server.
// 6. Security Best Practices
// Authentication/Authorization: Use JWT or OAuth for secure user authentication and role-based authorization.
// Sanitize Inputs: Always sanitize user inputs to prevent attacks like SQL injection or XSS.
// HTTPS & Secure Headers: Use helmet to secure HTTP headers and always serve over HTTPS.
// Environment Variables: Store sensitive data (API keys, database credentials) in environment variables and use .env files for configuration.
// 7. State Management in React
// Use state management libraries like Redux or MobX when dealing with complex state across the application. For simpler apps, React's Context API can also be sufficient.
// Keep the state as local as possible, lifting state only when necessary.
// 8. Testing
// Unit Testing: Write unit tests for both backend (using tools like Jest or Mocha) and frontend components (using Jest and React Testing Library).
// Integration Testing: Ensure that different parts of your application (e.g., database and API) work together correctly.
// End-to-End Testing: Tools like Cypress or Selenium help ensure that the whole application works as expected from the user's perspective.
// 9. Version Control & Continuous Integration
// Use Git effectively with meaningful commit messages, branching strategies (feature branches, hotfixes), and regular commits.
// Implement CI/CD pipelines using tools like GitHub Actions or Jenkins to automate testing, linting, and deployment.
// 10. Performance Optimization
// Lazy Loading: Use lazy loading in React to load components or routes only when needed (via React.lazy() or React Suspense).
// Memoization: Use useMemo() and useCallback() to avoid unnecessary re-renders in React.
// Compression: In the backend, enable Gzip compression for API responses to reduce payload size.
// Front-End Bundling: Use Webpack or other bundlers to optimize asset delivery and reduce load times.
// 11. Documentation
// Comment on complex sections of code to explain the logic, but avoid over-commenting.
// Maintain up-to-date README files, code documentation, and API documentation (e.g., Swagger for Express APIs).
// By following these practices, you can ensure that your MERN stack application is maintainable, secure, and scalable.

// .
// .
// .
// .
// ---- How React Dom Works :-
// React DOM is a key component of the React library, responsible for rendering React components and managing the interaction between React's virtual DOM and the actual browser DOM. Here's an overview of how React DOM works:

// .
// .
// .
// .
// MobX
// MobX is another popular state management library that offers a more flexible and reactive approach to managing state. It automatically tracks the dependencies between observables and updates components when the state changes.

// MobX is known for its simplicity and ease of integration with React applications.

//  :- Differance Between redux and Mobx :-
// MobX is more flexible, with less boilerplate, and easier to get started with, making it ideal for smaller or more complex reactive applications.
// Redux is more opinionated, with a predictable state flow and strict immutability, which can make it better suited for larger applications with a need for consistent, maintainable state management.
// When to Choose MobX?
// Small to medium-sized projects.
// When you want to avoid boilerplate and prefer simplicity.
// For applications requiring real-time, reactive state updates.
// When to Choose Redux?
// Large-scale applications needing strict state management.
// Teams that prefer convention over configuration.
// When a predictable, centralized state is critical.
// Summary
// MobX’s simplicity, automatic reactivity, and reduced boilerplate make it appealing for many developers, especially in projects where the complexity of Redux isn't justified. However, Redux remains a solid choice for large-scale, complex applications where strict state management is required. The choice depends on your project’s requirements and your team’s preferences.

// “MobX provides reactive state management with minimal boilerplate using observables, while Redux follows a strict unidirectional data flow with actions and reducers, making it more predictable and scalable.”

// .
// .
// .
// .
// Differance between iterators and iterables :-
// Iterables are objects that define their iteration behavior through the Symbol.iterator method. They can be used with for...of loops and other constructs that require iteration.
// Example :-
const iterable = [1, 2, 3];
for (const value of iterable) {
  console.log(value); // Outputs: 1, 2, 3
}

// Iterators are objects that provide a next() method to produce the next value in a sequence. They keep track of the current position in the iteration and signal when the iteration is complete.
// Example  :-
function createIterator(array) {
   let index = 0;
  return {
    next: function () {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };` `
      }
    },
  };
}
const iterator = createIterator([1, 2, 3]);
console.log(iterator.next()); // Outputs: { value: 1, done: false }
console.log(iterator.next()); // Outputs: { value: 2, done: false }
console.log(iterator.next()); // Outputs: { value: 3, done: false }
console.log(iterator.next()); // Outputs: { value: undefined, done: true }
// if want to use custum function then use Symbol.iterator method for archive that

// In conclusion, iterators and iterables are fundamental concepts in JavaScript that facilitate the traversal and manipulation of collections. Iterators provide a standardized way to access elements sequentially, while iterables are objects that define the iteration behavior by implementing the iterator protocol.

// https://www.connectwise.com/blog/engineering/iterators-and-iterables-in-javascript#:~:text=In%20conclusion%2C%20iterators%20and%20iterables,by%20implementing%20the%20iterator%20protocol.  



// .
// .
// .
// ------------- System design --- :-
// System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It involves both high-level and low-level design decisions and is a critical phase in software development. Here are the key aspects of system design:

// System Design Life Cycle (SDLC) :- The Phases (Stages) of the System Design Life Cycle are:
// Planning
// Feasibility Study
// System Design
// Implementation
// Testing
// Deployment
// Maintenance and Support

// Different types of Software Architecture Patterns include:
// Layered Pattern
// Client-Server Pattern
// Event-Driven Pattern
// Microkernel Pattern
// Microservices Pattern

// Objectives of Systems Design
// Practicality : We need a system that should be targetting the set of audiences(users) corresponding to which they are designing.
// Accuracy : Above system design should be designed in such a way it fulfills nearly all requirements around which it is designed be it functional o non-functional requirements.
// Completeness : System design should meet all user requirements
// Efficient : The system design should be such that it should not overuse surpassing the cost of resources nor under use as it will by now we know will result in low thorough put (output) and less response time(latency).
// Reliability : The system designed should be in proximity to a failure-free environment for a certain period of time.
// Optimization : Time and space are just likely what we do for code chunks for individual components to work in a system.
// Scalable(flexibility) : System design should be adaptable with time as per different user needs of customers which we know will keep on changing on time. The best example here out is the well-known firm: Nokia. It is the most important aspect while designing systems and is the result of why 1 of 100 startups succeed over the long run, the best example here out is GeeksforGeeks.

// https://chatgpt.com/c/8198ddb9-a106-4923-8461-3433c461170a
// https://www.geeksforgeeks.org/what-is-system-design-learn-system-design/
// https://www.designgurus.io/blog/system-design-interview-fundamentals

// .
// .
// .
// .
// -----  Differance between Grid and flex :-
// --- dimensional :-
// Grid :- The CSS Grid Layout is a two-dimensional grid-based layout system, with rows and columns
// --- Flex Box :-  The CSS Flexbox is a one-dimensional layout. it is useful in allocating and aligning the space among items in a grid container.

// --- Complexity :-
// Grid :- it is useful in creating more complex and organized layouts
// Flex :- Flex layout makes it easier to design and build responsive web pages without using a lot float and positioin properties in our CSS code .

// grid :-  To define a grid contianer, you will have to pass a display: grid property to your element
// Flex :- To start using Flexbox, you must create a flex container using the display: flex property

// .
// .
// .
// .
//---------- Get static props :-
// In React, especially when working with frameworks like Next.js, you can use getStaticProps to fetch data at build time. This is particularly useful for generating static pages with content that doesn't change frequently. getStaticProps is used to fetch data at build time and pass it to a page component as props.

// Impementation getStaticProp in Next :- 
// pages/posts.js
// import React from 'react';
// const Posts = ({ posts }) => {
//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export const getStaticProps = async () => {
//   // Fetch data from an API
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };
// export default Posts;

// Benefits of getStaticProps
// getStaticProps is used in Next.js to fetch data at build time.
// It helps pre-render pages with static content, which enhances performance and SEO.
// Build-Time Data Fetching: Fetches data once at build time, which is ideal for content that doesn’t change frequently.
// Static Generation: Enables static generation, which results in faster page loads and better SEO.
// Reduced Server Load: Since the data is fetched at build time, there are fewer server requests, reducing the load on your server.

// Key Points:
// Next.js Pages: getStaticProps can only be used in page components, which are files inside the pages directory. It is a special function recognized by Next.js for pre-rendering pages at build time.

// React Components: Regular React components, which are used within your pages, do not have access to getStaticProps directly. These components receive their data via props, which are passed down from the parent page component where getStaticProps is used.

// Note :-  getStaticProps is only used in Next.js page components and cannot be directly used in regular React components.

// .
// .
// .
// .
// React 18 and react 16 diffecrace :-
// React 18 introduces several enhancements and new features over React 16, including concurrent rendering, automatic batching, transitions, improved Suspense for data fetching, the useId hook, improved SSR and hydration, a new root API, and better memory management. These changes aim to make React applications more performant, responsive, and easier to develop, especially for complex and data-intensive applications.
// Key Differences Between React 18 and React 16
// 1. Concurrent Rendering
// React 16: Uses synchronous rendering, meaning the UI updates happen in a blocking manner.
// React 18: Introduces concurrent rendering, allowing React to prepare multiple versions of the UI at the same time. This makes applications more responsive by allowing the rendering process to be interrupted and resumed, providing a smoother user experience.
// 4. Suspense for Data Fetching
// React 16: Suspense is primarily used for code-splitting and lazy loading components.
// React 18: Enhances Suspense to support data fetching, enabling declarative data fetching and better handling of loading states.

// 5. useId Hook
// React 16: Does not provide a built-in way to generate unique IDs.
// React 18: Introduces the useId hook for generating unique IDs that are stable across server and client renders.

// 8. Automatic Memory Management
// React 16: Developers often need to handle memory management and cleanup manually.
// React 18: Improves memory management and introduces automatic memory cleanup, reducing the likelihood of memory leaks.

// 6. Improved SSR and Hydration
// React 16: Server-side rendering (SSR) and hydration are available but lack some modern optimizations.
// React 18: Brings significant improvements to SSR and hydration, including support for streaming server rendering and selective hydration, which makes initial page load faster and more efficient.

// 7. New Root API
// React 16: Uses ReactDOM.render for mounting React applications.
// React 18: Introduces a new root API (createRoot), which provides better integration with concurrent rendering features.

// 2. Automatic Batching
// React 16: Batching of state updates is limited to event handlers, and asynchronous updates like in promises or setTimeout do not get batched.
// React 18: Expands automatic batching to cover more scenarios, including asynchronous updates, which reduces unnecessary renders and improves performance.

// 3. Transitions
// React 16: Does not have built-in support for distinguishing between urgent and non-urgent updates.
// React 18: Introduces the concept of transitions, allowing developers to mark updates as non-urgent, providing a smoother user experience during state transitions.

// 9. Concurrent Features Out of the Box
// React 16: Concurrent mode features need to be enabled explicitly and are experimental.
// React 18: Concurrent features are available out of the box and more stable, making it easier to adopt concurrent rendering practices.

// .
// .
// .
// .
//  Caching static in react :-
// Caching :- Caching in React involves storing data or computations temporarily so that future requests can be served faster, reducing the need to re-fetch or recompute the same data. Caching can significantly improve the performance of a React application, especially when dealing with expensive operations like API calls, complex calculations, or rendering large components.
// To cache static assets in React applications, use a combination of service workers with Workbox, HTTP caching headers, code splitting and lazy loading, client-side storage, and leveraging CDNs. These techniques optimize performance, reduce load times, and enhance the user experience.
// Key Techniques of Caching in react :-
// 1. Service Workers with Workbox
// Service workers act as a proxy between the network and your application, intercepting network requests and serving cached responses when available. Workbox simplifies the implementation of service workers.
// 2. HTTP Caching with Cache-Control Headers
// Leverage HTTP caching headers to instruct the browser on how to cache resources.
// 3. Code Splitting and Lazy Loading
// Load only the necessary code for the current view, reducing initial load times.
// 4. Client-Side Storage (Local Storage or IndexedDB)
// Cache application state or data on the client-side.
// 5. Using a CDN ( Content delivery network )
// Serve static assets from a CDN to reduce latency and load times. “A CDN is a distributed network of servers that delivers content from the nearest location to improve performance, reduce latency, and enhance security.”





// .
// .
// .
// .
// Code Qualities in react :-
// Maintaining high performance in React applications requires attention to state management, component design, rendering optimization, list handling, code splitting, asset optimization, memory management, and continuous monitoring. Following these best practices helps ensure your application is responsive, maintainable, and efficient

// .
// .
// .
// .
// ---------- Generator function
// In JavaScript, the asterisk (*) after the function keyword denotes a generator function. Generator functions allow you to define an iterator by providing a concise way to implement the iterator protocol.
//  use the yield keyword inside the generator function instead of return. For returning a value one by one
// Example :-
// var fibGenerator = function*() {
//      yield 1;
//      yield 3;
//  };
// const generator = fibGenerator();
// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 3, done: false }
// console.log(generator.next()); // { value: undefined, done: true }

// :---  Sigficance of generator function and method :-
// Generator functions in JavaScript are powerful tools that enable you to write more readable and efficient code for handling sequences, asynchronous programming, and custom iteration logic. Their ability to pause and resume execution, generate values lazily, and manage complex control flows makes them invaluable for a wide range of programming scenarios.
// Generator functions and methods in JavaScript provide a powerful way to handle sequences of values or asynchronous programming. They allow you to pause and resume execution, making them highly useful in various scenarios. Here's an overview of their significance:-
// Definition and Usage
// A generator function is defined using the function* syntax and uses the yield keyword to produce a series of values. When called, it returns a generator object that conforms to both the iterator and iterable protocols.
// Example :-
// function* countToThree() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const counter = countToThree();
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // 2
// console.log(counter.next().value); // 3

// Significance and Use Cases :-
// 1. Asynchronous Programming:- Generators can be used with promises to handle asynchronous code in a synchronous-like manner. Libraries like co and frameworks like Koa leverage generators for better async control flow before async/await was introduced.
// Example :-
// function* asyncTask() {
//   const data = yield fetch('https://api.example.com/data');
//   console.log(data);
// }
// const gen = asyncTask();
// gen.next().value.then(response => response.json()).then(data => gen.next(data));

// 2. Infinite Sequences:- Generators are ideal for creating infinite sequences where you can generate values on-the-fly without consuming large amounts of memory.
// function* infiniteSequence() {
//   let i = 0;
//   while (true) {
//     yield i++;
//   }
// }
// const sequence = infiniteSequence();
// console.log(sequence.next().value); // 0
// console.log(sequence.next().value); // 1
// console.log(sequence.next().value); // 2

// 3. Lazy Evaluation:- Generators allow for lazy evaluation, which means values are generated only when needed. This is useful for performance optimization and managing large datasets.
// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   while (true) {
//     yield curr;
//     [prev, curr] = [curr, prev + curr];
//   }
// }
// const fib = fibonacci();
// console.log(fib.next().value); // 1
// console.log(fib.next().value); // 1
// console.log(fib.next().value); // 2

// 4 Implementing Iterators:- Generators simplify the creation of custom iterators. By using yield, you can easily make an object iterable without manually implementing the iterator protocol.
// const myIterable = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// };
// for (const value of myIterable) {
//   console.log(value); // 1, 2, 3
// }

// 5 State Machines:- Generators can be used to implement state machines, where the function's state can be paused and resumed, allowing you to manage complex state transitions.

// .
// .
// .
// .
// -----  Promises.all method :-
// In JavaScript, the Promise object has several static methods similar to Promise.all. Here are the key ones:

// Promise.all(iterable): Waits for all promises in the iterable to be resolved or any to be rejected.

// Promise.allSettled(iterable): Waits for all promises in the iterable to be settled (either fulfilled or rejected).
           
// Promise.any(iterable): Waits for any of the promises in the iterable to be fulfilled, or for all of them to be rejected.

// Promise.race(iterable): Waits for the first promise in the iterable to be settled (either fulfilled or rejected).

// Promise.resolve(value): Returns a promise that is resolved with the given value.

// Promise.reject(reason): Returns a promise that is rejected with the given reason.

// These methods help manage multiple asynchronous operations and handle their outcomes in various ways.

let p1 = Promise.resolve(2);
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    return resolve(100);
  }, 1000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject(404); //  if we can resolved this instead of rejected then which is all working fine
  }, 2000);
});
let p4 = new Promise((resolve) => {
  setTimeout(() => {
    return resolve(500);
  }, 1000);
});

Promise.all([p1, p2, p3, p4])
  .then((value) => console.log(value))
  .catch((err) => console.log("error", err)); // error 404 // if all promises is resolved then which return all primises like [ 2, 100, 404, 500 ]

// if we can use allSettled method instead of all
// then Output is :-   [
//   { status: 'fulfilled', value: 2 },
//   { status: 'fulfilled', value: 100 },
//   { status: 'rejected', reason: 404 },
//   { status: 'fulfilled', value: 500 }
// ]

// if we can use any method instead of all
// which return only 1st fullFilled promises decaralation wise if all promise is rejected then which return reject like error [AggregateError: All promises were rejected] { [errors]: [ 500, 404 ] }

// if we can use race method instead of all
// which return only first promises which quick resolved or rejected

// .
// .
// .
// .
// Differance between settled and resolve state of promises
// Resolved promises generally imply a successful completion (fulfilled), but can also refer to any non-pending state (either fulfilled or rejected).
// Settled promises refer to any promise that is no longer pending, whether it is fulfilled or rejected.
// Understanding these distinctions helps in properly managing and handling promises in your asynchronous code.

// .
// .
// .
// .
// Services workes in js :-
// Service Workers provide powerful capabilities for web applications, including offline support, background synchronization, push notifications, and network request interception. They enhance the performance and user experience of web applications, especially Progressive Web Apps. Understanding how Service Workers operate and managing their lifecycle is essential for leveraging their full potential effectively.
// Key Features of Service Workers :-
// Offline Capabilities
// Service Workers can cache resources and serve them even when the user is offline. This is particularly useful for Progressive Web Apps (PWAs) to ensure they remain functional without a network connection.

// Background Synchronization
// “Background Sync allows web apps to defer actions like API calls when offline and automatically retry them once the network is restored, improving reliability and user experience.”

// Push Notifications
// Service Workers can receive and display push notifications from a server, even when the web application is not open in the browser.

// Intercept and Modify Network Requests
// Service Workers can intercept network requests and modify or respond to them. This allows for custom caching strategies, such as serving cached content first and then fetching updated content in the background.

// Periodic Background Tasks
// They can perform periodic tasks, like updating cached content at regular intervals, without user interaction.

// we can use services worker :-
// In Development :- Use Localhost:, Browser DevTools:,  Testing Offline Functionality:
// In Production :- Deploy Your Application: , Verify Service Worker Registration: , Monitor and Debug:

// .
// .
// .
// .
// Concurrent rendering in react : ----
// Concurrent 
//   ing in React aims to enhance the performance and responsiveness of applications by allowing React to manage rendering work more flexibly and efficiently. Key features include time-slicing, prioritized updates, and Suspense. React 18 introduces several improvements and new APIs to better support concurrent rendering, providing a more responsive and smooth user experience. However, it also introduces complexity and may require careful consideration of compatibility and implementation details
// Key Concepts of Concurrent Rendering
// 1. Time-Slicing
// Time-slicing allows React to break up rendering work into smaller chunks and spread it out over multiple frames. This helps keep the app responsive by allowing the browser to handle user interactions, animations, and other tasks without being blocked by long rendering processes.

// Non-Blocking Updates: React can pause and resume rendering, ensuring that high-priority updates (such as user interactions) are processed first, while less critical updates (like rendering off-screen content) are delayed.
// 2. Prioritized Updates
// Concurrent Mode allows React to prioritize different types of updates. This means that more important updates (e.g., user interactions) can be processed before less important ones (e.g., rendering background content).

// Priority Levels: Updates are assigned different priority levels, enabling React to handle urgent tasks more quickly and defer less critical ones.
// 3. Suspense
// Suspense is a feature that works with concurrent rendering to handle asynchronous operations, such as data fetching or code splitting. It allows components to "suspend" rendering while waiting for something to load and display a fallback UI (e.g., a loading spinner) in the meantime.

// Data Fetching: Suspense can be used to wait for data to be fetched before rendering a component.
// Code Splitting: Suspense can work with React.lazy to dynamically load components only when they are needed.
// 4. Concurrent Features in React 18
// React 18 introduces several enhancements to concurrent rendering, including:

// Automatic Batching: React 18 enables automatic batching of updates, which means that multiple state updates within the same event or microtask are batched together into a single render. This reduces the number of renders and improves performance.
// Concurrent Rendering API: React 18 provides a new API to enable concurrent features, including createRoot and root.render methods that allow the application to take advantage of concurrent rendering.

// :---- Benefits of Concurrent Rendering
// Improved Responsiveness:, Smooth User Experience:, Efficient Rendering:, Better Handling of Asynchronous Data:
// :---- Challenges and Considerations
// Complexity: , Compatibility:, Experimental Nature: 

// .
// .
// .
// .
// What is the difference between dependency and Dev dependency :-
//  dependencies and devDependencies are two categories of packages defined in the package.json file.
// Purpose:
// Dependencies: Needed for the application to run in production.
// DevDependencies: Needed only during development, testing, and building processes.

// Usage:
// Dependencies: Used by the application code that runs in the production environment.
// DevDependencies: Used by tools that assist in development, such as compilers, linters, test runners, etc.

// Installation:
// Dependencies: Always installed when you run npm install or yarn install.
// DevDependencies: Installed by default with npm install or yarn install, but can be excluded with npm install --only=production or yarn install --production.

// .
// .
// .
// .
// Differance between yarn/npm pakages :-
// When to Use npm:--
// You prefer using the package manager that comes pre-installed with Node.js.
// You want to take advantage of npm’s large ecosystem and built-in security features.
// You need native workspace support introduced in npm v7.

// When to Use Yarn:--
// You need faster and more efficient package management, especially for large projects.
// You require strong offline capabilities and deterministic dependency resolution.
// You manage monorepos and need robust workspace support.
// You want to leverage advanced features like Plug'n'Play for better performance.

// Both npm and Yarn have their strengths and have evolved to address many of their initial limitations. The choice between them often depends on specific project requirements, team preferences, and which features are most critical for your development workflow.

// .
// . 
// .
// .
// What’s is tha react middle where :-
// Middleware in the React ecosystem is often associated with state management solutions that require handling side effects, asynchronous actions, or enhancing the dispatching of actions. While React does not have a built-in middleware system, libraries like redux or built in featuers of react like context api.
// The purpose of middleware is to provide a way to extend and customize the behavior of a system by intercepting, modifying, or handling requests and actions as they flow through the application. In the context of web applications and state management libraries, middleware serves several key purposes:
// 1. Logging and Monitoring, 2. Handling Asynchronous Operations, 3. Authorization and Authentication, 4. Error Handling and Reporting, 5. Data Transformation and Validation, 6. Composing Complex Logic, 7. Enhanced Control Flow

// In-Redux :-  How Middleware Works
// When you dispatch an action, it goes through the middleware before reaching the reducer.

// Middleware in Redux
// Middleware in Redux is a way to extend the behavior of the dispatch function, allowing you to perform additional actions before or after a Redux action is processed. Common use cases include:

// Logging: To log actions and state changes.
// Crash Reporting: To catch and report errors in action handling.
// Asynchronous Actions: To handle async operations like API calls.
// Common Middleware Libraries
// Redux Thunk: Allows you to write action creators that return a function instead of an action, useful for handling asynchronous logic.
// Redux Saga: Uses generators to handle side effects more efficiently, providing better control over complex async flows.
// Redux Logger: Logs actions and state changes to the console, helpful for debugging.

// .
// 1. Context API with Custom Middleware
// React's Context API can be used to manzage global state, and you can create custom middleware functions to handle side effects.

// .
// .
// .
// .
//------  pollyfill in js ---- :-
// A polyfill is a piece of code (typically JavaScript on the web) used to provide modern functionality on older browsers that do not natively support it. This allows developers to use newer features of JavaScript and other web technologies while ensuring their web applications or websites work correctly on older browsers.
// https://chatgpt.com/c/682374d6-4046-4068-b562-4b8b22f63b6c

// .
// .
// .
// .
// ----------- Differance Between Redux And Context API ---- :-
// 1. Complexity: Redux generally involves more boilerplate code for setting up actions, reducers, and the store, whereas the Context API is simpler to set up and use.
// 2. Scalability: Redux is more scalable and suitable for larger applications due to its centralized store and clear data flow, while the Context API may become unwieldy for managing global state in complex applications.
// 3. Performance: Redux can be more performant for large applications due to its optimized updates and selective rendering mechanisms, while the Context API may lead to unnecessary re-renders if not used carefully.
// -----------
// Complexity and Boilerplate:
// Context API: Less boilerplate and  simpler setup. More straightforward for small to medium-sized applications.
// Redux: More boilerplate but better suited for complex state management needs.
// Performance:
// Context API: Can lead to performance issues if the entire context is updated frequently.
// Redux: More predictable performance, especially with tools like reselect for memoization.
// State Management:
// Context API: Best for less complex, static or infrequently updated state.
// Redux: Best for complex state and logic, including handling asynchronous actions.
// Tooling and Ecosystem:
// Context API: Limited to what React provides natively.
// Redux: Extensive ecosystem with middleware, devtools, and third-party integrations.
// Use Case Examples:
// Context API: Ideal for themes, user authentication, language settings.
// Redux: Ideal for applications with complex user interactions, data fetching logic, or needing a predictable state across many components

// .
// .
// .
// .
// ----- Websockets ----- :-
// WebSockets are a communication protocol that provides full-duplex communication channels over a single TCP connection. Unlike traditional HTTP requests, which follow a request-response pattern, WebSockets allow for continuous, bidirectional communication between a client (like a web browser) and a server. This makes WebSockets particularly useful for applications that require real-time data exchange, such as chat applications, online gaming, live notifications, and collaborative tools.

// Key Features of WebSockets :-
// Full-Duplex Communication: Both the client and the server can send and receive data simultaneously. This allows for more interactive and real-time applications.
// Single TCP Connection: WebSockets establish a single, persistent connection that stays open for the duration of the communication session. This reduces the overhead of repeatedly opening and closing connections.
// Low Latency: Because the connection remains open, messages can be sent and received with very low latency, making WebSockets suitable for real-time applications.
// Efficiency: WebSockets use less bandwidth and are more efficient than traditional HTTP polling because they eliminate the need for repeated HTTP headers and handshakes.u

// How WebSockets Work :-
// Handshake: The communication begins with a handshake over HTTP, where the client requests an upgrade to the WebSocket protocol.
// Connection Establishment: If the server supports WebSockets, it responds positively, and the connection is upgraded to a WebSocket connection.
// Data Exchange: Once the connection is established, both the client and server can send and receive messages as long as the connection remains open.
// Closure: Either the client or the server can close the connection when it's no longer needed.

// Example Usage of WebSockets
// Client-Side (JavaScript) and we can also use Server-Side (Node.js with ws Library)

// Use Cases for WebSockets
// Chat Applications: Instant messaging and chat services.
// Live Notifications: Real-time notifications for social media, news, or email services.
// Online Gaming: Multiplayer games that require fast and continuous communication.
// Collaborative Tools: Applications like collaborative document editing and whiteboarding.
// Financial Applications: Real-time updates of stock prices or cryptocurrency rates.
// Summary
// WebSockets provide a powerful and efficient way to enable real-time communication between a client and a server. They are particularly well-suited for applications that require low latency and continuous data exchange.

// Implementation :- using Soket.io
// Frontend (React) → connects via WebSocket
// Backend (Node + Express) → handles socket connections
// MongoDB → stores messages/data (optional for persistence)

// .
// .
// .
// .
// What is websokets and How its Defferent from HTTP request  :-
// https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/
// “WebSocket is a protocol that provides real-time, bi-directional communication by maintaining a persistent connection between client and server, unlike HTTP which is request-response based.”

// “We implement WebSocket using a server (like Node.js with ws) and a client connection, where both sides maintain a persistent connection and exchange messages in real time.”

// .
// .
// .
// .
// -------------------------   what is the defferance between statically type and dynamically type ----------------

// The terms "statically typed" and "dynamically typed" refer to how programming languages handle variable types during compilation and runtime. Here's a brief explanation of the differences:

// Statically Typed:
// In statically typed languages, variable types are known and checked at compile-time.
// The data type of a variable must be explicitly declared, and it is enforced by the compiler.
// Type errors are caught during the compilation process, preventing certain classes of errors at runtime.
// Examples of statically typed languages include C, C++, Java, and Swift.

// Dynamically Typed:
// In dynamically typed languages, variable types are determined and checked at runtime.
// Variable types do not need to be explicitly declared; they are inferred during execution.
// Type errors, if any, are discovered at runtime when the code is executed.
// Examples of dynamically typed languages include Python, JavaScript, and Ruby.

// The choice between statically typed and dynamically typed languages often depends on the specific requirements of a project and personal or team preferences. Some languages, like Python, offer a middle ground with optional type annotations and static analysis tools (e.g., MyPy) to combine aspects of both static and dynamic typing.

// .
// .
// .
// .
// ---------------  Differwance betweem redux and flux --------------
// Redux and Flux are both architectural patterns used in building scalable and maintainable web applications, particularly those that involve complex state management. Redux can be seen as a specific implementation of the Flux architecture, with some key differences. Let's discuss the concepts of Flux and how Redux differs from it:

// Flux:
// Unidirectional Data Flow:
// Flux enforces a unidirectional data flow, where data moves in a single direction through the application.
// Actions are dispatched to a central dispatcher, which then notifies the stores. Stores contain the application state and update it in response to actions.

// Multiple Stores:
// In Flux, an application can have multiple stores, each responsible for managing a specific domain of the application state.
// Stores emit change events, and views can subscribe to changes in the stores they are interested in.

// Dispatcher:
// The Dispatcher is a central hub that manages the flow of data in a Flux application. It receives actions and dispatches them to the appropriate stores.
// Actions are simple objects with a type property that describes the action and any additional data.

// Redux:
// Redux is a specific implementation of the Flux architecture with some key differences:
// Flow of redux :- Action => Dispatch Action => Reducers => Store

// Single Store:
// Redux simplifies Flux by using a single store to manage the entire application state.
// There is a single source of truth for the application state, making it easier to reason about and debug.

// Immutability and Pure Functions:
// Redux emphasizes immutability and the use of pure functions (reducers) to update the state.
// The state in a Redux application is treated as immutable, and changes are made by creating new state objects rather than modifying existing ones.

// Actions and Action Creators:
// Redux introduces the concept of action creators, which are functions that create action objects.
// Actions in Redux are plain JavaScript objects with a type property. They describe an intention to change the state.

// Middleware:
// Redux allows the use of middleware to extend its functionality. Middleware can intercept actions and perform additional logic before they reach the reducer.
// This enables features like asynchronous operations, logging, and more.

// DevTools:
// Redux has a rich ecosystem of developer tools that make it easier to debug and trace the state changes in an application.

// In summary, while both Flux and Redux provide patterns for managing state in applications, Redux simplifies and refines the concepts introduced by Flux, offering a more opinionated and streamlined approach. Redux's single store, emphasis on immutability, and use of action creators are some of the key differences that make it a popular choice for state management in React applications.

// --- pure functions in javaScript ---
// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program's execution. Rather, it only depends on its input arguments.

// why we can not use flux instead of redux :-
// Redux has some characteristics that make it a popular choice in certain scenarios.Here are a few reasons why you might choose Redux over Flux or why Redux gained popularity:

// Simplicity and Centralization:1
// Redux simplifies the Flux architecture by enforcing a single store that holds the entire state of the application. This centralization of state makes it easier to reason about the application's behavior.
// In Flux, managing multiple stores can lead to complexity, and coordinating data flow between them might require additional effort.

// Unidirectional Data Flow:
// Redux strictly follows a unidirectional data flow, which means that data changes in the application follow a clear and predictable path. This helps in debugging and understanding how state changes occur.
// While Flux also promotes unidirectional data flow, the way it's implemented can vary across different Flux implementations.

// Predictable State Changes:
// Redux encourages the use of pure functions (reducers) to update the state in a predictable way. Reducers take the current state and an action and return a new state without modifying the existing state. This predictability makes it easier to trace and debug state changes.
// In Flux, stores handle state changes, and depending on how they are implemented, it might be less clear how state transitions occur.

// Single Store:
// In Redux, there is typically a single store, simplifying the management of the global state. Actions are dispatched to the single store, and reducers handle state changes.
// Flux allows multiple stores, which can sometimes lead to a more complex system, especially in larger applications.

// Community and Ecosystem:
// Redux has gained a large and active community, along with a rich ecosystem of middleware, tools, and extensions. This community support can be beneficial for developers seeking resources, documentation, and solutions to common problems.

// It's important to note that the choice between Redux and Flux, or any other state management solution, depends on the specific needs of your application and your team's preferences. Both Flux and Redux have been used successfully in various projects, and the suitability of one over the other can depend on factors like project size, team familiarity, and specific use cases.

// -----------  gamma Stack question answer -----------
// what is memorization
// In the context of React.js, memoization typically refers to a performance optimization technique aimed at optimizing the rendering process by memoizing (caching) the results of expensive function calls. This can help avoid unnecessary computations and re-renders, improving the overall performance of a React application.

// There are two common aspects of memoization in React:

// 1. Component Memoization:
// React provides a React.memo higher-order component that can be used to memoize functional components. When a functional component is wrapped with React.memo, it will only re-render if its props have changed. This can be useful in scenarios where a component's render output depends only on its props and not on its internal state.

// Example:
//  import React from 'react';
// const MyComponent = React.memo((props) => {
//      // Component logic here
//    });
//    // Usage
//    <MyComponent prop1={value1} prop2={value2} />;

//  2. Function Memoization:
// Memoization can also be applied to functions using techniques like caching. If a function is computationally expensive but produces the same output for the same input, you can memoize its results to avoid redundant calculations.

// Example:
// import { useMemo } from 'react';

// const expensiveFunction = (param) => {
//   // Expensive calculations here
//   return result;
// };

// const memoizedResult = useMemo(() => expensiveFunction(param), [param]);
// In this example, useMemo is used to memoize the result of expensiveFunction based on the dependency [param]. If param doesn't change, the memoized result will be returned without recomputing the function.

// Memoization is especially useful when dealing with complex computations or rendering logic, and it can contribute to better performance in React applications by avoiding unnecessary recalculations and renders. However, it's essential to use memoization judiciously, as it introduces some trade-offs, and not all components or functions necessarily benefit from memoization.

//----------- what is limitations of context API -----
// The Context API in React is a powerful tool for managing state that needs to be shared across components without passing props through each level of the component tree. However, it does have some limitations and considerations:

// Complexity with Large Applications:
// As the application grows, managing a large number of contexts can become complex. It's important to carefully design the structure of the context providers to avoid unnecessary re-renders and make the codebase maintainable.

// Performance Implications:
// Context updates can trigger re-renders in all components that are consuming the context. While React is optimized for efficient rendering, improper use of context or frequent updates can still impact performance. Memoization techniques, such as React.memo or useMemo, can be helpful in mitigating this.

// Limited to Class Components in Earlier Versions:
// In React versions prior to 16.3, the Context API was primarily designed for use with class components. While it's still possible to use contexts with functional components, the introduction of hooks in React 16.8 made it more ergonomic and widely adopted for functional components.
 
// No Built-in Solution for Dynamic Context Updates:
// The Context API doesn't provide a built-in mechanism for dynamic updates. Once a value is set in the context, it remains constant until the component re-renders with a new value. If dynamic updates are required, additional state management solutions may be needed, such as Redux or custom state management.

// Not Suitable for All State:
// Context is most effective for sharing state that needs to be consumed by multiple components deeply nested in the component tree. It might not be the best choice for all types of state, especially when the state is local to a component or a small subtree.

// Debugging and Tracing:
// Debugging context-related issues or tracing the source of context updates can be challenging, especially in larger codebases. Tools like React DevTools can help, but understanding the flow of context updates might require careful inspection.

// No Subscription Model:
// The Context API does not provide a built-in subscription model for consumers. Consumers re-render whenever the provider value changes, but there's no fine-grained control over which parts of the component tree should be updated. This can potentially lead to unnecessary re-renders.

// Despite these limitations, the Context API is a valuable tool in the React developer's toolbox and can be used effectively for managing shared state in certain scenarios. It's important to be aware of these limitations and consider alternative state management solutions when they better fit the requirements of a particular application.

// ------  use cases of useEffect hook 
// The useEffect hook in React is used for handling side effects in functional components. Side effects include data fetching, subscriptions, manual DOM manipulations, and other tasks that may occur during the component lifecycle. Here are some common use cases for the useEffect hook:
// 1. Data Fetching:
// 2. Component Did Mount and Component Will Unmount:
// Exmaple :-
// useEffect(() => {
//      // Component did mount logic

//      return () => {
//        // Component will unmount logic
//      };
//    }, []); // Empty dependency array means the effect runs once after the initial render
// 3. Updating the Document Title:
// 4. Event Listeners:
// Example :-
// useEffect(() => {
//      const handleClick = () => {
//        // Handle click event
//      };

//      window.addEventListener('click', handleClick);

//      return () => {
//        window.removeEventListener('click', handleClick);
//      };
//    }, []);
// 5. Subscriptions:
// 6. Timer or Delayed Operations:
// 7. Dependency Management for Asynchronous Operations:
// 8. Managing State:
// Remember that the useEffect hook runs after every render by default, so it's crucial to handle the dependencies correctly to avoid unnecessary re-execution of the effect. Always consider the dependency array to control when the effect should run. If the dependency array is empty, the effect runs only after the initial render. If it's not provided, the effect runs after every render.

// ------  spread operator & rest parameter -----
// spread operator :- The spread operator (...) in JavaScript is used to expand elements of an iterable (like an array, string, or object) into individual elements. It provides a concise syntax for copying, combining, or creating new arrays and objects. Here's a brief overview of how the spread operator works in different contexts:
// Example :-
// const numbers = [1, 2, 3];
// Using spread in function arguments
// const sum = (a, b, c) => a + b + c;
// const result = sum(...numbers); // Equivalent to sum(1, 2, 3)
// Rest Parameter :- The spread operator can also be used as a rest parameter in function arguments to collect remaining arguments into an array.
// Example :-
// const exampleFunction = (param1, param2, ...restParams) => {
//      console.log(param1);         // value1
//      console.log(param2);         // value2
//      console.log(restParams);     // [value3, value4, value5]
//    };

//    exampleFunction('value1', 'value2', 'value3', 'value4', 'value5');
//    The rest operator is flexible and allows you to handle variable numbers of arguments or elements in a clean and concise way. It's a powerful feature that is commonly used in modern JavaScript development. Keep in mind that the rest parameter must be the last parameter in a function, and it gathers all the remaining arguments or elements into an array.

// -----------  diff. between filter and find method of array
// filter is used when you want to create a new array with elements that meet a certain condition. It returns an array containing all the matching elements.

// find is used when you want to retrieve the first element that satisfies a specific condition. It returns the first matching element or undefined if none is found.

// It's important to choose the method based on your specific requirements. If you need all matching elements, use filter. If you're interested in the first matching element, use find. Both methods are useful tools in manipulating and working with arrays in JavaScript.

// --- -- what is controled and uncontroled component
// In React, controlled and uncontrolled components refer to different approaches for handling form elements and their state.

// Controlled Components:
// Controlled components are those where React controls the state of the form elements.
// The state of the form elements (like input fields, checkboxes, etc.) is managed by the React component using the state property.
// Changes to the form elements are handled through React component methods, usually with an onChange event handler.
// Controlled components provide a single source of truth, making it easier to manipulate and validate user input.
// Example of a controlled input field:

// Uncontrolled Components:
// Uncontrolled components, on the other hand, allow the DOM to handle the form element state.
// In this approach, the form elements keep their own state, and React does not control or manage it.
// Uncontrolled components are often used when integrating React with non-React code or when you want a more traditional HTML-based approach to form handling.
// Example of an uncontrolled input field:

// In summary, controlled components rely on React to manage the form element state, while uncontrolled components let the DOM handle the state directly. The choice between them depends on the specific requirements of your application.

//---  state lifting
// State lifting in React refers to the practice of moving the state of a component higher up in the component tree so that multiple child components can share and update that state. By lifting state
// State lifting means moving state from a child component to a common parent component so that multiple child components can share and sync the same data.

// ---  what is Error bounderies of react :-
// ---
// Error boundaries in React are components that catch JavaScript errors anywhere in their component tree and log those errors, display a fallback UI, or perform some other action to handle the error gracefully. They work similarly to try-catch statements in JavaScript but for React components.

// Error boundaries are a way to prevent unhandled errors from crashing the entire React application. When an error occurs during rendering, in a lifecycle method, or in the constructor of any component within the tree, React will walk up the component tree hierarchy until it finds the nearest error boundary. The error boundary component can then capture the error and handle it in a way that prevents the entire UI from breaking.

// To define an error boundary in React, you need to implement the componentDidCatch lifecycle method. Here's a simple example:

// It's important to note that error boundaries only catch errors that occur during rendering, in lifecycle methods, and in the constructor. They do not catch errors that occur in event handlers or asynchronous code (e.g., setTimeout or fetch). For those cases, you'd need to use traditional JavaScript error-handling mechanisms.

// So, in short, Error Boundaries do not prevent errors from occurring but provide a way to handle them gracefully, preventing the entire application from crashing due to a single error. They are essential for maintaining a good user experience in React applications.

//  reactjs is js libray

// differance between shallow copy amd deep copy
// Shallow copy and deep copy refer to different ways of copying objects or arrays, and they have distinct characteristics:

// Shallow Copy:

// A shallow copy creates a new object or array, but does not create new copies of nested objects or arrays within the original object.
// The top-level structure is duplicated, but the inner objects or arrays are still references to the same objects as the original.
// Shallow copies can be created using methods like Object.assign(), the spread operator (...), or by using array methods like slice().
// Example of a shallow copy using the spread operator:

// //Example :-
// let originalArray = [1, 2, [3, 4]];
// let shallowCopy = [...originalArray];

// shallowCopy[2][0] = 99;

// console.log(originalArray); // Output: [1, 2, [99, 4]]
// console.log(shallowCopy);   // Output: [1, 2, [99, 4]]

// Deep Copy:

// A deep copy creates a new object or array along with new copies of all nested objects or arrays within the original.
// The entire structure, including nested structures, is duplicated, and changes made to the copied object or array do not affect the original.
// Deep copies are typically achieved using recursive functions or libraries like lodash that provide deep copy functions.
// Example of a deep copy using a recursive function:

// // Example :-
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

// let originalArray = [1, 2, [3, 4]];
// let deepCopyArray = deepCopy(originalArray);

// deepCopyArray[2][0] = 99;

// console.log(originalArray);    // Output: [1, 2, [3, 4]]
// console.log(deepCopyArray);    // Output: [1, 2, [99, 4]]

// One more Example :- for deep copy
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

// In summary, a shallow copy duplicates only the top-level structure, while a deep copy duplicates both the top-level structure and all nested structures within the original object or array. The choice between shallow and deep copy depends on the requirements of your specific use case.

// if you want to check two Array then 1st check its length after this check its all values
// Example :-
// function arraysAreEqual(arr1, arr2) {
//   // Check if the arrays have the same length
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   // Iterate through the elements and compare them
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   // If all elements are equal, return true
//   return true;
// }
// let arr1 = [1,2,3], arr2 = [1,2,3]
// console.log(arraysAreEqual(arr1, arr2)); // true
// console.log(arr1.toString() == arr2.toString()); // true

// // differance between useMemo hook and useCallBAck  hook
//----- useMemo used for computation , useCallBack used for rerendring of componewnts. React.Memo used for avaoid unnesary re renders :-
// useMemo and useCallback are both hooks provided by React, but they serve different purposes in terms of optimization.
// useMemo:
// Purpose: It is used for memoization, which is the process of memorizing the result of a function and returning the cached result when the same inputs occur again.
// Usage: It takes a function and an array of dependencies. The function is only re-executed when one of the dependencies changes. The result is then memoized and returned.
// Example :-
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// useCallback:
// Purpose: It is used for memoizing functions, particularly useful when passing functions as props to child components to prevent unnecessary re-renders of those components.
// Usage: It takes a callback function and an array of dependencies. The callback function is only recreated when one of the dependencies changes, helping to prevent unnecessary re-renders of components that use the callback.
// Example:
// const memoizedCallback = useCallback(() => {
//   doSomething(a, b);
// }, [a, b]);
// In summary:
// useMemo is used to memoize the result of a computation, and it takes a function that performs the computation.
// useCallback is used to memoize functions, and it takes a callback function.
// Both hooks play a role in optimizing React components by avoiding unnecessary recalculations or recreations when certain dependencies have not changed. They are often used in combination to optimize both values and functions within a component.

// useMemo Example :-
// const [count, setCount] = useState(0);

//   // Expensive computation function
//   const calculateExpensiveValue = (value) => {
//     console.log("Calculating expensive value...");
//     return value * 2;
//   };

//   // Memoized result of the expensive computation
//   const memoizedValue = useMemo(() => {
//     return calculateExpensiveValue(count);
//   }, [count]); // Recalculate only when 'count' changes

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Memoized Value: {memoizedValue}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </div>
//   );

// ========--useCallback hook example :-
// const ChildComponent = ({ onClick }) => {
//      console.log("ChildComponent rendered");
//      return (
//        <button onClick={onClick}>Click me</button>
//      );
//    };

//    const ParentComponent = () => {
//      const [count, setCount] = useState(0);

//      // Memoized callback function
//      const handleClick = useCallback(() => {
//        console.log("Button clicked");
//        setCount(count + 1);
//      }, [count]); // Recreate the callback only when 'count' changes

//      return (
//        <div>
//          <p>Count: {count}</p>
//          <ChildComponent onClick={handleClick} />
//        </div>
//      );
//    };

//    export default ParentComponent;

// useEffect(() => {
//   return () => {
//     second
//   }
// }, undefined)
// In this example, the useEffect hook sets up some effect, and the returned function from the useEffect hook serves as a cleanup function. This cleanup function will be called when the component unmounts or when the dependency array changes (if provided).
// The dependency array provided as the second argument to useEffect is undefined in your example. If you pass undefined, it's effectively the same as not providing a dependency array at all. This means the effect will run after every render and the cleanup function will be called on unmount. (" which run same like this [] ")

// how we can run component will unmount inside useEffect hook
// The dependency array [] passed as the second argument ensures that the effect runs only once when the component mounts (equivalent to componentDidMount), and the cleanup function runs only when the component unmounts (equivalent to componentWillUnmount). If you have dependencies, you should include them in the dependency array to ensure the cleanup function runs whenever those dependencies change or when the component unmounts, whichever happens first.
// Example :-
// const [count, setCount] = useState(0);

// useEffect(() => {
//   // This effect sets up a timer when the component mounts
//   const timerId = setInterval(() => {
//     setCount(prevCount => prevCount + 1);
//   }, 1000);

//   // The returned cleanup function will be called when the component unmounts
//   return () => {
//     clearInterval(timerId); // Cleanup: Clear the timer
//   };
// }, []); // Run effect only once on mount

/// ----  life half cycle methods

// In React, lifecycle methods are methods that are invoked at various points during the lifecycle of a component. They allow you to hook into specific moments in a component's life cycle, such as when it is mounted, updated, or unmounted.

// However, as of React 16.3, many of the traditional lifecycle methods have been deprecated in favor of a new set of methods called "lifecycle hooks" or "lifecycle functions" that are introduced by the React Hooks API.

// Here's a summary of the traditional lifecycle methods and their corresponding hooks:

// Mounting:

// componentWillMount(): Invoked just before the component is mounted to the DOM.
// componentDidMount(): Invoked immediately after the component is mounted to the DOM.
// With hooks:

// useEffect(() => {}, []): The function passed to useEffect runs after the component renders for the first time, similar to componentDidMount. By providing an empty dependency array ([]), it ensures that the effect only runs once after the initial render.
// Updating:

// componentWillReceiveProps(nextProps): Invoked when the component receives new props.
// shouldComponentUpdate(nextProps, nextState): Invoked before rendering when new props or state are being received.
// componentWillUpdate(nextProps, nextState): Invoked just before rendering when new props or state are being received.
// componentDidUpdate(prevProps, prevState): Invoked immediately after updating occurs.
// With hooks:

// useEffect(() => {}, [deps]): The function passed to useEffect runs after every render if any of the dependencies (deps) have changed, similar to componentDidUpdate. If no dependencies are provided ([]), the effect runs after every render.
// Unmounting:

// componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed.
// With hooks:

// useEffect(() => { return () => {} }, []): The cleanup function returned from useEffect is called when the component is unmounted, similar to componentWillUnmount. The empty dependency array ([]) ensures the cleanup function is only run once when the component is mounted and then unmounted.
// It's important to note that the traditional lifecycle methods are still supported in React, but they are considered legacy and may be deprecated in future versions. It's recommended to use the Hooks API for new components and refactor existing components to use hooks where applicable.

// ------------ what is the higer order component in react   ----
// A Higher-Order Component (HOC) is a pattern in React that allows you to reuse component logic. It's a function that takes a component and returns a new component with enhanced functionality. HOCs are a way to share behavior between React components without repeating code.
// Here's a basic example of a Higher-Order Component:

// import React from 'react';

// // Higher-Order Component 
// function withLogger(WrappedComponent) {
//   return class extends React.Component {
//     componentDidMount() {
//       console.log(`Component ${WrappedComponent.name} mounted`);
//     }

//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   };
// }

// // Usage of the Higher-Order Component
// class MyComponent extends React.Component {
//   render() {
//     return <div>Hello, World!</div>;
//   }
// }

// const MyComponentWithLogger = withLogger(MyComponent);

// export default MyComponentWithLogger;

// HOCs are versatile and can be used for various purposes, such as:
// Code reuse: You can extract common functionality from multiple components into a single HOC and reuse it across your application.
// Cross-cutting concerns: HOCs can encapsulate cross-cutting concerns like authentication, logging, or data fetching and apply them to components as needed.
// Composing behaviors: You can compose multiple HOCs together to apply multiple behaviors to a component

// fat arrow functian is hosted or not
// However, arrow functions are expressions, not declarations. They are treated similarly to other variable declarations, so they follow the normal rules of variable hoisting. When you use const or let to declare an arrow function, the variable declaration is hoisted to the top of its scope, but the assignment of the function to the variable remains in its original place in the code.

// useLayoutEffectHook ?
// The useLayoutEffect hook in React is similar to the useEffect hook, but it runs synchronously immediately after all DOM mutations(DOM mutations refer to changes made to the (DOM)). This means it fires synchronously after all DOM mutations but before the browser has painted those changes on the screen.
// Usage: useLayoutEffect is typically used for scenarios where you need to measure layout or perform DOM manipulations that affect layout immediately after the render.
// Example :-
// import React, { useLayoutEffect, useState } from 'react';

// function MyComponent() {
//   const [width, setWidth] = useState(0);

//   useLayoutEffect(() => {
//     // Measure the width of the component's container
//     const newWidth = document.getElementById('container').clientWidth;
//     setWidth(newWidth);
//   }, []); // Empty dependency array means the effect runs only once after the initial render

//   return (
//     <div id="container">
//       <p>Width of container: {width}px</p>
//     </div>
//   );
// }

// export default MyComponent;

// In this example, useLayoutEffect is used to measure the width of the component's container synchronously after the render and update the state accordingly. This ensures that the displayed width is accurate and reflects any changes to the layout immediately.

// // with using of useLayoutEffect they print the both states after 400 miliseconds, bcz  it fires synchronously after all DOM mutations.
// useLayoutEffect(() => {
//   setIsAdmin(userId === userIds[0]) // which is synchoronous so its block tha rendering of component
// }, [userId])
// // useLayoutEffect not good for performance so use it in special cases

// what is the pure component in react
// In React, a pure component is a class component that extends React.PureComponent instead of React.Component. A pure component implements a shallow comparison of props and state to determine if the component should re-render. If the props and state remain the same, the component won't re-render, leading to potential performance optimizations.

// The main difference between a regular component (React.Component) and a pure component (React.PureComponent) is that a pure component automatically implements the shouldComponentUpdate method with a shallow comparison of props and state, avoiding unnecessary re-renders when the props and state have not changed.

// Here's an example of a pure component:
// import React, { PureComponent } from 'react';

// class PureCounter extends PureComponent {
//   render() {
//     return <div>Count: {this.props.count}</div>;
//   }
// }

// export default PureCounter;

// ----in functional based component :-
// import React from 'react';

// const MyPureFunctionalComponent = React.memo(({ name }) => {
//   return <div>Hello, {name}!</div>;
// });

// export default MyPureFunctionalComponent;

// In this example, PureCounter is a pure component because it extends React.PureComponent and only renders the count prop. If the count prop remains the same between renders, the component won't re-render, even if other props or state have changed.

// It's important to note that while pure components can provide performance optimizations by reducing unnecessary re-renders, they only perform a shallow comparison of props and state. Therefore, if your props or state contain complex data structures like nested objects or arrays, you may need to implement custom shouldComponentUpdate logic or use immutable data structures to ensure proper comparison.

// Chat GPT intermidiate level question and answers :-
// Certainly! Here are some intermediate-level React interview questions along with their answers:

// What are controlled components in React?
// In React, a controlled component is a component whose form elements (like input, textarea, and select) are controlled by React state. This means that the value of the form element is controlled by React state and any changes to the value are handled by React.

// What is the purpose of the useReducer hook in React?
// The useReducer hook is an alternative to useState for managing complex state logic in functional components. It accepts a reducer function and an initial state, and returns the current state and a dispatch function to update the state.
// Example :-
// const reducer = (state, action) => {
//      switch (action.type) {
//        case 'increment':
//          return { count: state.count + 1 };
//        case 'decrement':
//          return { count: state.count - 1 };
//        case 'reset':
//          return { count: 0 };
//        default:
//          return state;
//      }
//    };

// const [state, dispatch] = useReducer(reducer, { count: 0 });

// What is the Context API in React and when would you use it?
// The Context API is a way to share data between components without having to pass props through every level of the component tree. It's useful for passing down global data such as user authentication, theme, or language preferences.
// Implematation :-
// --  1st create context of using createContext() mehtod of react
// import { createContext } from 'react';
// export const MyContext = createContext("");
// -- 2nd Wrap Components with a Provider
// <MyContext.Provider value={{ text, setText }}>
//   <MyComponent />
// </MyContext.Provider>
// -- 3rd Consume the Context of using useContext() hook
// const { text, setText } = useContext(MyContext);
//     <div>
//       <h1>{text}</h1>
//       <button onClick={() => setText('Hello, world!')}>
//         Click me
//       </button>
//     </div>

// Explain the concept of higher-order components (HOCs) in React.
// Higher-order components (HOCs) are functions that accept a component and return a new component with enhanced functionality (adding state, manipulating props, subscribing to data sources, or applying certain behaviors). They enable code reuse and provide a way to add features such as data fetching, state management, abstraction of logic, or authentication to multiple components.

// What is the purpose of React Router and how does it work?
// React Router is a library for routing in React applications. It allows developers to define routes and navigate between different views or pages in a single-page application (SPA) without reloading the entire page. React Router uses a declarative approach with components like BrowserRouter, Route, Link, and Switch to manage navigation.

// What are the advantages of using Redux with React?
// Redux is a predictable state container for JavaScript applications. When used with React, Redux provides a centralized store for managing application state, making it easier to manage and debug complex state logic. Redux also facilitates state persistence, time-travel debugging, and server-side rendering.

// Explain the concept of code splitting in React and why is it important?
// Code splitting is a technique used to split a JavaScript bundle into smaller chunks that can be loaded on demand. It helps improve the initial loading time of the application by reducing the size of the bundle that needs to be downloaded. Code splitting is important for improving performance and optimizing the user experience, especially for large React applications.

// What is server-side rendering (SSR) in React and why might you use it?
// Server-side rendering (SSR) is the process of rendering React components on the server and sending the fully-rendered HTML to the client. SSR improves performance by sending pre-rendered content to the browser, which can be displayed faster than client-side rendering (CSR). SSR also benefits SEO and provides better support for social media crawlers.

// Why SSR supports SEO :-
// SSR supports SEO better because it provides the complete HTML content upfront, allowing search engine crawlers to easily access and index the content./;
// CSR can provide a smoother user experience once the initial page loads, as subsequent interactions can be faster due to the dynamic nature of the rendering process.

// CSR can offer faster initial page load times because the browser can start rendering the page as soon as it receives the initial HTML and JavaScript files. SSR can be slower for initial page loads because the server has to render the HTML, CSS, and JavaScript before sending it to the client.

// What are some common performance optimization techniques in React?
// Some common performance optimization techniques in React include:
// Memoization with React.memo or useMemo
// Code splitting to reduce bundle size
// Virtualization for efficient rendering of large lists
// Server-side rendering (SSR) for faster initial page loads
// Using production builds and minimizing unnecessary re-renders with PureComponent or shouldComponentUpdate optimization.
// These intermediate-level React interview questions delve deeper into various concepts and features of React development, testing a candidate's knowledge beyond the basics. Understanding these concepts is essential for building scalable and performant React applications.

//-----------    apply() bind() call() functions ------
// apply(), bind(), and call() are all methods in JavaScript used to manipulate how a function is executed and to control the value of this within the function. Here's an overview of each:
// These methods are commonly used in JavaScript for various purposes, including function composition, method borrowing, and setting the context for a function.

// 1. apply():
// The apply() method is used to call a function with a given this value, and allows you to pass an array (or array-like object) of arguments to the function.
// Syntax: function.apply(thisArg, [argsArray])

// let obje = {
//      name : "hbk"
//  }
//  function fun(name, lName){
//  console.log(`${name}  ${lName}`); // harsh  jain
//  console.log(this.name); // hbk
//  }
//  let args = [ 'harsh', 'jain', 23 ]
//  fun.apply(obje, args ) // o/p harsh jain // for passeing the multiple arguments we are use apply mehtod
// null: In this case, null is passed as the first argument to apply. When null is passed, it means that the function will be executed in the context of the global object (or window object in the browser, global object in Node.js). Passing null effectively means that the function will not be executed in the context of any specific object.
// let thisArgs = {name: "josh"}
// fun.apply(thisArgs, args) // o/p :-  harsh jain josh ( this.name means josh )
// thisArg: The value of this provided for the call to function. If you're not concerned about the context (this), you can pass null or undefined.
// While in the specific example you provided, using apply() might seem redundant, it offers flexibility and utility in more complex scenarios where you need to pass arguments dynamically or control the function's context explicitly. 

// 2 call():
// The call() method is similar to apply(), but accepts arguments individually rather than as an array.
// Syntax: function.call(thisArg, arg1, arg2, ...)

// Example :-
// function greet(name, j) {
//      console.log(`Hello, ${name}!${j}`);
// }
// greet.call(null, 'Bob', 'jain'); // Outputs: Hello, Bob!jain
// In this example, call() is used to call the greet() function with the this value set to null and passing the single argument 'Bob'

// 3 bind():
// The bind() method creates a new function that, when called, has its this value set to a specific value and allows you to preset some of the function's arguments.
// Syntax: function.bind(thisArg, arg1, arg2, ...)
// Example:-
// function greet(name) {
//      console.log(`Hello, ${name}!`);
// }
// const sayHello = greet.bind(null, 'Charlie');
// sayHello(); // Outputs: Hello, Charlie!

//  -------------  Promise chaining,
// Promise chaining is a technique used in JavaScript to handle asynchronous operations sequentially by chaining multiple promises together.It allows you to execute a series of asynchronous operations one after the other in a specific order, making the code more readable and manageable.
// .then() methods as needed to perform additional asynchronous operations in sequence.
// .catch() method at the end of the chain to handle any errors that occur during the execution of the promises in the chain.

//      Here's how promise chaining works:
// Create Promises: You start by creating one or more promises using the Promise constructor or by using functions that return promises(e.g., fetch()).

//      Chain.then(): You chain.then() methods to the promises you've created. Each .then() method takes one or two functions as arguments:

// The first function (often called onFulfilled) handles the fulfillment of the promise.
// The second function (optional, often called onRejected) handles the rejection of the promise.
// Return Promises: Inside each.then() method, you return a new promise or a value.If you return a promise, the next.then() in the chain will wait for that promise to settle(resolve or reject) before continuing.

// Continue Chaining: You can continue chaining .then() methods as needed to perform additional asynchronous operations in sequence.

// Error Handling: You can add a.catch() method at the end of the chain to handle any errors that occur during the execution of the promises in the chain.

//      Here's a simple example of promise chaining:

// Example: -
//      function asyncOperation1() {
//           return new Promise((resolve) => {
//                setTimeout(() => {
//                     console.log("Async operation 1 completed.");
//                     resolve(1);
//                }, 1000);
//           });
//      }

// function asyncOperation2(result) {
//      return new Promise((resolve) => {
//           setTimeout(() => { 
//                console.log("Async operation 2 completed with result:", result);
//                resolve(2);
//           }, 1000);
//      });
// }

// function asyncOperation3(result) {
//      return new Promise((resolve) => {
//           setTimeout(() => {
//                console.log("Async operation 3 completed with result:", result);
//                resolve(3);
//           }, 1000);
//      });
// }

// asyncOperation1()
//      .then(asyncOperation2)
//      .then(asyncOperation3)
//      .then((finalResult) => {
//           console.log("Final result:", finalResult);
//      })
//      .catch((error) => {
//           console.error("An error occurred:", error);
//      });

//  In this example, asyncOperation1(), asyncOperation2(), and asyncOperation3() represent asynchronous functions that return promises.We chain them together using.then(), and finally, we handle the final result or any errors using.then() and.catch() respectively.

// ----------  e.preventDefhault(),
// suppose  anchar tag <a> ka defaulte behaviour forcefully ignore karna hai  then we can use preventDefhault  , every html element have defhault behaviour
// For Example like  :-
// function fun(e){
//      e.preventDefhault() // this ignore href attribute and run fun function if we dont write that line then which redirect the google.com
//      console.log("run...");
// }
// <a href="www.google.com" onClick={() => fun()}>click</a>

// -- // preventDefault() is commonly used in situations where you want to handle the behavior of an event yourself, without allowing the browser to perform its default action. This is often done in AJAX applications to handle form submissions or to create custom interactions with links and buttons.

// e.preventDefault() is a method in JavaScript used to prevent the default behavior of an event. It is commonly used in event handlers to stop the default action associated with an event from occurring.

// Here's how it works:

// Event Handlers: When an event occurs (such as a click, submit, keypress, etc.), an event object (e in your example) is automatically passed to the event handler function.

// Default Action: Many events in web browsers have default actions associated with them. For example, clicking on a link (<a> tag) typically navigates to the URL specified in the href attribute. Submitting a form (<form> tag) typically sends data to the server and reloads the page.

// Preventing Default: By calling e.preventDefault(), you can prevent the browser from performing the default action associated with the event.

// Here's an example:
// document.getElementById("myLink").addEventListener("click", function(e) {
//      e.preventDefault(); // Prevent the default behavior of clicking a link
//      console.log("Link clicked, but default action prevented.");
//    });

//    In this example, when the element with the ID myLink is clicked, the event handler is triggered. Inside the event handler, e.preventDefault() is called to prevent the default action (navigating to the URL specified in the href attribute of the link). Instead, the message "Link clicked, but default action prevented." will be logged to the console.

// ---- Readux :-  slices
// Redux Toolkit is an official package provided by the Redux team as the recommended way to write Redux logic. It is designed to simplify the process of writing Redux code by providing utilities to streamline common tasks, reduce boilerplate code, and encourage best practices.

// Redux Toolkit includes several utilities, such as:

// createSlice(): A function that generates action creators and reducers for a slice of state. It helps organize your Redux code by grouping related action creators and reducers together.

// configureStore(): A function that wraps around Redux's createStore() function and provides sensible defaults for configuring the Redux store. It sets up middleware, enables devtools, and allows easy customization of store setup.

// createAsyncThunk(): A function for creating thunk action creators that manage asynchronous logic, such as fetching data from an API. It automatically generates actions to handle pending, fulfilled, and rejected states.

// createReducer(): A utility function to simplify writing reducer functions. It allows you to define a reducer as an object mapping action types to case reducer functions, which reduces the amount of switch case boilerplate.

// createEntityAdapter(): A utility function for managing normalized state structures for collections of entities. It provides methods for CRUD operations (create, read, update, delete) and makes it easier to work with normalized data structures.

// Using Redux Toolkit can make your Redux codebase more concise, easier to maintain, and less error-prone. It's particularly helpful for beginners who are just getting started with Redux, as well as for experienced developers looking to improve their Redux workflows and reduce repetitive tasks

// ------------  2024 react interview question answer ---------- 
// https://www.geeksforgeeks.org/reactjs-interview-questions-and-answers-intermediate-level/

// how to manage region in other countery bcz countrts bse url is different .
// “To handle multiple regions, we can use domain-based, subdomain-based, or URL path-based strategies. In modern apps like Next.js, URL-based routing with i18n and backend region handling is the most scalable and maintainable approach.”

// -------------- What is the use of ref in React?
// ref is attribute, use ref attribute within useRef hook
// we use the useRef hook to create a reference (inputRef) to the input element. // if we change any state of our component so react re-render the whole component then variable values is re created solution of the problem is useRef hook :- For persisting a value of variable between renders
// By using ref, we can access and manipulate the DOM node of the input element directly within the React component

// use Cases of ref :-
// useRef hook persists a value across renders, if you change state or prop then whole component is re render so component aasign intial values of all variables and state at this useRef value is same which is not re intialize
// and kisi v dom elements ko access ker sakte hai ref.current karke with ref attribute

// ----------  what is hooks
//  introduced in React 16.8
// Hooks provide a way to use stateful logic and lifecycle features in functional components without converting them to class components. They allow you to reuse stateful logic across multiple components without using inheritance or higher-order components.
// Using hooks, developers can organize and encapsulate stateful logic more effectively, leading to cleaner and more modular code. They also encourage the use of functional components, which are easier to understand and test compared to class components.

// ------------ why we can functional component instead of classBased compoennts :-
// functional components with hooks offer a more modern and concise approach to building UI components, leading to cleaner code, improved performance, and better developer experience., Simplicity and readability:, Hooks allow developers to extract and reuse stateful logic across multiple components using custom hooks,  dont need to write this, and class,

// There are several reasons why functional components with hooks have become preferred over class-based components in React:

// Simplicity and readability: Functional components tend to be more concise and easier to read than class components. They typically require less boilerplate code, making them simpler to understand, especially for developers new to React.

// Easier to reason about: Functional components encourage a more functional programming style, where components are treated as pure functions that take props as input and return rendered elements. This makes it easier to reason about component behavior and predict the output based on inputs.

// Reusability and composition: Hooks allow developers to extract and reuse stateful logic across multiple components using custom hooks. This promotes code reuse and composability, as the same logic can be shared between different components without the need for inheritance or higher-order components.

// Performance optimizations: Functional components with hooks can be optimized more easily than class components. Hooks like useMemo and useCallback help optimize performance by memoizing values and preventing unnecessary re-renders.

// Hooks-based API: React's newer features and APIs are primarily built around hooks, so using functional components with hooks allows developers to take advantage of the latest React features and patterns.

// No this keyword: Functional components don't use the this keyword, which can sometimes lead to confusion or unexpected behavior in class components. With functional components, the scope of variables is clearer and more predictable.

// Improved tooling support: As functional components with hooks have become more popular, tooling support and documentation have improved significantly. Popular code editors and IDEs provide better auto-completion and linting support for hooks-based code.

// Overall, while class-based components still have their place in React, functional components with hooks offer a more modern and concise approach to building UI components, leading to cleaner code, improved performance, and better developer experience.

// ---------- What is React.Fragment -----------
// React Fragments provide a way to group multiple React elements without adding extra nodes to the DOM. When you render multiple elements in a React component, you typically need to wrap them in a single parent element, like a <div>. However, there are situations where adding an extra wrapper element is unnecessary or semantically incorrect.

// React Fragments were introduced to solve this problem. They allow you to group elements together without introducing an extra DOM element. Fragments are lightweight and do not create a new DOM node in the resulting HTML output.

// ---------- Differance between ES-5, & ES-6
// Arrow Functions:, let and const Keywords:, Template Literals (in ES 5 we use string concatanation ):, Classes:, Modules:, Default Parameters:, Rest Parameters and Spread Syntax:, Enhanced Object Literals:, Promises:

// Detailling :-
// ES5 (ECMAScript 5) and ES6 (ECMAScript 2015, also known as ES2015) are two different versions of the ECMAScript standard, which defines the scripting language specifications that JavaScript is based on. Here are some key differences between ES5 and ES6:

// Arrow Functions:

// ES6 introduced arrow functions (() => {}), which provide a more concise syntax for defining functions compared to traditional function expressions.
// Arrow functions also have lexical scoping of this, meaning they don't bind their own this value but inherit it from the enclosing scope.
// let and const Keywords:

// ES6 introduced block-scoped variables with let and const, replacing the function-scoped var keyword for variable declaration.
// let allows variables to be reassigned, while const declares constants that cannot be reassigned.
// Template Literals:

// ES6 introduced template literals, which allow for string interpolation and multi-line strings using backticks ( ) instead of single or double quotes.
// Classes:

// ES6 introduced a class syntax (class MyClass {}) for defining object-oriented classes in JavaScript, providing syntactic sugar over the prototype-based inheritance model.
// Modules:

// ES6 introduced a standardized module system with import and export keywords for better code organization and module dependency management.
// Default Parameters:

// ES6 allows function parameters to have default values (function myFunction(param = defaultValue) {}), simplifying function definitions and reducing the need for manual parameter checks.
// Rest Parameters and Spread Syntax:

// ES6 introduced the rest parameter syntax (...args) and spread syntax (...array) for working with variable-length argument lists and arrays more conveniently.
// Enhanced Object Literals:

// ES6 introduced shorthand property syntax ({ x, y } instead of { x: x, y: y }), computed property names ({ [key]: value }), and method definitions within object literals ({ myMethod() {} }).
// Promises:

// While Promises existed in libraries and polyfills prior to ES6, ES6 standardized the Promise object for asynchronous programming, providing a built-in way to work with asynchronous operations.
// These are just some of the key differences between ES5 and ES6. ES6 introduced many new features and improvements to JavaScript, making it more powerful, expressive, and easier to work with. Since ES6, ECMAScript specifications have been released annually, introducing new features and enhancements regularly.

// filter, map, reduce method is not allow to break this ittrations of usging break keyward, if you want to break this then use  "throw" with try catch block for
// Examole :- find 1st palidrome of this array
// try {
//      fil = words.reduce((accum, curElme) => {
//        if (accum !== "") return accum; // If a palindrome is already found, return it without further processing
//        if (curElme === curElme.split("").reverse().join("")) {
//          throw curElme; // Throw an exception to break out of the loop
//        }
//        return accum;
//      }, "");
//    } catch (matchedElement) {
//      fil = matchedElement; // Catch the thrown element and assign it to fil
//    }

// fill have first cuElement of this array

// console.log(typeof []); // object     // When you use typeof [], JavaScript returns "object" because arrays are objects in JavaScript. Arrays inherit from the Array constructor, which itself is a built-in object constructor. So, while arrays have some special behaviors and methods specific to handling ordered collections of data, they are still considered objects in JavaScript.
// try this for findOut variable is array or not  :- Array.isArray([1,2]) // true
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

//  whats is new featuers of ES14
// With the ES14 version, Array.prototype added 4 new methods that change by copy: toReversed, toSorted, toSpliced, and with. These are immutable array methods, which make a copy of the array with the applied modifications without affecting the original array that they were called on.

// Array.toReversed() method , It returns a new array with the elements in reversed order, and its not modified its privious array

// Array.toSorted() method , toSorted has the same signature as sort, but it creates a new sorted array instead of sorting the array that it was called on. It returns a new array with the elements sorted in ascending order.

// Array.toSpliced() method :-  toSpliced is the copying version of the splice method. toSpliced removes and/or replaces elements at a given starting index into a new array without modifying the original.

// Array.with(index number of replacement element, new value of replaced element)  :- The with method updates a single element at a given index and returns a new array.
// Example :-  const numbers = [1, 2, 9999, 4]
// const result = numbers.with(2, 3)
// console.log(numbers) // Output: [1, 2, 9999, 3]
// console.log(result) // Output: [1, 2, 3, 4]

// Array.findLast(callBack function, thisArgs) :- The findLast() Array method begins iterating from the end of the array and returns the value of the first element that satisfies the conditions in the callback function. If no elements satisfy the testing function, undefined is returned. Each element of the array is passed into the callback function one by one.
// Example :-
// const numsArray = [4, 51, 40, 99, 16]
// const lastBigNum = numsArray.findLast((num) => num > 50)
// console.log(lastBigNum) // Output: 99

// for more understanding about ES14 :-  https://www.codementor.io/@rashaun613/complete-guide-of-new-javascript-features-from-ecmascript-2023-294dukdsxl

// dont try to modified something globally ( in side filter function ) in  filter method, bcz its last ittration not working , use reduce method instead of filter or map

// all functions not run automatically , while you cant call it

/// difference between overriding AND overLoading
// method overriding -  Method overriding is a run-time polymorphism. Method overriding always needs inheritance. In method overriding, methods must have the same name and same signature.
// method overloading - Method overloading is a compile-time polymorphism. Method overloading may or may not require inheritance.  In method overloading, methods must have the same name and different signatures.

// --- Differance between attribute and Properties
// In HTML, an attribute is a value that is specified in the markup of an element and describes the characteristics of that element. A property, on the other hand, is a value that is assigned to an object in the Document Object Model (DOM) of the HTML page. 

// Here's a more detailed explanation of the differences between attributes and properties:

// Attributes are part of the HTML markup, while properties are part of the DOM. Attributes are defined in the HTML source code, whereas properties are defined in the JavaScript code that manipulates the DOM.
// Attributes are strings, while properties are JavaScript objects. Attributes are defined using text, while properties are defined using JavaScript objects.
// Attributes can only be set in the HTML markup, while properties can be set and modified in JavaScript code. Attributes can be set using the "attribute=value" syntax in HTML, while properties can be set and modified using JavaScript code.
// Attributes and properties have different naming conventions. Attributes use hyphenated names (e.g., "data-attribute"), while properties use camelCase names (e.g., "dataAttribute").
// In summary, attributes are values that are specified in the HTML markup to describe the characteristics of an element, while properties are values that are assigned to objects in the DOM using JavaScript code.

// Array, Object our Null ka typeof object hi rehta hai

// What is Observable in JS?
// Observables are a technique for event handling, asynchronous programming, and handling multiple values emitted over time. The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of state changes.

// Example :-
// Importing the necessary RxJS functions
// import { Observable } from 'rxjs';

// // Creating an observable that emits a sequence of numbers
// const numberObservable = new Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   setTimeout(() => {
//     observer.next(4);
//     observer.complete();
//   }, 1000);
// });

// // Subscribing to the observable to receive its emitted values
// const subscription = numberObservable.subscribe({
//   next: value => console.log('Received value:', value),
//   error: err => console.error('Error:', err),
//   complete: () => console.log('Observable completed'),
// });

// // Unsubscribing from the observable after a certain period of time
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 2000);

// What is the Observable pattern in React?
// Leveraging Observer Pattern with ReactJS Hooks for Video and ...
// The Observer Pattern establishes a “one-to-many” relationship between objects where any change in the subject automatically notifies multiple objects (observers). This allows for efficient and flexible communication between objects without the need for direct coupling between those components

// What is the Difference Between Promises and Observables?
// Eager vs Lazy
// Promise: It is eager — It starts executing immediately once it is defined, It doesn’t matter whether we are calling the then()/catch() method.
// Observable: It is lazy — It won't start executing until we subscribe to it.

// Async vs Sync
// Promise: It is always Async, Once the value is resolved/rejected, the respective callback function will go to the micro task queue and gets executed once the call stack is empty.
// No matter how the value is resolved, Even if it is resolved synchronously (directly) or asynchronously, the callback function will be executed in an async way only.
// Observable: It can be either Sync or Async — If we are emitting a value synchronously, then it will behave synchronously and if we are emitting the value asynchronously it will behave asynchronously.

// Single value vs Multiple values
// Promise: It can return only one value, it can either resolve one value or reject one value, once resolved/rejected, that’s the end, we can't return anything.
// Observable: It can emit multiple streams of values, once the observable is subscribed, a stream will be open and all the emitted values will be captured and the stream gets close once unsubscribed.

// Cancellable vs Non-Cancellable
// promises: Since promises are eager and return only one value, they will be executed immediately once it is defined, so there is no way to cancel them once it is defined.
// Observable: But Observable can be canceled (stream will be closed) by unsubscribing to it.

// Unicast vs Multicast
// Promises: Promises are unicast, which means promises will be executed only once, even if we call then() multiple times.
// Observables: Observables are multicast, which means every time we subscribe to the observable, it will be executed again and again ( observables can be multicasted to multiple subscriptions ).

// is JavaScript case-sensitive?
// Yes. It is a case-sensitive language. its a Object-based scripting language

// what is JavaScript prototype?
// In JavaScript, a prototype is an internal object from which other objects inherit properties. Every JavaScript object has a prototype. When you attempt to access a property or a method on an object, JavaScript first looks for that property or method on the object itself. If it can't find it, it then looks at the object's prototype, and if it's still not found, it looks at the prototype's prototype, and so on. This process continues until the property or method is found or until it reaches the end of the prototype chain.

// In JavaScript, you can set up the prototype of an object explicitly using the prototype property of constructor functions. When you create an object using a constructor function with the new keyword, the new object's prototype is set to the constructor function's prototype property.

// For adding prototype examples :-
// Using Object.setPrototypeOf()
// let obj = {
//      name: "hash"
//  }
//  let myNewObj = {
//      age : 24
//  }
//  Object.setPrototypeOf(obj, myNewObj)
//  console.log(obj,myNewObj, obj.age, myNewObj.name); // { name: 'hash' } { age: 24 } 24 undefined

// Constructor Function :-
// Using prototype keyward within constructor function
//  function MyConstruc(){
//      this.num1 = 2
//      this.num2 = 3
//  }
//  MyConstruc.prototype.num3 = 5
//  let objCon = new MyConstruc()
//  console.log(objCon.num3); // 5

// Usinf Calsses :-
class MyClass {
  // Constructor
  constructor() {
    // Properties and methods
  }

  // Other methods
}

class MySubClass extends MyClass {
  // Additional methods or overrides
}

// What is the use of history object in JavaScript?
// The use of the JS history object is to find the web URLs that a user has visited in the
// browser. In addition, it also helps in browsing the last and next pages, as well as specific
// pages that a user has visited.
// As an important property of the window object, the history object is accessible by:
// ● window.history
// ● history

// --------  Function composition :-
// Function composition in JavaScript is a technique used to combine multiple functions together to create a new function. This new function represents the application of one function followed by the application of another function, and so on.
// Example :-
// Function to add 5 to a number
// function addFive(x) {
//     return x + 5;
//   }

//   // Function to multiply a number by 2
//   function multiplyByTwo(x) {
//     return x * 2;
//   }

//   // Function composition
//   function compose(func1, func2) {
//     return function(x) {
//       return func2(func1(x));
//     };
//   }

//   // Compose addFive and multiplyByTwo
//   var addFiveAndMultiplyByTwo = compose(addFive, multiplyByTwo);

//   // Test the composed function
//   console.log(addFiveAndMultiplyByTwo(3)); // Output: 16 (5 + (3 * 2))

// What are keys in React and why do we need them?
// In React, "keys" are special attributes that are used to uniquely identify components in a collection, such as an array of child components rendered by a parent component. React uses keys to optimize the rendering process and efficiently update the UI.
// In summary, keys play a crucial role in React's reconciliation algorithm, helping to optimize rendering performance, ensure stable component identity, and prevent unintended side effects. They are essential for efficiently managing and updating lists of components in React applications

// Debouncing ( using like filipkart ) & Throttling ( using like wallmark )
// there is two ways to optimize event handling in js, For implement this we have builin debounce function in lodash check it  https://lodash.com/

// this type of consept js not provided bcz its related to time, we can run this with the help of web APIs
// For breaking unwanted function calls again and again we are use this and improve performance

// For exmaple suppose we intergrate any search api inside input field then and which api functon invoked during pressing every input , so that function calls many time that is not good for performance of our website In this time we can use debouncing which called our function in specific given time period
// Example :- // without debouncing
// function getData(){ // that is function which calls every time pressing input key
//     console.log("fething DAta...");
// }
// getData() // if we call directly so its calls many time

// With debouncing :-
// function getData(){ // which function its calls pressing input key but after specfic time
//     console.log("fething DAta...");
// }
// function myDebounce(call, d){
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer) // pehle wala time clear karne ke liye
//         timer = setTimeout(() => {
//             call() // call getData
//         }, d);
//     }
// }
// const betterFun = myDebounce(getData, 1000)

// Debouncing :-  Debouncing is a strategy used to improve the performance of a feature by controlling the time at which a function should be executed.
// Debouncing accepts a function and transforms it in to an updated (debounced) function so that the code inside the original function is executed after a certain period of time.
// Debouncing used for :- Debouncing is removing unwanted input noise from buttons, switches or other user input. It's useful for improving performance by preventing unnecessary function calls, especially when handling user input or other events that may fire rapidly

// Throttling :-
// you give featuers in your we site if you user click on save button then all data is save but if user clicked in button 2 time continuosly so which means its save 2 time 2 time function invoked thats not good so solution of this problem we use throttling with help of this called fucntion for save data in spacefic time period and button v desabled ker sakte jab tak ki data save na ho jaye
// reduce unwanted call  if button pe bar bar click hoga toh
// Example :-
// function myThrottle(fn, d){
//     return function(...args){
//         document.getElementById("").disabled = true
//         timer = setTimeout(() => {
//             call() // call getData
//         }, d);
//     }
// }

// const newFun = myThrottle(() => {
//     document.getElementById("").disabled = false
//     console.log("user Cliked");
// }, 5000)

// Throttle :- In JavaScript, throttle is a technique that allows us to control the frequency of function invocations for events that occur rapidly. It ensures that a function is executed at a fixed rate, preventing excessive calls and optimizing performance

// Differance between throttle & debouncing
// Throttling: In throttling, the function is executed at a fixed interval. Even if the triggering event occurs more frequently, the function is invoked according to the defined interval. Debouncing: In debouncing, the function is only executed after a specific delay since the last event's occurrence.

// nulish colesing operator :-
//   console.log(true ?? "harsh"); // true

// Optional Chaning :-
// The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error
// Example :-
// const adventurer = {
//     name: 'Alice',
//     cat: {
//       name: 'Dinah',
//     },
//   };

// console.log(adventurer.dog); // undefined
// // console.log(adventurer.dog.name); // TypeError: Cannot read property 'name' of undefined
// // For access this nested property which give error so for ignore that error we can use optional chaining with "?."
// // Example :-
// console.log(adventurer.dog?.name); // undefined
// console.log(adventurer.someNonExistentMethod?.()); // Expected output:  undefined // if method is availble then which run method other wise its print undefined instead of print error like "TypeError: adventurer.someNonExistentMethod is not a function"

// // in Array case :-
// let ar = [ {f:1},{name:2} ]
// // console.log(ar[3].name); // TypeError: Cannot read property 'name' of undefined
// console.log(ar[3]?.name); //  undefined

// we dont need write this type of if else statement :-
// if(ar[3]){
//     console.log(ar[3].name);
// }else{
//     console.log(ar[2].name);
// }

/// --- interceptor in js
// In JavaScript, particularly when using libraries like Axios for making HTTP requests, interceptors provide a way to intercept and modify the requests or responses before they are handled. This is useful for adding common functionality such as authentication tokens, error handling, logging, or modifying request headers.

// Use of interceptors
// The concept of interceptors is often used in specific libraries or design patterns to perform tasks such as data manipulation, error handling, authorization, etc. We can include interceptors in event handlers, promises, middlewares or in HTTP requests
// js and HTTP requests, the term "interceptors" is often associated with libraries such as Axios, which allow you to intercept and modify HTTP requests and responses. This is especially useful for adding custom functionality such as header manipulation, error handling, authentication, and more.

// interceptor requests & interceptor responses
// Example like axios interceptor :-
// import axios from 'axios';
// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     console.log('Request Interceptor:', config);
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Do something with response data
//     console.log('Response Interceptor:', response);
//     return response;
// }, function (error) {
//     // Do something with response error
//     return Promise.reject(error);
// });

// prototypal inheritance means
// child object iherit the object propertys of anthor object using of __proto__ keyword
// protype is hiden properties of object

// differance between session  and cookies
// cookies  is a way findout the user, saved in client side, we store data in cookies upto 4kb
// we make session in server side and manage in server side , maintaine the state of web pages in server side

// A session stores the variables and their values within a file in a temporary directory on the server. Cookies are stored on the user's computer as a text file. The session ends when the user logout from the application or closes his web browser. Cookies end on the lifetime set by the user.

// https://www.geeksforgeeks.org/difference-between-session-and-cookies/

// Defferance between localStorage and session storage
// LocaleStorage :- we are saved data 2mb to 10mb, if your browser is closed then data is prensented in your locale storage
// SessionStorage :- we are saved data 2mb to 10mb, if your browser is closed then storage remove data , A unique page session gets created once a document is loaded in a browser tab. Page sessions are valid for only one tab at a time.

// the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends

// import styled from 'styled-components'; that is pakage for styling
// styled-component used for providing a global CSS, allow developer to write

// The major benefit of Styled Components lies in its ability to encapsulate styles within components, offering several advantages over traditional CSS or CSS-in-JS approaches:

// Scoped Styles: Styles defined using Styled Components are scoped to the component they are defined in. This means that you don't have to worry about class name collisions or style bleeding from one component to another. Each component's styles are isolated and don't affect other parts of the application.

// Component-Based Styling: Styled Components promotes a component-based approach to styling. This means that styles are tightly coupled with components, making it easier to understand and maintain the styling logic for each component. It also encourages reusability since styled components can be easily reused across different parts of the application.

// Dynamic Styling: Styled Components allow for dynamic styling based on props or state. This makes it easy to create responsive components or components that change appearance based on user interaction without the need for external CSS classes or inline styles.

// Improved Developer Experience: By keeping styles close to the components they style, Styled Components improve developer experience. Developers can easily navigate between component code and corresponding styles, leading to faster development and easier debugging.

// Performance Optimization: Styled Components come with built-in performance optimizations. They automatically handle vendor prefixing, dead code elimination, and server-side rendering, resulting in optimized runtime performance.

// Support for Theming: Styled Components offer built-in support for theming, allowing you to create consistent and customizable design systems for your applications. Theme variables can be easily defined and used across styled components, enabling rapid theming changes and maintaining design consistency.

// Overall, Styled Components provide a modern and efficient way to manage styles in React applications, offering improved maintainability, reusability, and developer experience compared to traditional CSS approaches.

// componentDidCatch ( like error boundrys in functional based component ) :- componentDidCatch is a lifecycle method in React class components that was introduced in React 16. It's used for error handling within components. componentDidCatch provides a way to gracefully handle errors that occur within a component and its child components, preventing the entire application from crashing.

// Here's how componentDidCatch works:
// Error Boundary Component: You create a component that serves as an error boundary by defining the componentDidCatch method within it.

// Error Catching: When an error occurs during rendering in any of the child components, React will call the componentDidCatch method of the nearest error boundary component.

// Error Handling: Within the componentDidCatch method, you can perform error handling tasks such as logging the error, displaying a fallback UI, or notifying the user about the error.

// Here's an example of how you can use componentDidCatch:

// Example :-
// componentDidCatch(error, errorInfo) {
//     // Update state to indicate that an error has occurred
//     this.setState({ hasError: true });
//     // Log the error to an error reporting service
//     logErrorToService(error, errorInfo);
// }

// function logErrorToService(error, errorInfo) {
//     // Implementation of logging error to an error reporting service
//     console.error(error, errorInfo);
// }
// By using componentDidCatch along with error boundary components, you can prevent errors from crashing your entire application and provide a better user experience by displaying helpful error messages or fallback UIs.

//  How we can use componentDidCatch method in functional based component
// React introduced a new feature called error boundaries which you can use with both class components ( componentDidCatch ) and functional components.
// To create an error boundary with functional components, you can use the useErrorBoundary hook provided by third-party libraries like react-error-boundary. Here's how you can use it:

// First, you need to install the react-error-boundary package:
// npm install react-error-boundary

// Then, you can create an error boundary using the useErrorBoundary hook:
// import React from 'react';
// import { useErrorBoundary } from 'react-error-boundary';

// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div>
//       <h2>Something went wrong:</h2>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// }

// function MyComponent() {
//   // useErrorBoundary returns an error boundary component
//   const ErrorBoundary = useErrorBoundary();

//   return (
//     <ErrorBoundary FallbackComponent={ErrorFallback}>
//       {/* Your component code goes here */}
//       <MyComponentContent />
//     </ErrorBoundary>
//   );
// }

// function MyComponentContent() {
//   // Simulate an error
//   throw new Error('An error occurred in MyComponentContent');
// }

// export default MyComponent;

// ErrorBoundary is a class component that acts as an error boundary. It implements the componentDidCatch method to catch errors.
// When an error occurs within MyComponent or any of its child components, React will call the componentDidCatch method of ErrorBoundary.
// The componentDidCatch method sets the component's state to indicate that an error has occurred and logs the error to a service using the logErrorToService function.
// The render method of ErrorBoundary displays a fallback UI when an error occurs, showing the error message and stack trace.
// MyComponent is wrapped with ErrorBoundary to catch errors that occur within it.

// With this approach, you can create error boundaries around functional components and handle errors gracefully within your React application.

// shouldComponentUpdate :- In React, shouldComponentUpdate is a lifecycle method that is invoked before rendering when new props or state are being received. It allows the component to control whether it should re-render or not. If shouldComponentUpdate returns true, the component will re-render; if it returns false, the component will not re-render.

// It's important to note that React internally optimizes rendering to minimize unnecessary re-renders. For class components, you can implement shouldComponentUpdate to optimize performance by preventing unnecessary re-renders. For functional components, you can use React's memoization techniques (React.memo) or custom hooks like useMemo and useCallback to achieve similar optimizations.
// useCallback return a memorized function, pura function hi cache main store ker leta hai
// useMemo hook return a memorized value, value ko store kerta cache main

// why react is more faster so explain vertual dom , react fiber

// -------- whats is  scss.css
// 1st run npm i sass
// for making file use any one extantion of .scss OR sass file
// scss not allow to use scss functinality in normal css file

// SCSS, which stands for Sassy CSS, is a syntax extension of CSS that adds features like variables, nested rules, mixins, functions, and more. SCSS files use the .scss file extension and are compiled into regular CSS files that browsers can understand.

// SCSS is part of the larger Sass (Syntactically Awesome Style Sheets) ecosystem. Sass originally introduced the .sass syntax, which had a more concise and indentation-based syntax. However, SCSS was introduced later as an alternative syntax that closely resembles the syntax of CSS, making it easier for developers familiar with CSS to transition to using Sass.

// Here's an example of SCSS code:
// // Define variables
// $primary-color: #3498db;
// $secondary-color: #2ecc71;

// // Define a mixin
// @mixin button-styles {
//   background-color: $primary-color;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: darken($primary-color, 10%);
//   }
// }

// // Define styles for a button using the mixin
// .button {
//   @include button-styles;
// }

// // Nested styles
// .container {
//   background-color: $secondary-color;

//   .content {
//     color: white;
//   }
// }

// When you write SCSS code like the example above, you can take advantage of features like variables, mixins, and nesting to make your stylesheets more maintainable and easier to work with.

// To use SCSS in your project, you'll need a build tool like webpack or Parcel, or a preprocessor like Sass itself, to compile your SCSS files into regular CSS files that can be included in your HTML. Once compiled, the resulting CSS files can be served to browsers for styling your web pages.

// ---- what is the children prop meaning in reactjs
// In React, the children prop is a special prop that allows you to pass components or elements as children to another component. It's a fundamental part of React's composition model and allows you to create complex component hierarchies by nesting components within each other.
// Example :-
// function ParentComponent({ children }) {
//     return (
//       <div>
//         <h1>This is the parent component</h1>
//         <div>{children}</div>
//       </div>
//     );
//   }

//   function App() {
//     return (
//       <ParentComponent>
//         <p>This is a child element</p>
//         <p>This is another child element</p>
//       </ParentComponent>
//     );
//   }

// In this example:

// ParentComponent is a functional component that accepts a children prop.
// In the ParentComponent's JSX, {children} renders whatever is passed between the opening and closing tags of ParentComponent.
// In the App component, ParentComponent is used with two <p> elements passed as its children.

// So, when you render App, the output will be:
{
  /* <div>
  <h1>This is the parent component</h1>
  <div>
    <p>This is a child element</p>
    <p>This is another child element</p>
  </div>
</div> */
}

// This way, the children prop allows you to compose components in a flexible and reusable manner, enabling you to create more complex UIs by nesting components inside one another.

// ----- Referesh mechanism :-
//  suppose user active so many hours and in that time your token is expired then JWT Token automatically expired and user logged out automatically

// solutions of that problem use refresh mechanism :-  use Refresh Token for refreshing tha auth token :-
const [accessToken, setAccessToken] = useState(
  localStorage.getItem("accessToken")
);
const [refreshToken, setRefreshToken] = useState(
  localStorage.getItem("refreshToken")
);

useEffect(() => {
  const fetchData = async () => {
    try {
      // Make a request with the access token
      const response = await axios.get("https://api.example.com/data", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Access token expired, try to refresh it
        try {
          const refreshResponse = await axios.post(
            "https://api.example.com/refresh",
            {
              refreshToken,
            }
          );
          const newAccessToken = refreshResponse.data.accessToken;
          setAccessToken(newAccessToken);
          localStorage.setItem("accessToken", newAccessToken);
          // Retry failed request with new access token
          // You may want to queue failed requests and retry them after getting a new token
        } catch (refreshError) {
          console.error("Failed to refresh token:", refreshError);
          // Handle refresh token failure (e.g., redirect to login page)
        }
      } else {
        console.error("Request failed:", error);
      }
    }
  };

  fetchData();
}, [accessToken, refreshToken]);

// -------------  Differance between library and FramWork
//   Libraries and frameworks are both tools used in software development, but they serve different purposes and have different characteristics.

// Libraries:
// A library is a collection of functions or classes that you can call to perform specific actions
// Libraries are collections of reusable code that provide specific functionalities, such as mathematical operations, data manipulation, or user interface components.
// They are typically standalone and do not impose a particular structure or flow on your application.
// Developers can choose which parts of a library they want to use in their application. They are often used for their specific functionalities.
// Examples of libraries include React for building user interfaces, NumPy for numerical computing in Python, or jQuery for simplifying JavaScript DOM manipulation.
// Frameworks:

// Frameworks are more comprehensive than libraries. They provide a structure or skeleton for building an application.
// They dictate the flow of control, defining how your application should be structured and how different components interact with each other.
// Frameworks often come with a set of conventions and best practices that developers need to follow.
// While using a framework, developers typically write code that integrates with and extends the framework, rather than directly invoking its functionalities.
// Examples of frameworks include Django for web development in Python, Angular for building web applications in JavaScript, or Spring for building enterprise Java applications.
// In essence, libraries provide specific functionalities that you can use as needed, while frameworks provide a broader structure and dictate the overall architecture of your application.

// ---- Nextjs is Framwork :-
// Next.js is a framework for building React applications. It provides a structure and conventions for building React-based web applications, including features such as server-side rendering, static site generation, and routing.

// So, to answer your question, Next.js is considered a framework, as it provides more than just a collection of reusable components (like a library would), but rather a set of tools and conventions for building React applications.

// ---- What is react Query  --- :-
// React Query is a library for managing and caching asynchronous data in React applications. It provides a set of hooks for fetching, caching, synchronizing, and updating data from various data sources like REST APIs, GraphQL servers, or local storage. React Query aims to simplify data fetching and state management, making it easier for developers to handle complex data requirements in their applications.

// Key features of React Query include:

// Data Fetching: React Query provides hooks like useQuery for fetching data from APIs. It handles caching, deduplication, and automatic re-fetching of data as needed.

// Data Mutation: It offers hooks like useMutation for performing data mutations, such as creating, updating, or deleting data on the server.

// Query Invalidation and Refetching: React Query automatically invalidates and refetches data when mutations occur, ensuring that the data remains up-to-date.

// Query Synchronization: It synchronizes data across components, ensuring that components always display the latest data without needing manual coordination.

// Optimistic Updates: React Query supports optimistic updates, allowing UI changes to be applied optimistically before the server confirms the mutation, providing a smoother user experience.

// Pagination and Infinite Loading: It provides built-in support for pagination and infinite loading patterns, making it easy to implement these features in your application.

// Overall, React Query simplifies the management of asynchronous data in React applications, improving developer productivity and application performance.

// ----------- What is custom hook :-
// In React, a custom hook is a JavaScript function that utilizes one or more built-in React hooks (like useState, useEffect, or useContext) to encapsulate and reuse logic in a component. Custom hooks allow you to extract stateful logic from components and share it across multiple components, making your code more reusable and easier to maintain.

// ---- ( hider order function banake v custom hook jaise work ker sakte hai  )

// Here's how you can create a custom hook:
import { useState, useEffect } from "react";

function useCustomHook(initialValue) {
  // Define state or any other variables
  const [value, setValue] = useState(initialValue);

  // Define side effects using useEffect
  useEffect(() => {
    // Side effect logic
    console.log("Custom hook side effect");

    // Clean-up function (optional)
    return () => {
      console.log("Clean-up function");
    };
  }, []); // Dependencies array can be added to control when the effect is re-run

  // Define any other functions or logic as needed

  // Return any values or functions that need to be accessible outside the hook
  return value;
}

// You can then use this custom hook in your components like this:
import React from "react";
import useCustomHook from "./useCustomHook";

function MyComponent() {
  // Use the custom hook
  const customValue = useCustomHook(0);

  return (
    <div>
      <p>Custom value: {customValue}</p>
    </div>
  );
}
// Custom hooks allow you to encapsulate complex logic and make it reusable across different components without repeating code. They are a powerful tool for building modular and maintainable React applications.

//  ------- How to handle cors error in front and side in react ------- :-
//  CORS stand for Cross Origin Resource Sharing,
// sometimes we access something from one domain to anthor domain so at this which error occured in front end side // in same origin which not occur CORS error but if you use in diffrent domain which occur that error
// browser first send preflight request to server then which send actual request
// For solveing this error we need to use proxy  , and server end pe v allow kerna jaruri hai dusre domain main
// accesse control allow origin  & accesse control allow method // there is two important thing we can send from clint to server
// which is not occur this cors error in postman which give only this error in browser

// Example :-
// Proxying Requests: If you're developing locally, you can set up a proxy to forward API requests from the React development server to the backend server. This way, the requests appear to originate from the same origin, avoiding CORS issues during development.

// In your package.json, you can add a proxy field:
// "proxy": "http://localhost:5000" // Change to match your backend server address

// Handling CORS Errors in React: You can handle CORS errors in your React code by catching them and providing appropriate error messages or fallbacks. For example, you can use try-catch blocks or the .catch() method on promises:

// using Access-Control-Allow-Origin & Access-Control-Allow-Methods
fetch("https://example.com/api/data", {
  method: "GET",
  headers: {
    "Access-Control-Allow-Origin": "*", // or specify specific origins
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // specify allowed methods
    "Content-Type": "application/json", // example of other headers you might include
    Authorization: "Bearer your-access-token",
  },
});

// -----------  What is the synthetic event in react js --- :-
// In React, synthetic events are a wrapper around the native browser events provided by the React library. They are called "synthetic" because they are not actual DOM events but are implemented by React to provide a consistent interface for handling events across different browsers.

// Here are some key points about synthetic events in React:

// Cross-Browser Compatibility: Synthetic events abstract away the differences between browser event implementations, ensuring consistent behavior across different browsers.

// Performance Optimization: React uses event delegation and pooling techniques to optimize event handling. Event delegation means that instead of attaching event handlers to individual elements, React attaches a single event listener to a higher-level DOM element (often the root element of the component) and uses event bubbling to handle events. Event pooling involves reusing event objects to reduce memory allocation and garbage collection overhead.
// event delegation :- Parent is delegating somthing to the child, Event handling is technique where you attahed a single parent event to handle events on all of the child element,
// Event Pooling :- However, in React, event pooling is employed to reduce memory allocation overhead. Instead of creating a new event object for each event, React reuses a single event object, known as a pooled event, for multiple events. When an event handler is called, React provides the same event object but updates its properties to reflect the most recent event.
// By reusing event objects, React can reduce the number of objects created and garbage collected, which can lead to performance improvements, especially in applications with a high volume of event handling.

// Normalization: Synthetic events are normalized to provide a consistent API regardless of the browser. For example, the target property of a synthetic event refers to the DOM element where the event originated, similar to the target property in native DOM events.

// Additional Properties: Synthetic events may include additional properties and methods beyond those provided by native browser events. For example, React adds properties like stopPropagation() and preventDefault() to synthetic events for controlling event propagation and default behavior.

// Event Names: Synthetic events in React are named using camelCase, consistent with React's naming conventions. For example, onClick, onChange, onSubmit, etc.

// Here's an example of handling a synthetic click event in React:
import React from "react";

function handleClick(event) {
  console.log("Button clicked!", event.target);
}

function MyComponent() {
  return <button onClick={handleClick}>Click Me</button>;
}

export default MyComponent;
// In this example, onClick is a synthetic event provided by React. When the button is clicked, the handleClick function is called with a synthetic event object as its argument. This synthetic event object behaves similarly to a native DOM event object but is implemented by React.

// Differance between inline element and block element
//  The main difference between inline and block elements is how they are displayed on a web page. Inline elements are displayed within a line of text, while block elements are displayed as a separate block of content. Inline elements do not start on a new line and do not create a new block of content, while block elements start on a new line and create a new block of content.
//   Inline  // Block
// Width :- Take up only as much width & height as necessary to display their content.	 // Take up the full width of their parent container by default. Take up the height of their content by default, but can be set to a fixed or percentage height.

// diffrance between if else  and ternary operator
// Ternary operator is expression we store something in variable of using this bcz its evalute value, if else is statement in with using of statement we cant store value in variables

// Doctype which tell the browser which version you used HTML

function c() {
  console.log(a); //
}
function b() {
  console.log(a); // undefin
  var a = 10; // if we can not write that line so both value of a is 5
  c();
  console.log(a); //
}
var a = 5;
b();

// --------------  What is symbol where we can use this  ---- :-
// In JavaScript, the Symbol data type is a unique and immutable primitive value that is often used to create unique identifiers for object properties. Each Symbol is guaranteed to be unique, even if they have the same description.

// In summary, symbols are used in JavaScript primarily to create unique, non-enumerable properties and to define custom behaviors for objects in certain contexts, such as iteration or type conversion.

// Key Characteristics of Symbol:
// Uniqueness: Every Symbol is unique. Even if two symbols are created with the same description, they are not equal.
// Immutability: Once a Symbol is created, its value cannot be changed.
// Not enumerable: Symbols are not included in for...in loops or Object.keys() iterations, which makes them useful for adding properties to objects that shouldn’t be accidentally accessed or modified.

// Use Cases of Symbol :-
// Unique Object Keys: Symbols can be used as object property keys to avoid name clashes. For example, in large codebases or libraries, where different parts of code may inadvertently use the same property name, symbols ensure that each key is unique.

// Private or Hidden Object Properties: Symbols are not accessible through standard property enumeration methods (for...in, Object.keys()), so they can be used to create "hidden" properties that do not show up during enumeration.

// Symbol.iterator: The Symbol.iterator property is used to make an object iterable. This is what enables objects to be used in for...of loops, spreading, etc.

// Well-Known Symbols: JavaScript provides built-in symbols like Symbol.iterator, Symbol.toStringTag, Symbol.toPrimitive, etc., which allow developers to customize the behavior of objects in certain operations.

// .
// .
// .
// .
// Lexical Scoping is about the rules and mechanisms for variable access based on the source code structure.
// Lexical Environment is the actual data structure used by the runtime to keep track of variable bindings and their values, reflecting the result of the lexical scoping rules.
// "Lexical scoping defines access rules based on code structure, while lexical environment is the runtime structure that stores those variables."

