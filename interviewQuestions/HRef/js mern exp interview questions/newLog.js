// FindOut the second largest number :- 
function secondLargest(ar){
  let frstHige = null, secondHige = null
  for(let elem of ar){
    if(frstHige < elem){
      secondHige = frstHige
      frstHige = elem
    }else if(elem > secondHige && frstHige !== elem){
      secondHige = elem
    }
  }
  return { frstHige, secondHige }
} 

console.log(secondLargest([3, 1, 4, 1, 5, 9, 2, 6]))  // 6
console.log(secondLargest([5, 5, 5]))                  // null
console.log(secondLargest([10, 10, 9]))


// predict outpt
console.log({} == false)   // false // {}  = "[Object Object]", false  = 0 // "[Object Object]" == 0 = false
console.log([] == false)   // true // [] = "", false = 0 // "" = 0 // 0 == 0  = true
// 🧠 Key Rule
// When using ==, JavaScript converts objects to primitives first, then compares


// Predict Output :-  
// const a = { x: 1, inner: { y: 2 } }
// const b = { ...a }

// b.x = 99
// b.inner.y = 99

// console.log(a.x)        // ? 1
// console.log(a.inner.y)  // ? 99 
// Spread is a shallow copy. x is primitive → copied by value, a.x unchanged.
// inner is an object → copied by reference → both a and b share the same inner object.


//  Predict Output :-
async function foo() {
  console.log('A')
  await bar()
  console.log('B')
}
async function bar() {
  console.log('C')
}
console.log('X')
foo()
console.log('Y') 

// X A C B Y
// Remaining code (console.log('B')) goes to microtask queue



// predict output :-
const ob = {
  val: 42,
  regular() { return this.val },
  arrow: () => this.val
}

console.log(ob.regular())  // 42
console.log(ob.arrow())    // undefined


// predict output :- 
const objs = {
  name: "Harsh",
  greet() {
    const inner = () => {
      console.log(this.name);
    }
    inner();
  }
}

objs.greet(); // Harsh ✅


// ---- :===
function c() {
  console.log(a); // 5
}
function b() {
  console.log(a); // undefined // JS creates a new execution context for b() //here function ke andar wla a host huya hai 
  var a = 10; // if we can not write that line so both value of a is 5
  c();
  console.log(a); // 10
}
var a = 5;
b();

// if index.jsx/index.js are presented inside any folder in react then by defhault index file call hoti hai

// if we used  React.StrictMode in development then they render our component 2 times other wise which render component only single time

console.log(2 == 2.0, 2 === 2.0); // true true

// eval :- In JavaScript, eval() is a global function that evaluates a string of JavaScript code in the context of the current execution scope. When you pass a string to eval(), it treats that string as JavaScript code and executes it.
// Exmaple :-
console.log(eval("3+5")); // 8 string

console.log(1 / 0); // Infinity its statement is not consider as an error

// if we want to freeze only id property then use Object.defineProperty()
const obj = {
  id: 23,
  name: "harsh",
};

// Object.defineProperty(obj, 'id', {
//     value: obj.id,
//     writable: false
// });

Object.defineProperties(obj, { id: { writable: false } });

// Now, you can modify other properties of obj but not id
obj.name = "Updated Name"; // This will work
obj.id = 50; // This won't have any effect as id is frozen

console.log(obj); // Output: { id: 23, name: "Updated Name" }

// if you want to use variables in normal css file then try in css file
/* styles.css */
// :root {
//      --primary-color: #007bff;
//    }

//    .button {
//      background-color: var(--primary-color);
//    }

// for(var i = 0; i < 3; i++){ // i ka value last time b badhega i is 3
//   setTimeout(() => {
//        console.log(i);
//   }, 2000);
// }

// for(let i = 0; i < 3; i++){ // i ka value 2 tak hi jayega
//      setTimeout(() => {
//           console.log(i);
//      });
// }

//--- if you want to modified same array then use foEach and for loop
// nums.forEach((element, index) => {
//   return element < 5 ? nums[index] = element += 3 : element
// });

// --- String sorting without using sort method
// function bubbleSort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap elements if they are in the wrong order
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// let stringArray = ["abdanana", "abcpple", "orange", "grape"];
// let sortedArray = bubbleSort(stringArray);
// console.log(sortedArray); // [ 'abcpple', 'abdanana', 'grape', 'orange' ]

