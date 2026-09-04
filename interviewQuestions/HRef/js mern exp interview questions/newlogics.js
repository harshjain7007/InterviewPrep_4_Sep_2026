// Americon Express :  
let str = "abccbz" // "az"

function fun(str){
    const stack = [];

    for(const ch of str){
        if(stack.length > 0 && stack[stack.length - 1] === ch){
            stack.pop()
        }else{
            stack.push(ch)
        }
    }

    return stack.join("")
}

console.log(fun(str))



// console.log(reverseAlphabetsOnly("a1b@c3d#")); | Output: "d1c@b3a#"

function reverseAlphabetsOnly(str){
    const chars = str.split("")
    let left = 0;
    let right = chars.length - 1
    
    while(left < right){
      if(!/[a-zA-Z]/.test(chars[left])){
        left++;
      }else if( !/[a-zA-Z]/.test(chars[right])){
        right--;
      }else{
        [chars[left], chars[right]] = [chars[right], chars[left]]
        left++;
        right--;
     }
    }
    
    console.log("chars==>>>",chars)
    return chars.join("");
}
console.log(reverseAlphabetsOnly("abc123xyz"));

// ------ Node.js 
const fs = require("fs");

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setImmediate(() => {
  console.log("3");
});

fs.readFile(__filename, () => {
  console.log("4");
});

Promise.resolve().then(() => {
  console.log("5");
});

console.log("6");

// Possible Output:

// 1
// 6
// 5
// 2
// 3
// 4

// (order may slightly vary for setTimeout and setImmediate)





// ....pending 
// Find the longest common subsequence of two strings
// Dynamic programming · ⏱ 20 min
// 🟡 Important
// Algorithm
// Problem Statement
// Write lcs(str1, str2) that returns the length of the longest common subsequence.
// lcs('ABCBDAB', 'BDCAB') → 4 (BCAB or BDAB)

// Dynamic Programming — O(m*n) time and space
function lcsString(str1, str2) {

    const m = str1.length;
    const n = str2.length;

    const dp = Array.from({ length: m + 1 }, () =>
        Array(n + 1).fill(0)
    );

    // Build DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i][j - 1]
                );
            }

        }
    }

    // Recover answer
    let i = m;
    let j = n;
    let ans = [];

    while (i > 0 && j > 0) {

        if (str1[i - 1] === str2[j - 1]) {
            ans.push(str1[i - 1]);
            i--;
            j--;
        }
        else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        }
        else {
            j--;
        }
    }

    return ans.reverse().join("");
}

console.log(lcsString("ABCBDAB", "BDCAB")); // BCAB





// Implement getByPath and setByPath for nested object access
// Utility used in form libraries · ⏱ 10 min
// 🟡 Important
// Objects
// Problem Statement
// Write getByPath(obj, 'a.b.c') → value at that path
// Write setByPath(obj, 'a.b.c', value) → set value at that path

// Self 
// function setByPath(obj, path, value){
//   let pathKeys = path.split(".")
//   pathKeys.reduce((accum, curElem, ind) => {
//     if(ind === pathKeys.length - 1){
//       accum[curElem] = value
//     }else{
//       accum[curElem] = accum[curElem] || {}
//     }
//     return accum[curElem]
//   }, obj)
// }
// let obj = {}, value = 10
// setByPath(obj, 'a.b.c', value)

// SET by dot path (immutable)
function setByPath(obj, path, value) {
  const keys = path.split('.');
  const result = { ...obj };
  let current = result;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    current[key] = { ...(current[key] || {}) };
    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
  return result;
}

let obj = {};
let value = 10;

let res = setByPath(obj, 'a.b.c', value);

console.log(res);
// let obj = {}, value = 10
// let res = setByPath(obj, 'a.b.c', value)
// console.log("obj", res);

// GET by dot path
function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc === null || acc === undefined) return undefined;
    return acc[key]; // in each ittration acc value is nested object
  }, obj);
}

// Get without using in reduce ;- 
function getByPath(obj, path) {

  const keys = path.split(".");

  let current = obj;

  for (let key of keys) {

    // safe check
    if (current === null || current === undefined) {
      return undefined;
    }

    current = current[key];
  }

  return current;
}






