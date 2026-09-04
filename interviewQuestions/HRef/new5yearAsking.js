
// .
// .
// .
// . (noida pitro client)
// Answers is in Mobile Screen Shot:-
// Immutability:
// Lamda Function:
// Inheritance in javaScript:
// Constructor
// Dependency Injection
// Pool / Connection Pool
// facet aggregatioins
// Left Join and Right Join Differance
// AWS Lamda




// httpOnly more secure, protect XSS attacks bcz JS not able to read cookies data, in BE we have "npm install cookie-parser" using of pakage we cna easilly read cookies data



// .
// .
// .
// .
// Scenario

// Suppose you have:

// A form with 20 fields.
// User spends 15 minutes filling it.
// The access token expires.
// User clicks Submit.

// Question: How do you prevent the user from losing their data?

// Recommended Flow
// User clicks Submit
//         │
//         ▼
// Send API Request
//         │
//         ▼
// Access Token Expired (401)
//         │
//         ▼
// Call Refresh Token API
//         │
//         ├── Success
//         │      │
//         │      ▼
//         │ Save new Access Token
//         │
//         │ Retry original request
//         │
//         ▼
// Form submitted successfully


// If the refresh token has also expired, I save the draft (for example, in sessionStorage) before redirecting the user to log in again. This provides a smooth user experience while maintaining security.


// .
// .
// .
// .
// You have two MongoDB collections:

// users
// _id
// name
// email
// userDetails
// userId
// ssnNumber

// Write an aggregation pipeline to retrieve the following information for each user:

// User Name
// User Email
// User SSN Number

// Use the appropriate aggregation stages to join both collections and return the required fields.

// db.users.aggregate([
//     {
//         $lookup: {
//             from: "userDetails",
//             localField: "_id",
//             foreignField: "userId",
//             as: "details"
//         }
//     },
//     {
//         $unwind: "$details"
//     },
//     {
//         $project: {
//             _id: 0, 
//             userName: "$name",
//             email: "$email",
//             ssnNumber: "$details.ssnNumber"
//         }
//     }
// ])

////Why?
// $project: {
//             _id: 0, // in MongoDB's $project, 0 means exclude the field, and 1 means include the field.

////Why?
// {
//   $unwind: "$details"
// }
// The purpose of $unwind is to convert an array into individual documents.
// After $lookup, MongoDB always returns the joined data as an array, even if there is only one matching record.


// .
// .
// .
// .
// .
// What are the pipe in mongoDB
// In MongoDB, Pipelines refer to the Aggregation Pipeline, which is used to process data through multiple stages.

// Think of it like this:

// Collection Data
//       ↓
// Stage 1 ($match)
//       ↓
// Stage 2 ($group)
//       ↓
// Stage 3 ($sort)
//       ↓
// Final Result

// Each stage transforms the data and passes it to the next stage.


// Interview Answer

// "MongoDB pipelines refer to the Aggregation Pipeline framework, where data passes through multiple stages such as $match, $group, $project, $sort, and $lookup. It is used for filtering, transforming, grouping, joining collections, and generating reports. It is similar to SQL operations like WHERE, GROUP BY, and JOIN."

// Most commonly used stages in production:
// $match
// $project
// $group
// $sort
// $lookup
// $skip
// $limit
// $unwind


// .
// .
// .
// .
// .
// When the API working slow:
// "When an API becomes slow, I first measure the response time and identify whether the bottleneck is the database, external APIs, or application logic. I use logging, query analysis, and profiling tools to locate the issue. Common optimizations include adding database indexes, pagination, caching with Redis, optimizing queries, and avoiding event-loop blocking operations. In production, I've reduced API response times significantly by optimizing queries and implementing caching strategies."

// .
// .
// .
// .
// why we need to use reactQuery instead of useEffect

// The short answer is:
// useEffect is a React Hook for side effects, while React Query is a server-state management library.
// You can fetch data using useEffect, but React Query provides many features that you otherwise have to build manually.


// When we use useEffect Problems:
// Manual loading state
// Manual error handling
// No caching
// No refetching
// Duplicate API calls
// No retry mechanism


// Using React Query
// const { data, isLoading, error } = useQuery({
//   queryKey: ["users"],
//   queryFn: fetchUsers,
// });

// React Query automatically provides:

// Loading state
// Error state
// Caching
// Refetching
// Background updates

// When to Use React Query

// ✅ API calls

// ✅ Server data

// ✅ Pagination

