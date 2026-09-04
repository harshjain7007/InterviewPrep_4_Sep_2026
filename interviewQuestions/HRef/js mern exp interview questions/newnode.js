// micro Frontend

// . 
// .
// .
// .
// .
// MVC Pattern :-
// Interview One-Line Answer
// “MVC is a design pattern that separates application logic into Model, View, and Controller to improve code organization, scalability, and maintainability.”

// Why MVC is Used: 
// ✅ Better code structure
// ✅ Easy maintenance
// ✅ Reusable code
// ✅ Separation of concerns
// ✅ Scalable architecture


// Flow of MVC
// User Request
//      ↓
// Controller
//      ↓
// Model (DB)
//      ↓
// Controller
//      ↓
// View / Response

// 1. Model

// Handles:

// Database
// Business logic
// Data operations

// Example:

// User.find()

// In MERN:

// MongoDB models
// Mongoose schemas

// 2. View

// Handles:

// UI
// What user sees

// Example:

// React Components
// HTML pages
// 3. Controller

// Handles:

// Request/Response
// Connects Model and View


// .
// .
// .
// .
// ------------ Thered pooling : -
// Node.js uses a thread pool (via libuv) to handle heavy operations like file system and crypto tasks in the background, so the main thread remains non-blocking.
// 🎯 Simple Analogy
// Think:-
// Main thread = manager 👨‍💼
// Thread pool = workers 👷‍♂️👷‍♂️👷‍♂️👷‍♂️

// 👉 Manager assigns heavy work to workers
// 👉 Manager continues handling other tasks

// Thread polling in Node.js allows you to perform periodic checks or monitoring tasks in a separate thread, which helps keep the main event loop responsive. It leverages the thread pool managed by libuv and is particularly useful for tasks that are too heavy to run on the main thread.
// Benefits of Thread Polling:
// Non-blocking: The main event loop remains unblocked, ensuring that the application can continue handling other events.
// Parallelism: Allows CPU-bound or I/O-bound tasks to be offloaded to a separate thread, enhancing performance.
// Context: Node.js and Threads
// Single-threaded Nature: Node.js operates on a single thread using an event-driven, non-blocking I/O model. However, it can offload heavy operations, such as file system operations or cryptography, to a thread pool managed by libuv.
// libuv Thread Pool: Node.js uses this thread pool to execute I/O tasks asynchronously. The default size of this thread pool is 4, but it can be increased.
// Thread Polling Use Cases
// Periodic Tasks:

// You might want to periodically check the status of a file, network socket, or database. Thread polling can be used to handle these periodic checks in the background without blocking the main event loop.
// Monitoring Background Tasks:

// For tasks like monitoring file changes, querying databases, or processing jobs in a queue, polling on a separate thread ensures that the main thread remains responsive.

// .
// .
// .
// . ------ libuv :- 
// libuv is a core library used by Node.js to handle asynchronous operations like:
// File system operations
// Networking
// Timers
// Async I/O

// Key Point
// Node.js itself is single-threaded for JavaScript execution, but libuv allows it to behave asynchronously and efficiently behind the scenes.

// .
// .
// .
// .
// ------------ RestFull API's ---- :-
// 
// https://www.geeksforgeeks.org/rest-api-introduction/
// https://blog.hubspot.com/website/what-is-rest-api
// differance betweem  regular API and RestAPI :-  https://www.pubnub.com/guides/restful-apis/
// Advantages of RESTful APIs:
// Scalability: Due to statelessness, RESTful APIs can handle a large number of requests efficiently.
// Flexibility: RESTful APIs can be used by various clients (web, mobile, etc.) and are not tied to any specific technology.
// Performance: RESTful APIs are often lightweight, especially when using JSON, which is less verbose than XML.

// RESTful APIs are a powerful and flexible way to build web services that allow different applications to interact with each other. They are widely used due to their simplicity, scalability, and compatibility with modern web technologies.

// Advantages of REST APIs
// 1. Simple and Easy

// Uses HTTP which is already built into browsers.

// 2. Stateless

// Server does not remember previous requests.

// Each request contains complete information.

// This improves:

// performance
// scalability
// 3. Fast Development

// Frontend/backend can be developed simultaneously.

// 4. Supports Multiple Formats

// Mostly JSON:

// {
//   "name": "Harsh"
// }

// Easy for JavaScript applications.

// 5. Scalable

// Works well for:

// Microservices
// Large applications
// Cloud systems





