
// .
// .
// .
// .
// Why use Generics?
// Reusable code
// Type safety
// Better IntelliSense
// Avoid code duplication
// Flexible APIs and utility functions
// Interview Answer (1 minute)

// "Generics are a TypeScript feature that allows us to write reusable, type-safe code that works with multiple data types. Instead of creating separate functions or interfaces for strings, numbers, or other types, we define a type parameter like T, and TypeScript replaces it with the appropriate type when the function or interface is used. Generics help reduce code duplication while preserving strong type checking."

// Example
// function identity<T>(value: T): T {
//   return value;
// }

// identity("Hello"); // string
// identity(123);     // number
// Common Follow-up: What does <T> mean?

// T stands for Type, but it's just a convention. You can use any valid identifier:

// function identity<Type>(value: Type) : Type {
//   return value;
// }

// or

// function merge<T, U>(a: T, b: U) {
//   return { ...a, ...b };
// }

// interface Response<T> {
//   success: boolean;
//   data: T;
// }

// The names don't matter—what matters is that they represent placeholder types that are determined when the function or type is used.


// .
// .
// .
// .
// How to import config file in TypeScript
// Interview Answer

// "In TypeScript, we import a configuration file using ES module syntax. If it's a TypeScript file, we export the configuration object and import it with import. For JSON files, we enable resolveJsonModule in tsconfig.json and then import the JSON directly. For environment-specific configuration, we typically use .env files with packages like dotenv in Node.js or built-in environment variable support in Next.js."

// Example
// // config.ts
// export const config = {
//   apiUrl: "https://api.example.com",
// };
// // app.ts
// import { config } from "./config";

// console.log(config.apiUrl);

// This is the approach most interviewers expect unless they specifically ask about JSON configs, .env files, or path aliases.

// .
// .
// .
// .
// What is Optional Chaining?
// Optional Chaining (?.) allows you to safely access nested object properties or call methods without throwing an error if a value is null or undefined.
// Instead of manually checking every level, you can use ?..


// Benefits
// Cleaner code
// Avoids multiple if checks
// Prevents runtime errors when values are null or undefined
// Improves readability
// Interview Answer (30–45 seconds)

// "Optional Chaining (?.) is a JavaScript and TypeScript feature that lets us safely access nested object properties or call methods when a value might be null or undefined. If any part of the chain is null or undefined, the expression returns undefined instead of throwing an error. It's commonly used with API responses, optional properties, and React props to write cleaner and safer code."


// .
// .
// .
// .
// .
// Utility Types (Partial, Pick, Omit, etc.)

// Utility Types:
// Utility Types help transform existing types.

// 1. Partial<T>
// Makes all properties optional.

// interface User {
//     id: number;
//     name: string;
//     age: number;
// }

// type UpdateUser = Partial<User>;

// Result

// {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// Useful for:

// Update APIs
// PATCH requests

// 2. Required<T>
// Makes all optional properties required.

// 3. Readonly<T>
// Prevents modification.

// 4. Pick<T, K>
// Select only specific properties.

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// type UserInfo = Pick<User, "name" | "email">;

// 5. Omit<T, K>
// Removes selected properties.

// 7. Exclude<T, U>
// Removes types from a union.

// type Status = "success" | "error" | "loading";
// type Result = Exclude<Status, "loading">;

// Result
// "success" | "error"

// 8. Extract<T, U>
// Keeps only matching types.

// Removes null and undefined.

// type Name = string | null | undefined;

// type Result = NonNullable<Name>;

// Result
// string


// Utility Types are built-in generic types that help create new types from existing ones without rewriting code. For example, Partial makes all properties optional, Pick selects specific properties, Omit removes properties, Readonly makes properties immutable, and Record creates typed key-value objects. These utility types make code more reusable, maintainable, and type-safe."



// .
// .
// .
// .
// Type Assertion
// 1. Type Assertion
// What is Type Assertion?

// Type Assertion tells the TypeScript compiler:
//     "I know the type of this value better than you."
// It doesn't change the runtime value, it only helps the compiler understand the type.

// Syntax 1 (Angle Brackets)
// let value: unknown = "Harsh";
// let name = <string>value;

// Syntax 2 (Recommended)
// let value: unknown = "Harsh";
// let name = value as string;

// Example
// const input = document.getElementById("username") as HTMLInputElement;
// input.value = "Harsh";

// Without assertion, TypeScript knows only:

// HTMLElement | null
// It doesn't know it's an input element.

// When do we use it?
// DOM elements
// API responses
// unknown type
// Third-party libraries
// Interview Answer

// "Type Assertion is a TypeScript feature that tells the compiler the specific type of a value when we know it better than TypeScript. It only affects compile-time type checking and does not change the actual value at runtime."


// .
// .
// .
// .
// . // What is TypeScript 
// Answer:
// TypeScript is a superset of JavaScript that adds static typing to the language.

// Why use it?
// It helps catch errors during development instead of at runtime and improves code maintainability.

// Interview Answer:

