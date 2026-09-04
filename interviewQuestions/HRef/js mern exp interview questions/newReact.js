// .
// .
// .
// . PROPS and STATE
// Easy way to remember
// State → Immutable, but owned and updated by the same component using setState/setX.
// Props → Immutable and owned by the parent. The child can only read them, not modify them.


// The simplest way to remember it is:
// Mutable = You can change the original object.
// Immutable = You cannot change the original object; instead, you create a new object.


// .
// .
// .
// .
// Can you implement a custom Error Boundary component in React and demonstrate how to wrap a component using the HOC pattern?

// Important: Error Boundaries must be class components. React Hooks cannot catch rendering errors in the same way.


// Step 1: Create an Error Boundary
// componentDidCatch using class based components

// Step 2: Create an HOC
// Step 3: Component that throws an error
// Step 4: Wrap the component

// Flow
// UserProfile
//       ↓
// withErrorBoundary()
//       ↓
// <ErrorBoundary>
//       ↓
// If error occurs
//       ↓
// Fallback UI

// Interview Follow-up: What can Error Boundaries catch?

// ✅ They catch:

// Errors during rendering
// Errors in lifecycle methods
// Errors in constructors of child components

// ❌ They do not catch:

// Event handler errors
// Errors in setTimeout or setInterval
// Async errors (fetch, Promises)
// Server-side rendering errors
// Errors thrown inside the Error Boundary itself

// For those cases, use try...catch or Promise error handling.

// Interview Answer (1 minute)

// "I would create a class-based ErrorBoundary component because React Error Boundaries are only supported in class components. Then I'd create a Higher-Order Component called withErrorBoundary that wraps any component inside the ErrorBoundary. This allows me to reuse the same error handling logic across multiple components without duplicating code. If a wrapped component throws an error during rendering or a lifecycle method, the Error Boundary displays a fallback UI instead of crashing the entire application."

// in functional based compo we have 1 pakage :
// import { ErrorBoundary } from "react-error-boundary";

// function ErrorFallback() {
//   return <h2>Something went wrong.</h2>;
// }

// function App() {
//   return (
//     <ErrorBoundary FallbackComponent={ErrorFallback}>
//       <Dashboard />
//     </ErrorBoundary>
//   );
// }

// .
// .
// .
// .
// Can you explain Higher-Order Components (HOCs) in React, including when and why you would use them?

// Interview Answer (2–3 minutes)

// "A Higher-Order Component (HOC) is an advanced React pattern that takes a component as input and returns a new component with additional functionality. It doesn't modify the original component; instead, it wraps it and enhances its behavior.

// We use HOCs to reuse common logic across multiple components without duplicating code. For example, authentication checks, permission handling, logging, analytics, or data fetching can all be implemented once in an HOC and reused wherever needed."

// Real-world use cases
// Authentication
// Authorization (Role-based access)
// Logging
// Analytics tracking
// Feature flags
// Permission checks
// Error handling

// Do we still use HOCs?
// "HOCs are still supported and used in some libraries and legacy code, but in modern React, custom hooks are generally preferred for sharing logic because they're simpler, more readable, and avoid deeply nested wrapper components."

// Examples:
// Older versions of Redux used connect()
// Some authentication and analytics libraries still expose HOCs

// HOC: Reuses behavior by wrapping components.
// Custom Hook: Reuses behavior by sharing logic inside functional components.


// .
// .
// .
// .
// Difference between Fiber vs Diffing.
// Fiber	                                    Diffing
// React's rendering architecture	            React's algorithm for comparing UI
// Introduced in React 16	                    Present since early versions of React
// Decides when and how rendering work is scheduled -	Decides what has changed
// Can pause, resume, or prioritize rendering -   Compares old and new Virtual DOM trees
// Improves responsiveness	                    Minimizes DOM updates
// Focuses on scheduling	                    Focuses on comparison

// What is Diffing?

// Diffing is the process where React compares:

// Previous Virtual DOM
// New Virtual DOM

// It identifies the differences and updates only the changed parts of the Real DOM.


// What is Fiber?
// Fiber is React's new rendering engine (architecture) introduced in React 16.
// Before Fiber, React rendered the entire component tree in one continuous task.

// With Fiber:
// React breaks rendering into small units of work.
// It can pause rendering.
// Resume later.
// Prioritize important updates.

// For example:

// User typing
// ↓
// React gives high priority
// ↓
// Large background list rendering
// ↓
// React delays low-priority work

// This keeps the UI responsive.

// Interview Answer (1 minute)

// "Diffing is React's algorithm that compares the previous Virtual DOM with the new Virtual DOM to determine what has changed, so only the necessary updates are made to the Real DOM. Fiber, introduced in React 16, is React's rendering architecture. It schedules and prioritizes rendering work by breaking it into smaller units, allowing React to pause, resume, or prioritize updates. In short, Diffing identifies the changes, while Fiber decides how and when those changes should be processed and rendered."

// Easy way to remember
// ✅ Diffing = What changed?
// ✅ Fiber = When and how should React process those changes?

