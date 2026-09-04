//// -- if toFind is subString of toStr then which is return true othervise return false

// function fun(toStr, toFind){
//     let isWhile = false;
//     let toFindArr = toFind.split("")
//     // console.log(toFindArr)
//     let arr = []
//     let count = 0;
//     while(!isWhile){
//         for(let i = 0; i < toStr.length ;  i++){
//             if(toStr[i] === toFindArr[i]){
//                 count++;                                                                                            
//                 // console.log(i)
//             }else{
//                 // console.log(toFindArr[i], i , toStr[0])
//                 if(toFindArr[i] !== toStr[0]){
//                     // console.log("run..")
//                     arr.push([])
//                     isWhile = true
//                 }
//                 arr.push(toFindArr.splice(0, i))
//                 // console.log(toFindArr)
//             }
//             if(count === toStr.length){
//                 arr.push(toFindArr.splice(0, count))
//                 count = 0
//             }
//         }
//         // console.log(toFindArr.length, toFindArr)
//     }
//     // console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         if(!toStr.includes(arr[i].join(''))){
//             return false
//         }
//     }
//     return true
// }
// let toStr = 'harsh'
// let toFind = 'harharshharsh'
// console.log(fun(toStr, toFind))


// ###1
// ##333
// #55555
// 






/// ----  Compare two array without using JSON.stringfy() use every and some method --
// let mechanical_students_details = [
//      {
//          student_id: 1,
//          student_name: "Aman",
//          student_age: 23,
//      },
//      {
//          student_id: 2,
//          student_name: "Chaitanya",
//          student_age: 24,
//      },
//      {
//          student_id: 3,
//          student_name: "Dharmendra",
//          student_age: { name: {
//              subName: "sub"
//          }}
//      },
//  ];

//  let cse_students_details = [
//      {
//          student_id: 1,
//          student_name: "Aman",
//          student_age: 23,
//      },
//      {
//          student_id: 2,
//          student_name: "Chaitanya",
//          student_age: 24,
//      },
//      {
//          student_id: 3,
//          student_name: "Dharmendra",
//          student_age: { name: {
//              subName: "sub"
//          }}
//      },
//  ];

//  function compareArrays(arr1, arr2) {
//      if (arr1.length !== arr2.length) {
//          return false;
//      }

//      // Helper function to recursively compare objects
//      const isEqual = (obj1, obj2) => {
//          const keys1 = Object.keys(obj1);
//          const keys2 = Object.keys(obj2);

//          if (keys1.length !== keys2.length) {
//              return false;
//          }

//          for (let key of keys1) {
//              const val1 = obj1[key];
//              const val2 = obj2[key];

//              if (typeof val1 === 'object' && typeof val2 === 'object') {
//                  if (!isEqual(val1, val2)) {
//                      return false;
//                  }
//              } else if (val1 !== val2) {
//                  return false;
//              }
//          }
//          return true;
//      };

//      // Compare each object in arr1 with corresponding object in arr2
//      for (let i = 0; i < arr1.length; i++) {
//          if (!isEqual(arr1[i], arr2[i])) {
//              return false;
//          }
//      }

//      return true;
//  }

//  console.log(compareArrays(mechanical_students_details, cse_students_details));



// const myObj = { 
//      prop1: 'Hello', 
//      'prop-with-dash': 'Geeks',
//      name: "harsh"
//  };

//  const { prop1,  name: myEdit  } = myObj
//  console.log(prop1, myEdit);

//  function someAsyncFunction(it){
//      return new Promise((resolve) => {
//           setTimeout(() => {
//           //   console.log("inside setTime out");
//             resolve(it + 5);
//           }, 1000);
//         });
// }

// async function processItems(items) {
//      for (const item of items) {
//        // Perform some asynchronous operation for each item
//        const result = await someAsyncFunction(item);
//        console.log(result);
//      }
//    }
//    // Usage
// const items = [1000,2000,3000,4000,5000,6000];
// processItems(items);





