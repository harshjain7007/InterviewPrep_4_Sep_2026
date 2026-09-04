// API Securities...  :-
// 1. Authentication :- JWT, Middleware 
// 2. Authoraization :- After login, control permissions
// 3. Input Validation & Sanitization :- Prevent bad data / attacks
// Use libraries:
// Joi / Zod / Express-validator
// 4. Prevent NoSQL Injection (MongoDB) :- Validate input types, Use strict schemas (Mongoose)
// 5. Use HTTPS (SSL) :- Always deploy with HTTPS, Encrypts data between client & server
// 6. Secure Cookies / Tokens
// Use httpOnly cookies
// Use secure flag
// Use SameSite
// 8. Helmet (Security Headers) :- Protects from: :- ( “Helmet is an Express middleware that helps secure web applications by setting various HTTP security headers, protecting against common vulnerabilities like XSS, clickjacking, and MIME sniffing.” )
// 9. CORS Configuration
// 11. Environment Variables :- Never hardcode secrets



// 🎯 Short Interview Answer
// “To secure APIs in a MERN stack, we implement authentication using JWT, authorization with role-based access, validate and sanitize inputs, use HTTPS, apply security middleware like Helmet, enable rate limiting, configure CORS, and protect against common attacks like XSS, CSRF, and NoSQL injection.”



// If API take too much time :- “For long-running APIs, we should avoid blocking requests. Instead, we offload the task to a background job queue like Bull with Redis, return a job ID immediately, and use polling or WebSockets to notify the client when the task is complete.”



// if we can upload 100GB file so approche :- 
// 🚀 Best Architecture (Production Ready)
// Flow:
// Backend → create upload session
// Frontend → split file
// Upload chunks → S3 (parallel)
// Backend → finalize upload
// Store metadata in DB

// 🎯 Short Interview Answer
// “For large file uploads like 100GB, we use chunked uploads with multipart upload (e.g., AWS S3), allowing parallel and resumable uploads. The backend generates pre-signed URLs, and the frontend uploads chunks directly to cloud storage, ensuring scalability and reliability.”

// Pro Tip
// Never :- Upload huge files through your Node server ❌
// Always :- Use direct-to-cloud upload ✅


// streaming :- Streaming is a 🔥 concept in Node.js and backend development, especially for handling large data like files or videos. Streaming means processing data in small chunks instead of loading the entire data into memory at once.
// streaming works like :- Source → Chunk → Process → Chunk → Process → Destination


// what is the meaning of _id :- 
// “_id in MongoDB is a unique identifier for each document, similar to a primary key in relational databases. It is automatically generated as an ObjectId if not provided and is indexed by default for fast querying.”
// Why _id is Important :- 
// Identify documents uniquely
// Used for:
// Updates
// Deletes
// Relationships (like foreign key)


//. can we create own id :- 
// “Yes, MongoDB allows custom _id values. Instead of the default ObjectId, we can provide our own unique identifier such as a string, number, or UUID, as long as it remains unique and immutable.”

// Can store images in mongoDB :-
// “Yes, MongoDB can store images using binary data or GridFS, but in production systems, it’s best to store images in cloud storage like S3 or Cloudinary and save only the image URL in MongoDB for better performance and scalability.”


// what is Aggregation in MongoDB ? 
// Aggregation Pipeline
// 🎯 Short Interview Answer :-
// “Aggregation in MongoDB is a framework used to process and transform data through a pipeline of stages like match, group, and project, allowing complex queries, data analysis, and computations similar to SQL operations like GROUP BY and JOIN.”

// Aggregation Pipeline :- Collection → Stage1 → Stage2 → Stage3 → Result

// ⚡ Why Use Aggregation?
// Complex queries
// Data transformation
// Analytics (reports, dashboards)
// Reduce backend logic

// ⚡ Common Aggregation Stages
// 1. $match (Filter data)
// 2. $group (Group data)
// 3. $project (Select fields)
// 4. $sort
// 5. $limit
// 6. $lookup (Join collections)


// Fetch data from 2 different tables using aggrigate keyward :- 
// db.users.aggregate([
//   {
//     $lookup: {
//       from: "orders",         // second collection
//       localField: "_id",      // field in users
//       foreignField: "userId", // field in orders
//       as: "orders"            // output array
//     }
//   }
// ]);


// What is cluster :- 
// “A cluster is a group of interconnected systems or processes that work together to improve performance, scalability, and reliability.” A cluster = multiple servers working together
// ⚡ When to Use ::- 
// Use cluster when:
// High traffic 🚀
// Need scalability 📈
// Want fault tolerance 🔁