// Implement Array.prototype.myMap, myFilter, myReduce from scratch without using built-in map/filter/reduce.
// Custom map
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) { // handle sparse arrays
      result[i] = callback(this[i], i, this);
    }
  }
  return result;
};

// Custom filter
Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Custom reduce
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator;
  let startIndex;
  
  // its condition is for if user not passed intial value of acc.
  if (arguments.length >= 2) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    if (this.length === 0) throw new TypeError('Reduce of empty array with no initial value');
    accumulator = this[0];
    startIndex = 1;
  }
  
  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

// Test
[1,2,3].myMap(x => x * 2);          // [2,4,6]
[1,2,3,4].myFilter(x => x % 2 === 0); // [2,4]
[1,2,3,4].myReduce((acc, x) => acc + x, 0); // 10


// ...pending
// Write flattenObject(obj) that flattens a nested object to dot notation.
// {a:{b:{c:1}}, d:2} → {'a.b.c':1, 'd':2}

function flattenObject(obj, prefix = '', result = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      flattenObject(value, fullKey, result); // recurse
    } else {
      result[fullKey] = value; // leaf node or array — store
    }
  }
  return result;
}

// Test
const nested = {
  user: { name: 'Aryan', address: { city: 'Dubai', zip: '12345' } },
  age: 28
};
console.log(flattenObject(nested));
// { 'user.name': 'Aryan', 'user.address.city': 'Dubai', 'user.address.zip': '12345', age: 28 }


// ... pending
// // Bonus: unflatten (reverse operation)
// function unflattenObject(flat) {
//   const result = {};
//   for (const [dotKey, value] of Object.entries(flat)) {
//     const keys = dotKey.split('.');
//     keys.reduce((acc, key, i) => {
//       if (i === keys.length - 1) {
//         acc[key] = value;
//       } else {
//         acc[key] = acc[key] || {};
//       }
//       return acc[key];
//     }, result);
//   }
//   return result;
// }

// console.log(unflattenObject({ 'a.b.c': 1, 'd': 2 }));
// // { a: { b: { c: 1 } }, d: 2 }



// ...pending
// // Flatten and transform object keys (snake_case to camelCase)
function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

function transformKeys(obj) {
  if (Array.isArray(obj)) {
    return obj.map(transformKeys);
  }
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        snakeToCamel(key),
        transformKeys(val) // recurse into nested objects
      ])
    );
  }
  return obj; // primitive — return as-is
}


// Little easy solution :- 
// function transformKeys(obj) {

//   // Handle Array
//   if (Array.isArray(obj)) {
//     return obj.map(transformKeys);
//   }

//   // Handle Object
//   if (obj !== null && typeof obj === "object") {

//     let newObj = {};

//     for (let key in obj) {

//       const newKey = key.replace(
//         /_([a-z])/g,
//         (_, letter) => letter.toUpperCase()
//       );

//       newObj[newKey] = transformKeys(obj[key]);
//     }

//     return newObj;
//   }

//   // Primitive values
//   return obj;
// }

// console.log(transformKeys(apiResponse));

// Test
const apiResponse = {
  user_name: 'Aryan',
  user_age: 28,
  home_address: {
    street_name: 'Sheikh Zayed Road',
    zip_code: '12345'
  },
  recent_orders: [
    { order_id: '001', total_amount: 250.0 }
  ]
};

console.log(transformKeys(apiResponse));



// Implement Promise.all, Promise.race, and Promise.allSettled from scratch :-
// Promise.all method return all resolve promises, if any Promise should like [ 200, 400, 600 ], if in case any promise rejected so it will return only reject promise
// Promise.race method return 1st settled promise only, promise should be early either resolved and rejected 
// Promise.allSettled method return all promises, success or failure both
// Example :-
let firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
   return  resolve("400")
  }, 3000);
})

console.log(
Promise.all([ firstPromise ])  
.then(res => console.log("res",  res))
.catch(err => console.log("err", err))
)