// async function fetchData() {
//      // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//      // const data = await response.json();
//      // return data;
// return new Promise((resolve, reject) => {
//      setTimeout(() => {
//           resolve(["1st Data", "2nd Data", "3rd Data"])
//           // reject("not find")
//      }, 1000);
// })

//    }

//    async function processPosts() {
//      // const posts = await fetchData();
//      // for await (const post of posts) {
//      //   console.log(post.title);
//      // }
//           const datas = await fetchData()
//           for(const data of datas ){
//                console.log(data);
//           }
//    }

//    processPosts();

// function fun(){
//      return new Promise((resolve, reject) => {
//           return resolve("1st done")
//      })
// }

// fun().then((res) => {
//      return new Promise((resolve, reject) => {
//           console.log(res);
//           return resolve("3st done")
//      })
// }).then((result) => {
//      return new Promise((resolve, reject) => {
//           console.log(result);
//           return resolve("2st done")
//      })
// }).catch((err) => {
//      console.log(err);
// })



// function fun1(){
//      return new Promise((resolve, rejecte) => {
//           setTimeout(() => {
//                console.log("fun 1");
//                resolve("First Functioin")
//           }, 1000);
//      })
// }


// function fun2(result){
//      return new Promise((resolve, rejecte) => {
//           setTimeout(() => {
//                console.log("2nd",result);
//                resolve("Second Functioin")
//           }, 1000);
//      })
// }


// function fun3(result){
//      return new Promise((resolve, rejecte) => {
//           setTimeout(() => {
//                console.log("3rd",result);
//                resolve("Third Functioin")
//           }, 1000);
//      })
// }

// fun1().then(fun2).then(fun3).then(finalRes => console.log(finalRes))





// // function asyncOperation1() {
// //      return new Promise((resolve) => {
// //           setTimeout(() => {
// //                console.log("Async operation 1 completed.");
// //                resolve(1);
// //           }, 1000);
// //      });
// // }

// // function asyncOperation2(result) {
// // return new Promise((resolve) => {
// //      setTimeout(() => {
// //           console.log("Async operation 2 completed with result:", result);
// //           resolve(2);
// //      }, 1000);
// // });
// // }

// // function asyncOperation3(result) {
// // return new Promise((resolve) => {
// //      setTimeout(() => {
// //           console.log("Async operation 3 completed with result:", result);
// //           resolve(3);
// //      }, 1000);
// // });
// // }

// // asyncOperation1()
// // .then(asyncOperation2)
// // .then(asyncOperation3)
// // .then((finalResult) => {
// //      console.log("Final result:", finalResult);
// // })
// // .catch((error) => {
// //      console.error("An error occurred:", error);
// // });



// function fun(arg1, arg2, km){
//      console.log(arg1, arg2, km);
//      return
// }
// let arr = [1, "kmkm",2,3,4,5]
// fun.apply(null, arr)
// fun.call(null, "ha", "jain", "ffv", "ss")
// let fn = fun.bind()
// fn("kmkmkmkm",",ad")


// let obj = { name: "harsh", age: 23, nestedObj : { val: 100 }}
// let newObj = {...obj}
// newObj.name = "nayan"
// newObj.nestedObj.val = 200
// console.log(obj, newObj);

// let arr = [1,2,3,[4,5]]
// let newArr = Array(arr.toString())
// // newArr[3][0] = 500
// console.log(arr, newArr);

// "z".charCodeAt()
// console.log("A".charCodeAt(), 97 - 26, 65 + 32);
// console.log(parseInt("10011", 2));
// console.log("cdf".charAt(1));



// ###1
// ##333
// #55555
// 7777777


// let n = 7
// let str = ""
// for(let i = 1; i <= n; i++){
//      if(i % 2 !== 0){
//      for(let j = 0; j < Math.ceil(n/2) - Math.ceil(i/2); j++){
//            str += "#"
//      }
//      for(let k = 0; k < Math.ceil(i/2)  * 2 - 1; k++){
//             str += i 
//      }
//       str += '\n'
//      }
// }
// console.log(str);