// TypeScript is a superset of JavaScript developed by Microsoft. It adds static typing, interfaces, generics, and other advanced features. The main advantage is that it catches type-related errors during development, making applications more reliable and easier to maintain. In my MERN projects, I use TypeScript for API response typing, React component props, Redux state management, and reusable utility functions.


// .
// .
// .
// . // What is the difference between interface and type in TypeScript? When do you prefer one over the other?
// Short Answer
// Both interface and type are used to define the shape of data, but interface is mainly used for objects and can be extended, while type is more flexible and can represent objects, unions, intersections, primitives, tuples, etc.

// Key Differences
// Interface	Type
// Used mainly for object structures	Can define any type
// Supports.   declaration merging	    Does not support declaration merging
// Uses extends for inheritance	Uses & (intersection)
// Preferred for APIs and class contracts	Preferred for unions, complex types
// Can be implemented by classes	Can also be used but is less common

// Use Interface When:
// ✅ Defining object structures
// ✅ Defining React Props
// ✅ API Request/Response Models
// ✅ Class Contracts
// ✅ Large scalable applications

// Example:
// interface UserProps {
//   user: User;
//   onUpdate: () => void;
// }

// Use Type When:
// ✅ Creating unions
// type Role = "Admin" | "User" | "Manager";

// ✅ Creating intersections
// type Employee = User & Address;

// ✅ Working with tuples
// type Coordinates = [number, number];

// Interview Answer (5 Years MERN)
// Both interface and type are used to define data structures in TypeScript. The main difference is that interfaces are primarily designed for object-oriented patterns and support declaration merging, whereas types are more flexible and can represent unions, intersections, tuples, and primitive aliases. In my projects, I generally use interfaces for API models, React props, and object contracts because they are easier to extend and maintain. I use type aliases when working with union types, complex compositions, or utility types where more flexibility is needed. As a team convention, we typically prefer interfaces for object definitions and types for advanced type manipulations.



// .
// .
// .
// .
// Explain TypeScript generics — write a generic function that works with any data type and is constrained to types with an id field.


// Short Answer
// Generics allow us to write reusable and type-safe code that works with multiple data types without losing type information.


// Solution using extends
// function getId<T extends { id: number | string }>(item: T) {
//   return item.id;
// }
// Usage
// const user = {
//   id: 1,
//   name: "Harsh"
// };

// const product = {
//   id: "P101",
//   title: "Laptop"
// };

// getId(user);     // 1
// getId(product);  // P101



// Interview Answer (5 Years MERN)

// Generics in TypeScript allow us to create reusable and type-safe components, functions, and classes that work with multiple data types while preserving type information. Instead of using any, we use a generic type parameter like <T>. If we need certain properties, we can add constraints using extends. For example, T extends { id: string } ensures that the function only accepts objects containing an id field. In MERN applications, I commonly use generics for reusable API services, custom hooks, repository functions, and utility methods such as finding records by id while maintaining full type safety.



// .
// .
// .
// .
// .
// What are utility types? Explain Partial, Required, Pick, Omit, Record with real use cases.

// Short Answer

// Utility Types are built-in TypeScript types that help transform existing types into new types without rewriting code.

// They improve:
// Reusability
// Type Safety
// Maintainability

// Quick Revision Table
// Utility Type	Purpose	Real Use Case
// Partial<T>	    Make all properties optional	Update APIs (PATCH)
// Required<T>	    Make all properties required	Data validation
// Pick<T,K>	    Select specific fields	        API response DTOs
// Omit<T,K>	    Remove specific fields	        Hide password/sensitive data
// Record<K,T>	    Create key-value object types	Roles, Permissions, Configurations

// Interview Answer (5 Years MERN)
// Utility Types are built-in TypeScript helpers that allow us to derive new types from existing ones without duplicating code. The most common ones I use are Partial for update APIs where fields are optional, Required when all fields must be present, Pick to expose only selected properties, Omit to remove sensitive fields like passwords from API responses, and Record for creating strongly typed key-value mappings such as role-based permissions or configuration objects. These utility types help keep the codebase clean, reusable, and type-safe.



// .
// .
// .
// .
// .
// What is the difference between unknown, any, and never? When would you use each in a production codebase?

// any, unknown, and never serve different purposes in TypeScript. any completely bypasses TypeScript's type checking and should be avoided in production because it removes type safety. unknown is a safer alternative that allows any value but requires explicit type narrowing before usage, making it ideal for handling API responses or external data. never represents values that never occur and is commonly used in functions that throw errors or for exhaustive switch-case checking. In production MERN applications, I avoid any, prefer unknown for untrusted data, and use never to ensure all possible states are handled correctly at compile time.


// .
// .
// .
// .
// How do you type a REST API or GraphQL response in TypeScript end-to-end?

// Short Answer
// Create shared TypeScript interfaces/types for request and response models, use them in Backend APIs, and consume the same types in Frontend API calls. This gives complete type safety from database to UI.