// .
// .
// .
// .
// ------  Differance Between PUT and PATCH Request ----- :-
// PUT and PATCH are both HTTP methods used for updating resources on a server, but they have different semantics and use cases:
// PUT :- Usage: PUT is typically used when you want to update a resource completely, meaning you have all the information necessary to fully replace the existing resource with the new one.
// PATCH :- Usage: PATCH is useful when you want to update only specific fields or properties of a resource, rather than replacing the entire resource. It's commonly used for making minor updates or applying incremental changes to a resource.
// :------- can we update the generated id field in side mongoDB using PUT and PATCH method  :------
// No, you cannot update the _id field of a document in MongoDB using PUT, PATCH, or any other method. The _id field is immutable in MongoDB once it has been set.
// Differences:
// Semantics: PUT is used for full resource replacement, while PATCH is used for partial updates.
// Idempotence: PUT requests are idempotent, while PATCH requests are not necessarily idempotent. “Idempotence means making the same request multiple times produces the same result without causing additional side effects.”
// Request Payload: PUT requests expect the entire updated representation of the resource in the request payload, whereas PATCH requests contain only the changes to be applied.

// .
// .
// .
// .
//---------- Differance Between GET and POST request :--
// --- Aspect / GET Request / POST Request
// Purpose  /	Used to request data from a specified resource. /	Used to submit data to be processed to a specified resource.
// Data in URL / 	Data is sent in the URL as query parameters. /	Data is sent in the request body.
// Caching /	Can be cached and bookmarked. /	Typically not cached or bookmarked.
// Idempotence /	GET requests are idempotent. /	POST requests are not idempotent. (“Idempotence means making the same request multiple times produces the same result without causing additional side effects.”)
// Visibility /	Parameters are visible in the URL.	/ Parameters are not visible in the URL.
// Security	/ Considered less secure for sensitive data. /	More secure for sensitive data as it's not visible in URL.

// In summary, GET requests are used to retrieve data from a specified resource, and the data is typically sent as query parameters in the URL. POST requests, on the other hand, are used to submit data to be processed by a specified resource, and the data is sent in the request body, making it more secure for sensitive information. GET requests are idempotent, meaning multiple identical requests have the same effect as a single request, while POST requests are not idempotent.

// .
// .
// .
// .
// Streaming : -
// Nodejs Streams :-during reading of any file some time express or fs file read system ( fs.read("./simple.txt") ) consumed memory and they have a limited memory if multiple user send req so our memory is exaust then server is crased
//For solution of that problem we have a streams jaise jaise data aa rha waise waise vejhte jate hai like you tube basically we can read file in small-small chunks ( fs.createReadSystem("./simple.txt") ) and send this chunks

// process before like :-
// suppose we have 800MB file then  400MB File -> 400MB (ZIP) -> 400MB Write (so 800 MB Memory main aa rha hai ) in side our server
// process after stream :-
// file zip hote hote write ho jayegi like :- Stream Read (Sample.txt) --> Zipper --> fs Write Stream

// GPT :-
// streams in Node.js are powerful tools for handling large amounts of data efficiently. They enable developers to build scalable and performant applications by processing data in chunks and using efficient memory management techniques.
// Types of Streams in Node.js:
// 1. Readable Streams:- Readable streams are sources of data that you can read from. Examples include reading data from a file or an HTTP request.
// 2. Writable Streams:- Writable streams are destinations for data that you can write to. Examples include writing data to a file or an HTTP response.
// 3. Duplex Streams:- Duplex streams are both readable and writable. They can be used when you need to read and write data simultaneously. An example is a TCP socket.
// 4. Transform Streams:- Transform streams are a type of duplex stream that can modify the data as it is being read or written. They are often used for tasks like compression, encryption, or changing the format of data.
// Key Concepts of Streams:
// 1. Buffering:
// Streams process data in small chunks rather than all at once, which helps in managing memory efficiently and allows for handling large data sets without exhausting system resources.

// 2. Pipe:
// The pipe() method allows you to connect streams together, passing data from one stream into another. This is commonly used to read data from a source and write it to a destination.

// Use Cases for Streams:
// File I/O: Reading from and writing to files.
// Network Communication: Handling data over network connections, such as HTTP requests and responses.
// Data Processing Pipelines: Processing data through a series of transformations, such as parsing, filtering, and formatting.
// Real-Time Applications: Handling real-time data streams, such as live video and audio feeds.


// .
// .
// .
// .
// what is Event loop in nodejs :-
// The event loop is a fundamental concept in Node.js that enables non-blocking, asynchronous operations. It allows Node.js to perform I/O operations (like reading from a file or making an HTTP request) without blocking the main thread, which is essential for handling high concurrency and maintaining responsiveness in applications.
// The event loop allows Node.js to handle multiple tasks concurrently without creating a separate thread for each task

// -- working Step-by-Step : - https://dev.to/endeavourmonk/nodejs-event-loop-46oo
// The event loop in Node.js is a key component that allows the platform to handle asynchronous operations and manage concurrency. Here's a detailed step-by-step explanation of how the event loop works :-
// Summanry :-
// The event loop starts by executing synchronous code.
// After synchronous code, it processes microtasks (e.g., process.nextTick and Promises).
// Then it moves through various phases (timers, pending callbacks, poll, check, and close callbacks), handling appropriate tasks in each phase.
// Microtasks are always executed immediately after the current operation and before the event loop continues to the next phase.
// Understanding the event loop's phases and the order of execution helps in writing efficient, non-blocking asynchronous code in Node.js.