// console.log(String.fromCharCode(65 + 25, 97 + 25) );

// let tt = "jhsbjb"
// console.log(tt.substr(2));



// let books = [
//      { title: "C++", author: "Bjarne" },
//      { title: "Java", author: "James" },
//      { title: "Python", author: "Guido" },
//      { title: "Java", author: "James" },
//      { title: "Java", author: "new James" },
//      { title: "Java", author: "new James" },
//      { title: "Java", author: "new James" },
//  ];

//  jsonObject = books.map(JSON.stringify);
// //  console.log("jsonObject",  jsonObject);
//  uniqueSet = new Set(jsonObject);
//  uniqueArray = Array.from(uniqueSet).map(JSON.parse);
//  console.log(uniqueArray);



// console.log([7, 9, 0, -2].splice(0, -3));


// let str = "harsh"
// let num = 789.98765
// console.log(str.charAt(2), num.toFixed(2) );


// let nn = 9, num = 99
// console.log(nn.toString(2), 4 >> 1 );

// console.log(~nn + 1 + num);


// function fun(cal){
//      cal()
//      console.log("run...");
// }
// function cal(){
// console.log("cal");
// }
// fun(cal)





// let obj = {
//      first : "ghj",
//      second : undefined
// } 
// let arObj = Object.values(obj)
// console.log(arObj);

// arObj.map((curElem, index) => {
//      console.log(curElem ? curElem : "");
// })
// console.log(obj);







// const adventurer = {
//      name: null,
//      cat: {
//        name: 'Dinah',
//        km:null
//      },
//      someNonExistentMethod: () => {
//           console.log("lkjhg");
//      }
//    };

// console.log(adventurer.dog); // undefined
// // console.log(adventurer.dog.name); // TypeError: Cannot read property 'name' of undefined
// // For access this nested property which give error so for ignore that error we can use optional chaining with "?." 
// // Example :- 
// console.log(adventurer.dog?.name); // undefined
//   console.log(adventurer.someNonExistentMethod?.()); // TypeError: adventurer.someNonExistentMethod is not a function

// console.log(typeof adventurer.cat.km);

// function add(a, b){
// if(a < 0 && b < 0){
//   while(a !== 0){
//     a++;
//     b--;
//   }
//   return b
// }else if(a > b){
//     while(a !== 0){
//       a--;
//       b++;
//     }
//     return b
//   }else{   
//     while(b !== 0){
//       b--;
//       a++;
//     }
//     return a
//   }
// }
// let num1 = 0, num2 = 678
// console.log(add(num1, num2));
// console.log(num1 > num2, num1--, num1);


// async function fun(cl){
//      // let res = await cl()
//      // return res
//      return await cl()
// }

// function cllback(){
//      return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                // resolve(200)
//                reject(400)
//           }, 1000);
//      })
// }

// fun(cllback).then(res => console.log(res)).catch(err => console.log(err))








// let str = "my name is akash is"
// let reverseStr = ""

// for(let i = 0; i < str.length ; i++){
//      reverseStr += str[str.length - i - 1]
// }

// console.log(reverseStr);


// for(var i = 0; i < 3; i++){ // i ka value last time b badhega i is 3
//      console.log(i);
//   setTimeout(() => {
//        console.log(i);
//   }, 2000);
// }



// const books = [
//      { title: "C++", author: "Bjarne" },
//      { title: "C++", author: "Bjarnenew" },
//      { title: "C++", author: "Bjarne" },
//      { title: "Java", author: "James" },
//      { title: "Python", author: "Guido" },
//      { title: "Java", author: "James" },
//      { title: "Java", author: "new James" },
// ];


// // let strBooks = books.map(JSON.stringify)
// let uniqeBooks = []
// for(let i = 0; i < books.length ; i++){
//      // if(!uniqeBooks.includes(strBooks[i])){
//      //      uniqeBooks.push(strBooks[i])
//      // }

//      if(i === books.findIndex(item => item.title === books[i].title )){
//           uniqeBooks.push(books[i])
//      }

// }