// --- change array internal elements swaping
// let arr = [1, 2, 3];
// [arr[1], arr[2]] = [arr[2], arr[1]];
// console.log(arr); // Output: [1, 3, 2]

// --- 2nd example
// let arr = [ 10,20,30, 40 ]
// console.log(arr); // [ 10, 20, 30, 40 ]
// [arr[1], arr[2], arr[3], arr[0]] = [arr[2], arr[1], arr[0], arr[3]]
// console.log(arr); // [ 40, 30, 20, 10 ]

/// -- Every in built funtion for matching two arrays
// let arrOne = [4,2,3, 0]
// let arrTwo = [4,2,3, 8]
// let res = arrTwo.every((curElem, index) => curElem === arrOne[index])
// console.log(res); // false
// but if length km jyada rahegi toh v true dega

// ---- if you convert bigint into string then which remove n
// console.log(String(BigInt(888))); // 888 type string
// console.log(BigInt(888)); //  888n type bigint
// console.log(Number(88n)); // 88 type number

// if([]==[]){
//   console.log("run...");
// }else{
//   console.log("else run...");  // else run...
// }

// console.log(undefined == undefined); // true
// console.log(undefined == null); // true // This behavior is specified by the language's rules for abstract equality comparison.
// console.log(undefined === null); // false // which also considers the types of the operands, undefined === null would evaluate to false because the types are different.
// console.log(null == null); // true
// console.log(false == false); // true
// console.log(String == Number); // false // bcz String and Number is functions
// console.log(String == String); // true

// console.log( [1] == [1] ); // false
// let arr1 = [1], arr2 = [2]
// console.log(arr1 === arr2); // false
// console.log([]===[]); // false
// console.log([]==[]); // false
//  but it's because the == operator in JavaScript performs a comparison by checking for equality of values, not reference. but non primitive data types main referance match krta hai
// When you create two empty arrays using [], even though they look identical, they are different objects in memory. The == operator checks if the values are equal, and in this case, it checks if the two arrays have the same contents. Since they are different objects in memory, the comparison returns false.

// console.log(/^h. ..h$/g.test("ha rsh")) // true same pattern mathcing
// if you want to print same pattern and also check which is number or Not then try this
// Question :-  NN NNNNNN-NNNN where N is digits using REGEXP
// let reg = new RegExp("^[0-9]{2} [0-9]{6}-[0-9]{4}$", "g")
// console.log(reg.test("22 666666-4444")) // true
// console.log(reg)   // o/p /^[0-9]{2} [0-9]{6}-[0-9]{4}$/g

// if you want to chcek special Characters
// console.log(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test("@"))  // true

// ------------- in loop main index type is string form not number
// let ar = [12,3,45,6]
// for(let i in ar){
//     console.log(i); // i la type string rehta hai
// }
// console.log(ar["2"]) // 45

// console.log({}=={}); // false
// console.log({}==={}); // false
// same thing working like array bcz its also forward its references
// if you want to match two object then recursive solution 1st cheks properties , keys and values
// one more solution
// let obj1 = { name: "harsh", age: "24" }
// let obj2 = { name: "harsh", age: "243" }
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // false // excat comparision
// console.log(String(obj1) === String(obj2)); // true // not exact compaire bcz :-
// When you convert an object to a string using String(obj), JavaScript internally calls the toString method of the object. For objects like plain JavaScript objects (non-array objects), the default toString method returns [object Object].

// function funOne(){
//   console.log("run1");
//   return 123
// }
// function funTwo(){
//   console.log("run");
//   return 123
// }
// console.log(funOne == funTwo); // false // which comapre its referances
// console.log(funOne() == funTwo()); // true // depends on its return value not othe statements
// console.log(funOne() === funTwo()); // true // depends on its return value not othe statements
// In JavaScript, when you compare two functions using the == or === operators, you are comparing their references, not their actual content. Even if two functions have the same implementation, they are considered different objects in memory, so the comparison will return false

// console.log(4+ +"3"); // 7 // As a result, the final value of the expression is 7. The unary + operator converts the string "3" to a number before adding it to 4.
// console.log(4+ "+3"); // 4+3
// console.log(4+ +"a3"); // NaN

// --- this function is for convert first character of every word to Capital letter
// function toTitleCase(str) {
//    return str.replace(/\b\w/g, (l) => l.toUpperCase());
// }
// console.log(toTitleCase("harsh jain &aya")); // Harsh Jain &Aya