// Event Loop in Node.js

// In Node.js, the Event Loop handles asynchronous operations like:

// API calls
// File system
// Timers
// Database queries

// without blocking the main thread.

// Node.js Event Loop Phases
// 1. Timers
// 2. Pending Callbacks
// 3. Idle / Prepare
// 4. Poll
// 5. Check
// 6. Close Callbacks

// Node.js continuously runs these phases in a loop.


// So Node.js uses:

// Event Loop
// Queues
// Background workers

// to handle async tasks.

// Real Flow
// Code Starts
//    ↓
// Main Thread Executes Sync Code
//    ↓
// Async Tasks Sent to Node APIs / libuv
//    ↓
// Completed Tasks Wait in Queues
//    ↓
// Event Loop Picks Them Phase-by-Phase
//    ↓
// Callback Executes

// Interview One-Line Answer

// “Node.js event loop continuously checks different callback queues phase-by-phase and executes completed asynchronous tasks when the call stack becomes empty.”


// .
// .
// .
// .
// // Microtask Queue vs Macrotask Queue
// In JavaScript and Node.js, asynchronous callbacks are stored in queues.

// Mainly two important queues:

// 1. Microtask Queue
// 2. Macrotask Queue
// 1. Microtask Queue

// High priority queue.

// Tasks inside it execute:

// Immediately after current synchronous code

// before event loop moves to next phase.

// Examples of Microtasks
// Promise.then()
// catch()
// finally()
// queueMicrotask()
// MutationObserver

// Node.js also has:

// process.nextTick()

// which has even higher priority.

// 2. Macrotask Queue

// Normal async queue.

// Executed:

// After microtasks complete
// Examples of Macrotasks
// setTimeout()
// setInterval()
// setImmediate()
// I/O callbacks


// .
// .
// .
// .
//  Buffers in Node.js provide a way to work with binary data efficiently. They are essential for handling file I/O, network operations, and any situation where you need to process or manipulate binary data directly. Understanding how to create and manipulate buffers is fundamental to working effectively with low-level data in Node.js.
// Key Characteristics of Buffers :-
// Binary Data Handling: Buffers are designed to handle raw binary data, which allows you to manipulate files, network packets, or any other binary data.

// Fixed Size: Buffers have a fixed size that is determined when they are created. This size is allocated in memory, and it cannot be changed later.

// Efficient Memory Use: Buffers are a more efficient way to handle raw data compared to strings, as they use binary encoding.

// Use Cases for Buffers :-
// File System Operations: Reading and writing binary files.
// Networking: Handling data over TCP/UDP sockets.
// Stream Processing: Buffers are commonly used in streams, such as HTTP requests and responses.

// .
// .
// .
// .
// ---- Elastic search :-
// ⚡ 30-Second Answer (Perfect)
// “Elasticsearch stores data in documents inside indexes. Each index is divided into shards for faster processing, and replicas are used for fault tolerance. Multiple nodes together form a cluster which allows scalable and fast searching.”

// Simple flow :- “Data is stored as documents inside an index. The index is divided into shards for performance, and replicas are created for backup. Multiple nodes form a cluster to manage and search data efficiently.”

// 🔹 1. Cluster
// A cluster is a group of servers working together.
// 👉 One-line:
// “Cluster = collection of nodes that store and search data together.”

// 🔹 2. Node
// A node is a single server in Elasticsearch.
// 👉 One-line:
// “Node = one machine that stores data and handles requests.”

// 🔹 3. Index
// An index is like a database.
// 👉 One-line:
// “Index = collection of similar data (like a table in DB).”
// Example:
// users
// products

// 🔹 6. Shard (VERY IMPORTANT ⭐)
// Data is split into smaller parts.
// 👉 One-line:
// “Shard = small piece of an index.”
// 👉 Why?
// Makes search fast
// Distributes data

// 🔹 7. Replica
// Copy of a shard.
// 👉 One-line:
// “Replica = backup copy of shard for safety and high availability.”

// 🔹 8. Indices (Plural of Index)
// 👉 One-line:ß
// “Indices = multiple indexes.”

// 🔹 12. Inverted Index (Core Concept ⭐)
// 👉 One-line:
// “Stores words and their locations for fast search.”
// 👉 Simple:
// Instead of storing sentences → stores words separately