// console.log(uniqeBooks);




// console.log("mkmkm");




// function fun(str){


//      let arr = str.split(" ")
//      let logestStr = arr.reduce((acc, ele, ind) => {
//           if(acc.length < ele.length ){
//                acc = ele
//           }
//           return acc
//      }, "")
//      return logestStr


//      // let longestIndex = 0, logestStr = "" 
//      // for(let i of arr){
//      //      if(i.length > longestIndex){
//      //           logestStr = i
//      //           longestIndex = i.length
//      //      }
//      // }
//      // return logestStr
// }
// let str = "i am a harsh sdfghjkiuyt jain"
// console.log(fun(str));





// function fun(obj1, obj2){    
//      let res = []



//      // let result = {}
//      // for(let i of Object.keys(obj1)){
//      //      for(let j of Object.keys(obj2)){
//      //           if(i === j){
//      //                if(obj1[i] === obj2[j]){
//      //                     result[i] = obj1[i]
//      //                }
//      //           }
//      //      }
//      // }
//      // return result
// }
// const string1 = [1,2,3,4,5]
// const string2 = [ 10, 12, 3,4, 14  ]

// console.log(fun(string1, string2)); // { c: 5, e: 7 }



// let obj = {
//      name: "harsh",
//      age: 24,
//      childObj: {
//           name: "nyn"
//      },
//      childArr: [1, 2, 3]
// }

// let obj = [ 1,2,3,4, [ 5,6 ] ]

// function deepClone(obj) {


//      if (obj === null || typeof obj !== 'object') {
//           // If obj is null or not an object, return it as is
//           return obj;
//       }

//       // Create an empty object or array to store the cloned properties
//       const clone = Array.isArray(obj) ? [] : {};

//       // Iterate over each property of the object
//       for (let key in obj) {
//           if (obj.hasOwnProperty(key)) {
//               // Recursively clone nested objects or arrays
//               clone[key] = deepClone(obj[key]);
//           }
//       }

//       return clone;
// }
// let duplicateObj = deepClone(obj)
// duplicateObj[4][0] = 999 
// console.log(duplicateObj, obj);

// let duplicateObj =  Object.assign({}, obj)
// let duplicateObj = JSON.parse(JSON.stringify(obj))
// duplicateObj.childObj.name = "new name"
// console.log(duplicateObj, obj); 




// let newArr = [1,2,3, [ 5, 6 ]]

// function cloneArr(ar){
//      if(!Array.isArray(ar)){
//           return ar
//      }else{
//           let newAr = cloneArr(ar)
//           return newAr
//      }
// }

// let duplicatedArr = cloneArr(newArr)
// console.log(duplicatedArr);



// let Pros = new Promise((resolve, reject, final) => {
//      setTimeout(() => {
//           return resolve(200)
//           // return reject("Error")
//      }, 2000);
// })

// async function fun(){
//      let result = await Pros
//      return result
// }

// fun().then(res => {
//      console.log("res", res);
// }).catch(err => {
//      console.log("err", err);
// }).finally((rs) => {
//      console.log("rs==>", rs);
// })

// console.log(fun());









// function debounce(func, delay) {
//      let timeoutId;

//      return function(...args) {
//      //     const context = this;
//      //     const args = arguments;

//          clearTimeout(timeoutId);

//          timeoutId = setTimeout(() => {
//              func.apply(this, args);
//          }, delay);
//      };
//  }



// // Example function to be debounced
// function processInput(value) {
//      console.log("Processing input:", value);
//  }

//  // Debounce the function with a delay of 500 milliseconds
//  const debouncedProcessInput = debounce(processInput, 500);

//  // Simulate multiple input events
//  debouncedProcessInput("Input 1");
//  debouncedProcessInput("Input 2");
//  debouncedProcessInput("Input 3");
//  debouncedProcessInput("Input 4");
//  debouncedProcessInput("Input 5");

// Only the last input will be processed after the delay