// .
// .
// .
// .
// Stateless vs Stateful components.
// Differences
// Stateful Component	                        Stateless Component
// Has its own state	                        No local state
// Uses useState or useReducer	                Uses only props
// Can change data	                            Cannot change its own data
// Re-renders on state changes	                Re-renders when props change
// Handles business logic and interactions	    Mainly responsible for displaying UI

// Interview Answer (30–45 seconds)

// "A stateful component manages its own state using Hooks like useState or useReducer. It can update its data and re-render when the state changes. A stateless component does not have local state; it receives data through props and is mainly used to display UI. In modern React, both are functional components—the key difference is whether the component manages state."


// .
// .
// .
// .
// Difference between Shadow DOM vs Virtual DOM.
// Shadow DOM
// Creates a private DOM tree attached to an element.
// Styles inside the Shadow DOM do not affect the outside page, and outside styles generally don't affect the shadow tree.
// Mainly used for reusable Web Components.

// Example:

// const shadow = element.attachShadow({ mode: "open" });
// shadow.innerHTML = `<button>Click Me</button>`;

// Virtual DOM
// Virtual DOM is a lightweight JavaScript representation of the real DOM.
// When state changes:
// React creates a new Virtual DOM.
// Compares it with the previous one (diffing).
// Updates only the changed parts of the real DOM (reconciliation).

// Example:

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       {count}
//     </button>
//   );
// }

// When count changes, React updates only the button's text instead of re-rendering the entire page.

// Interview Answer (1 minute)

// "Shadow DOM and Virtual DOM are different concepts. Shadow DOM is a browser feature used for DOM and CSS encapsulation, mainly in Web Components. It creates an isolated DOM tree so styles and markup don't interfere with the rest of the page. Virtual DOM, on the other hand, is a React feature. It maintains a lightweight copy of the real DOM, compares changes using a diffing algorithm, and updates only the modified parts of the real DOM. In short, Shadow DOM provides encapsulation, while Virtual DOM improves rendering performance."

// Easy way to remember
// Shadow DOM = Isolation (Encapsulation)
// Virtual DOM = Optimization (Performance)

// NOTE:
// In a normal React application
// State Change
//       ↓
// Virtual DOM updated
//       ↓
// React compares (Diffing)
//       ↓
// Real DOM updated

// There is no Shadow DOM involved.

// When is Shadow DOM used?

// Shadow DOM is only created if you explicitly use Web Components or call:


// .
// .
// .
// .
//  Which version of React have you used, and what features from that version have you worked with?
// "I have primarily worked with React 18 in my recent projects.

// Some of the React 18 features I've used include:

// Functional Components and Hooks like useState, useEffect, useMemo, useCallback, useRef, and custom hooks.
// Automatic Batching, where multiple state updates are grouped into a single render, improving performance.
// Concurrent Features such as startTransition for marking non-urgent updates to keep the UI responsive. While I haven't used every concurrent API extensively, I understand when they're beneficial.
// Suspense with React.lazy for code splitting and lazy loading components, which helped reduce the initial bundle size.
// The new Root API using createRoot() instead of ReactDOM.render().
// Performance optimization techniques like React.memo, useMemo, and useCallback to prevent unnecessary re-renders.

// Along with React 18, I've integrated it with React Router, React Query (TanStack Query) for server-state management, Material UI, and Redux Toolkit in production applications."

// If the interviewer asks: "What are the major features introduced in React 18?"

// You can say:

// Automatic Batching
// Concurrent Rendering (enabled through concurrent features)
// startTransition
// useTransition
// useDeferredValue
// Improved Suspense
// New createRoot() API
// Better server-side rendering and streaming support
// Improved hydration performance
// Short 30-second version

// "I've mainly worked with React 18. In my projects, I've used Hooks extensively, createRoot(), automatic batching, React.lazy with Suspense for lazy loading, and performance optimizations using React.memo, useMemo, and useCallback. I've also used React 18 with React Query, Redux Toolkit, and React Router to build scalable applications."



// .
// .
// .
// .
// what is current new react version and what features it is introduced ? 
// latest stable React version is React 19.2.
// Interview Answer (Short Version)
// "The latest stable version is React 19.2. Major features introduced in React 19 include Actions for form submissions, useActionState, useOptimistic for optimistic UI updates, the use() API for async data handling, Server Components, and React Compiler for automatic performance optimization. React 19.2 further introduced features like useEffectEvent and Activity components. From a production perspective, the features that have had the biggest impact are useOptimistic, Actions, Server Components, and the React Compiler because they reduce boilerplate, improve performance, and simplify state management."

// React version timeline
// Version	Release Date
// React 18.0	March 29, 2022
// React 19.0	December 5, 2024
// React 19.1	March 2025 (followed by updates in June/July 2025)
// React 19.2	October 1, 2025

// For a 5+ years React interview, expect follow-up questions on:

// React Compiler vs useMemo
// useOptimistic
// Server Components vs Client Components
// React 19 migration from React 18
// Actions and useActionState in forms.

// React Compiler is one of the biggest improvements in modern React. The main idea is:
// React Compiler automatically optimizes your components so you don't have to manually use React.memo, useMemo, and useCallback in many cases.

Benefits