// ✅ Infinite scrolling

// ✅ Caching

// ✅ Background updates

// Interview Answer

// useEffect is designed for handling side effects, while React Query is specifically built for server-state management. Although API calls can be made using useEffect, it requires manual handling of loading states, errors, caching, and refetching. React Query provides these features out of the box, including caching, automatic retries, background refetching, and request deduplication, which makes applications more performant and easier to maintain.

// One-Line Answer

// We use React Query instead of useEffect because React Query manages server state efficiently by providing caching, refetching, retries, and loading/error handling automatically.


// .
// .
// .
// .
// What is CTE ?

// What is CTE in SQL?

// CTE stands for:

// Common Table Expression

// A CTE is a temporary result set that exists only during the execution of a query.

// It helps make complex queries:

// easier to read
// easier to maintain
// reusable within the query

// Advantages

// ✅ Better readability

// ✅ Easier debugging

// ✅ Reusable query logic

// ✅ Supports recursion

// ✅ Simplifies complex SQL

// Interview Answer

// CTE (Common Table Expression) is a temporary named result set defined using the WITH clause. It improves query readability and helps break complex SQL queries into smaller logical parts. CTEs can also be recursive, making them useful for hierarchical data such as organizational structures or category trees.



// .
// .
// .
// .
// .
// What is MVCC 

// MVCC stands for:

// Multi-Version Concurrency Control

// It is a technique used by databases like PostgreSQL to handle multiple transactions simultaneously without locking rows for reading.

// In simple words:

// MVCC allows multiple users to read and write the same data at the same time without blocking each other.


// Real-Life Analogy

// Think of a Google document.

// You edit the latest version.
// Other users can still read the previous version.
// Once changes are saved, everyone sees the new version.

// That is similar to MVCC.


// Why Is MVCC Important?
// 1. Readers Don't Block Writers
// SELECT

// does not block:

// UPDATE
// 2. Writers Don't Block Readers

// Users can continue reading data.

// 3. Better Performance

// Many users can access the database simultaneously.

// 4. High Concurrency

// Perfect for:

// banking systems
// e-commerce
// large applications


// Interview Answer

// MVCC (Multi-Version Concurrency Control) is a concurrency mechanism used by PostgreSQL that allows multiple transactions to access the same data simultaneously without blocking each other. Instead of overwriting rows, PostgreSQL creates multiple versions of a row. Readers see a consistent snapshot of data, while writers create new versions. This improves concurrency, reduces locking, and increases database performance.


// .
// .
// .
// .
// .
// What is normalization and why it important ?
// Normalization is a database design technique used to organize data into multiple related tables to reduce:

// Data duplication
// Data inconsistency
// Storage waste

// In simple words:

// Normalization means storing data in a structured way so that the same information is not repeated unnecessarily.


// Why Normalization is Important
// 1. Removes Duplicate Data

// 2. Saves Storage
// Repeated values consume unnecessary space.
// Normalization reduces storage requirements.

// 3. Prevents Update Problems

// Suppose:
// Harsh → Harshit
// Without normalization:
// Update multiple rows.
// With normalization:
// Update one row only.

// 4. Improves Data Consistency
// If one row says:
// Harsh
// and another says:
// Harhs
// data becomes inconsistent.
// Normalization prevents this.

// 5. Easier Maintenance
// Changing data becomes simpler because information exists in one place.


// Types of Normalization
// 1NF (First Normal Form)
// No multiple values in one column.
// Each column contains a single value.

// 2NF (Second Normal Form)
// Remove partial dependency.
// Every non-key column should depend on the entire primary key.

// 3NF (Third Normal Form)
// Remove transitive dependency.
// Example:
// Employee ID	Department	Manager
// If manager depends on department rather than employee, move it to another table.

// Advantages

// ✅ Less duplicate data
// ✅ Better consistency
// ✅ Easier updates
// ✅ Reduced storage
// ✅ Better maintenance

// Disadvantages

// ❌ More tables
// ❌ More JOIN queries
// ❌ Slightly complex queries

// Interview Answer

// Normalization is the process of organizing database tables to reduce data redundancy and improve data integrity. It divides large tables into smaller related tables and establishes relationships between them. It is important because it prevents duplicate data, improves consistency, reduces storage usage, and makes updates easier. Common normal forms include 1NF, 2NF, and 3NF.