// let pcArr = [] ? "harsh" : "jain"
// let pcObj = {} ? "harsh" : "jain"
// console.log(pcArr, pcObj); // both treated like truthy // "" which treated like false
// console.log(NaN ? "1st" : "2nd"); // 2nd
// console.log(0n ? "1st" : "2nd"); // 2nd
// console.log(Infinity ? "1st" : "2nd"); // 1st

// console.log(isNaN("km123")); // true
// console.log(isNaN("123")); // false
// console.log(isNaN(123)); // false

// ---------- Reverse array --- :-
// Array.prototype.myReverse = function(){
//      let newAr = []
//      for(let i = this.length - 1 ; i >= 0; i--){
//           console.log(i);
//           newAr.push(this[i])
//      }
//      return newAr
// }
// let ar = [ 1,2,3,4 ]
// console.log(ar.myReverse());

// ----------- if you findOut unique objects of array according to whole array
// let books = [
//      { title: "C++", author: "Bjarne" },
//      { title: "Java", author: "James" },
//      { title: "Python", author: "Guido" },
//      { title: "Java", author: "James" },
//      { title: "Java", author: "new James" },
//  ];

//  jsonObject = books.map(JSON.stringify);
//  uniqueSet = new Set(jsonObject);
//  uniqueArray = Array.from(uniqueSet).map(JSON.parse);
//  console.log(uniqueArray);

// ----  using filter with findIndex :-
// const books = [
//      { title: "C++", author: "Bjarne" },
//      { title: "Java", author: "James" },
//      { title: "Python", author: "Guido" },
//      { title: "Java", author: "James" },
//      { title: "Java", author: "new James" },
// ];

//  let uniqueArr = books.filter((curElem, index) => {
//      return index === books.findIndex(item => JSON.stringify(item) === JSON.stringify(curElem)) // For according whole element of the array
//      // return index === books.findIndex(item => item.title === curElem.title) // for According to title

//  })
//  console.log(uniqueArr);

// ---  if interview ask you  "without using built in methods " then write this
// let uniqueAr = []
// for(let i = 0; i < books.length ; i++){
//     let ind;
//     for(let j  = 0; j < books.length ; j++){
//         if(books[j].title === books[i].title){
//         // if(JSON.stringify(books[j]) === JSON.stringify(books[i])){
//             ind = j;
//             break;
//         }
//     }
//     if(i === ind){
//         uniqueAr.push(books[i])
//     }
// }
// console.log(uniqueAr);

// if you want to remove and add properties of objecs
// --------  using delete keyward ----
// let obj = {
//     name: "kkn",
//     age: 23,
//     city: "Ind"
// }
// delete obj.age
// delete obj["city"]
// console.log(obj);

// -----  using spread operator -------
// let obj = {
//     name: "kkn",
//     age: 23,
//     city: "Ind"
// }
// let obj2 = {
//     added: "add",
//     remove: "remove"
// }
// let addedObj = { ...obj, ...obj2 }
// const { added, remove, ...newObj } = addedObj
// console.log(newObj);

// --- using assign mehtod :--
// let obj = {
//      name: "kkn",
//      age: 23,
//      city: "Ind"
//  }
//  let obj2 = {
//      added: "add",
//      remove: "remove"
//  }
//  Object.assign(obj, obj2)
//  console.log(obj); // { name: 'kkn', age: 23, city: 'Ind', added: 'add', remove: 'remove' }
//  const { added, remove, ...newObj } = Object.assign({}, obj)
//  console.log(newObj); // { name: 'kkn', age: 23, city: 'Ind' }

// --- if we can change any nested object of array directly then which modified its original array bcz which containe its refrances
// let obj = [
//      {
//          employee_id: 1,
//          employee_name: "Aman",
//      },
//      {
//          employee_id: 2,
//          employee_name: "Bhargava",
//      },
//      {
//          employee_id: 3,
//          employee_name: "Chaitanya",
//      },
//  ];
//  let elem = obj.find((curElem) =>  curElem.employee_id === 2)
//  elem.employee_name = "harsh jain"
//  console.log(obj); //  its working which change its name bcz of referance

// ----  Some mehtod of array  ----------
// const numbers = [1, 2, 3, 4, 5];
// // Check if at least one element is greater than 5
// const hasGreaterThanThree = numbers.some((number, index, numbers) => number > 5);
// console.log(hasGreaterThanThree); // Output: false