// ✅ Fewer unnecessary re-renders
// ✅ Less boilerplate code
// ✅ Better performance
// ✅ Less need for React.memo
// ✅ Less need for useMemo
// ✅ Less need for useCallback
// ✅ Cleaner components

// Interview Answer
// React Compiler is a build-time optimization that automatically analyzes React components and memoizes values, functions, and component outputs when it can prove it is safe to do so. Before React Compiler, developers often used React.memo, useMemo, and useCallback manually to avoid unnecessary re-renders. With the compiler, many of these optimizations happen automatically, resulting in cleaner code, fewer bugs caused by incorrect memoization, and better performance.

// .
// .
// .
// .
// Testing like :- using libray's Jest and Cypress :- https://chatgpt.com/c/66ddd311-3cb0-8012-85df-0c1cc61fb6b9
// For testing MERN stack applications, there are two primary types of testing libraries: unit testing and end-to-end (E2E) testing libraries. Here's a breakdown of commonly used libraries in these categories:

// 1. Unit Testing Libraries (for individual components or modules):
// Jest: Jest is a popular JavaScript testing framework used for testing the individual units (functions, components, etc.) of your MERN application. It works well with both React (for frontend) and Node.js/Express (for backend) testing.
// Type: Unit/Integration testing framework.
// Use: Testing JavaScript code, including React components, API routes, and other backend services.
// React Testing Library: This is specifically designed to test React components, focusing on user interaction and rendering behavior.
// Type: Unit/Integration testing library.
// Use: Testing UI components in React by simulating real-world user interactions.

// 2. End-to-End (E2E) Testing Libraries (for testing the whole application flow):
// Cypress: Cypress is a widely-used E2E testing tool that simulates real user interactions in a browser. It can test both the frontend (React) and API/backend interactions (Node.js/Express).
// Type: E2E testing framework.
// Use: Testing the entire application, including frontend (React) and backend API routes.
// Summary of Types:
// Jest: Unit testing framework (React components, backend services).
// React Testing Library: Unit testing for React components.
// Cypress: End-to-end testing for full application flows (from frontend to backend).

// ---- Implemaintation, Jest in backend side :-
// want to set up testing environments for both the frontend (React) and backend (Node.js/Express).
// Step 1: Install Jest and Supertest
// Jest: For unit testing Node.js/Express API routes and services.
// Supertest: For integration testing of API endpoints.
// Run the following command to install the necessary package

// Step 2: Configure Jest in package.json
// {
//     "scripts": {
//       "test": "jest"
//     },
//     "jest": {
//       "testEnvironment": "node"
//     }
//  }

// Step 3: Create a Test File for API Routes
// Create a test file, for example routes.test.js, to test your Express routes. For integration testing, you’ll use Supertest to make HTTP requests to the routes
// // routes.test.js
// const request = require('supertest');
// const app = require('../app'); // Your Express app

// describe('GET /api/users', () => {
//   it('should return all users', async () => {
//     const res = await request(app).get('/api/users');
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toBeInstanceOf(Array);
//   });
// });

// Step 4: Run the Tests
// Run the tests using the following command: npm test

// ---- Implemaintation, Jest in FrontEnd Side :-
// Step 1: Install Jest and React Testing Library
// npm install --save-dev jest @testing-library/react @testing-library/jest-dom

// Step 2: Configure Jest in React
// If Jest is not set up in your React project, add the following configuration in your package.json:

// {
//     "scripts": {
//       "test": "jest"
//     },
//     "jest": {
//       "testEnvironment": "jsdom"
//     }
// }

// Step 3: Create a Test File for a React Component
// Create a test file for a React component, e.g., App.test.js:

// import { render, screen } from '@testing-library/react';
// import App from './App';
// test('renders welcome message', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/welcome to mern app/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Step 4: Run the Tests
// npm test

// Conclusion:
// Backend: Use Jest and Supertest for unit and integration testing of Express routes.
// Frontend: Use Jest and React Testing Library for testing React components.
// MongoDB: Use mongodb-memory-server for integration testing with MongoDB or mock with libraries like mongoose-mock.

// ---- Cypress implemaintaion in cypress -- :-
// To implement Cypress in a MERN (MongoDB, Express, React, Node.js) stack application, you can use it to perform end-to-end (E2E) testing, simulating how users interact with the app and ensuring the integration between the frontend (React) and backend (Node.js/Express) is working correctly.
// 1. Install Cypress
// npm install cypress --save-dev

// 2. Open Cypress for the First Time
// Once Cypress is installed, you can open it for the first time with the following command:
// npx cypress open
// This will open the Cypress Test Runner and create a default cypress/ folder in your project, which contains example tests. You can remove the examples and focus on creating your own tests.

// 3. Folder Structure
// After Cypress initializes, your folder structure will look like this:
// cypress/
//     └── integration/
//         └── sample_spec.js (you can delete this file)
// cypress.json (configuration file)

// The tests you create will go into the cypress/integration/ directory.

// 4. Configure Cypress for MERN
// You might want to configure the base URL for your app so that Cypress can access it easily. In the cypress.json file, add the base URL of your application:
// {
//     "baseUrl": "http://localhost:3000",  // Replace with your frontend URL
//     "viewportWidth": 1280,
//     "viewportHeight": 720
// }
// You can customize the viewport settings as per your requirements.