// .
// .
// .
// .
// .
// what is negative impact when we use memoizaton ?
// Using useMemo, useCallback, or React.memo unnecessarily can actually make your application slower.
// 1. Extra Memory Usage
// Memoization stores previous values in memory.

// 2. Dependency Comparison Cost
// React compares dependencies every render.

// 3. Increased Complexity
// Too much memoization makes code harder to understand.

// Interview Answer

// Memoization can negatively impact performance because React must store values in memory and compare dependencies on every render. If the computation is inexpensive, the overhead of useMemo or useCallback may outweigh the benefits. Overusing memoization also increases code complexity and can introduce stale value bugs due to incorrect dependencies. Therefore, memoization should only be used for expensive computations or preventing unnecessary re-renders.

// .
// .
// .
// .
// .
// Find queries that take too much time and optimize them. ( Postgres )
// Check Sequential Scan : If PostgreSQL performs a full table scan on a large table, the query becomes slow.
// Enable Slow Query Logging
// Check Query Timing : Execution Time: 2.5 sec


// Common Reasons for Slow Queries
// Problem. 	           Solution
// Missing index	       Create index
// Full table scan	       Use indexes
// Large joins	           Optimize joins
// Too many rows	       Pagination
// Outdated statistics	   ANALYZE
// SELECT *	               Fetch required columns
// N+1 queries	           Batch queries


// Production Monitoring Tools
// pgAdmin
// pg_stat_statements
// DataDog
// New Relic
// Grafana + Prometheus
// Interview Answer

// To analyze slow queries in PostgreSQL, I first use EXPLAIN ANALYZE to understand the execution plan and actual execution time. I check whether PostgreSQL is performing a sequential scan instead of using indexes. In production, I enable pg_stat_statements and slow query logging to identify expensive queries. Based on the results, I optimize indexes, joins, pagination, and query structure to improve performance.


// .
// .
// .
// .
// .
// The N+1 Query Problem occurs when your application executes:
// 1 query to fetch parent records
// +
// N additional queries to fetch related records
// This leads to many unnecessary database calls and poor performance.

// Interview Answer

// The N+1 Query problem occurs when an application executes one query to fetch parent records and then executes N additional queries to fetch related data for each record. This causes performance issues because the number of database queries grows linearly with the data size. It can be solved using JOINs, eager loading, MongoDB $lookup, batching, or fetching related data in bulk.

// .
// .
// .
// .
// .
// ACID properties explain me each easy words
// ACID properties are very important database concepts, especially for SQL databases like MySQL and PostgreSQL.

// ACID ensures that database transactions remain reliable and consistent.

// ACID = Atomicity + Consistency + Isolation + Durability

// Let's understand each in simple words.

// 1. Atomicity (All or Nothing)

// Meaning:

// Either the entire transaction succeeds, or nothing happens.

// Example: Bank Transfer

// You transfer ₹1000 from Account A to Account B.

// Steps:

// Deduct ₹1000 from A.
// Add ₹1000 to B.

// Suppose the server crashes after step 1.

// Without Atomicity:

// A = -1000
// B = unchanged

// Money is lost.

// With Atomicity:

// Either:
// ✓ Deduct + Add

// OR

// ✗ Nothing happens
// 2. Consistency (Valid Data Only)

// Meaning:

// The database must always remain in a valid state.

// Example:

// Bank rule:

// Balance cannot be negative.

// Suppose:

// Account balance = ₹500
// Withdraw = ₹1000

// Database rejects it.

// Because:

// 500 - 1000 = -500

// This violates business rules.

// Consistency ensures:

// constraints remain valid
// rules are followed
// data integrity is maintained
// 3. Isolation (Transactions Don't Interfere)

// Meaning:

// Multiple transactions should not affect each other.

// Example:

// Account balance:

// ₹5000

// Two users withdraw:

// User A → ₹1000
// User B → ₹2000

// Both happen simultaneously.

// Without isolation:

// Final balance may become incorrect.

// With isolation:

// Transaction A completes.
// Transaction B sees updated value.

// Each transaction behaves as if it is running alone.

// 4. Durability (Data Never Lost)

// Meaning:

// Once data is committed, it stays permanently.

// Example:

// You make payment:

// Payment successful.

// Immediately after that:

// Server crashes.

// Durability guarantees:

// Payment data is still saved.

// The committed transaction survives:

// power failure
// crash
// restart
// Easy Example: Online Banking
// Transfer ₹1000
// Property	Meaning
// Atomicity	Complete transfer or rollback
// Consistency	Balance rules remain valid
// Isolation	Other transactions don't interfere
// Durability	Data remains after crash
// One-Line Definitions
// Atomicity