// Elasticsearch is a distributed database where data is stored as JSON documents, its horizontally scalable, Ex. the database can run in multiple survers (nodes), perform operations like indexing, searching, updating documents, and more.
// Elasticsearch stores data in a data structure called inverted index, where data is literally stored as search. this makes querying very fast even if vast amount of data storage.
// differance between inverted index and forward index :- https://www.geeksforgeeks.org/difference-inverted-index-forward-index/
// Elastic search supports many data types like text, number, Geo-spatial, IP addresses etc.
// Elastic cluster have multiple nodes
// index inside :- prensented group of shards
// Two types of shards primary and replicas , replicas shardes are for redundancy and serving data queries
// The shardes, data and queries are distributed among nodes to facilitate availability and scalability in a multi-node cluster. The shards and data are automatically re-balamced when a node is added or removed
// index template isblueprint for creating index, its containing like Number of shardes and replicas, data mapping, priority etc.
// index data mapping of an index template defines the schema of documents stored in the index
// An index alias is a group of indices. Documents can be inserted into an index group using alias.

// Data streams in Elasticsearch :-
// Data stream is an abstraction on top of index designed for append only time-series dacuments. The clients interact with data stream for updating documents. The data stream stores data in backing indexes (also called hidden indices).
// New index will be created as per the configured index lifecycle policy thresholds. Data can be queried from all indices but can be written only to the latest index.

//- Elasticsearch is a powerful and versatile search engine and analytics platform with numerous advantages. Here are some key benefits:-
// Elasticsearch’s combination of speed, scalability, advanced search capabilities, and ease of integration makes it an attractive choice for a wide range of applications, from search engines and log analysis to business intelligence and beyond. Its rich ecosystem and support for real-time analytics further enhance its value as a powerful tool for data-driven decision-making.
// 1. High Performance and Scalability
// Real-Time Search: Elasticsearch is designed for real-time search and analytics. It can quickly index and search large volumes of data.
// Scalability: It can scale horizontally by adding more nodes to the cluster. This makes it suitable for handling growing data and increasing query load.
// 2. Distributed and Highly Available
// Cluster-Based Architecture: Elasticsearch operates as a distributed system, meaning it can run across multiple nodes, providing redundancy and fault tolerance.
// Automatic Sharding and Replication: Data is automatically divided into multiple shards, and replicas can be created to ensure high availability and reliability.
// 3. Full-Text Search
// Advanced Query Capabilities: Elasticsearch supports complex full-text search queries, including phrase and proximity searches, fuzzy matching, and wildcard searches.
// Relevance Scoring: It uses sophisticated algorithms to rank search results based on relevance, ensuring that the most pertinent results appear first.
// 4. Rich Ecosystem and Integration
// Logstash and Kibana: Elasticsearch is part of the Elastic Stack (ELK Stack), which includes Logstash for data ingestion and Kibana for data visualization and analytics.
// Integration with Various Data Sources: Elasticsearch can ingest data from a wide range of sources and formats, making it highly versatile.
// 5. Flexibility and Schema-Free
// Dynamic Mapping: Elasticsearch allows for dynamic mapping, automatically detecting and mapping fields based on incoming data.
// JSON Document Store: Data is stored in a flexible JSON format, making it easy to index and query complex data structures.
// 6. Powerful Analytics
// Aggregations: Elasticsearch supports powerful aggregation capabilities, allowing for advanced data analytics, such as metrics, histograms, and date histograms.
// Real-Time Analytics: You can perform real-time analytics on your data, making it suitable for monitoring, log analysis, and operational intelligence.
// 7. Ease of Use
// RESTful API: Elasticsearch provides a RESTful API, making it easy to interact with using standard HTTP methods. This simplifies integration with other systems and languages.
// Comprehensive Documentation and Community Support: There is extensive documentation and a large community of users and developers, making it easier to find help and resources.
// 8. Security and Access Control
// Built-in Security Features: Elasticsearch includes features like user authentication, role-based access control, and encrypted communications, ensuring data security.
// Audit Logging: It supports audit logging, helping you keep track of access and modifications to your data.
// 9. Versatile Use Cases
// Log and Event Data Analysis: Elasticsearch is widely used for log and event data analysis, enabling real-time monitoring and alerting.
// Search Engine: It powers search functionalities in many applications, from e-commerce sites to enterprise search solutions.
// Business Intelligence: Elasticsearch's analytics capabilities make it suitable for business intelligence and reporting.
// 10. Cost-Effective
// Open Source: Elasticsearch is open-source, allowing you to use it for free. There are also managed services and enterprise features available from Elastic, providing additional options based on your needs and budget.

// .
// .
// .
// .
// ---- Message Queues :-
// Queue :- type of data structure which working FIFO principal , perform Enqueu & Dequeue
// -- useCases :- notification , Order process, automation
// Dead letter Queue :- A dead letter queue is special type of message queue that temprary stores message that a software system can not process due to errors. A Dead Letter Queue does not automatically resend messages when the system restarts.
// "Bull MQ" npm pakage is for creating Queues  ;- that have a Radies, Worker, Queue