// 5. Writing Your First Cypress Test for React (Frontend)
// Now, let's create a simple test for your React frontend. For example, to test a login form, you can create a new file, login_spec.js, inside the cypress/integration/ directory:

// // cypress/integration/login_spec.js

// describe('Login Page Test', () => {
//     it('should visit the login page and submit form', () => {
//       // Visit the login page
//       cy.visit('/login');

//       // Check if the login form is visible
//       cy.get('form').should('be.visible');

//       // Fill out and submit the form
//       cy.get('input[name="email"]').type('testuser@example.com');
//       cy.get('input[name="password"]').type('password123');
//       cy.get('button[type="submit"]').click();

//       // Verify that the user is redirected or logged in
//       cy.url().should('include', '/dashboard'); // Assuming a redirect to dashboard
//       cy.contains('Welcome, testuser'); // Check for a success message or user name
//     });
//   });

//   6. Testing API Routes with Cypress (Backend)
//   You can also test API interactions directly by making requests to the backend (Node.js/Express). Cypress can handle API testing using cy.request().

//   Create a test for an API endpoint, for example, for testing user login, in a file like api_spec.js:

// // cypress/integration/api_spec.js
// describe('API Test: Login Endpoint', () => {
//   it('should successfully log in the user', () => {
//     cy.request('POST', 'http://localhost:5000/api/auth/login', {
//       email: 'testuser@example.com',
//       password: 'password123'
//     }).then((response) => {
//       // Assert that the status code is 200 (success)
//       expect(response.status).to.eq(200);

//       // Assert that a token is returned
//       expect(response.body).to.have.property('token');
//     });
//   });
// });
// This tests the backend by sending a request to your API and verifying the response.

// 7. Running Cypress Tests
// You can run Cypress tests in interactive mode (opens a browser) or headless mode (runs the tests without a browser interface):

// Interactive mode (for development/testing):
// npx cypress open

// This opens a Cypress dashboard where you can manually run your tests in a browser.

// Headless mode (for CI/CD or automated runs):
// npx cypress run

// This runs all your tests in the command line without a UI.

// 8. Connecting Frontend and Backend in E2E Tests
// When testing a MERN app, you often need both the frontend (React) and backend (Express) running simultaneously. Here's how you can handle this:

// Option 1: Start Servers Manually
// Start the backend server (npm run dev in your Express app) on a separate terminal.
// Start the frontend server (npm start in your React app) on a separate terminal.
// Run Cypress tests (npx cypress open) on a third terminal.
// Option 2: Use npm Scripts
// You can create an npm script to start both servers together and then run Cypress:

// In package.json:
// "scripts": {
//   "start": "concurrently \"npm run backend\" \"npm run frontend\"",
//   "backend": "cd backend && npm start",
//   "frontend": "cd frontend && npm start",
//   "cy:run": "start-test 3000 5000 && npx cypress run"
// }
// In this case, you can run the command npm run cy:run to start both the backend and frontend servers and run Cypress.

// 9. Running Cypress in CI/CD
// To automate testing using Cypress in a continuous integration pipeline, you can integrate Cypress with popular CI tools like GitHub Actions, CircleCI, or Jenkins. Cypress has plugins for many CI/CD platforms that make the setup easier.

// Conclusion
// Frontend Testing: Cypress simulates real user interactions with the React frontend.
// Backend/API Testing: Cypress can test API routes using cy.request() for Node.js/Express routes.
// Complete E2E Testing: Cypress allows you to test both the frontend and backend integration, ensuring a seamless user experience.
// Running in CI/CD: You can integrate Cypress into your CI pipeline for automated testing.
// With this setup, you can ensure the stability of your MERN stack application by testing both frontend and backend functionality from the user’s perspective.

// .
// .
// .
// .
// ------ Architechtures :-  Micro FrontEnd and monolathic  ---- :-
// If you build a React app in the normal way (i.e., using common practices like creating components, managing state, routing, etc.), it typically follows a Monolithic and Component-Driven architecture.
// 1. Monolithic Architecture
// In most basic React apps:
// All components and features are bundled together into a single application.
// Single codebase: All of your React components, routes, and state management are in one repository
// The entire app is deployed as a single bundle (via tools like Webpack, Vite, or Create React App).
// Updates or changes to one part of the app require redeploying the entire app.
// This structure is considered monolithic because everything is tightly coupled and deployed together, even if internally the code is split into components.
// 2. Component-Driven Architecture
// React is inherently component-driven, meaning you build the user interface (UI) by composing small, reusable components.
// Components are the fundamental building blocks in React, and they manage their own logic and UI rendering.
// You organize your UI by dividing it into smaller, isolated, and reusable components (like buttons, forms, lists, etc.).
// Common features of a basic React app include:
// State Management: Managing state internally via useState or more globally via Context API or external libraries like Redux.
// Routing: Client-side routing with React Router for Single Page Applications (SPAs).
// Single Deployment: You bundle and deploy everything as one unit, often hosted on platforms like Netlify, Vercel, or a traditional server.