// All operations succeed or all fail.

// Consistency

// Database always remains valid.

// Isolation

// Transactions execute independently.

// Durability

// Committed data is permanently stored.

// Interview Answer

// ACID properties ensure reliable database transactions. Atomicity guarantees that a transaction either completes fully or rolls back entirely. Consistency ensures data integrity and valid states. Isolation prevents concurrent transactions from interfering with each other. Durability guarantees that committed data remains permanently stored even after system failures.


// .
// .
// .
// .
// .
// How would you deploy a MERN stack application to a production environment?
// Step 1: Create EC2 Instance
// Launch Ubuntu EC2 instance.
// Choose t2.micro/t3.small.
// Open security groups.

// Allow:
// 22  → SSH
// 80  → HTTP
// 443 → HTTPS
// Connect:
// ssh -i key.pem ubuntu@ec2-ip
// A PEM key is a file that stores cryptographic keys or certificates in a text-based format. In Node.js, PEM files are commonly used for:
// 🔒 HTTPS (SSL/TLS)
// 🔑 JWT signing (RS256)
// ☁️ Connecting to cloud services (AWS, Google Cloud, etc.)
// 🛡️ SSH authentication
// 🔐 Mutual TLS (mTLS)

// Step 2: Install Node.js : sudo apt install nodejs

// Step 3: Install Git : sudo apt install git
// Clone project: git clone repo-url

// Step 4: Install Dependencies : Backend:
// cd backend : npm install
// Frontend: cd frontend npm install

// Step 5: Create Environment Variables

// Step 6: Build React Application
// npm run build
// This creates: build/

// Step 7: Install PM2
// PM2 keeps Node server alive.
// sudo npm install -g pm2
// Run app: pm2 start server.js

// Why PM2?
// If:
// server crashes
// EC2 restarts
// PM2 automatically starts application.


// Step 8: Install Nginx
// sudo apt install nginx
// Start: sudo systemctl start nginx
// Enable: sudo systemctl enable nginx

// Step 9: Configure Reverse Proxy
// Edit:
// sudo nano /etc/nginx/sites-available/default
// Example:
// server {
//     listen 80;

//     server_name yourdomain.com;

//     location / {
//         root /var/www/react/build;
//         index index.html;
//         try_files $uri /index.html;
//     }

//     location /api {
//         proxy_pass http://localhost:5000;
//     }
// }
// Restart:
// sudo systemctl restart nginx



// Step 10: Configure MongoDB
// Recommended:
// Use MongoDB Atlas.

// Reason:
// managed service
// backups
// scaling
// monitoring

// EC2:
// Node API
//      ↓
// Mongo Atlas


// Step 11: Configure Domain
// Example:

// api.example.com
// www.example.com

// Update DNS:
// A Record
// → EC2 Public IP


// Step 12: Install SSL
// Use Certbot:
// sudo apt install certbot python3-certbot-nginx
// Generate SSL:
// sudo certbot --nginx
// Now:
// https://yourdomain.com


// Step 13: CI/CD (Optional)
// GitHub Actions:
// Push Code
//      ↓
// Build
//      ↓
// SSH to EC2
//      ↓
// Pull Code
//      ↓
// Restart PM2


// Production Folder Structure
// EC2
// /var/www
//     ├── frontend
//     └── backend


// Production Checklist

// ✅ HTTPS

// ✅ Environment Variables

// ✅ PM2

// ✅ Nginx

// ✅ MongoDB Atlas

// ✅ Security Groups

// ✅ SSL Certificate

// ✅ Logging

// ✅ Error Monitoring


// If Application Gets Huge
// Architecture becomes:
// CloudFront CDN
//        ↓
// Load Balancer
//        ↓
// EC2 Auto Scaling Group
//        ↓
// Node Servers
//        ↓
// Redis
//        ↓
// MongoDB Atlas


// Interview Answer (2 Minutes)

// I would deploy the MERN application on an EC2 instance. First, I would create an Ubuntu EC2 server and configure security groups. Then I would install Node.js, Git, and clone the application. The React application would be built and served through Nginx, while the Node.js backend would run using PM2 for process management. MongoDB Atlas would be used as the database. Nginx would act as a reverse proxy, forwarding API requests to the backend. Finally, I would configure SSL using Certbot and optionally set up CI/CD using GitHub Actions for automated deployments.