// . 
// .
// .
// .
// ---- Docker :-
// if we are working with large organization and large teams so docker is important tool :-
// covered:- What is docker, Why we need docker, How docker differant from vertual machine :-
// why need suppose we run MERN project in differant laptops in both have differant node versions    generate mannual error bcz of intalling dependances , CLI commands  :- during deployment which also generates errors
// For solution of that kind of problems & issues Docker comes in
// Docker :-  Helpfull plateform or Srvices  to make a container for installing dependances and run our project , and which containers works with all machines  like windows, mac, linux
// container are portable
// container are lightweight :- easly destroy, update and build
// docker image :-  docker image is excutable file and this file have instructions how will make a conatiner
// we can share docker image of our project and other devloper create container with the help of this docker image and run project
// diff between docker image and docker container is like a diff between classes and object ,  so container is basically instance of docker image
// For using docker :-  1. go docker web and  download it
// docker also have docker hub where we can uploades our images  like git hub tyoe
// first pull that image from docker hub then we need convert it into container like running commnad docker run Imgae_Name
// docker daeman is core of docker
// in writing command -it dase is used for interactive mode if we need run some CLI command
// we can run our deploment in docker enviroment
// Docker and Vertual machine is  separate things  , vertual machine vertualise the whole operating system while docker is vertualise only application layer thats by docker is lightweight ,  docker is faster as compare to vertual machine , vertual compatible with every machine but in case dcoker designed for linux , with the help docker desktop we run linux based images in our windows or mac operating system

// .
// .
// .
// .
//  ---- What is Kubernetes :-
// 🚀 What is Kubernetes?
// 👉 Kubernetes is a tool used to manage and run containers automatically.

// 🎯 One-line Answer (Best)
// “Kubernetes is a container orchestration tool used to automate deployment, scaling, and management of applications.”

// 🤔 Why do we need Kubernetes? (MAIN REASON ⭐)
// 👉 Problem without Kubernetes:
// Managing many containers manually is hard
// Scaling apps is difficult
// Handling failures is complex
// 👉 Solution:
// Kubernetes automates everything


// 🔑 Key Reasons (simple words)
// 1. Auto Scaling :- Automatically increases/decreases app based on traffic
// 2. Self-Healing :- If a container crashes → Kubernetes restarts it
// 3. Load Balancing :- Distributes traffic evenly
// 4. Easy Deployment :- Deploy apps quickly with configuration
// 5. High Availability :- Keeps app running all the time

// 🧠 Real-life Example
// 👉 Imagine:
// Your app runs in 100 containers
// 10 containers crash
// 👉 Kubernetes will:
// Restart them automatically
// Shift traffic to working ones

// 💡 Pro Tip :- If interviewer asks deeper:
// 👉 Say :- “We use Kubernetes when applications are containerized using Docker and need to run in production at scale.”


// 🚀 Why do we need Containers?
// 👉 Main idea :-Containers help us run applications consistently anywhere. “Containers are used to package an application with all its dependencies so it runs the same in every environment.”

// 🤔 Problem Without Containers
// Works on your laptop ❌ but not on server
// Dependency issues (version mismatch)
// Difficult to deploy and scale
// 👉 This is called :- “It works on my machine” problem

// 🔑 Key Reasons (Simple)
// 1. Consistency :- Same behavior in dev, test, and production
// 2. Easy Deployment :- Just run container → app starts
// 3. Lightweight :- Faster than virtual machines
// 4. Scalability :- Easily run multiple containers
// 5. Isolation :- Each app runs independently (no conflict)


// 💡 Pro Tip 👉 If interviewer connects this with Kubernetes:
// “Containers are managed at scale using Kubernetes.”


// .......Kubernetes ( K8s ) is used to orchestrate containerized cloud-native microservices apps.
// orchestrate :- Deploy your application, Self healling, Scale it up or down, Rolling updates and rollback
// Containerized :- There is world outside of Docker , Apps that runs in container
// Cloud-Native :- An application that is designed to meet cloud demands like auto-scalling, self healing, rolling updates and rollbacks.
// MicroServices :- An application built from lots of independent small specialized parts that works together.  / Authentication services / Vider conversion / Video streaming

// so Kuberenet is a managment tool for contanrized applicaitons, Abstract underlying infrastructure such as AWS or Google

//..
// Kubernets is a open source container orchestration platform
// it automates the deployment, scaling, and management of containerized applications.
// in 2014 google opensourced Kubernets
// Kubernetes name :-  k8s at this name 8 middle words of kubernetes "ubernete"
// Kubernetes cluster is set of machines called nodes, That are used to run containerized applications.
// Two core pices of kubernetes cluster 1st is Control plane :- responsible to manage state of  cluster  which runs on multiple nodes that span across several data center zone   2nd is worker nodes :- These nodes run the cantainerized applicaiton workload, cantainerized applicaiton worked inside like pad pad1-pad2 and pad insides container1 container2
// pads are the basic building blocks of kubernets building blocks
// control plane have number of core components like :- Controller Manager, Scheduler,  etcd and API server
//  Controller Manager, Scheduler That three are connected to API Server and API Server is connected to Worker Nodes and Worker Node have Pod's and Pod's have container's