// Interview Answer (5 Years MERN)
// In production MERN applications, I type API responses using shared TypeScript interfaces and generic response wrappers. For REST APIs, I usually create a generic ApiResponse<T> type and define models such as User, Product, or Order. The backend returns responses based on these interfaces, and the frontend consumes the same types through Axios or React Query. For GraphQL, I type query and mutation responses using interfaces or generated types and pass them directly to Apollo Client hooks. In larger projects, I prefer maintaining shared types in a common package so that both frontend and backend use the same contracts, ensuring end-to-end type safety and reducing runtime errors.


// .
// .
// .
// .
// What are conditional types in TypeScript? Give an example.

// Short Answer
// Conditional Types allow us to create types that depend on a condition, similar to an if-else statement in JavaScript.

// Interview Answer (5 Years MERN)
// Conditional Types in TypeScript allow us to define types based on conditions, similar to an if-else statement. The syntax is T extends U ? X : Y, where TypeScript checks whether one type extends another and returns different types accordingly. They are commonly used in advanced generic utilities, type transformations, and built-in utility types like ReturnType, Exclude, and Extract. In production applications, conditional types help create reusable and flexible type definitions while maintaining strong type safety.



// .
// .
// .
// .
// How do you use TypeScript with Node.js — tsconfig setup, path aliases, strict mode?

// Short Answer

// When using TypeScript with Node.js, I configure:

// tsconfig.json for compilation settings
// Path aliases for cleaner imports
// Strict mode for maximum type safety

// This helps build scalable and maintainable backend applications.


// Interview Answer (5 Years MERN)

// In Node.js projects, I configure TypeScript using a tsconfig.json with rootDir, outDir, moduleResolution, and esModuleInterop. I always enable strict: true because it catches issues such as implicit any values and null-related bugs at compile time. For large applications, I use path aliases like @services, @models, and @utils to avoid long relative imports and improve maintainability. My typical setup compiles TypeScript into a dist folder for production deployment, while using tools like ts-node-dev during development. This setup provides strong type safety, cleaner imports, and better scalability for enterprise Node.js applications.



// .
// .
// .
// .
// 8 Explain mapped types — write a DeepPartial or DeepReadonly utility type.
// What are Mapped Types in TypeScript?
// Short Answer
// Mapped Types allow us to create new types by transforming properties of an existing type.
// Instead of writing types manually, we can loop through all properties and modify them.

// Basic Example
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// Mapped Type:
// type ReadonlyUser = {
//   readonly [K in keyof User]: User[K];
// };

// Result:
// {
//   readonly id: number;
//   readonly name: string;
//   readonly email: string;
// }

// Mapped Types in TypeScript allow us to create new types by iterating over the properties of an existing type and transforming them. They are the foundation of utility types like Partial, Required, and Readonly. A common advanced example is DeepPartial, which recursively makes all properties optional, including nested objects. This is useful for PATCH APIs where only a subset of fields may be updated. Another example is DeepReadonly, which recursively makes all properties immutable and is commonly used for configuration objects or shared application state. In large-scale MERN applications, mapped types help reduce duplication and create reusable type transformations while maintaining strong type safety.



// .
// .
// .
// .
// .
// 9 How do you handle type narrowing — typeof, instanceof, discriminated unions?
// Short Answer
// Type narrowing is the process of reducing a variable from a broad type to a more specific type so TypeScript knows exactly what properties and methods are available.

// Common ways:
// typeof
// instanceof
// Discriminated Unions
// Custom Type Guards


// Interview Answer (5 Years MERN)

// Type narrowing is a TypeScript feature that allows us to refine a broad type into a more specific one. I commonly use typeof for primitive types such as strings and numbers, instanceof for class-based objects and error handling, and discriminated unions for managing API states and business logic. In React applications, discriminated unions are particularly useful for handling loading, success, and error states in a type-safe way. When dealing with external API responses or unknown data, I use custom type guards to validate the structure before accessing properties. This helps prevent runtime errors while keeping the code strongly typed and maintainable.


// .
// .
// .
// .
// .
// 10  What is declaration merging and when is it useful in production projects?
// Short Answer

// Declaration Merging is a TypeScript feature where multiple declarations with the same name are automatically combined into a single definition.

// This works with:

// Interfaces ✅
// Namespaces ✅
// Enums ✅

// Most commonly used with interfaces.


// Basic Example
// interface User {
//   name: string;
// }

// interface User {
//   age: number;
// }

// TypeScript merges them into:

// interface User {
//   name: string;
//   age: number;
// }

// Interview Answer (5 Years MERN)

// Declaration Merging is a TypeScript feature where multiple declarations with the same name are automatically combined into a single type definition. It is most commonly used with interfaces. In production MERN applications, I primarily use declaration merging to extend Express Request objects with custom properties such as user, role, or permissions added by authentication middleware. Another common use case is extending ProcessEnv to strongly type environment variables. Declaration merging allows us to enhance existing library types without modifying their source code, making integrations cleaner and more maintainable.