// ...pending
/*
Problem: Write a function deepMerge(target, source) that recursively merges the properties of the source object into the target object. 
● If a property exists in both, and both values are "plain" objects, recursively merge them. 
● Arrays from the source should completely replace arrays in the target. 
● All other values (primitives, null) from source should overwrite values in target. 
● The function should mutate and return the target object. 


Sample Input:
------- 
const target = { 
a: 1, 
b: { c: 2, d: [1, 2] }, 
f: { g: 10 } 
}; 
const source = { 
a: 5, // Overwrite 
b: { d: [3, 4], e: 3 }, // Recursive merge 
f: null // Overwrite 
}; 

Sample Output (the mutated target object): 
-------- 
{ 
"a": 5, 
"b": { "c": 2, "d": [3, 4], "e": 3 }, 
"f": null 
} 
*/

const target = { 
a: 1, 
b: { c: 2, d: [1, 2] }, 
f: { g: 10 } 
}; 

const source = { 
a: 5, // Overwrite 
b: { d: [3, 4], e: 3 }, // Recursive merge 
f: null // Overwrite 
}; 

function isPlainObject(obj) {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}

function deepMerge(target, source) {
  for (let key in source) {
    const sourceValue = source[key];
    const targetValue = target[key];

    if (Array.isArray(sourceValue)) {
      target[key] = sourceValue;
    } else if (isPlainObject(sourceValue) && isPlainObject(targetValue)) {
      deepMerge(targetValue, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  }
  return target;
}

let resultTarget = deepMerge(target, source)

console.log("resultTarget", resultTarget, target);


// Check if 2 Object deeply equal or not :- 
function deepEqual(a, b) {
  // same reference
  if (a === b) return true;

  // null or type mismatch
  if (
    typeof a !== "object" || a === null ||
    typeof b !== "object" || b === null
  ) {
    return false;
  }

  // array vs object mismatch
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // key length check
  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}


// ---------------  Combination :- 
// function getCombinations(str) {
//   let result = [""];

//   for (let char of str) {
//     let temp = [];
//     for (let item of result) {
//       temp.push(item + char);
//     }
//     result = result.concat(temp);
//   }

//   return result;
// }

// console.log(getCombinations("a")); 
// // ["", "a"]

// console.log(getCombinations("ab")); 
// // ["", "a", "b", "ab"]

// Without sequance chaiye hai toh :- 
function getCombinations(str) {
  const result = [""];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }

  return result;
}

console.log(getCombinations("ab"));
// ["", "a", "ab", "b"]


// --------
const data = {
  id: "12345",
  name: "John Doe",
  email: "johndoe@example.com",
  profile: {
    age: 30,
    gender: "Male",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA",
    },
  },
  settings: {
    notifications: {
      email: true,
      sms: false,
      push: true,
    },

    theme: {
      color: "dark",

      fontSize: "medium",
    },
  },
};

let flatData = {};

function flatObject(obj, key) {
  if (typeof obj == "object") {
    Object.keys(obj).forEach((singleKey) => {
      flatObject(obj[singleKey], key ? key + "-" + singleKey : singleKey);
    });
  } else {
    flatData[key] = obj;
  }
}

flatObject(data, "");

console.log(flatData)``;

// fetch data from any api more then 100+ data they have  print data inside table and applying caching
// getting complex data from APIs and design  its interfaces from this data
// Jest try it’s also free for components testing
// try to use useMemo & useCallback & React.Memo function
// create react app  call api with react-query get data print inside table pagination use caching

// --------------  create pollifill for Find method of array --- :-
if (!Array.prototype.find) {
  Array.prototype.find = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.find called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = Object(this);
    const len = array.length >>> 0;

    for (let i = 0; i < len; i++) {
      if (i in array) {
        const element = array[i];
        if (callback.call(thisArg, element, i, array)) {
          return element;
        }
      }
    }
    return undefined;
  };
}

// ----  Compressed string :-
function compressString(str) {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += count > 1 ? count + str[i] : str[i];
      count = 1;
    }
  }

  return result;
}

console.log(compressString("haaarsasshh")); // Output: ha3rsas2h2

// ----  Find out's the time complexity of loops :-----
let arr = [];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    arr.push(i * j);
  }
}
// o/p :-
// Outer loop: 5 iterations
// Inner loop: 5 iterations per each iteration of the outer loop
// Total iterations = 5 (outer loop) * 5 (inner loop) = 25 iterations
// The time complexity is 𝑂(𝑛2) O(n 2) where 𝑛 is the number of iterations for each loop. so n square mean 25
let count = 0;
let N = 10; // this could be any input size
for (let i = 0; i < N; i++) {
  count++;
} // time complexity of that loop is O(N)
for (let i = 0; i < 5; i++) {
  count++;
} //  time complexity of that loop is O(1) which denotes constant time complexity. It means the runtime does not change with varying input sizes; it remains constant.