// -- Why should we used kubernetes :-
// Kubernetes is scalable and higely availble , it provides featuers like self-healing, automatic rollbacks, and horizontal scaling.

// .
// .
// .
// .
//  Docker vs Virtual Machine :- 
// ⚡ Short Interview Answer (30 sec)
// “Docker containers are lightweight and share the host OS, making them fast and efficient, while virtual machines run a full OS, making them heavier and slower but more isolated.”
// 💡 When to Use
// Use Docker → for modern apps, microservices
// Use VM → when you need full OS isolation

// .
// .
// .
// .
// “Virtualization
// 🎯 One-line Answer (Best)
// “Virtualization is the process of creating virtual machines so multiple operating systems can run on a single physical machine.”

// .
// .
// .
// .
// ----  Microservices :-
// ( “Monolithic architecture is a traditional software design approach where all application components are developed and deployed as a single unified application.” )
// to overcome disadvantages of monolithicservices architecture,  microservices architecture comes in picture
// monolithicservices working as single unit, so disadvantages like redeploment, scaling Limitations , lots of dependance
// in case microservices :- advantages like Separate Codebase, Independent Deployment, Flexible scaling, Technology Flexibility
// for creating microservices based on project buisness logic, and buisness requirment , microservices architecture used in bigger projects    for Example suppose you project have lots of funcsnality so with the help of microservice we can write code like payment code in java, lisitng code python so they allow us to write differant type of code in diff. units/codebases

// How microservices intract with each other :- 1. Syncronus comunication using API call , 2. second way Asyncronus communication using message brokers ( "message brokers (Queue) working like which delivered our request in disired microservies " ), 3. Servise Mesh like istio :-  deploy kubernets

// disadvantages of microservices :- Complex, Management OverHead, and every indivisule microservices have a Independent CICD pipeline and independent container so they have Hige Infra Structure Cost

// Microservices is an architectural style that structures an application as a collection of small, independent services that communicate over a network. Each service in a microservices architecture is responsible for a specific business functionality and operates independently of other services. These services can be developed, deployed, and scaled independently.

// Key Characteristics of Microservices:
// Independent Deployment: Each service can be deployed independently, allowing for continuous delivery and rapid iteration.
// Decentralized Data Management: Microservices often manage their own database, rather than sharing a central database.
// Inter-Service Communication: Services communicate with each other via APIs, typically using HTTP/REST, gRPC, or messaging protocols like RabbitMQ or Kafka.
// Small, Focused Services: Each service is responsible for a single business function, making it easier to understand, develop, and test.
// Technology Agnostic: Each service can be written in different programming languages and technologies, as long as they adhere to the communication protocols.

// Benefits:
// Scalability: Microservices allow individual services to scale based on demand, rather than scaling the entire application.
// Flexibility: Teams can work on different services simultaneously, allowing for faster development.
// Resilience: If one service fails, it doesn't bring down the entire application, making the system more resilient.
// Challenges:
// Complexity: Managing many services introduces operational complexity, including service discovery, load balancing, and monitoring.
// Data Consistency: Maintaining data consistency across services can be difficult, requiring eventual consistency or distributed transactions.
// Deployment: Coordinating the deployment of multiple services requires careful orchestration tools, like Kubernetes or Docker Compose.

// -- Share data in microservices :-
// sharing data directly between them can introduce tight coupling and reduce scalability. Here are common approaches to share data between microservices while maintaining independence:

// .
// .
// .
// .
// ----- How nodejs works ------ :-
// client hit requested which goes to "Event Queue" now that time event queue have a multiple requested FIFO :- first in first out
// next Event loop continusouly watched Event Queue
// request have a 2 types  Blocking Operation (synchoronus task), Non blocking Operation (asynchoronous task)
// if Event loop find out the request is non blocking operation Event loop process that request
// if event loop find out the request is blocking operation then EVent loops
// event loop takes that blocking request and then asign it to threads ( thread pool is a pool that containe multiple pools, thread means worker which workes for you, theared which is responsible for fullfill your blocking operation )  when threads means worker done its works then which goes to thread pool with result and  send response to client from thread pool
// working with blocking operatioins not good so always try to works with non-blocking architechture bcz suppose you have 4 threads ( by defaulte they have a 4 worker threads dependes on your CPU core if you have 8core then they allow max 8 threads ) inside your pool and multiple user send requested so at these time some users waits for responses
// Example :-
const fs = require("fs");

