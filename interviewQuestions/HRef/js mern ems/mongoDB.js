
/////// What is MongoDB, and what are its benefits?
// MongoDB is an open-source database that uses a document-oriented data model and a non-structured query language. It is one of the most powerful NoSQL systems and databases around, today. which is data save in JSON format
// released in  aug 27 2009

// Advantage of MONGODB
// 1. mongodb is document type of dataBase that uses json fromat of dataBase.

// some key features of mongoDB
// Dynamic Schema - mDB supports a dynamic schema. so we need not define schema before insertion of data. we can chang the shema of data dynamically.
// Dynamic Query - MDB supports Dynamic Query. which is used document-query-language that more powerful compare to SQL.
// Emded dataModel -  that means we can define document  as a key value pair in anthor document  
// use of index -  which is increase a speed of data fetching
// DATA sharding - mongoDB spreads data across servers without affecting the performance of application. it provides the 24*7 services 
//  Supports Many languages - 
// Rich Query -  supports Rich query to fetch data in mongoDB
// Mapping Not Required - Conversion or mapping of application objects to dataBase Object is not required
//  Replication -  mongoDb supports Data replication that has the within a system geo-distributed, preferably using a non interactive, relible process  
//  automatic scaling - horizontal scaling , data is distributed across cluster

// why mongo  
// 1. Flexibility - 2. Flexible Query Model - 3. Native Aggregation - 4. Schema less Model


/// difference BetWeen MOGNO/RDBMS  
// database -  It is a non-relational and document-oriented database. // It is a relational database.
// data storage -  It is suitable for hierarchical data storage. // It is NOT suitable for hierarchical data storage.
// schema -  It has a dynamic schema. // It has a predefined schema.
// performance - it is much faster than RDBMS. //  it is slower than MongoDB.

// Disadvantages of MongoDB : 
// It uses high memory for data storage.
// You are not allowed to store more than 16MB data in the documents.
// The nesting of data in BSON is also limited you are not allowed to nest data more than 100 levels.

// https://intellipaat.com/blog/what-is-mongodb/#no1




// Key highlights on SQL vs NoSQL: 
// SQL // NoSQL
// Definition - RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) // Non-relational or distributed database system.
// schema - These databases have fixed or static or predefined schema // They have dynamic schema for unstructured data.
// Type - SQL databases are table based databases // NoSQL databases can be document based, key-value pairs, graph databases
// data storage - not suited for hierarchical data storage. // best suited for hierarchical data storage.
// Examples - MySQL, PostgreSQL, Oracle, MS-SQL Server, //  MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc
// Ability to scale - SQL databases are vertically scalable	// NoSQL databases are horizontally scalable
// Best features - Cross-platform support, Secure and free // Easy to use, High performance, and Flexible tool.
// Joins - Typically required // Typically not required


/////// What is the significance of the BSON format in MongoDB?
// BSON is a binary representation of JSON
// BSON is nothing but Binary JSON i.e Binary JavaScript Object Notation. Binary file format Type. BSON uses more space as compared to JSON.
// BSON is a Binary Javascript Object notation. It is not in the human readable format as it is in the binary format. In MongoDB, BSON is used to encrypt the JSON data. It provides additional data types over the JSON data like date, timestamp, etc. It is also a language independent, and can be easily parsed. It supports the adding of documents and arrays within other documents and arrays. It has faster encoding and decoding technique. while JSON dont have this technique. It is used for the storage of data. While JSON used to transmission of data. The maximum BSON document size is 16 megabytes. To store documents larger than the maximum size, MongoDB provides the GridFS API.\


// Why does MongoDB use BSON rather than JSON check all that apply?
// Why does MongoDB use BSON rather than JSON? BSON includes metadata to describe a document/object and also BSON extends the JSON model to provide additional data types, ordered fields, and to be efficient for encoding and decoding within different languages, to make it simple.

// https://www.javatpoint.com/json-vs-bson#:~:text=In%20MongoDB%2C%20BSON%20is%20used,within%20other%20documents%20and%20arrays.



////////////  difference between a collection and a document in MongoDB?
//  A Database contains a collection, and a collection contains documents and the documents contain data.
// https://www.tutorialspoint.com/mongodb/mongodb_overview.htm



//////  different types of indexes in MongoDB?
// Indexes - Indexes are special data structures that stores some information related to the documents such that it becomes easy for MongoDB to find the right data file. The indexes are order by the value of the field specified in the index. 
// MongoDB provides a method called createIndex() that allows user to create an index.

// MongoDB provides different types of indexes that are used according to the data type or queries
// 1. Single field Index: || 2. Compound Index: || 3. Multikey Index: || 4. Geospatial Indexes: || 5. Text Index: || 6. Hash Index: || 7. Wildcard Index: 
// TypeOfIndex - https://www.geeksforgeeks.org/mongodb-index-types/

///////// What is the significance of sharding in MongoDB?
// if you want to store data in multple platforms so sharding salve this prblm.
// https://www.tutorialspoint.com/mongodb/mongodb_sharding.htm


///// What is the difference between aggregation and MapReduce in MongoDB?
// aggregation - relational ( aggregation work like find method )
//  map/reduce -  which is converted array of object into single object

// aggregation - aggration perform a mathamatical operations and fetch data of grouping of document 
//  Aggregate is very similar to the find command, Where you can provide the criteria for your query in the form of JSON document. Key element in aggregation is pipeline. it also helps us in performing few operation like min, max, sum etc
// we can use Aggregation is :
 // db.leads.aggregate(pipeline, options)
 // Whats pipeline ? 
     // A sequence of data aggregation operations or stages
     // Pipeline is an Array 
 // What are options
     // Document can be passed as well 
// What are the valid Aggregates Stages ? 
// $count, $group, $limit, $lookup, $match, $merge, $sort, $project, $unwind, $unset  And Many More

// NOTE :- An aggregation pipeline provides better performance and usability than a map-reduce operation.

// mapReduce - Map-reduce is a data processing paradigm for condensing large valumes of data into useful aggregated results
// ( " MongoDB provide a mapReduce for aggregation purpose " )
// https://www.geeksforgeeks.org/mongodb-map-reduce/

// mongoDB provide mapReduce for perform aggregation. mapReduce hav two faceses 
// 1st is map face 



///////////// What is the significance of the $lookup operator in MongoDB?
// Aggregation $lookup. - The $lookup operator is an aggregation operator or an aggregation stage, which is used to join a document from one collection to a document of another collection of the same database based on some queries. Both the collections should belong to the same databases.

// How $lookup works?
// We have two collections, input collection (the collection on which $lookup is performed) and from collection (the collection from which we take documents to join it to documents of input collection)

// https://www.geeksforgeeks.org/mongodb-lookup-using-node-js/
// https://www.mongodb.com/docs/atlas/data-federation/supported-unsupported/pipeline/lookup-stage/#:~:text=The%20MongoDB%20server%20%24lookup%20performs,%22joined%22%20collection%20for%20processing.



/////// difference between a capped collection and a regular collection in MongoDB?
// in capped collection we can defined a size (like MB me) ( and define number of user )  of collection  .. supose you define collection size 10 if you add user number 11 then 1st wala hat jayega 
// regular collection me ye ni hota hai 
// capped collection - https://www.geeksforgeeks.org/capped-collections-in-mongodb/

/////// How does MongoDB handle transactions?
//  A transaction is a sequence of database operations that will only succeed if every operation within the transaction has been executed correctly.
// https://www.prisma.io/dataguide/mongodb/mongodb-transactions