// -----  find out the common elements of these two array's  TRY to use less time complexity --- :-
let array1 = [
  { id: 1, name: "john" },
  { id: 2, name: "doe" },
  { id: 3, name: "json" },
];
let array2 = [
  { id: 2, name: "aaa" },
  { id: 3, name: "bbb" },
  { id: 4, name: "ccc" },
];
// --- using reduce and find like using build in methods
function fun(arr1, arr2) {
  let commonIds = arr1.reduce((acc, curElem) => {
    let find = arr2.find((elem) => elem.id === curElem.id);
    if (find) {
      acc.push(find);
    }
    return acc;
  }, []);
  return commonIds;
}
console.log(fun(array1, array2)); // Time complexity O(n*m)  where n is number of elements of arr1, m is number is elements of arr2

// -----------  Fibnacchi series not more than given value -------
function fib(num) {
  if (num === 1) {
    return [0, 1];
  } else {
    let result = fib(num - 1);
    if (result[result.length - 1] + result[result.length - 2] < num) {
      result.push(result[result.length - 1] + result[result.length - 2]);
    }
    return result;
  }
}
let nu = 50;
console.log(fib(nu));

// ----------- Fibonacchi series nth term using recursion --------
function fib(num) {
  if (num === 0) {
    return [0, 1];
  } else {
    let result = fib(num - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
}
let n = 10;
console.log(fib(n));

// --------  Throttle Example  ------------
function throttle(func, delay) {
  let lastCalledTime = 0;
  return function (...args) {
    const now = Date.now();
    console.log(now);
    if (now - lastCalledTime >= delay) {
      func.apply(this, args);
      lastCalledTime = now;
    }
  };
}

function doSomething() {
  console.log("Doing something...");
}

const throttledFunction = throttle(doSomething, 1000); // Throttle to once per second

// Call the throttled function multiple times
throttledFunction(); // Output: "Doing something..."
setTimeout(() => throttledFunction(), 500); // This call will be ignored due to throttling
setTimeout(() => throttledFunction(), 500); // This call will be ignored due to throttling
setTimeout(() => throttledFunction(), 1000); // This call will be executed after 1 second

//---------- Deboce example in javaScropt  :------
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    // const context = this;
    //     const args = arguments;

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example function to be debounced
function processInput(value) {
  console.log("Processing input:", value);
}

// Debounce the function with a delay of 500 milliseconds
const debouncedProcessInput = debounce(processInput, 500);

// Simulate multiple input events
debouncedProcessInput("Input 1");
debouncedProcessInput("Input 2");
debouncedProcessInput("Input 3");
debouncedProcessInput("Input 4");
debouncedProcessInput("Input 5"); //  o/p is Input 5

// Only the last input will be processed after the delay

// ---------- write a custom functipon fro DeepClone Object and DeepClone Array ---------
// let obj = {
//   name: "harsh",
//   age: 24,
//   childObj: {
//     name: "nyn",
//   },
//   childArr: [1, 2, 3],
// };

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    // If obj is null or not an object, return it as is
    return obj;
  }

  // Create an empty object or array to store the cloned properties
  const clone = Array.isArray(obj) ? [] : {};

  // logic for  cloneing
  // Iterate over each property of the object
  // for (let key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     // Recursively clone nested objects or arrays
  //     clone[key] = deepClone(obj[key]);
  //   }
  // }

  for (let key in obj) {
    // logic for nested deep cloneing
    if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object" || Array.isArray(obj[key])) {
        clone[key] = deepClone(obj[key]);
        } else {
        clone[key] = obj[key];
        }
    }
  }

  return clone;
}
let duplicateObj = deepClone(obj);
duplicateObj.name = "ncs";
duplicateObj.childArr[3] = "jain";
duplicateObj.childObj.name = "KKK";
console.log(duplicateObj, obj);