//  function throttle(func, delay) {
//      let lastCalledTime = 0;
//      return function(...args) {
//          const now = Date.now();
//          console.log(now);
//          if (now - lastCalledTime >= delay) {
//              func.apply(this, args);
//              lastCalledTime = now;
//          }
//      };
//  }

// function doSomething() {
//     console.log('Doing something...');
// }

// const throttledFunction = throttle(doSomething, 1000); // Throttle to once per second

// // Call the throttled function multiple times
// throttledFunction(); // Output: "Doing something..."
// setTimeout(() => throttledFunction(), 500); // This call will be ignored due to throttling
// setTimeout(() => throttledFunction(), 500); // This call will be ignored due to throttling
// setTimeout(() => throttledFunction(), 1000); // This call will be executed after 1 second


// function myThrottle(callBack, fixedTime){
//      let localeTime = 0;
//      return function(...args){
//           let now = Date.now()
//           // console.log(now);
//           if(now - localeTime >= fixedTime){
//                callBack.apply(this, args)
//                localeTime = now
//           }
//      }
// }

// function randumFunction(){
//      console.log("value is ==>", );
// }

// const trottleFun =  myThrottle(randumFunction, 1000)


// trottleFun()
// setTimeout(trottleFun, 500);
// setTimeout(trottleFun, 500);
// setTimeout(trottleFun, 1000);











//  Find Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.


// function findMissingNumber(nums){

//      return nums
// }
// const nums = [0, 1, 2, 4, 5]; // Array containing numbers from 0 to 5 with one missing number
// const missingNumber = findMissingNumber(nums);
// console.log("Missing Number:", missingNumber);


// function debounce(func, delay) {
//      let timeoutId;

//      return function(...args) {
//          // const context = this;
//      //     const args = arguments;

//          if(timeoutId) clearTimeout(timeoutId);

//          timeoutId = setTimeout(() => {
//              func.apply(this, args);
//          }, delay);
//      };
//    }



//    // Example function to be debounced
//    function processInput(value) {
//      console.log("Processing input:", value);
//    }

//    // Debounce the function with a delay of 500 milliseconds
//    const debouncedProcessInput = debounce(processInput, 500);

//    // Simulate multiple input events
//    debouncedProcessInput("Input 1");
//    debouncedProcessInput("Input 2");
//    debouncedProcessInput("Input 3");
//    debouncedProcessInput("Input 4");
//    debouncedProcessInput("Input 5");  //  o/p is Input 5 


// function fun(obj1, obj2){    
//      let result = {}
//      for(let i in obj1){
//           for(let j in obj2){
//                if(i === j){
//                     if(obj1[i] === obj2[j]){
//                          result[i] = obj1[i]
//                     }
//                }
//           }
//      }
//      return result
//    }
//    const string1 = { a: 1, b: 4, c: 5, d: 6, e: 7 }
//    const string2 = {a: 2, c: 5, e: 7, f: 4 }
//    console.log(fun(string1, string2)); // { c: 5, e: 7 }



// function flattenArray(nsArr){
//      return nsArr.reduce((acc, val) => {
//           return acc.concat(Array.isArray(val) ? flattenArray(val) : val)
//      }, [])
// }
// const nestedArray = [1, [2], [[3, 4]],[9, [8, 7, [[23]]]]];
// const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray);


// let ar = "kjhgf"
// let newAr =  ar.concat("kjhg", "kjhg" )
// console.log(newAr, ar);





// Aman Choudhary
// 12:45
// https://jsfiddle.net/pmdqf370/2/
// You
// 13:06
// https://jsfiddle.net/e50zkvph/
// Aman Choudhary
// 13:06
// https://jsfiddle.net/qvo7rdtu/
// You
// 13:26
// https://jsfiddle.net/L6td0xk3/1/