// :- To Summarize:
// Architecture: Monolithic + Component-Driven
// Characteristics: Single codebase, reusable components, centralized state, single deployment.
// This type of architecture is ideal for small to medium-sized applications. As the app grows, you may consider adopting more complex architectures like micro-frontends or using monorepos to manage larger codebases.

// -- Microfrontend :-
// Microfrontend architecture is an architectural style in which a large front-end application is divided into smaller, independent micro-applications (or "microfrontends") that can be developed, deployed, and managed separately. It's similar to the concept of microservices on the backend but applied to the frontend.

//-- Conclusion
// Microfrontend architecture is especially useful for large, complex applications that need to be developed by multiple teams working in parallel. It promotes scalability, independent deployments, and flexibility in technology choices, but comes with the complexity of managing shared states, performance optimization, and maintaining consistency across microfrontends.

// -- The purpose of microfrontend architecture is to improve scalability, flexibility, maintainability, and team autonomy when developing large, complex web applications. Microfrontends enable organizations to break down a monolithic frontend into smaller, independently managed pieces. This approach provides several advantages, especially in large-scale applications where multiple teams are working together on different features or sections of the app.

//---- Key Concepts of Microfrontend Architecture
// Decentralized Development: Different teams can work on different parts of the front-end independently. Each team can build, test, and deploy its own microfrontend without affecting others.
// Independent Deployments: Each microfrontend is deployed independently, meaning you can update one part of the app (like the header, a dashboard, or a sidebar) without redeploying the entire application.
// Technology Agnostic: Each microfrontend can be built using different technologies or frameworks (e.g., React, Angular, Vue.js), as long as they integrate well together. This allows teams to use the best tools for their specific task.
// Autonomous Teams: In large organizations, teams can have complete ownership over a microfrontend, from development to deployment. This helps in reducing dependencies between teams and speeding up development.
// Composable UI: The overall user interface (UI) is composed of multiple microfrontends, each responsible for a specific feature or section of the UI. For example, one team might be responsible for the product listing section, while another handles the shopping cart.

// ---- How Microfrontends Work in Practice
// Example Use Case:
// Suppose you're building an e-commerce platform. Instead of creating a monolithic React app where all components (product list, cart, reviews) are tightly coupled, you split them into smaller microfrontends:

// Product Listing Microfrontend: Handles listing products.
// Cart Microfrontend: Manages the shopping cart.
// User Profile Microfrontend: Displays user profiles and handles authentication.
// Review Microfrontend: Manages user reviews for products.
// Each microfrontend would have its own codebase, be independently developed by different teams, and deployed separately.

// Example Microfrontend Structure:

// App Shell (provides global layout, navigation)

//   - Microfrontend 1: Product Listing (React)
//   - Microfrontend 2: Shopping Cart (Vue.js)
//   - Microfrontend 3: User Profile (Angular)
//   - Microfrontend 4: Reviews (React)

// ---- Techniques to Implement Microfrontends
// There are different ways to integrate and load microfrontends into the main application:
// Server-Side Composition: The server assembles the various microfrontends and sends the fully rendered page to the client. Each microfrontend can be loaded dynamically from the server.
// Client-Side Composition: The microfrontends are loaded dynamically on the client side. This approach often uses tools like iframes or JavaScript modules to load microfrontends when needed.
// Web Components: Using web standards like custom elements or Shadow DOM, microfrontends can be encapsulated and rendered on the client side, without worrying about CSS or JavaScript conflicts.
// Module Federation (Webpack 5): Webpack's Module Federation allows microfrontends to be dynamically loaded at runtime. This approach allows each microfrontend to expose certain modules and consume modules from other microfrontends.

// ---  Benefits of Microfrontends
// Scalability: Microfrontends allow teams to scale the development process by having multiple teams work in parallel on different parts of the application.
// Independent Deployments: Each part of the application can be deployed independently, reducing the risk of deploying new features or bug fixes.
// Flexibility in Technology: Teams can choose the best technology stack for their specific microfrontend. For example, some teams can use React, while others might prefer Vue.js or Angular.
// Improved Maintainability: Since microfrontends are small and focused, they are easier to maintain and test. It also allows for faster iteration and experimentation.
// Reduced Complexity: By splitting the application into smaller, manageable parts, you reduce the complexity of the codebase, making it easier to understand, maintain, and debug.
// --- Summary of Benefits
// Scalability: Microfrontends allow large applications to scale development by having independent teams work on different parts of the app.
// Independent Deployments: Teams can release features or bug fixes independently without redeploying the entire application.
// Technology Flexibility: Teams can use different technologies for different parts of the app.
// Maintainability: Smaller, isolated microfrontends are easier to maintain and update.
// Faster Time-to-Market: Shorter release cycles due to independent development and deployment.
// Fault Isolation: Bugs or issues in one microfrontend don’t affect the entire application.
// Easier Migration: Gradual migration of legacy apps to newer frameworks.

