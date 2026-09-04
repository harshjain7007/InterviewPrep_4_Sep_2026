// -------------- ///////// :-
// Write a function in Typescript that uses generics to return the first non-repetitive character in a string. If no nonrepetitive char is found it should return a null. Please handle edge conditions - input and output.

// Example

// const result = firstNonRepeati
// ngCharacter("aabbccddeeffg";
// console.log("First non-
// repeating character:", result); // Output: "g"
// const result = firstNonRepeati
// ngCharacter ("abcabe");
// console.log ("First non-repeating character:", result); // Output: null

// Answer :-

function firstNonRepeatingCharacter(str){
   if (!str || str.length === 0) {
    return null; // Return null if input is empty
   }
   
  let count = {}

  for(let i in str){
    count[str[i]] = (count[str[i]] || 0) + 1 
  }

  for(let i of Object.keys(count)){
    if(count[i] === 1){
      return i
    }
  }
  console.log("count", count);
  

  return null; // Return null if no non-repetitive character is found
}

// // Example usage
// const result1 = firstNonRepeatingCharacter("aabbccddeeffg");
// console.log("First non-repeating character:", result1); // Output: "g"

// const result2 = firstNonRepeatingCharacter("abcabc");
// console.log("First non-repeating character:", result2); // Output: null

// ----------- Question
// You are tasked with building a small family tree explorer application using React and TypeScript. Given a nested data structure representing family members and their relationships, you must provide an interface that allows users to view the tree and search for members.
// Data Structure:
// Every family member is represented as:
// type FamilyMember = {
//    id: number;
//    name: string;
//    birthYear: number;
//    children: FamilyMember[];
// };

// Tasks:
// Family TreeDesign and 	implement a component that recursively renders the family tree. Each 	member should display their name, and children should be visually 	nested or indented underneath their parent.
// Count of Descendants: Create a function 	that, given a family member, calculates the total number of 	descendants that member has, which includes all children, 	grandchildren, and so on. To ensure efficient computation, use 	dynamic programming techniques to avoid redundant calculations, 	specifically memoization.
// React Skills: Implement a search input at 	the top of the application. As a user types a family member’s 	name, dynamically highlight matching names in the tree without 	re-rendering the entire tree.
// Performance: As you build, consider the 	application’s performance, especially as the tree’s size grows.

// Sample Data:
// const familyData = [
//   {
//     id: 1,
//     name: 'John Doe',
//     birthYear: 1945,
//     children: [
//       {
//         id: 2,
//         name: 'Anna Doe',
//         birthYear: 1973,
//         children: [
//           {
//             id: 5,
//             name: 'Ella Doe',
//             birthYear: 2000,
//             children: [],
//           },
//           {
//             id: 6,
//             name: 'Lucas Doe',
//             birthYear: 2003,
//             children: [],
//           },
//         ],
//       },
//       {
//         id: 3,
//         name: 'Robert Doe',
//         birthYear: 1978,
//         children: [
//           {
//             id: 7,
//             name: 'Sophie Doe',
//             birthYear: 2010,
//             children: [],
//           },
//         ],
//       },
//       {
//         id: 4,
//         name: 'Emily Doe',
//         birthYear: 1985,
//         children: [
//           {
//             id: 8,
//             name: 'James Doe',
//             birthYear: 2015,
//             children: [
//               {
//                 id: 9,
//                 name: 'Mia Doe',
//                 birthYear: 2030,
//                 children: [],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 10,
//     name: 'Jane Smith',
//     birthYear: 1950,
//     children: [
//       {
//         id: 11,
//         name: 'Ethan Smith',
//         birthYear: 1980,
//         children: [],
//       },
//     ],
//   },
// ];

// --- Value Labs --- :-
// React Question :- fetch data print it inside table and image also :-
// import "./styles.css";
// import React from "react";
// export default function App() {
//   const [listData, setListData] = React.useState([]);
//   React.useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((resp) => {
//         console.log(resp);
//         setListData(resp?.products);
//       });
//   }, []);
//   return (
//     <div className="App">
//       <h1>Products List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Product Name</th>
//             <th>Product Description</th>
//             <th>Product Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {listData?.map((item) => (
//             <tr>
//               <th>{item.title}</th>
//               <th>{item.description}</th>
//               <th>
//                 <img src={item?.images?.[0]} className="productImage" />
//               </th>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// --- Node Question :-create API for Add two number apply auth middleware :-
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const authorizeRequest = (req, res, next) => {
//   console.log(req.headers)
//   if (req.headers.authorization) {
//     next();
//   } else {
//     res.send(401);
//   }
// };

// app.use(authorizeRequest);

// app.get("/test", (req, res) => {
//     res.send("test");
// });

// app.post("/addnumbers", (req, res, next) => {
//   if (
//     typeof req.body.number1 === "number" &&
//     typeof req.body.number2 === "number"
//   ) {
//     res.send(200,"response: " + (req.body.number1 + req.body.number2));
//   } else {
//     res.sendStatus(403);
//   }
// });

// app.listen(8080, function() {
//   console.log("Server is running on 8080");
// });