// ---- In Case Blocking architechture :-
console.log("1");
const result = fs.readFileSync("contacts.txt", "utf-8");
console.log(result);
console.log("2");
// O/P of that code is  :-    1 , ...inside content of file , 2
// ---- In case Non Blocking ... :-
console.log("1");
fs.readFileSync("contacts.txt", "utf-8", (err, result) => {
  console.log(result);
});
console.log("2");
// O/P of that code is  :-    1 , 2 , ...inside content of file

// ------  Event loop in node.js ------ :-
// “The Event Loop in Node.js is a mechanism that manages asynchronous operations by continuously checking the call stack, microtask queue, and callback queue, allowing non-blocking execution on a single thread.”
// https://www.geeksforgeeks.org/what-is-poll-phase-in-node-js-event-loop/

// working process :- 
// Step-by-Step Flow
// 1. Execute Synchronous Code
// 2. Send Async Tasks to Node APIs/libuv
// 3. Async Tasks Complete
// 4. Callback Added to Queue
// 5. Event Loop Checks Call Stack
// 6. If Stack Empty → Execute Callback

// "Node.js uses a single-threaded Event Loop to handle asynchronous operations. Async tasks are delegated to libuv or the operating system. Once completed, their callbacks are placed in queues. The Event Loop continuously checks the Call Stack and executes queued callbacks when the stack becomes empty, allowing Node.js to handle many concurrent operations without blocking."

// .
// .
// .
// .
// ---- Polling in Node.js ---- :-
// https://levelup.gitconnected.com/understand-and-implement-long-polling-and-short-polling-in-node-js-94334d2233f3

// HTTP polling is a technique that we can use to build our real-time apps.

// GPT :-
// Polling in Node.js refers to the technique of periodically checking the status or data from a source, such as a server or a file, at regular intervals. This is useful when you need to perform a recurring action, like checking for updates, processing new data, or monitoring changes. Here are some common scenarios and methods for implementing polling in Node.js
// Common Scenarios for Polling
// Checking a Database for Updates: Periodically check if there are new entries or changes in a database.
// Monitoring a File: Continuously check if a file has been modified.
// API Polling: Regularly make HTTP requests to an API to fetch updated data.

// Methods for Implementing Polling
// 1. Using setInterval :- The simplest way to implement polling is by using the setInterval function. This function repeatedly calls a specified function at specified intervals (in milliseconds).
// 2. Recursive setTimeout :- Another approach is to use a recursive setTimeout to handle situations where you want to wait for the completion of the current request before scheduling the next one.

// Considerations :-
// Network Load: Frequent polling can put a load on both the server and the network. Be mindful of the interval you choose.
// Error Handling: Ensure you handle errors gracefully to avoid crashes or excessive retries.
// Efficiency: Consider using more efficient methods like WebSockets or Server-Sent Events (SSE) for real-time updates, as they can be more efficient than polling for certain applications.

// Why Use Polling? :-
// Sometimes, you need to know when new data is available or when something changes, but you don't want to keep asking all the time. Polling helps by asking at regular intervals, so you don't miss any updates.

// How Polling Works :-
// Set a Timer: You set a timer to check for updates every few seconds.
// Check for Updates: When the timer goes off, your program checks if there are any updates.
// Repeat: After checking, the timer is reset to check again later.

// Summary :-
// Polling is like looking out the window every few minutes to see if your friend has arrived.
// You set a timer to check at regular intervals (e.g., every 5 seconds).
// When the timer goes off, you check for updates and then reset the timer.
// Polling is useful for regularly checking for updates without constantly asking all the time.

// Comparison to Alternatives :- Alternatives are better
// While polling is simple and easy to implement, it's not always the most efficient way to get real-time updates. Alternatives like WebSockets or Server-Sent Events (SSE) can provide more efficient and real-time communication without the need for continuous polling.

// Types of Polling :-
// Regular Polling: Fixed intervals.
// Long Polling: Server holds request until new data is available.
// Short Polling: Very frequent checks.
// Efficient Polling: Dynamically adjusted intervals.
// Polling with Backoff: Gradually increasing intervals during inactivity.

// differance between long polling and short polling :-
// 2. Long Polling
// Long polling is a variation of the traditional polling technique. The server holds the request open until new information is available, then sends a response. The client immediately sends a new request after receiving the response.
// Example: Real-time chat applications.
// Implementation: The client makes a request to the server, and the server only responds when it has new data.

// 3. Short Polling
// Short polling refers to the traditional method of polling at short, regular intervals. It can be less efficient and put more load on the server compared to long polling.
// Example: Checking stock prices every second.
// Implementation: Similar to regular polling but with shorter intervals.

// ----- File System  in Node.js ---- :-


// ----- What is the difference between process.nextTick() and setImmediate()? :- 
// “process.nextTick() executes callbacks immediately after the current operation before the event loop continues, while setImmediate() executes callbacks during the check phase of the next event loop iteration.”