// ---- Challenges of Microfrontends
// Increased Complexity in Setup: Setting up microfrontend infrastructure (e.g., managing routing, shared state, and communication between microfrontends) can be more complex than a monolithic architecture.
// Performance Overhead: Loading multiple microfrontends can lead to performance issues if not managed properly (e.g., loading times, network requests, and dependencies).
// Shared State Management: Managing global states across different microfrontends can be challenging. Solutions like shared contexts or using an event bus can help, but they add complexity.
// CSS and JavaScript Conflicts: Different microfrontends can have conflicts in styles or JavaScript if not properly isolated. Techniques like Shadow DOM or scoped styles are used to mitigate this.
// Consistency: Ensuring a consistent look and feel across microfrontends can be difficult if different teams are using different design systems or frameworks.

// ---- Tools and Frameworks for Microfrontends
// Single-SPA: A framework for building microfrontends. It allows multiple frameworks (React, Vue, Angular, etc.) to coexist in the same application.
// Module Federation (Webpack 5): Allows independent modules (microfrontends) to be dynamically imported at runtime.
// FrintJS: A microfrontend framework for building and managing applications using multiple React components.
// Qiankun: A microfrontend framework based on single-spa that offers improved loading performance.

// ---- Steps for crearitng applicaiton using microfrontend :-
// Summary of Steps:
// Analyze and Identify Microfrontends
// Choose an Integration Strategy (e.g., Single-SPA, Module Federation)
// Set Up Microfrontend Framework
// Structure the Application (Host and Microfrontends)
// Define Communication Between Microfrontends
// Set Up Routing
// Handle Shared Dependencies
// Set Up Independent Deployments
// Ensure Consistency (Styling and Design)
// Testing and Quality Assurance
// Monitoring and Performance Optimization
// By following this procedure, you can develop and manage a web application using microfrontends that scale efficiently, allow for independent deployments, and improve development productivity.

// .
// .
// .
// .
// ---- How we can manage state using mirofrontend in Globally :-
// Managing state across multiple microfrontends can be challenging due to the decentralized and independent nature of each microfrontend. Since microfrontends are designed to function independently, you need strategies that balance local state management within individual microfrontends and shared state management across multiple microfrontends when necessary.
// --  Global State Management (Shared State)
// When microfrontends need to share state (e.g., authentication data, user preferences, or a shopping cart), you can use a global state management solution that all microfrontends can access.
// Approaches for Shared State:
// 1. Event Bus / Pub-Sub Model
// 2. Shared State via URL/Query Parameters
// 3. Shared State via a Global Store (Redux/Context API)

// .
// .
// .
// .
// For code security basic what type of techniques we have for improvement of security  react application
// Improving security in a React application involves implementing best practices at various levels, including code structure, data handling, and communication with the backend.

// 1. Avoid Storing Sensitive Data in the Client-Side
// Description: Never store sensitive information like API keys, passwords, or tokens in the client-side code (e.g., in localStorage, sessionStorage, or cookies) as these can be easily accessed by attackers.
// Best Practices:
// Use environment variables for API keys and other sensitive information and keep them on the server-side.
// Implement short-lived tokens and use refresh tokens to minimize the risk of token theft.

// 2. Secure Authentication and Authorization
// Description: Ensure that authentication and authorization mechanisms are secure to prevent unauthorized access.
// Best Practices:
// Use secure methods for handling user authentication, such as OAuth, JWT, or sessions with proper expiration times.
// Implement role-based access control (RBAC) on both the client and server sides.
// Ensure all sensitive routes are protected and that unauthorized users cannot access them.

// 3. Use HTTPS and Secure Communication
// Description: Enforce HTTPS to ensure that all data transmitted between the client and server is encrypted.
// Best Practices:
// Ensure your application is served over HTTPS by default.
// Use secure cookies (set the Secure and HttpOnly flags) for storing session identifiers or tokens.

// 4. Sanitize and Validate Inputs
// Description: Prevent cross-site scripting (XSS) and injection attacks by sanitizing and validating all user inputs.
// Best Practices:
// Use libraries like DOMPurify to sanitize HTML inputs and prevent XSS attacks.
// Validate all user inputs on both the client and server sides.
// Avoid using dangerouslySetInnerHTML unless absolutely necessary, and if used, sanitize the content.

// 5. Handle Error Boundaries Securely
// Description: Use error boundaries to catch and handle errors gracefully without exposing sensitive information.
// Best Practices:
// Implement React error boundaries to catch errors in the component tree.
// Log errors securely on the server side and provide generic error messages to the user.

// 6. Implement Content Security Policy (CSP)
// Description: A Content Security Policy (CSP) helps prevent XSS attacks by restricting the sources of content that can be loaded on your web page.
// Best Practices:
// Configure a strong CSP header in your server configuration.
// Ensure that only trusted sources are allowed to load scripts, styles, and other resources.
// 7. Limit Use of Third-Party Libraries
// Description: Be cautious when using third-party libraries, as they can introduce vulnerabilities into your application.
// Best Practices:
// Only use well-maintained and widely-used libraries.
// Regularly audit third-party dependencies for known vulnerabilities using tools like npm audit or Snyk.
// Remove unused dependencies to reduce the attack surface.
// 8. Protect Against Cross-Site Request Forgery (CSRF)
// Description: Ensure that your application is protected against CSRF attacks, which trick users into performing actions they didn’t intend.
// Best Practices:
// Use anti-CSRF tokens in forms and API requests.
// Implement same-site cookies to restrict the scope of cookies to first-party requests.
// 9. Secure API Calls
// Description: Secure your API interactions by following best practices for API security.
// Best Practices:
// Ensure all API calls are made over HTTPS.
// Use authentication tokens like JWTs to secure API requests.
// Validate and sanitize API responses before processing them in your React app.
// 10. Regular Security Audits and Penetration Testing
// Description: Regularly audit your code and perform penetration testing to identify and address potential security vulnerabilities.
// Best Practices:
// Use automated tools to scan for common security vulnerabilities.
// Conduct manual code reviews and penetration testing to uncover hidden issues.