// ------------ duplicate keys is not allowed which modified original object ---
// let obj = {
//     name: "harsh"
// }
// obj.name = "jain"
// console.log(obj); // { name: "jain" }

// ----------- slice method working both stirng and array  , and splice 3rd argument - kitne v de sakte hai no limit
// let ar = [10,20,30,40,50,60,70,80]
// console.log(ar.splice(2, 2, "added", "second adeed")); //  return deleted element [ 30, 40 ]
// console.log(ar); // return modified arr  [ 10, 20, 'added', 'second adeed', 50, 60, 70, 80 ]
// console.log("harshjain".substr(5,2)); // ja // second argument is length of element
// console.log("harshjain".slice(2, -1)); // rshjai // we can also give second argument is negative
// console.log("harshjain".substring(3, 6)); // shj // similar to slice but if you give nagative value inside argument which consumne value like 0

// console.log([10,20,30,40,50,60,70,80].slice(2,5)); // [ 30, 40, 50 ]

// ------------------  if you want to add prototype in constructor function then try this :-
// var ArrayWrapper = function(nums) {
//      this.nums = nums;
//  };

//  ArrayWrapper.prototype.valueof = function(){
//      return this.nums.reduce((accum, curElem) => {
//          return accum += curElem
//      }, 0)
//  }

//  let nums = [1,2,3,4,5]
//  let obj = new ArrayWrapper(nums)
//  console.log(obj.valueof()); // o/p  15

// ---------  setTimeOut with Clear Time out -----
// const timer = setTimeout(() => {
//      console.log("run...");
//  }, 3000);
//  clearTimeout(timer)
// after clearTimeOut, seTimeOut inside execution not run..

//---  for (let key in obj) {}  // in runs with objects and return a keys of object , "of" method is not working if you want to access value of object then use notation like object[key]

// ------ hasOwnProperty is method for check key in array and objects :-
// ["nam"].hasOwnProperty(0) // true
// {name:"harsh"}.hasOwnProperty("name") // true

/// ---  clearTime Interval ---:
// let i = 1
//     let m = setInterval(() => {
//         i++;
//         console.log(i);
//         if(i > 5){
//             clearInterval(m)
//         }
//     }, 2000);

// ---- Closure with its referances :-
// Example :-
// function fib() {
//      let count = 0;
//      return function(){ // inner function
//           return count++;
//      }
// }
// let ff =  fib()
// console.log(ff())  // 0
// console.log(ff())  // 1
// console.log(ff())  // 2
// This behavior is achieved because the inner function retains a reference to the count variable from the outer scope (i.e., the fib function's scope) even after the fib function has completed execution. As a result, each time you call the inner function, it operates on the same count variable, leading to the incrementation behavior you observe.

// ---------- to make immutable object using freeze method
// const person = {
//      name: "John",
//      age: 30
//    };
// console.log(person);  // o/p :- { name: 'John', age: 30 }
// person.name = "harsh" // // This is a mutable property
// console.log(person);  // o/p :- { name: 'harsh', age: 30 }
// Object.freeze(person); //  // This freezes the object and makes its properties immutable
// person.name = "called"
// console.log(person); // o/p :- { name: 'harsh', age: 30 }

// console.log( Object.fromEntries([["jnjn", "kmkm"], [2, "lll"]]));  // { '2': 'lll', jnjn: 'kmkm' }

// ---  Working with promises asynchoronus, which is the example of  asynchronus itterartion
// :- Another example of asynchronous iteration can involve fetching data asynchronously from an API and processing it. Here's an example using fetch to retrieve data asynchronously and then processing it:-

// async function fetchData() {
//      // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//      // const data = await response.json();
//      // return data;
//      return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                // resolve(["1st Data", "2nd Data", "3rd Data"])
//                reject(400)
//           }, 1000);
//      })

// }

// async function processPosts() {
//      // const posts = await fetchData();
//      // for await (const post of posts) {
//      //   console.log(post.title);
//      // }
//      const datas = await fetchData()
//      for (const data of datas) {
//           console.log(data);
//      }
// }
// processPosts();

// o/p :- .after 1 second its prtint
// 1st Data
// 2nd Data
// 3rd Data