//--- Explain Streams in Node.js. When would you use a Transform stream? :
// “Streams in Node.js are used to process data chunk by chunk instead of loading the entire data into memory. A Transform stream is used when data needs to be modified while being streamed, such as compression, encryption, or data conversion.”
// 🔹 4. Transform Stream
// A special type of duplex stream that:
// ✅ Reads data
// ✅ Modifies/transforms it
// ✅ Writes transformed data

// 🔹 When to Use Transform Streams
// Use Transform streams when you need to:
// Compress files
// Encrypt/decrypt data
// Convert data formats
// Modify text while streaming
// Resize images
// Parse CSV/JSON streams


// .
// .
// .
// .
// .
// ----- Refresh token :- 
// A Refresh Token is a long-lived token used to generate a new Access Token when the access token expires.

// Access Token → short expiry, used for API authentication
// Refresh Token → long expiry, used to get new access tokens without logging in again
// Flow:
// User logs in
// Server sends access token + refresh token
// Access token expires
// Client sends refresh token
// Server verifies it and issues a new access token

// Usually, refresh tokens are stored in HTTP-only secure cookies for better security.

// “Refresh token is used to generate a new access token after the access token expires, so the user does not need to log in again.”


// 2. Server Generates Two Tokens
// Access Token
// Short-lived
// Example: 15 minutes

// Used for API requests.

// Refresh Token
// Long-lived
// Example: 7 days or 30 days

// Used only to get a new access token.



// 3. Server Response
// {
//   "accessToken": "abc123",
//   "refreshToken": "xyz789"
// }

// Usually:

// Access Token → memory/local storage
// Refresh Token → secure HTTP-only cookie


// Complete Flow Diagram
// Login
//   ↓
// Access Token (15 min)
// Refresh Token (7 days)
//   ↓
// API Request
//   ↓
// Access Token Expired
//   ↓
// 401 Unauthorized
//   ↓
// /refresh-token
//   ↓
// Verify Refresh Token
//   ↓
// New Access Token
//   ↓
// Retry Original API
//   ↓
// Success




// .
// .
// .
// .
// .
// ---- What are the differences between cluster module and worker threads?
// Simple One-Line Difference :- 
// Cluster → scale Node.js server using multiple processes
// Worker Threads → run heavy tasks in parallel threads without blocking main thread

// Short Interview Answer
// Both cluster and worker_threads are used to improve performance in Node.js, but they solve different problems.
// Cluster Module.  ---- 	Worker Threads
// Creates multiple Node.js processes ---	Creates multiple threads inside same process
// Used for scaling HTTP servers	---  Used for CPU-intensive tasks
// Each process has separate memory	---  Threads can share memory
// Better for handling many requests	---  Better for heavy calculations
// Higher memory usage	---  Lower memory usage



// .
// .
// .
// .
// ---- rate limiting ( redies ) :- 
// Rate Limiting means restricting how many requests a user can send to the server in a specific time.
// It is used to:

// Prevent API abuse
// Stop spam requests
// Protect server from overload

// Easy Example
// Imagine:
// Only 5 requests allowed in 1 minute

// "To implement rate limiting with Redis, I store a request counter per user or IP in Redis with an expiration time. For each request, I increment the counter and check whether it exceeds the configured limit. If the limit is exceeded, I return HTTP 429; otherwise, I allow the request. Redis is ideal because it provides a centralized and fast in-memory store that works across multiple application instances."


// .
// .
// .
// .
// Explain Promise.all vs Promise.allSettled.
// Promise.all() :-  is used when all promises must succeed. ( Returns only success data )
// Promise.allSettled() :- is used when we want results of all promises, even if some fail. ( Returns success + failure both )






// .
// .
// .
// .
// Why NestJS?

// In a large Express application:

// routes/
// controllers/
// services/
// middlewares/

// the code can become difficult to manage.

// NestJS provides a structured architecture:

// Modules
// Controllers
// Services
// Guards
// Interceptors
// Pipes

// making large projects easier to maintain.


// Features

// ✅ TypeScript by default
// ✅ Dependency Injection
// ✅ Authentication (JWT, OAuth)
// ✅ Validation
// ✅ WebSockets
// ✅ GraphQL
// ✅ Microservices
// ✅ Testing support
// ✅ Swagger API documentation


// Interview Answer (Short)

// NestJS is a progressive Node.js framework built on top of Express (or Fastify) that uses TypeScript and provides an Angular-inspired architecture with modules, controllers, and services. It offers features like dependency injection, validation, authentication, WebSockets, GraphQL, and microservices support, making it ideal for building scalable enterprise-level backend applications.

// Since you already have Node.js + Express.js experience, you can learn NestJS quite quickly because it uses Express internally by default. Many companies are now adopting NestJS for large-scale backend projects due to its clean architecture and TypeScript-first approach.