// a.) Why Nginx ?
// Nginx : Nginx is used as a reverse proxy because it efficiently serves static files, manages SSL, forwards requests to the Node.js server, improves security, and supports load balancing and scalability.

// b.) How Do You Monitor Logs?
// Production applications must monitor:
// application errors
// server issues
// API failures
// crashes

// Application Logs
// Using:
// console.log()
// is not recommended in production.
// Instead use:

// Winston
// Pino

// Example:
// logger.info("User logged in");
// logger.error(error);

// Centralized Logging
// Large applications use:
// ELK Stack
// Elasticsearch
// Logstash
// Kibana
// or
// Grafana + Loki

// Error Monitoring
// Popular tools:
// Sentry
// Datadog
// New Relic

// Example:
// Sentry.captureException(error);
// If application crashes, developers immediately receive alerts.

// Senior-Level Interview Answer
// For production monitoring, I use structured application logging with tools like Winston or Pino. PM2 provides process logs, while Nginx maintains access and error logs. For centralized monitoring, tools like ELK Stack or Grafana can be used. For application errors and alerts, services like Sentry help track exceptions and notify the team in real time.

// AWS also able to written logs using cloudewatch, just we need to download this logs file and able to check logs 

// One-Line Answers
// Why Nginx?

// Nginx acts as a reverse proxy, serves static files efficiently, manages SSL, improves security, and enables load balancing.

// How do you monitor logs?

// I use application loggers such as Winston, PM2 logs for Node.js processes, Nginx logs for web traffic, and tools like Sentry or ELK Stack for centralized monitoring and error tracking.




// .
// .
// .
// .
// .
// Virtual DOM :- Where are they stored?, Who creates them?, How does React update only changed elements?
// Virtual DOM is simply a JavaScript object representation of the real DOM.

// Virtual DOM is stored in memory (RAM).
// React internally stores it inside a data structure called: Fiber Architecture

// React Actually Maintains Two Fiber Trees
// Current Fiber Tree
// Work In Progress Fiber Tree


// Reconciliation Process

// React performs:

// Diffing Algorithm

// Example:

// Old:

// <h1>0</h1>

// New:

// <h1>1</h1>

// React sees:

// Only text changed.

// It does NOT recreate:

// <h1>

// Only updates:

// 0 → 1


// Why React is Fast
// Because:-
// ❌ It does NOT update entire DOM.
// ✅ It updates only changed nodes.

// React Fiber Architecture

// React 16 introduced:

// Fiber

// Fiber enables:

// Incremental rendering
// Prioritization
// Interruptible rendering
// Concurrent rendering

// Virtual DOM is stored in memory as React Fiber trees. React maintains two trees internally: the current fiber tree, which represents the old UI, and the work-in-progress fiber tree, which represents the updated UI. When state changes, React creates a new virtual DOM, compares it with the old one using the reconciliation algorithm, identifies the differences, and updates only the changed elements in the real DOM during the commit phase.

// .
// .
// .
// .
// . 
// -----  Speridion ( Dubai )
// Git Cherry Pick
// Git cherry-pick is used to copy a specific commit from one branch to another without merging the entire branch.

// .
// .
// .
// .
// React Battching
// In React, batching means:
// React groups multiple state updates together and does only one re-render instead of many re-renders.
// Main Benefit :-
// Better performance
// Fewer re-renders
// Faster UI updates
// Optimized rendering process

// .
// .
// .
// .
// // How we can handle disconnecting in web sockets : 
// What happens when WebSocket disconnects?

// A WebSocket connection can disconnect because of:

// Internet connection lost
// Server restart/crash
// Network timeout
// User closes browser tab
// Firewall/proxy issues


// Client-Side Handling
// Use the onclose event:

// Auto Reconnect Strategy
// Most real-world applications automatically reconnect.


// Real-World Example (Chat App)
// User Connected
//       ↓
// Chatting
//       ↓
// Internet Lost
//       ↓
// onclose Triggered
//       ↓
// Show "Reconnecting..."
//       ↓
// Auto Reconnect
//       ↓
// Restore Chat Session


// Interview Answer

// "WebSocket disconnections can occur due to network issues, server restarts, or client-side interruptions. We typically handle them using the onclose event, implement automatic reconnection with exponential backoff, use heartbeat mechanisms (ping/pong) to detect stale connections, and maintain user state so that sessions can be restored when the client reconnects."