// ---  findout same value and keys of two objects
function fun(obj1, obj2) {
  let result = {};
  for (let i in obj1) {
    for (let j in obj2) {
      if (i === j) {
        if (obj1[i] === obj2[j]) {
          result[i] = obj1[i];
        }
      }
    }
  }
  return result;
}
const string1 = { a: 1, b: 4, c: 5, d: 6, e: 7 };
const string2 = { a: 2, c: 5, e: 7, f: 4 };
console.log(fun(string1, string2)); // { c: 5, e: 7 }


// No required to resolved this (self made) :- when nested Full Object and Array matched required :-
function getCommon(obj1, obj2) {
  const result = {};

  for (let key in obj1) {
    if (!(key in obj2)) continue;

    const val1 = obj1[key];
    const val2 = obj2[key];

    // Case 1: Arrays (strict match)
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (
        val1.length === val2.length &&
        val1.every((v, i) => v === val2[i])
      ) {
        result[key] = val1;
      }
    }

    // Case 2: Objects (STRICT match only)
    else if (
      typeof val1 === "object" && val1 !== null &&
      typeof val2 === "object" && val2 !== null &&
      !Array.isArray(val1) && !Array.isArray(val2)
    ) {
      const keys1 = Object.keys(val1);
      const keys2 = Object.keys(val2);

      // ✅ only if same structure
      if (keys1.length === keys2.length) {
        const nested = getCommon(val1, val2);

        // ✅ only if ALL keys matched
        if (Object.keys(nested).length === keys1.length) {
          result[key] = nested;
        }
      }
    }

    // Case 3: Primitive
    else {
      if (val1 === val2) {
        result[key] = val1;
      }
    }
  }

  return result;
}

const obj1 = { a: 1, b: 4, c: 5, d: 6, e: 7, z: {a: 10,  k: 5 }, x: { a: 12, b: 3 }, r: [ 2, 4 ], k: [ 5, 6 ], l: [1,2], n: null };
const obj2 = { a: 2, c: 5, e: 7, f: 4, z: {a: 10,  k: 5 }, x: { a: 11, b: 3}, r: [ 2, 5 ], l: [1,2], k: [ 5, 6, 7], n: {} };
console.log(getCommon(obj1, obj2)); // { c: 5, e: 7, z: { a: 10, k: 5 }, l: [ 1, 2 ] }


// write a custum function to flat array program
let arrs = [1, [2], [[3, 4]], [9, [8, 7, [[23]]]]];
// function flattenArr(ar) {
//   if (!Array.isArray(ar)) {
//     return [ar];
//   } else {
//     let res = [];
//     for (let i = 0; i < ar.length; i++) {
//       res = res.concat(flattenArr(ar[i]));
//     }
//     return res;
//   }
// }


// :------  use Push instead of concat bcz every time converts concat creats new array :-
function flattenArr(arr){
let result = []
  if(!Array.isArray(arr)){
    return [arr]
  }else{
    for(let i of arr){
      let res = flattenArr(i)

      // push each element manually
      for(let val of res){
        result.push(val)
      }
    }
  }
}
let resultAr = flattenArr(arrs);
console.log(resultAr); // Output: [1, 2, 3, 4, 9, 8, 7, 23]

  
//   return result
// }

//  --- using built in method :-
function flattenArray(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
  }, []);
}