// .
// .
// .
// .
// What is UglifyJS?
// UglifyJS is a popular JavaScript tool used for minifying and obfuscating JavaScript code. Minification and obfuscation are essential techniques in web development, especially for production environments, to optimize performance and protect the source code.
// UglifyJS is a powerful tool for optimizing JavaScript code by minifying and obfuscating it. It's widely used in production environments to improve performance by reducing file sizes and enhancing security by making the code harder to read. It seamlessly integrates with modern build tools, making it an essential part of the web development workflow.

// Minification:

// Minification refers to the process of removing unnecessary characters from source code without changing its functionality. This includes stripping out whitespace, comments, and shortening variable names. The result is smaller file sizes, which leads to faster loading times for web applications.

// Obfuscation:
// Obfuscation involves making the code more difficult to read and understand by renaming variables, functions, and other identifiers into shorter, non-meaningful names. This adds a layer of protection to the source code, making it harder for someone to reverse-engineer or tamper with it.

// UglifyJS Features:
// Compressing: UglifyJS can compress your JavaScript by removing redundant code, such as unreachable code or unused variables.
// Mangle: UglifyJS can "mangle" variable names, which means renaming variables to shorter names to reduce file size and obfuscate the code.
// Tree Shaking: UglifyJS can remove dead code that is never executed, further reducing the size of the output.
// Source Maps: UglifyJS supports generating source maps, which allows developers to debug minified code by mapping the compressed code back to the original source.
// Why Use UglifyJS?

// Performance Optimization:
// Reduced File Size: Minified JavaScript files are significantly smaller, which reduces the amount of data that needs to be transferred over the network. This leads to faster page load times, especially important for users on slower internet connections.
// Improved Load Times: Smaller JavaScript files result in faster execution by the browser, contributing to a snappier user experience.
// Code

// Security:
// Obfuscation: By making the code harder to read and understand, UglifyJS can deter casual attackers or reverse engineers from easily understanding the logic of your code. While it doesn't provide strong security, it adds a layer of protection against code theft.
// SEO and User

// Experience:
// Better Performance: Faster loading times contribute to better user experience and can also positively impact SEO, as search engines consider page load times when ranking websites.
// Compatibility with Build Tools:

// Integration with Webpack and Other Tools: UglifyJS is often integrated into modern JavaScript build tools like Webpack, Gulp, and Grunt. This allows developers to automatically minify and optimize their code during the build process, ensuring that the production version of their application is as optimized as possible.

// .
// .
// .
// .
// DOMPurify for sanitizing inputs to Prevent cross-site scripting (XSS) attacks.






// Xeiba interview Questions :-
// import React from 'react';

// export default function ActionBanner() {
//   return (
//     <div id="app-root" className="banner-container">
//       <button 
//         id="action-btn" 
//         className="btn vital-action" 
//       >
//         Execute Action
//       </button>
//     </div>
//   );
// }

// CSS
// div #action-btn { color: blue; }
// #action-btn .btn.vital-action { color: green; }
// button[id="action-btn"] { color: purple; }


// const accessMatrix = {
//   financeApp: {
//     dashboard: { view: true, edit: false },
//     settings: { view: false, edit: false },
//     payroll: { view: true, approve: true }
//   },
//   hrPortal: {
//     directory: { view: true },
//     auditLogs: { view: false, purge: false }
//   }
// };


// To verify CSS priority:
// Check whether the selector matches the DOM.
// Calculate specificity:
// Inline = 1000
// ID = 100
// Class/Attribute = 10
// Element = 1
// Higher specificity wins.
// If specificity is equal, the later rule in the CSS file wins.
// !important overrides normal specificity.

// we need to calculate:
// Like :- 
// Selector 1
// div #action-btn

// Specificity:

// div           → 1
// #action-btn   → 100
// -------------------
// Total = 101


// Selector 2
// #action-btn .btn.vital-action

// Specificity:

// #action-btn → 100
// .btn        → 10
// .vital-action → 10
// --------------------
// Total = 120


// Selector 3
// button[id="action-btn"]

// Specificity:

// button → 1
// [id]   → 10
// ----------------
// Total = 11






// import React from 'react';
// import { useState } from 'react'

// function App() {
//   const accessMatrix = {
//   financeApp: {
//     dashboard: { view: true, edit: false },
//     settings: { view: false, edit: false },
//     payroll: { view: true, approve: true }
//   },
//   hrPortal: {
//     directory: { view: true },
//     auditLogs: { view: false, purge: false }
//   }
// };
//   const [count, setCount] = useState(0)
  