// {
//      "info": {
//        "_postman_id": "37caa015-574f-49a4-818c-350a04ed9e16",
//        "name": "API for integration",
//        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
//        "_exporter_id": "33086050"
//      },
//      "item": [
//        {
//          "name": "add accident report",
//          "request": {
//            "auth": {
//              "type": "bearer",
//              "bearer": [
//                {
//                  "key": "token",
//                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYW5hZ2VySWQiOiI2NWI3OGYyZGRlNjcwZmZlNWRiZDY4NDIiLCJlbWFpbCI6InBpeXVzaC52eWFzQHNhdmllc2FpbmZvdGVjaC5jb20iLCJyb2xlIjoiTWFuYWdlciIsImlhdCI6MTcwOTc5MjkxMiwiZXhwIjoyMDE3Mzc2OTEyfQ.VwTxP89LF-tJGLFaHw2vMrDHrQzpTmKU2rvJFgvmU_4",
//                  "type": "string"
//                }
//              ]
//            },
//            "method": "POST",
//            "header": [],
//            "body": {
//              "mode": "raw",
//              "raw": "{\r\n    
//              \"emp_fullname\":\"shubham vishwakarma\",\r\n    
//              \"emp_phone_no\":\"9898989898\",\r\n    
//              \"emp_state\":\"M.p.\",\r\n    
//              \"emp_city\":\"Indore\",\r\n    
//              \"emp_hotel\":\"hotelx\",\r\n    
//              \"emp_social_security\":\"rfrfe\",\r\n    
//              \"emp_date\":\"20/11/2023\",\r\n    
//              \"employee_address\":\"TBD\",\r\n    
//              \"emp_gender\":\"Male\",\r\n    
//              \"emp_postal_code\":\"452001\",\r\n    
//              \"emp_civil_status\":\"defe\",\r\n    
//              \"emp_degree\":\"fdsfds\",\r\n    
//              \"emp_hire_date\":\"fdfdf\",\r\n    
//              \"emp_salary\":\"20000\",\r\n    
//              \"emp_average_hours_per_week\":\"40\",\r\n    
//              \"emp_position_title_second_job\":\"fdfsf\",\r\n    
//              \"emp_company_name\" :\"saviesa\",\r\n    
//              \"emp_responsibility\" :\"dfefde\",\r\n    
//              \"emp_incident_details\" :\"cdced\",\r\n   
//              \"emp_incident_date\":\"12/12/2023\",\r\n    
//              \"emp_today_date\" :\"20/11/2023\",\r\n    
//              \"emp_incident_time\":\"10:30\" ,\r\n    
//              \"emp_start_time_shift\":\"04:50\" ,\r\n    
//              \"emp_workers_compensation_claims\":\"ccsd\",\r\n    
//              \"supervisor_state\" :\"mp\",\r\n    
//              \"supervisor_city\":\"indore\",\r\n    
//              \"supervisor_hotel\" :\"hotel radha krishna\",\r\n    
//              \"supervisor_postal_code\":\"452001\" ,\r\n    
//              \"supervisor_name\" :\"piyus\",\r\n    
//              \"supervisor_phone_no\":\"58689586\" , \r\n    
//              \"injured_part\":\"left hand\", \r\n    
//              \"damage\":\"yes\", \r\n    
//              \"claim_questionable\":\"df\",\r\n    
//              \"claim_answer\":\"fds\" , \r\n    
//              \"medical_center_state\":\"mp\",\r\n    
//              \"medical_center_city\" :\"indore\", \r\n    
//              \"medical_center_postel_code\":\"3434234234\", \r\n    
//              \"medical_center_name\":\"MY\", \r\n    
//              \"representative_name\":\"chandransh\", \r\n    
//              \"suit\":\"defde\"\r\n}",
//              "options": {
//                "raw": {
//                  "language": "json"
//                }
//              }
//            },
//            "url": {
//              "raw": "http://16.171.34.145:5000/api/manager/add-accident-report",
//              "protocol": "http",
//              "host": [
//                "16",
//                "171",
//                "34",
//                "145"
//              ],
//              "port": "5000",
//              "path": [
//                "api",
//                "manager",
//                "add-accident-report"
//              ]
//            }
//          },
//          "response": []
//        }
//      ]
//    }



/* Get the second most frequently occurring element, including the frequency count; if two numbers share the same frequency, the smallest one will be selected.*/