const nestedArray = [1, [2], [[3, 4]], [9, [8, 7, [[23]]]]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // [ 1, 2, 3,  4, 9, 8, 7, 23 ]

// ---------- subsets of string ----
// let str = "dog" // ["d", "do", "dog", "o", "og", "g"]
// // "abcd"
// let subSetsArray = []
// for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length + 1; j++) {
//         subSetsArray.push(str.slice(i, j))
//     }
// }
// console.log(subSetsArray, str);

// --- factorial with recursion
// function fact(n){
//      if(n < 2){
//          return 1
//      }else{
//          return  n *= fact(n - 1)
//      }
//  }
//  console.log(fact(5));

// ---  range with recursion
// function range(a, b){
//      if(b - a === 2){
//          return [a + 1]
//      }else{
//          let list = range(a, b-1)
//          list.push(b - 1)
//          return list;
//      }
//  }
//  console.log(range(2, 9)) // o/p :-  [ 3, 4, 5, 6, 7, 8 ]

// findOut maxNumber of array dont use built in method
// function findMaxNumber(arr) {
//      if (arr.length === 0) {
//          // Handle the case where the array is empty
//          console.log("The array is empty.");
//          return;
//      }
//      // Assume the first element is the maximum
//      let maxNumber = arr[0];

//      for (let i = 1; i < arr.length; i++) {
//          if (arr[i] > maxNumber) {
//              maxNumber = arr[i];
//          }
//      }
//      console.log("The maximum number in the array is: " + maxNumber);
//  }
//  let numbers = [5, 2, 100,  9, 1, 7, 6, 10];
//  findMaxNumber(numbers);

// -- find unique values of this Two arays
// let arrOne = [ 1, 2, 3, 4, 5, 6 ]
// let arrTwo = [ 5, 6, 7, 8, 9 ]
// let finalArr = [ ...arrOne, ...arrTwo ]
// let uniqueVal = finalArr.filter((curElem, ind, selfArr) => {
//      return  selfArr.indexOf(curElem) ===  ind
// })
// console.log(uniqueVal);
// OutPut :- [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// --- without using filter method
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 5];
// let uniqueArray = [];
// for (let i = 0; i < arr.length; i++) {
//     if (uniqueArray.indexOf(arr[i]) === -1) {
//         // If the element is not already in uniqueArray, add it
//         uniqueArray.push(arr[i]);
//     }
// }
// console.log(uniqueArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// find HCF of two numbers
// let num1 = 60;
// let num2 = 72;
// let HCF = 0
// for(let i = 0; i <= num1 && i <= num2; i++){
//     if(num1 % i === 0 && num2 % i === 0){
//         HCF = i
//     }
// }
// console.log(HCF)

///// ----  Find LCM of the Number
// let num1 = 60;
// let num2 = 72;
// let LCM = 0
// let min = num1 < num2 ? num1 : num2
// while(true){
//     if( min % num1 === 0 && min % num2 === 0 ){
//         LCM = min;
//         break;
//     }
//     min++;
// }
// console.log(LCM)



// Find out the non-repeating character in a string  input :- "aabccdeff", output :- "b" 


// TODO 
// Implement an LRU Cache (Least Recently Used). 
// Map + doubly linked list · ⏱ 20 min 



// Implement compose and pipe functions
// Functional programming fundamentals · ⏱ 8 min
// const double = (x) => x * 2;
// const squareF = (x) => x * x;
// const addOne = (x) => x + 1;

// // Pipe => Left to Right
// const pipe = (...fns) => (value) =>
//   fns.reduce((acc, fn) => fn(acc), value);


// // Compose => Right to Left
// const compose = (...fns) => (value) =>
//   fns.reduceRight((acc, fn) => fn(acc), value);


// console.log(
//   pipe(addOne, squareF, double)(3)
// );

// console.log(
//   compose(addOne, squareF, double)(3)
// );






// Ques :- 
// Implement a pub/sub (EventEmitter) 
// pattern Design pattern — most asked 

// Pub/Sub means:-
// Publisher → Event → Subscribers
// Publisher emits an event
// Subscribers listen to that event
// When event happens, all subscribers are notified

// This pattern is also called: Observer Pattern or EventEmitter Pattern

// Real Life Example
// YouTube Notification
// YouTube Channel → Publisher
// Subscribers → Users
// New Video Upload → Event

// “Pub/Sub pattern allows multiple subscribers to listen to events emitted by a publisher without tight coupling between components.”

// Easy JS implementation :- 
class EventEmitter {

  constructor() {
    this.events = {};
  }