//   const rows = Object.entries(accessMatrix).flatMap(
//     ([app, modules]) => 
//     Object.entries(modules).map(([module, permissions]) => ({
//       app, module, permissions
//     })) 
//   );

// // ONe more solution using reduce
// const rows = Object.entries(accessMatrix).reduce(
//   (acc, [app, modules]) => {
//     for (const [module, permissions] of Object.entries(modules)) {
//       acc.push({
//         app,
//         module,
//         permissions,
//       });
//     }

//     return acc;
//   },
//   []
// );

// console.log(rows);


//   const styles = {
//     main: {
//       padding: '20px',
//     },
//     title: {
//       color: '#5C6AC4'
//     },
//   };

//   return (
//     <div style={styles.main}>
//       <h1 style={styles.title}>Hello, World!</h1>
//       <div>
//          <table>
//            <thead>
//              <tr>
//                <th>Application</th>
//                <th>Module</th>
//                <th>View</th>
//                <th>Edit</th>
//              </tr>
//            </thead>
//            <tbody>
//              {rows.map((row, index) => {
//                return <tr key={index}>
//                   <td>{row.app}</td>
//                   <td>{row.module}</td>
//                   <td>{row.permissions.view ? "ALLOW" : "DENY"}</td>
//                   <td> {"edit" in row.permissions ? row.permissions.edit ? "ALLOW" : "DENY" : "N/A"} </td>
//                 </tr>
//              })}
//            </tbody>
//          </table>
//       </div>
//     </div>
//   )
// }

// export default App





// .
// .
// .
// .
// .
// React Question :  
// Table OutPut :  
// 1 2 3, 
// 4 5 6,
// 7 8 9

// import React from 'react';
// import { useState } from 'react'
// import "./styles.css"

// function App() {
//   const [count, setCount] = useState(0)

  

//   const obj = [
//     {
//         row: "top",
//         columns: [{
//             position: "left",
//             value: 1
//         }, {
//             position: "center",
//             value: 2
//         },
//         {
//             position: "right",
//             value: 3
//         }]
//     },
//     {
//         row: "middle",
//         columns: [{
//             position: "left",
//             value: 4
//         }, {
//             position: "center",
//             value: 5
//         },
//         {
//             position: "right",
//             value: 6
//         }]
//     },
//     {
//         row: "bottom",
//         columns: [{
//             position: "left",
//             value: 7
//         }, {
//             position: "center",
//             value: 8
//         },
//         {
//             position: "right",
//             value: 9
//         }]
//     }
// ]

// // Output:
// // 1 2 3
// // 4 5 6
// // 7 8 9

// // const rows = obj.reduce(())
  
//   const styles = {
    
//     main: {
//       padding: '20px',
//     },
//     title: {
//       color: '#5C6AC4'
//     },
//   };

//   return (
//     <div style={styles.main}>
//       <h1 style={styles.title}>Hello, World!</h1>
//       <div>
//           <table style={{ border: "1px solid" }}>
//              <tbody style={{ border: "1px solid"}}>
//                 {obj.map((row, index) => {
//                     return <tr key={index} style={{ border: "1px solid", display: "flex"  }}> 
//                        {row.columns.map((col) => {
//                           return <td key={col.position} className={`cell ${row.row} ${col.position}`}> 
//                             {col.value}
//                           </td>
//                        })}
//                     </tr>
//                 })}
//              </tbody>
//           </table>

//       </div>
//     </div>
//   )
// }

// export default App



// ///  Styles.css
// .cell {
//   width: 100px;
//   height: 100px;
//   border: 1px solid black;
//   display: flex;
// }

// .top{
//   align-items:  flex-start;
// }

// .middle{
//   align-items: center;
// }

// .bottom{
//   align-items: flex-end;
// }

// .left{
//   justify-content: flex-start;
// }

// .center{
//   justify-content: center;
// }

// .right{
//   justify-content: flex-end;
// }





// .
// .
// .
// .
// .
// .
// const updateUser = (id) => {

//     const user = users.find((u) => u.id === id);

//     if (user) {
//       user.name = "Updated";
//     }

//     setUsers(prevState )

 
//     // setUsers(prevState => {
//     //   return prevState.map((curElem) => {
//     //     return curElem.id === id ? { ...curElem, name: "Updated" } : curElem
//     //   })
//     // });
//   };
 

//   <button onClick={() => updateUser(user.id)}>Update</button>

// Question:-   Here :- here what is the reason why after clicking we are not able render update code to display

// Answer:- 
// This is one of the most important React concepts: reference equality.

// Step 1: find() returns the same object reference

// Step 2: What React compares

// Then:

// setUsers(users);

// React does:

// oldUsers === newUsers

// Result:

// true

// Because:

// setUsers(users);

// passes the exact same array reference.

// Old Array ─────┐
//                │
// New Array ─────┘

// Since React sees:

// Same reference

// it assumes:

// "No state change."

// Therefore:

// ❌ No re-render.


// Interview Answer:
// React state updates are based on reference equality. In the example, the object inside the array is mutated directly, and the same array reference is passed back to setUsers. Since React compares the previous and new state references using Object.is(), it sees no change and skips the re-render. Therefore, we should create a new array and new object references using immutable updates such as map and the spread operator.