// const sortedArray = [1, 2, 4, 4, 6, 6, 4, 6, 6, 7, 7, 9, 7, 10];
// function mostRepeatedAndFreq(arr) {
//   let countWith = {}
//   for(let i of arr){
//     if(!countWith[i]){
//       countWith[i] = 0
//     }
//     countWith[i] = ++countWith[i] 
//   }
//   console.log(countWith);
//   let sortVal = Object.values(countWith).sort((a, b) => a - b)
//   let ndsortVal = sortVal[sortVal.length - 2]
//   let element;
//   for(let i in countWith){
//     console.log(countWith[i]);
//     if(countWith[i] === ndsortVal){
//       element = Number(i)
//       break
//     }
//   }
// return [element, ndsortVal]
// }

// const result = mostRepeatedAndFreq(sortedArray);
// console.log(result); // [4, 3] // Where 4 is the second most repeated element and 3 is the Frequency count



// const input = [{ id: 1, value: 20 }, { id: 2, value: 25 }, { id: 3, value: 2 }, { id: 1, value: 4 }, { id: 2, value: 6 }];
// const merge = () => {
//   let result = []
//  result = input.reduce((acc, curElem) => {
//   let ind = acc.findIndex(ele => ele.id === curElem.id)
//     if(ind === -1){
//       acc.push(curElem)
//     }else{
//       acc[ind].value += curElem.value 
//     }
//     return acc
//  }, [])
//   return result
// }
// console.log("Output:  ", merge(input))




// function mostRepeatedAndFreq(arr) {

//     let countWith = {};
//     // Count occurrences of each element
//     arr.forEach(num => {
//         countWith[num] = (countWith[num] || 0) + 1;
//     });

//     // console.log(countWith); // { '1': 1, '2': 1, '4': 3, '6': 4, '7': 3, '9': 1, '10': 1 }

//     // Get frequencies and sort them
//     let frequencies = Object.values(countWith).sort((a, b) => b - a);

//     // Get the second highest frequency
//     let secondHighestFreq = frequencies[1];

//     // Find the element corresponding to the second highest frequency
//     let element = Object.keys(countWith).find(key => countWith[key] === secondHighestFreq);

//     return [parseInt(element), secondHighestFreq];
// }

// const sortedArray = [1, 2, 4, 4, 6, 6, 4, 6, 6, 7, 7, 9, 7, 10];
// const result = mostRepeatedAndFreq(sortedArray);
// console.log(result); // [4, 3]



// function fib(num){
//   if( num === 1){
//     return [ 0, 1 ]
//   }else{
//     let result = fib(num - 1)
//     if(result[result.length - 1] + result[result.length - 2] < num){
//       result.push(result[result.length - 1] + result[result.length - 2]);
//     }
//     return result
//   }
// }
// let n = 50
// console.log(fib(n))



// for (var number = 10; number >= 1; number--) {
//      console.log("Number ==> ", number);
//      // document.writeln(number);
// }  


// var count = 0;  
// while (count < 10)  
// {  
//      console.log(count);  
//      count++;  
// } 

// console.log("count ", count);


// var grade='D';  
// var result;  
// switch(grade)  
// {  
// case'A':  
//         result+="10";  
// case'B':  
//         result+=" 9";  
// case'C':  
//         result+=" 8";  
// case 'P':
// result+=" 6";  
// default:  
//         result+=" 0";  
// }  
// console.log(result);  


// console.log("string".substring(-3,-2)); // Infinity its statement is not consider as an error


// function solve(arr, rotations){
//      if(rotations == 0) return arr;
//      for(let i = 0; i < rotations; i++){
//           let element = arr.pop();
//           arr.unshift(element);
//           console.log("arr==>", arr, i);
//      }
//      return arr;
//     }
//     console.log(solve([44, 1, 22, 111], 5));



// console.log(2 === 2.0);

var js = (function(x) {return x*x;}(10))
console.log(js, typeof undefined);
let ss = 123
console.log(ss[1]);