  // Subscribe
  on(eventName, callback) {

    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  // Publish
  emit(eventName, data) {

    if (this.events[eventName]) {

      this.events[eventName].forEach((callback) => {
        callback(data);
      });

    }
  }

}

// Uses :- 
const emitter = new EventEmitter();

emitter.on("message", (data) => {
  console.log("User 1:", data);
});

emitter.on("message", (data) => {
  console.log("User 2:", data);
});

emitter.emit("message", "Hello World");

// Easy Explanation of Methods
// Method	Purpose
// on()	Subscribe to event
// emit()	Trigger event
// callback	Function executed when event occurs




// Implement memoize with cache expiry (TTL)
// Advanced memoize with cache invalidation · ⏱ 12 min
// 🟡 Important
// Functions
// Problem Statement
// Write memoize(fn, ttl) where TTL is optional cache expiry in milliseconds.
// If called with same args within TTL, return cached. After TTL, recompute.

// solution :- 
// function memoize(fn, ttl = Infinity) {
//   const cache = new Map();

//   function memoized(...args) {
//     const key = JSON.stringify(args);
//     const now = Date.now();
    
//     if (cache.has(key)) {
//       const { value, expiry } = cache.get(key);
//       if (now < expiry) {
//         return value; // cache hit — not expired
//       }
//       cache.delete(key); // expired — remove
//     }

//     // Cache miss or expired — compute
//     const result = fn.apply(this, args);
//     cache.set(key, {
//       value: result,
//       expiry: now + ttl
//     });
//     return result;
//   }

//   // Clear entire cache
//   memoized.clear = () => cache.clear();
  
//   // Clear specific args
//   memoized.delete = (...args) => cache.delete(JSON.stringify(args));
  
//   // Cache stats
//   memoized.size = () => cache.size;

//   return memoized;
// }

// // Test
// const expensiveCalc = memoize((n) => {
//   console.log('Computing...');
//   return n * n;
// }, 5000); // 5 second TTL

// expensiveCalc(5);  // Computing... 25
// expensiveCalc(5);  // 25 (cached)
// expensiveCalc(5);  // after 5s → Computing... 25 again



// Write a function to detect cycles in a linked list
// Floyd's algorithm · ⏱ 15 min




// Implement a rate limiter function
// Sliding window rate limit · ⏱ 15 min
// 🟡 Important
// Algorithm
// Problem Statement
// Write a rateLimiter(fn, limit, interval) that allows at most 'limit' calls per 'interval' ms.
// Additional calls should be queued and executed when allowed.


function rateLimiter(fn, limit, interval) {
  const queue = [];
  let callsInWindow = 0;
  
  function processQueue() {
    if (queue.length === 0 || callsInWindow >= limit) return;
    
    const { args, resolve, reject } = queue.shift();
    callsInWindow++;
    
    try {
      const result = fn(...args);
      resolve(result instanceof Promise ? result : Promise.resolve(result));
    } catch (err) {
      reject(err);
    }
    
    setTimeout(() => {
      callsInWindow--;
      processQueue(); // try to process next in queue
    }, interval);
    
    processQueue(); // process more if limit not reached
  }
  
  return function (...args) {
    return new Promise((resolve, reject) => {
      queue.push({ args, resolve, reject });
      processQueue();
    });
  };
}

// Test: allow 2 calls per 1000ms
const limitedFetch = rateLimiter(
  (id) => fetch(`/api/user/${id}`),
  2,    // max 2 calls
  1000  // per 1 second
);

// All 5 calls queued — only 2 fire immediately, rest wait
Promise.all([1,2,3,4,5].map(id => limitedFetch(id)));





// Implement a simple Observable / reactive system
// Mini RxJS · ⏱ 20 min
// 🟢 Good to Know
// Design Pattern
// Problem Statement
// Implement a basic Observable class with subscribe(), map(), filter(), and pipe() methods.

class Observable {
  constructor(subscribeFn) {
    this._subscribe = subscribeFn;
  }

  subscribe(observer) {
    const obs = typeof observer === 'function'
      ? { next: observer, error: console.error, complete: () => {} }
      : observer;
    return this._subscribe(obs);
  }

  pipe(...operators) {
    return operators.reduce((obs, op) => op(obs), this);
  }

  static of(...values) {
    return new Observable(obs => {
      values.forEach(v => obs.next(v));
      obs.complete();
    });
  }

  static fromPromise(promise) {
    return new Observable(obs => {
      promise.then(v => { obs.next(v); obs.complete(); }).catch(obs.error);
    });
  }
}

// Operators
const map = (fn) => (source) =>
  new Observable(obs => source.subscribe({
    next: (val) => obs.next(fn(val)),
    error: obs.error,
    complete: obs.complete
  }));

const filter = (fn) => (source) =>
  new Observable(obs => source.subscribe({
    next: (val) => fn(val) && obs.next(val),
    error: obs.error,
    complete: obs.complete
  }));

// Usage
Observable.of(1,2,3,4,5)
  .pipe(
    filter(x => x % 2 === 0),
    map(x => x * 10)
  )
  .subscribe(console.log); // 20, 40