//  ----------- fibnacchi series with recursion
// function fib(n){
//      if(n < 2 ){
//       return [0, 1]
//      }else{
//       var s = fib(n - 1)  //  remeimber s first value return value ( like :-  [0, 1] )
//       s.push(s[s.length - 1] + s[s.length - 2])
//       return s
//      }
// }
// console.log(fib(10)) // 0/p :- [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55 ]

// if interviewer ask write :- Split string with seprated comma :-
// String.prototype.customSplit = function(delimiter){
//      let res = [];
//      let startIndex = 0;
//      let foundIndex = this.indexOf(delimiter)
//      while (foundIndex !== -1){
//           res.push(this.substring(startIndex, foundIndex));
//           startIndex = foundIndex + delimiter.length;
//           foundIndex = this.indexOf(delimiter, startIndex);
//      }
//      res.push(this.substring(startIndex));
//      return res
//  }
//  let str =  "this is me"
//  console.log(str.customSplit(" "))

// ----------- Set() ------
//// ---  set containe a unique values of the object
// let set = new Set()
// console.log(set) // Set(0) {}
// set.add("harsh");
// set.add(88 );
// set.add(90 );
// console.log(set) // Set(3) { 'harsh', 88, 90 }
// set.delete(90)
// console.log(set) // Set(2) { 'harsh', 88 }
// console.log(set.has("harsh")); // true

// Convert Set values to an object
// let mySet = new Set(["apple", "banana", "orange"]);
// let myObject = {};
// mySet.forEach(value => {
//     myObject[value] = true; // You can assign any value you want
// });
// console.log(myObject); // { apple: true, banana: true, orange: true }

// Convert set into simple array
// let mySet = new Set(["apple", "banana", "orange"]);
// let myArray = Array.from(mySet);
// // let myArray = [...mySet];
// console.log(myArray); // [ 'apple', 'banana', 'orange' ]

// -----------  Reverse is not string method --------
// let str = "jjjass"
// console.log(str.split('').reverse().join(''))

// RegExp Expressions

// Flags :- Regular expressions can have flags that modify their behavior. Common flags include:
// i: Case-insensitive matching.
// g: Global matching (find all matches).
// m: Multiline matching.

// Character Classes :- Character classes are used to match specific sets of characters.
// \d: Matches any digit (equivalent to [0-9]).
// \w: Matches any word character (alphanumeric + underscore). // \W is used for matching special characters
// \s: Matches any whitespace character.
// classes used like :- const regex = /\d+/
// const reg = /\w+\s+\d/
// console.log(reg.test("CHARacter 124")); // true
// console.log(reg.test("CHARacter124")); // false

// ----------------- test ------------
// const regex = /inputString_/;
// console.log(regex.test("inputinputString"));  // false   // test methods wnts to exact match // case senstive

// ---------------  search ------------
// const regex = /inputString/i; // i which removes case senstive
// console.log("inputStrinG".search(regex)); // 0
// console.log("input".search(regex)); //  if not match then return -1

//  ---------------  match method  without /g ---------
// const regex = /pattern/;
// const result = "inputStringpatterninputStringpattern".match(regex);
// console.log(result); // ['pattern',index: 11,input: 'inputStringpatterninputStringpattern',groups: undefined]

//  ---------------  match method with /g  ----------
// const regexGlobal = /pattern/g;
// const resultClobal = "inputStringpatterninputStringpattern".match(regexGlobal);
// console.log(resultClobal); // ["pattern", "pattern"]

// ---------- Replace --------
// const regex = /inputString/;
// console.log("inputStringharshinputString".replace(regex, "replacement")); // replacementharshinputString

// const regex = /inputString/g;
// console.log("inputStringharshinputString".replace(regex, "replacement"));  // replacementharshreplacement

// console.log("stringiII".replace(/i/gi, "H")); // strHngHHH // apply Global with remove case senstive

// --------- String, Array
// let arr = [1,2,3,4,5]
// let methodName = "splice"
// let argument = [2,3]
// console.log(arr[methodName](...argument)) // o/p :- [ 3, 4, 5 ]

// let str = "harshjain"
// let strMethod  = "slice"
// console.log(str[strMethod](2,5)); // rsh

// let strk = "kmkm"
// strk[0] = "M"
// console.log(strk);  // outPut is "kmkm" not this like "Mmkm" // we can modified string using notation

// console.log( 10 >  5  > 1  ); //  false



