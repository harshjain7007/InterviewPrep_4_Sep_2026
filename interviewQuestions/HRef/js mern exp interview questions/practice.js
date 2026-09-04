// voiler plate 
// function fun(s){
//     return s
// }
// let str = 'loveleecode'
// console.log(fun(str))


// // verify prime number

// let num = 2  /// SELF
// function findPrimeNumber(num) {
//     let isPrime = false
//     for(let i = 2; i < num ; i++ ){
//         if(num%i === 0){
//             isPrime = true
//             break;
//         }else{
//             isPrime = false
//         }
//     }
//     if(isPrime){
//         console.log('its not a prime number')
//     }else{
//         console.log('prime number')
//     }
// }
// findPrimeNumber(num)


// let number =  18;
// let isPrime =  true;
// let factor = []
// if(number === 1){
//     console.log('composite number')
// }else if(number > 1){
//     // console.log('not prime number')
//     for(let i = 2; i < number; i++){
//         if(number%i===0){
//             factor.push(i)
//             isPrime = false
//             // break;
//         }else{     
//             isPrime = true
//         }   
//     }
//     if(!isPrime){
//         console.log('not prime')
//     }else{
//         console.log('prime number')
//     }
// }else{
//     console.log('less than one')
// }
// console.log(factor)


// let n = 12;
// function fib(n){
//     if(n <= 1 ){
//         return n 
//     }else {
//         return fib(n -1) + fib(n-2)
//     }
// }
// for(let i = 0; i < n; i++){
//     console.log(fib(i)) 
// }



////////====  find the largest number of among three numbers
// let first = 233
// let second = 44
// let third = 2333

// let arr = [ first, second, third] /// SELF
// console.log(Math.max(...arr))

// let largestNum ;
// // 1st solution
// if(first >= second && first >= third){
//     largestNum = first
// }else if(second >= third){
//     largestNum = second
// }else{
//     largestNum = third
// }
// console.log(largestNum)

// // 2nd solution
// let maxNum = Math.max(first,second,third)
// console.log(maxNum) 





//////==== print all prime number in interval //
// let lowerNumber = 1;
// let higherNumber =  19;
// for(let i = lowerNumber; i <= higherNumber; i++){
//     let flag = true
//     for(let j = 2; j < i; j++ ){
//         if(i%j==0){
//             flag = false
//             break
//         }
//     }
//     if(i > 1 && flag){
//         console.log(i)
//     }
// }



//////////======= find tha arstrong number its means 
// Armstrong number = Armstrong number is a number that is equal to the sum of cubes of its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers.
// for(let i = 1; i <= 20000; i++){  /////  self made
//     function digEqual(k){
//         const len = k.length
//         let total = 0;
//         for(let j = 0; j < len; j++){
//             total += Number(k[j]**len)   
//         }
//         return total
//     }
//     let num = digEqual(`${i}`)
//     if(num === i){
//         console.log(i)
//     }
// }


/////====  find tha sum of natural number 
// Natural Numbers = Natural numbers are a part of the number system, including all the positive numbers from 1 to infinity. Natural numbers are also called counting numbers because they do not include zero or negative numbers. They are a part of real numbers including only the positive integers, but not zero, fractions, decimals, and negative numbers.
// let lowerNumber = 5;
// let higherNumber = 10;
// let sum = 0;
// for(let i = lowerNumber; i <= higherNumber; i++){
//     sum += i
// }  
// console.log(sum)


// ///////======  last digit is same then sum that numbers 
// let firstNum = 25;
// let secondNum = 425;
// let thirdNum = 1545;
// let resultFirst = firstNum % 10  //// good way to find last digit
// let resultSecond = secondNum % 10
// let resultThird = thirdNum % 10
// if( resultFirst == resultSecond && resultFirst == resultThird ){
//     console.log('which have a same last digit')
// }else{
//     console.log('which have not a same last digit')
// }


////===== The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two integers is the largest integer that can exactly divide both integers (without a remainder).
// Find HCF using for Loop :-
// let firstNum = 4;
// let secondNum = 6;
// let hcf;
// for(let i = 1; i <= firstNum && i <= secondNum; i++ ){
//     if( firstNum % i == 0 && secondNum % i == 0 ){
//         hcf = i
//     }
// }
// console.log(hcf)
// let lcf = (firstNum * secondNum) / hcf  // finding lcf using hcf method 
// console.log(lcf)


/////=== The Least Common Multiple (LCM) of two integers is the smallest positive integer that is perfectly divisible by both integers.
// let num1 = 8;
// let num2 = 6;
// let max = (num1 > num2) ? num1 : num2
// while(true){
//     if(max % num1 == 0 && max % num2 == 0){
//         console.log(`lcf is ${max}`)
//         break;
//     }
//     max++
// }

////===  if want generator random number in between 50 to 100
// console.log(parseInt(Math.random()*(100-50)+50))


////==== JavaScript Program to Find Sum of Natural Numbers Using Recursion
// let n =  5;
// function totalSum(num){
//     if(num > 0){
//       return num + totalSum(num - 1)
//     }else{
//       return num
//     }
// }
// console.log(totalSum(n))


//////==== JavaScript Program to Find Factorial of Number Using Recursion
// let n =  5;
// function fact(num){
//     if(num == 0){
//         return 1 
//     }else{
//         return num * fact(num - 1)
//     }
// }
// console.log(fact(n))


//////====  JavaScript Program to Convert Decimal to Binary
///// using string 
// const number = 6
// const result = number.toString(2); // convert to binary
// console.log('Binary:' + ' ' + result);


// program to convert ascii code of value and strigns
// let str = 'a'
// let val = '8'
// console.log(str.charCodeAt())
// console.log(val.codePointAt())


////////======  JavaScript Program to Pass Parameter to a setTimeout() Function
// function fun(x, y){
//     console.log('fun running..', x  + y)
// }
// setTimeout(fun, 2000, 5, 6);
// console.log('before setTime out')



///////=====  JavaScript Program to Perform Function Overloading
// When a function name is overloaded with different jobs it is called Function Overloading. In Function Overloading “Function” name should be the same and the arguments should be different.

// function fun(j){    // using ifelse
//     if(arguments.length == 0){
//         console.log('that function have no any arguments')
//     }else if(arguments.length == 1){
//         console.log('function wants at least two or more argumanets')
//     }else{
//         let result = 0;
//         let len = arguments.length
//         for(let i = 0; i < len; i++){
//             result += arguments[i]
//         }
//         console.log(result)
//     }
// }
// fun(4,5,7)
// program to perform function overloading //// using switch case 
// function sum() {
//     switch (arguments.length) {
//     case 0:
//         console.log('You have not passed any argument');
//         break;
//     case 1:
//         console.log('Pass at least two arguments');
//         break;
//     default:
//         let result = 0;
//         let length = arguments.length;

//         for (i = 0; i < length; i++) {  
//             result = result + arguments[i];  
//         }  
//         console.log(result);
//         break;
//     }
// }
// sum();
// sum(5); 
// sum(5, 9);    
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);


////////////===============  Array Of Objects  ====/////
// JavaScript Program to Shuffle Deck of Cards
// let suits = [ 'spades', 'diamonds', 'heart', 'club']
// let values = [
//     'ace',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'jack',
//     'queen',
//     'king'
// ];
// let deck = [];
// for(let i = 0; i < suits.length; i++){
//     for(let j = 0; j < values.length ; j++){
//         let card = { suit :  suits[i] , value : values[j] }
//         deck.push(card)
//     }
// }
// console.log(deck.length) // 52
// for(let i = deck.length - 1 ; i > 0 ; i--){
//     let j = Math.floor(Math.random() * i)
//     let temp = deck[i]
//     deck[i] = deck[j]
//     deck[j] = temp
// }
// for(let i = 0; i < 5; i++){
//     console.log(`${deck[i].suit} of ${deck[i].value}`)
// }

///////=== Remove Properties from Objects  
// let obj  = { 
//     name : 'harsh',
//     age : 23
// }
// console.log(obj)
// delete obj.age  //// delete keyword for remove properties
// console.log(obj)

// let haskey =  'name' in obj  ////  for find key is present or not 
// console.log(haskey) 


////==   program loop throug an object
// let obj  = { 
//     name : 'harsh',
//     age : 23
// }
// for(let keys in obj){
//     console.log(keys, " = ", obj[keys])
// }
// console.log(Object.keys(obj).length) // 2

// let objTwo = {
//     ...obj,  /// Merge properrties of objects
//     gender : 'male',
//     degree : 'B-tech'
// }
// console.log(objTwo)


/////====  Program to add key value pairs in a object
// let obj  = { 
//     name : 'harsh',
//     age : 23
// }

// obj.gender = 'male'
// console.log(obj)

///////===  convert Object to string
// let objStr = JSON.stringify(obj)
// console.log(objStr)
// let objStrSecondWay = String(obj['age']) ///  which property have converted to string 
// console.log(objStrSecondWay)



/////===  program to replace all instances of a character in a string

// let str = 'harsh jain'
// // let newStr = str.replace(/a/g, 'A')  /// RegEx Expression 
// // console.log(newStr)
// let newStrTwo = str.split('a') // [ 'h', 'rsh j', 'in' ]
// let newStrTwoResult = newStrTwo.join('A')
// console.log(newStrTwoResult) ///  using built in methods


////== JavaScript Program to Remove Specific Item From an Array
// let arr =  [ 'harsh', 22, 'nyn' ]
// let newArr = arr.filter((curElem)=>{  /// usong filter method 
//     return curElem != 'nyn'
// })
// console.log(arr)
// console.log(newArr)

// function removeIndex(index, ar){   ///// using splice method 
//     let deletedIndex =  ar.indexOf(index)
//     ar.splice(deletedIndex)
//     return ar
// }
// let newArr = removeIndex('nyn', arr)
// console.log(newArr)

///////====  adding Element using splice method 
// let newArr =  arr.splice(arr.length, 0, 'harshjain')
// console.log(newArr)
// console.log(arr)



/////////========  JavaScript Program to Append an Object to An Array
// let array = [];
// let obj = {
//     name : 'harsh',
//     age : 23
// }
// array.push(obj)   ///  using push mehtod
// console.log(array)


// array.splice(array.length, 0, obj) //  using splice method
// console.log(array)


////////======  JavaScript Program to Check if An Object is An Array // 
// Note: For an array, the typeof operator returns an object.

// let arr = [ 1,2,3,4,5]
// console.log(arr)
// arr.length = 0
// arr.splice(0, arr.length)


////  ====  adding element inside of array 
// let arr = [ 1,2,3,4,5]
// arr.unshift('kk')
// arr.shift('kk')
// arr.push('mk')
// arr.pop()
// console.log(arr)
// arr.splice(arr.length,0,'harsh')
// console.log(arr)
// let newArr =  [78,50505].concat(arr)
// console.log(newArr)


/////===  Remove duplicates from arrays //  get a unique value 
// let arr =  [45,12,33,33,44,44,45]
// let newArr = []
// for(let i of arr){
//     if(newArr.indexOf(i) === -1){
//         newArr.push(i)
//     }
// }
// console.log(newArr)


// var arr = ["apple", "mango", "apple",
//         "orange", "mango", "mango"];
//         function removeDuplicates(arr) {  /// 1st
//             return arr.filter((item, 
//                 index) => arr.indexOf(item) === index);
//         }

//         console.log(removeDuplicates(arr));

// function removeDuplicates(arr) {  /// 2nd
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates(arr));


////////====== JavaScript Program to Sort Array of Objects by Property Values
// let arrOfObj = [  //// == self 
//     {
//         name : 'harsh',
//         age : 23
//     },
//     {
//         name : 'anayan',
//         age : 24
//     },
//     {
//         name : 'zzzz',
//         age : 23
//     },
//     {
//         name : 'cccc',
//         age : 23
//     },
// ]
// console.log(arrOfObj)
// let sortStrName = []
// for(let i = 0; i < arrOfObj.length; i++){
//     sortStrName.push(arrOfObj[i].name)
//     sortStrName.sort()
// }
// console.log(sortStrName)
// let sortedArrOfObj = []
// for(let i = 0; i < sortStrName.length; i++){
//     for(let j = 0 ; j < arrOfObj.length; j++){
//         if(sortStrName[i] == arrOfObj[j].name ){
//             sortedArrOfObj.push(arrOfObj[j])
//         }
//     }
// }
// console.log(sortedArrOfObj)


// programiz solution first
// program to sort array by property name  /// Donts know how its runs 
// function compareName(a, b) {
//     // converting to uppercase to have case-insensitive comparison
//     const name1 = a.name.toUpperCase();
//     const name2 = b.name.toUpperCase();
//     let comparison = 0;
//     if (name1 > name2) {
//         comparison = 1;
//     } else if (name1 < name2) {
//         comparison = -1;
//     }
//     return comparison;
// }
// const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}, {name: 'Harsh', age:23}, {name: 'Nayan', age:23}];
// console.log(students.sort(compareName));


// program to sort array by property name
// function compareAge(a, b) { // according to programize // but dont know 
//     // console.log(a)
//     // console.log(b)
//     return a.age - b.age;
// }
// const students = [{name: 'Sara', age:24},{name: 'John', age:22}, {name: 'Jack', age:27}];
// console.log(students.sort(compareAge));




/////====  JavaScript Program to Create Two Dimensional Array 

// let dimensionalArr =  [1, 2, 3, 4, 5, 6, 7, 8];
// let twoDimesonalArr =  [];
// for(let i = 0; i < dimensionalArr.length; i++){
//     for(let j  = 0; j < 2; j++){
//     let tempArr = []
//     tempArr.push(dimensionalArr[i])
//     twoDimesonalArr.push(tempArr)
//     tempArr = []
//     break
//    }
// }
// console.log(twoDimesonalArr)


// // // //   program to create a two dimensional array 
// function twoDimensionArray(a, b) {
//     let arr = [];
//     // creating two dimensional array
//     for (let i = 0; i< a; i++) {
//         for(let j = 0; j< b; j++) {
//             arr[i] = [];
//         }
//     } 
//     // inserting elements  to array
//     for (let i = 0; i< a; i++) {
//         for(let j = 0; j< b; j++) {
//             arr[i][j] = j;
//         }
//     }
//     return arr;
// }
// const x = 2;
// const y = 3;
// const result = twoDimensionArray(x, y);
// console.log(result);


// let dimensionalArr =  [[1, 2],[3, [4, 5]], [6, 7, 8, 9]];
// console.log(dimensionalArr.flat(Infinity)) // which is way to convert multidimesonal array to simple array


////// ==== JavaScript Program to Extract Given Property Values from Objects as Array
// function extaracKey(arr, prop){
//    let extractedArr = arrOfObj.map(item => item[prop])
//    return extractedArr
// }
// let arrOfObj = [
//     {a : 1, b : 2}, {a : 3, b : 4}, {a : 5, b : 6}
// ]
// let exArr = extaracKey(arrOfObj, 'a')
// console.log(exArr)


//// === JavaScript Program to Compare Elements of Two Arrays
// function compareTwoArr(arrFirst, arrSecond){
//     // let machedElem = [];   // SELF Solution return Matched elements
//     // for(let i = 0; i < arrFirst.length; i++){
//     //     for(let j = 0; j < arrSecond.length; j++){
//     //         if(arrFirst[i] == arrSecond[j] ){
//     //             machedElem.push(arrSecond[j])
//     //         }
//     //     }
//     // }
//     // return machedElem

//     let matchResult =  JSON.stringify(arrFirst) == JSON.stringify(arrSecond)
//     if(matchResult){   /// /// Programiz Solutiion
//         return 'all Elements are same'
//     }else{
//         return 'not same'
//     }
// }
// let arr =  [4,5,6,7]
// let arrtwo = [4,5,6,7,10 ]
// let result = compareTwoArr(arr, arrtwo);
// console.log(result)


////// =====  JavaScript Program to Get Random Item From an Array
// let arr = [ 'hsh', 'nyn', 'vsv' , 'ash' ]
// let randomElem = arr[parseInt(Math.random()*arr.length)]
// console.log(randomElem)


//////====  JavaScript Program To Perform Intersection Between Two Arrays

// function intersectionArrays(arrFirst, arrSecond){  //  self solution 
//     let comonArr = []
//     // for(let i = 0; i < arrSecond.length ; i++){  //// using for loop
//     //     for(let j = 0; j < arrFirst.length; j++){
//     //         if( arrSecond[i] == arrFirst[j]){
//     //             comonArr.push(arrSecond[i])
//     //         }
//     //     }
//     // }

//     ////  using filter method
//     comonArr = arrFirst.filter( curElem => arrSecond.indexOf(curElem) !== -1)
//     return comonArr
// }
// let arrOne = [1,2,3,5,6,5,5] 
// let arrTwo = [5,6,7 ]
// let result = intersectionArrays(arrOne, arrTwo)
// console.log(result)


///// Using set ///  A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.
// function performIntersection(arr1, arr2) {
//     // converting into Set
//     const setA = new Set(arr1);
//     const setB = new Set(arr2);
//     let intersectionResult = [];
//     for (let i of setB) {
//         console.log(i)
//         if (setA.has(i)) {     /// which is return true false value
//             intersectionResult.push(i);
//         }
//     }
//     return intersectionResult;
// }
// const array1 = [1, 2, 3, 5, 9, 5, 3];
// const array2 = [1, 3, 5, 8];
// const result = performIntersection(array1, array2);
// console.log(result);

///// ===  JavaScript Program to Split Array into Smaller Chunks
// function smallerArray(ar, divider){
// let smArr = [];  ////  SELF solution
// for(let i = 0; i < divider; i++){
//     for(let j = 0 ; j < divider; j++){
//         smArr = ar.splice(0, divider )
//         console.log(smArr)
//     }
// }

// //  programiz -  using slice()  mehtod
//  for(let i = 0; i < ar.length; i += Chunks){
//     let temp = ar.slice(i , i + Chunks)
//     console.log(temp)
//  } 

///// programiz using splice method
// while(ar.length > 0){
//     let tempAr = ar.splice(0, Chunks)
//     console.log(tempAr)
// }
// }
// let arr = [1,2,3,4,5,6,7,8]
// let Chunks = 2 
// smallerArray(arr, Chunks)



// let obj = [
//     {
//         employee_id: 1,
//         employee_name: "Aman",
//     },
//     {
//         employee_id: 2,
//         age: {
//             arg: 50
//         },
//         employee_name: "Bhargava",
//     },
//     {
//         employee_id: 3,
//         employee_name: "Chaitanya",
//     },
// ];
// let elem = obj.find((curElem) =>  curElem?.age?.arg === 50)
// elem.age.arg = 99
// console.log(elem);
// console.log(obj);

// console.log(obj.some());





// let mechanical_students_details = [
//     {
//         student_id: 1,
//         student_name: "Aman",
//         student_age: 23,
//     },
//     {
//         student_id: 2,
//         student_name: "Chaitanya",
//         student_age: 24,
//     },
//     {
//         student_id: 3,
//         student_name: "Dharmendra",
//         student_age: {}
//     },
// ];

// let cse_students_details = [
//     {
//         student_id: 1,
//         student_name: "Aman",
//         student_age: 23,
//     },
//     {
//         student_id: 2,
//         student_name: "Chaitanya",
//         student_age: 24,
//     },
//     {
//         student_id: 3,
//         student_name: "Dharmendra",
//         student_age: {}
//     },
// ];


// function compareArrays(arr1, arr2) {
//     // Check if the lengths of the arrays are different
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     // Check if every object in arr1 has a matching object in arr2
//     return arr1.every(obj1 =>
//         arr2.some(obj2 =>
//             obj1.student_id === obj2.student_id &&
//             obj1.student_name === obj2.student_name &&
//             obj1.student_age === obj2.student_age
//         )
//     );
// }
// console.log(compareArrays(mechanical_students_details, cse_students_details));


// const numbers = [1, 2, 3, 4, 5];
// // Check if at least one element is greater than 5
// const hasGreaterThanThree = numbers.some((number, index, numbers) => number > 5);
// console.log(hasGreaterThanThree); // Output: false



// let mechanical_students_details = [
//     {
//         student_id: 1,
//         student_name: "Aman",
//         student_age: 23,
//     },
//     {
//         student_id: 2,
//         student_name: "Chaitanya",
//         student_age: 24,
//     },
//     {
//         student_id: 3,
//         student_name: "Dharmendra",
//         student_age: { name: {
//             subName: "sub"
//         }}
//     },
// ];

// let cse_students_details = [
//     {
//         student_id: 1,
//         student_name: "Aman",
//         student_age: 23,
//     },
//     {
//         student_id: 2,
//         student_name: "Chaitanya",
//         student_age: 24,
//     },
//     {
//         student_id: 3,
//         student_name: "Dharmendra",
//         student_age: { name: {
//             subName: "sub"
//         }}
//     },
// ];

// function compareArrays(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     // Helper function to recursively compare objects
//     const isEqual = (obj1, obj2) => {
//         const keys1 = Object.keys(obj1);
//         const keys2 = Object.keys(obj2);

//         if (keys1.length !== keys2.length) {
//             return false;
//         }

//         for (let key of keys1) {
//             const val1 = obj1[key];
//             const val2 = obj2[key];

//             if (typeof val1 === 'object' && typeof val2 === 'object') {
//                 if (!isEqual(val1, val2)) {
//                     return false;
//                 }
//             } else if (val1 !== val2) {
//                 return false;
//             }
//         }
//         return true;
//     };

//     // Compare each object in arr1 with corresponding object in arr2
//     for (let i = 0; i < arr1.length; i++) {
//         if (!isEqual(arr1[i], arr2[i])) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(compareArrays(mechanical_students_details, cse_students_details));



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
// Object.assign(obj, obj2)
// console.log(obj); // { name: 'kkn', age: 23, city: 'Ind', added: 'add', remove: 'remove' }
// const { added, remove, ...newObj } = obj
// console.log(obj);
// console.log(newObj); // { name: 'kkn', age: 23, city: 'Ind' }



// let s = [
//     ["John", 12,  6],
//     ["Jack", 13, "kjkj"],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]
// console.log(Object.fromEntries(s));
// console.log(s.flat(Infinity));



// let employees = [
//     { name: "Tony Stark", department: "IT", id: 1 },
//     { name: "Peter Parker", department: "Pizza", id: 2 },
//     { name: "Bruce Wayne", department: "IT", id: 3 },
//     { name: "Clark Kent", department: "Editing", id: 1 },
//     { name: "Brucejnjnjn Wayne", department: "IT", id: 3 },
//     { name: "Brucejnjn44444jn Wayne", department: "IT", id: 4 },
//     { name: "Peter Parker", department: "Pizza", id: 2 },
// ];
// let result = {}
// for(let i of employees){
//     if(!result[i.department]){
//         result[i.department] = []
//     }
//      result[i.department].push(i)
// }
// console.log(result);



// console.log(Object.fromEntries(Object.entries(employees)));


// console.log(employees.findIndex(item => item.id === 2));

// let ItDepartmentEmployees = employees.filter((curElem, index) => {
//     return curElem.department === "IT"
// })

// let ItEmpNames = employees.reduce((accum, curElem) => {
//     if(curElem.department === "IT") accum.push(curElem.name)
//     return accum
// }, [])

// let uniqueIdEmployeeNames = employees.filter((curElem, index) => {
//     let ind = employees.findIndex(item => item.id === curElem.id)
//     return ind === index
// }).map(curElem => curElem.name)
// // .filter((curElem, index) => )

// let uniqueNameUseingReduce = employees.reduce((accun, curElem, index) => {
//     let ind = employees.findIndex(item => item.id === curElem.id)
//     if(ind === index) accun.push(curElem.name)
//     return accun
// },[])

// let uniqueEleWithObjectValReduce = Object.values(employees.reduce((acc, cur) => {
//     acc[cur.id] = cur.name;
//     return acc;
// }, {}))

// let uniqueIdEmp = employees.reduce((accum, curElem, index) => {
//     if (!accum.includes(curElem.id)) {
//         accum.push(curElem.id);
//     }
//     return accum;
// },[])
// console.log(ItDepartmentEmployees, ItEmpNames, uniqueIdEmp,
//     "uniqueIdEmployeeNames",  uniqueIdEmployeeNames, "uniqueNameUseingReduce", uniqueNameUseingReduce, "uniqueEleWithObjectValReduce", uniqueEleWithObjectValReduce);
// // console.log(ItEmpNames.includes("Tony Star"));



///////---------------------------- add dynamic properties
// let obj = {
//     name: "harsh"
// }
// let age = "dynamic", num = 23, gender = "gender", male = "male" 
// Object.assign(obj, {[age]: num}) // using assign mehtod
// obj[gender] = male // using notation
// console.log(obj);
// let propertName = "Pop", porertyVal = "pup"
// let updatedObj = {
//     ...obj,
//     [propertName]: propertName  // Using ES6 Computed Property Names:
// }
// console.log(updatedObj);

// let obj = { name: 'harsh', dynamic: 23, gender: 'male', Pop: 'PopVal' }
// console.log(Object.entries(obj)[Object.entries(obj).length - 1]);

// let lastKey =  Object.keys(obj)[Object.keys(obj).length - 1]
// console.log(obj[lastKey], obj.Pop);


// lastKey[lastKey.length - 1]



// let ar = [1,2,3,4,5,6]

// console.log(ar[Math.ceil(Math.random()*ar.length)]);


// let books = [
//     { title: "C++", author: "Bjarne" },
//     { title: "Java", author: "James" },
//     { title: "Python", author: "Guido" },
//     { title: "Java", author: "James" },
// ];

// let uniqueAr = []
// let obj = {}
// for(let i  of books){
//     if(!obj[i.title]){
//         obj[i.title] = []
//     }

//     if(obj[i.title].length === 0) obj[i.title].push(i) 
//     // let check = uniqueAr.find((curElem, index) => curElem.title === i.title)
//     // if(!check){
//     //     uniqueAr.push(i)
//     // }
// }
// console.log(uniqueAr, obj);




// const books = [
//     { title: "C++", author: "Bjarne" },
//     { title: "Java", author: "James" },
//     { title: "Python", author: "Guido" },
//     { title: "Java", author: "James" },
//     { title: "Java", author: "new James" },
// ];

// let uniqueArr = books.filter((curElem, index) => {
//     return index === books.findIndex(item => JSON.stringify(item) === JSON.stringify(curElem)) // For according whole element of the array
//     // return index === books.findIndex(item => item.title === curElem.title) // for According to title

// })

// console.log(uniqueArr);


// let ar = [10,20,30,40,50,60,70,80]
// console.log(ar.splice(2, 2, "added", "second adeed")); //  return deleted element [ 30, 40 ]
// console.log(ar); // return modified arr  [ 10, 20, 'added', 'second adeed', 50, 60, 70, 80 ]
// // console.log("harsh".slice(2,5));
// console.log([10,20,30,40,50,60,70,80].slice(2,5)); // [ 30, 40, 50 ]


// const ids = books.map(({ title }) => title)
// let un = ids.filter((curElem, index) => {
//     return ids.indexOf(curElem) === index
// })

// console.log(ids, un);


// console.log({name: "kmkm", age : 99}.hasOwnProperty('age')) // true




let books = [
    { title: "C++", author: "Bjarne" },
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
    { title: "Java", author: "new James" },
    { title: "Java", author: "new James" },
    { title: "Java", author: "new James" },
    { title: "Java", author: "new James" },
];

// let uniqueAr = books.filter((curElem, index) => {
//     return index === books.findIndex(item =>  item.title === curElem.title)
// })
// console.log(uniqueAr);
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


// console.log(Array.isArray({kmkm:"km"}));
// let v = { name: 'harsh', age: 30 }
// console.log([].length);



// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 
// };

// console.log( Object.fromEntries([["jnjn", "kmkm"], [2, "lll"]]), Object.entries(student));


// let str = "dog" // ["d", "do", "dog", "o", "og", "g"]
// // "abcd"
// let subSetsArray = []
// for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length + 1; j++) {
//         subSetsArray.push(str.slice(i, j))
//     }
// }
// console.log(subSetsArray, str);



// setInterval(() => {
//     let dt = new Date().toLocaleTimeString()
//     console.log(dt);
// }, 1000);
// console.log(dt);



//  Expected Output:
//  [[object Object] {
//    author: "Walter Isaacson",
//    libraryID: 4264,
//    title: "Steve Jobs"
//  }, [object Object] {
//    author: "Suzanne Collins",
//    libraryID: 3245,
//    title: "Mockingjay: The Final Book of The Hunger Games"
//  }, [object Object] {
//    author: "The Road Ahead",
//    libraryID: 1254,
//    title: "Bill Gates"
//  }]

// var library = [ 
//     {
//         title:  'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }
// ];

// let sortedArr = library.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
// console.log(sortedArr);


// for(let i = 0; i < library.length ; i++ ){
//     for(let j = 0; j < library.length ; j++ ){
//             if(JSON.stringify(library[i]) < JSON.stringify(library[j])){
//                 let temp =  library[i]
//                 library[i] = library[j]
//                 library[j] = temp
//             }
//     }
// }


// console.log(library);



// console.log(Object.getOwnPropertyNames(Array));


// function invert_key_value(obj){
//     let listAr = Object.entries(obj)
//     for(let i of listAr){
//         i.reverse()
//     }
//     let res = Object.fromEntries(listAr)
//     return res
// }

// console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));


// function gcd(a, b){

//     for(let i = 2; i <= a || i <= b; i++ ){
//         if(a % i === 0 && b % i === 0 ){
//             return i
//         }
//     }
//     return 1
// }

// let i = 2
// let c = 5, d = 5
// function recur(a, b){
//     // console.log(i, a%i === 0, b%i === 0, i === a, i === b );
//     if(a%i === 0 && b%i === 0 ){
//         return i = i
//     }else{
//         if(i === a ||  i === b){
//             console.log("kmkm");
//             return i = 1
//         }else{
//             i++;
//             return recur(a, b)
//         }

//     }
// }
// // console.log(gcd(11, 22));
// console.log(recur(20, 10));


// Function to calculate the greatest common divisor (GCD) of two numbers using Euclidean algorithm.
// var gcd = function(a, b) {
//     // Base case: if b is 0, then GCD is a.
//     if (!b) {
//         return a;
//     }

//     // Recursive case: calculate GCD using the remainder (a % b).
//     return gcd(b, a % b);
// };

// // Example usage: Calculate and print the GCD of 2154 and 458.
// console.log(gcd(2154, 458)); 



// Write a JavaScript program to get integers in the range (x, y) using recursion.  
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

// function range(a, b){
//     if(b - a === 2){
//         return [a + 1]
//     }else{
//         let list = range(a, b-1)
//         list.push(b - 1) 
//         return list;
//     }

// }
// console.log(range(2, 9)) // o/p :-  [ 3, 4, 5, 6, 7, 8 ]


// function fact(n){
//      if(n < 2){
//          return 1
//      }else{
//          return  n *= fact(n - 1)
//      }
//  }
//  console.log(fact(5));


// function range(start, end){
//     if(end - start === 2){
//         return [start + 1]
//     }else{
//         let list = range(start, end - 1)
//         list.push(end)
//         return list 
//     }
// }
// console.log(range(2, 9));



// var array = [1, 2, 3, 4, 5, 6]
// function sum(ar, index){
//     console.log(index);
//     if( ar.length - 1 === index){
//         return ar[index]
//     }
//     return ar[index] += sum(ar, index + 1)
// }
// console.log(sum(array, 0))




// function fib(n){
//    if(n < 2 ){
//     return [0, 1]
//    }else{
//     var s = fib(n - 1)
//     s.push(s[s.length - 1] + s[s.length - 2])
//     return s
//    }
// }

// console.log(fib(10)) // 0/p :- [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55 ]




// function evenNumbers(n){
//     if(n === 1){
//         return [ 1 ]
//     }else{
//         // let s;
//         let s = evenNumbers(n-1)
//         // if(!(n % 2 === 0)){
//         //     s.push(n)
//         // }
//         console.log(n);
//         let check = false;
//         for(let i = 2; i < n; i++ ){
//             // console.log("run..", i);
//             if(n % i === 0){
//                 check = true;
//                 break;
//             }
//         }

//         if(!check) s.push(n)
//         return s
//     }
// }

// console.log(evenNumbers(20));



// -- sort array
// function fun(arr, index){
//     // if( )
//     return arr
// }
// let ar = [34,7,23,32,5,62]
// console.log(fun(ar, 0));

// console.log(toString(2));


// -------- check palidrome using recursion self 
// function fun(str, lastIndex){ 
//     if(lastIndex === Math.ceil(str.length/2) - 1  ) return true
//     if(str[str.length - 1 - lastIndex] !== str[lastIndex]){
//         return false
//     }else{
//         return fun(str, lastIndex - 1)
//     }
// }
// let str = "madkam"
// console.log(fun(str, str.length - 1));




// let km = "harshjain"

// // console.log(km.slice(0, 4).slice(0, 3));
// console.log(km);



// function match(obj1, obj2){
//     return Object.keys(obj1).every(item => obj2.hasOwnProperty(item) && obj1[item] === obj2[item] )
// }
// let obj1 = { age: 25, hair: 'long', beard: true,  haikr: 'long' }
// let obj2 = { age: 25, hair: 'long', beard: true, haikr: 'long' , hairlmlm: 'long'}

// console.log(match(obj1, obj2));


// String.prototype.customSplit = function(delimiter){
//     // console.log(" Delimiter ==>", delimiter);
//     let res = [];
//     let startIndex = 0;
//     console.log("value of this", this, this.indexOf(delimiter));
//     let foundIndex = this.indexOf(delimiter)
//     while (foundIndex !== -1){
//          res.push(this.substring(startIndex, foundIndex));
//          startIndex = foundIndex + delimiter.length;
//         //   console.log(startIndex, foundIndex, delimiter.length);
//          foundIndex = this.indexOf(delimiter, startIndex);
//     }
//     res.push(this.substring(startIndex));
//     return res
// }
// let str = "this is me"
// console.log(str.customSplit(" "))




// write a split function

// String.prototype.customSplit = function(delimiter) {
//     console.log(delimiter);
//     let res = []
//     let startIndex = 0
//     let foundIndex = this.indexOf(delimiter)
//     while( foundIndex !== -1 ){
//         res.push(this.substring(startIndex, foundIndex))
//         startIndex = foundIndex + delimiter.length
//         foundIndex = this.indexOf(delimiter, startIndex)
//     }
//     // console.log(startIndex);
//     res.push(this.substring(startIndex))
//     return res
// }
// let str = "this is my book"
// console.log(str.customSplit(" "));






// String.prototype.myCustomReplaceMethod = function(delimiter, rep){
//     // let newReg = new RegExp(delimiter, "g")   
//     // return strr.replace(newReg, "WILL")

//     // let newAr = this.split(delimiter).join(rep)
//     // return newAr


// }

// let strr = "is this is a good is boy"
// console.log(strr.myCustomReplaceMethod("is", "WILL"))

// console.log(strr.indexOf("is", 2));



// console.log(strr.replace(/is/g, "WILL"));



// console.log(strr.replace(".", "kmkmkmk"));
// console.log(strr);

// Expected Result: True if object is plain, false otherwise. 
// let obj = { a: 1 } // => true, 
// let arr = [1, 2, 3] // => false


// const method = (ob) => {
//     // console.log(Object.entries(ob));

//     // return typeof ob === "object" && !Array.isArray(ob) && ob !== null 
//     // return Object.entries(ob)

//     let result = []
//     let key = Object.keys(ob)
//     let val = Object.values(ob)
//     // for(let i = 0; i < key.length ; i++){
//     //     // result[key[i]] = val[i]
//     //     // result.push([key[i], val[i]])
//     //     // if()
//     // }

//     for(let i in ob){
//         // console.log(ob.hasOwnProperty("k"));
//         if(ob.hasOwnProperty(i))
//         result.push([i, ob[i]])
//     }

//     return result

// }
// console.log(method({ a: 1, b: 2 }))


// let a  = null
// b = a
// b = undefined
// console.log(a,  b);


// * Task description: Write a method that returns new object without provided properties 
//   * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 } 


// * Task description: Write a method that makes a shallow check is object empty 
// * Expected Result: ({}) => true, ({ a: undefined }) => true, 
//     ({ a: 1 }) => false 


// Expected Result: ({}) => true, ({ a: undefined }) => true,  ({ a: 1 }) => false 

// const method = (obj) => {
//     console.log("ojjnjn",  !Object.keys(obj).filter((curElem, index) => {
//         return obj[curElem]
//     }));
//     if(Object.entries(obj).length === 0) return true
//     let count = 0

//     for(let i in obj){
//         if(obj[i]){
//             count++;

//             // return false
//         }
//         if(count > 0 )return true
//     }
//     if(count <=  0 ) return false
//     // let {b, ...newobj} = Object.assign({}, obj) 
//     // return newobj
// }
// console.log(method({ b: null , a: undefined , c: "nin"}))
// console.log(method({ }))

// let jj = { b: null , a: undefined , c: 0}
// console.log(!Object.keys(jj).filter((elem) => jj[elem] ));

// console.log();
// if([]){
//     console.log("kmkmkmmkmkm");
// }


// // * Task description: Write a method that returns new object without provided properties 
// //   * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 } 
// //   * Task complexity: 2 of 5 



// function isEqual(obj1, obj2) {
//     // return JSON.stringify(obj1) === JSON.stringify(obj2)
//     let result = false
//     if (Object.entries(obj1).length !== Object.entries(obj2).length) return result
//     for (let i in obj1) {
//         console.log("Obj110", obj1[i], obj2[i] );
//         if (typeof obj1[i] === "object" && typeof obj2[i] === "object"){
//             let result = isEqual(obj1[i], obj2[i])
//             break;
//         } 
//         if (obj1[i] !== obj2[i]) {
//             return result
//         } else {
//             // console.log();
//             if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) return obj1[i].toString() === obj2[i].toString()
//         }
//     }

//     return result


// }



// const data = { a: {n: 99}, b: 2 };
// const data2 = { a: {n: 99}, b: 2 };
// const data3 = { a: 1, b: 2 };

// const data4 = { a: 1, b: 2, c: { d: 3 } }
// const data5 = { a: 1, b: 2, c: { d: 3, e: { f: ["km", 1, 2] } } }
// const data6 = { a: 1, b: 2, c: { d: 3, e: { f: ["km", 1] } } }

// console.log(isEqual(data, data2)); // true
// // console.log(isEqual(data, data3)); // false
// // console.log(isEqual(data4, data5)); // true
// // console.log(isEqual(data5, data6)); // false

// // console.log(obj2.length);


// // function fun() {
// //     console.log('working...');
// //     return
// // }

// // for (let i = 0; i < 5; i++) {
// //     console.log(i);
// //     if (i === 3) fun()
// //     // console.log(i);
// // }

// // * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]



// // function invoked(data){
// //     if(Object.entries(data).length === 0 ) return true
// // // let count = 0

// //     for(let i in data){
// //         if(Array.isArray(data[i])) return data[i].length === 0

// //          if(typeof data[i] === "object"){
// //             invoked(data[i])
// //             // console.log("funVal",  funVal);
// //          }
// //         //  console.log(data[i]);
// //         if(data[i]){
// //             // count++;
// //             return  funVal && false
// //         }
// //     }
// //     return true

// // }
// // console.log(invoked({})) //  true,
// // console.log(invoked({ a: { b: undefined } })) //  true,
// // console.log(invoked({ a: { b: [] } })) //  true
// // console.log(invoked({ a: { b: [] }, d: 123 })) //  false





//   ({}) => true, 
//        => true, 
//        => true 

// function intersection(obj1, obj2){
//     let result = {};
//     let max = Object.entries(obj1).length  >= Object.entries(obj2).length ? obj1 : obj2
//     for(let i in max){
//         // console.log(max[i]);
//         if(obj1[i] === obj2[i] || JSON.stringify(obj1[i]) === JSON.stringify(obj2[i])  ){
//             result[i] = max[i]
//         } 
//     }
//     return result
// }

// const data = { a: 1, b: 2, f : { m : "jain" }, x: [ 1,2,3 ] };
// const data2 = { c: 1, b: 2, f : { m : "jain" }, x: [ 1,2,9 ] };
// console.log(intersection(data, data2)); // { b: 2 }

// let jn = {}
// jn["jae"] = "jnjn"
// console.log(jn);

// console.log(JSON.stringify([123]));



// console.log("run...");

// const callback = () => {
//     // setTimeout(() => {
//     //     return 'run......'
//     // }, 2000);
//     // return "kmkm"
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("completed")
//         }, 2000);
//     })
// }

// async function fun(callback){
//     let res = await callback()
//     console.log( "callback", res);
// }

// fun(callback)


// let obj = {
//     name: "hash"
// }
// let myNewObj = {
//     age : 24
// }
// Object.setPrototypeOf(obj, myNewObj)
// console.log(obj,myNewObj, obj.age, myNewObj.name); // { name: 'hash' } { age: 24 } 24 undefined

// function MyConstruc(){
//     this.num1 = 2
//     this.num2 = 3
// }
// MyConstruc.prototype.num3 = 5
// let objCon = new MyConstruc()
// console.log(objCon.num3); // 5


// let booksl = [
//      { title: "C++", author: "Bjarne" },
//      { title: "Java", author: "James" },
//      { title: "Python", author: "Guido" },
//      { title: "Java", author: "James" },
//      { title: "Java", author: "new James" },
//      { title: "Java", author: "James" },
//      { title: "Java", author: "James" },
//      { title: "Java", author: "James" },

//  ];


//  let uniqueArr = []
//  for(let i of booksl){
//     // console.log(i);
//     if(!uniqueArr.includes(JSON.stringify(i))){
//         uniqueArr.push(JSON.stringify(i))
//     }
//  }
//  console.log(uniqueArr.map(JSON.parse));


//  jsonObject = booksl.map(JSON.stringify);
//  uniqueSet = new Set(jsonObject);

//  console.log(jsonObject, Array.from(uniqueSet).map(JSON.parse));


// function fib() {
//     let count = 0;
//     console.log("count==>", count);
//     return function(){ // inner function
//          return count++;
//     }
// }
// let ff =  fib()
// console.log(ff())  // 0
// console.log(ff())  // 1
// console.log(ff())  // 2
// console.log(ff())  // 2
// console.log(ff())  // 2
// console.log(fib());
// console.log(fib());
// console.log(fib());



// String.prototype.customSplit = function(delimiter){
//     let res = []
//     let firstIndex = 0
//     let foundIndex = this.indexOf(delimiter)
//     while(foundIndex !== -1){
//         res.push(this.slice(firstIndex, foundIndex))
//         firstIndex = foundIndex + 1
//         foundIndex = this.indexOf(delimiter, firstIndex)
//     }
//     res.push(this.slice(firstIndex, this.length))
//     return res
// }
// let str = "harshjainjain"
// console.log(str.customSplit("a"));


// console.log(/ghjkl/.test('k'));


// function toTitleCase(str) {
//     let arrStr = str.split(' ')
//     let reg = new RegExp('[a-z]', "g")
//     // console.log(arrStr);
//     // // console.log(reg.test("_"));
//     // let first = 0
//     // let findFirstInd =  
//     let ar = []

//     for(let i in arrStr){
//         arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1, arrStr[i].length)
//     }


//     return arrStr.join(' ')

//     return str.replace(/\b\w/g, (l) => l.toUpperCase()); 


//     // return str.slice(0, 1).toUpperCase() +  str.slice(1)
//   } 

//   console.log(toTitleCase("harsh jain &aya"));

// //   console.log(typeof "_");


// let obje = {
//     name : "hbk"
// } 
// function fun(name, lName){
// console.log(`${name}  ${lName}`); // harsh  jain
// console.log(this.name); // hbk
// }
// let args = [ 'harsh', 'jain', 23 ] 
// fun.apply(obje, args )




// function fun(num){
//     let arNum = String(num)
//     let resStr = "";
//     for(let i in arNum){
//         if( Number(i) !== arNum.length - 1 ){
//             if(arNum[i] % 2 === 0 && arNum[Number(i) + 1] % 2 === 0){
//                 resStr += arNum[i] + "-" 
//             }else{
//                 resStr += arNum[i]
//             }
//         }else{
//             resStr += arNum[i]
//         }
//     }
//     return resStr
// }

// console.log(fun(12454685760));
// let ar = [12,3,45,6]
// for(let i in ar){
//     console.log(i); // i la type string rehta hai 
// }
// console.log(ar["2"]) // 45

// function last(ar){
//     // let str = ""
//     // for(let i of ar){
//     //     str += i + ","
//     // }
//     // return str

//     // return ar.toString()

//     return ar.join(',')
// }

// console.log(last(["Red", "Green", "White", "Black"]));


// function fun(ar){
//     let elem
//     let maxIndex =  ar.reduce((accu, curElem, index) => {
//         let mxVAl = 0
//         for(let i of ar){
//             if(i === curElem){
//                 mxVAl++;
//             }
//         }
//         if(mxVAl > accu){
//             accu = mxVAl
//             elem = curElem
//         } 
//         return accu
//     }, 0)

//     console.log(maxIndex, elem);

//     // return Math.max(...ar)
// }
// console.log(fun([2, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,3,3,3,3]));



// function name(str){
//     let newStr = ""
//     for(let i of str){
//         // console.log(i, i.toLowerCase());
//         if(i === i.toLowerCase()){
//             newStr += i.toUpperCase()
//         }else{
//             newStr += i.toLowerCase()
//         }
//     }
//     return newStr 
// }
// let str = 'The Quick Brown Fox'
// console.log(name(str));

// str.toUpperCase
// console.log('a' === 'A');

// function fun(color, o){
//     for(let i in color){
//         if( Number(i) === 1 ) console.log(i + o[i] + "choice is" + color[i] );
//         else if( Number(i) === 2 ) console.log(i + o[i] + "choice is" + color[i] );
//         else if( Number(i) === 3 ) console.log(i + o[i] + "choice is" + color[i] );
//         else console.log(i + o[0] + "choice is" + color[i] );
//     }
//     return color
// }
// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
// let o = ["th","st","nd","rd"]
// console.log(fun(color, o));



// function fun(a1, a2){
//     let leapYears = []
//     for(let i = a1; i <= a2; i++){
//         if(i % 4 === 0 ){
//             leapYears.push(i)
//         }
//     }
//     return leapYears
// }
// let str = 'loveleecode'
// console.log(fun(2000, 2012))



// // Function to perform binary search on a sorted array
// function binary_Search(items, value) {
//     // Initialize variables for the first, last, and middle indices of the array
//     var firstIndex  = 0,
//         lastIndex   = items.length - 1,
//         middleIndex = Math.floor((lastIndex + firstIndex) / 2);

//     // Continue the search while the middle element is not equal to the target value
//     // and the first index is less than the last index
//     while (items[middleIndex] != value && firstIndex < lastIndex) {
//         // Adjust the search range based on whether the target value is less or greater than the middle element
//         if (value < items[middleIndex]) {
//             lastIndex = middleIndex - 1;
//         } else if (value > items[middleIndex]) {
//             firstIndex = middleIndex + 1;
//         }
//         // Recalculate the middle index for the next iteration
//         middleIndex = Math.floor((lastIndex + firstIndex) / 2);
//     }

//     // Return the index of the target value if found, otherwise return -1
//     return (items[middleIndex] != value) ? -1 : middleIndex;
// }

// // Sorted array for testing
// var items = [1, 2, 3, 4, 5, 7, 8, 9];

// // Perform binary search for the target values 1 and 5
// console.log(binary_Search(items, 7)); 



// function fun(ar1, ar2){
//     let maxArr = ar1.length < ar2.length ? ar2 : ar1
//     let newArr = maxArr.map((curElem, index) => {
//         // console.log(!ar1[index] || !ar2[index]);
//         return !ar1[index] || !ar2[index] ? maxArr[index] : ar1[index] + ar2[index] 
//     })
//     // console.log(maxArr);
//     // let maxArr = [], smArr = []
//     // if(ar1.length !== ar2.length ){
//     //     maxArr = ar1.length < ar2.length ? ar2 : ar1
//     //     smArr =  ar1.length > ar2.length ? ar2 : ar1
//     // }else{
//     //     maxArr = ar1
//     //     smArr = ar2
//     // }
//     // for(let i = 0; i < maxArr.length; i++){
//     //     if(smArr[i]){
//     //         newArr.push(maxArr[i] + smArr[i])
//     //     }else{
//     //         newArr.push(maxArr[i])
//     //     }
//     //     // newArr.push(ar1[i] + ar2[i])
//     // }
//     return newArr
// }
// let array1 = [1,0,2,3,4,5,4,5], array2 = [3,5,6,7,8,13, 15];
// console.log(fun(array1, array2))

// // console.log(array1.filter((curElem, index) => {
// //     return index !== array1.indexOf(curElem)
// // }));


// 1 2 3 4
//   5 6 7
//     8 9
//       10

// let n = 4
// let str = ""
// let val = 1
// for(let i = 0; i < n ; i++){
//     for(let j = 0; j < i; j++){
//         str += " "
//     }
//     for(let k = 0; k < n - i; k++){
//         str += val
//         val++
//     }
//     str += "\n"
// }
// console.log(str);

// console.log(false ?? "harsh");



// Create an empty array to simulate a linked list
// const linkedList = [];

// // Function to append a node to the end of the "linked list"
// function appendNode(data) {
//     linkedList.push({ data: data, next: null });
// }

// // Function to print the elements of the list
// function printList() {
//     linkedList.forEach(node => console.log(node.data));
// }

// // Example usage
// appendNode(1);
// appendNode(2);
// appendNode(3);
// printList(); // Output: 1, 2, 3

// console.log(linkedList);


// function callback(){
//     // console.log("kmkmkm");
//     return "run.."
// }

// function fun(cl){
//     setTimeout(cl, 2000);
// }

// fun(callback)





// let newArr = []
// function customFlatArr(elem) {
//     if (Array.isArray(elem)) {
//         for (let j of elem) {
//             customFlatArr(j)
//             if(elem.length <= 1) return
//         }
//     }
//     if(Array.isArray(elem)) return
//     newArr.push(elem)
// }
// let ar = [1, [2], [[3, 4]],[9, [8, 7, [[23]]]]];

// for (let i of ar) {
//     customFlatArr(i)
// }

// console.log(newArr);




// function flattenArray(arr) {
//     return arr.reduce((acc, val) => {
//         return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
//     }, []);
// }








// function flattenArray(arr){
//     let newArr = arr.reduce((acc, curElem, index) => {
//         return  Array.isArray(curElem) ? flattenArray(curElem) : curElem 
//     },[])
//     return newArr
// }

// const nestedArray = [1, [2], [[3, 4]],[9, [8, 7, [[23]]]]];
// const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray); // [ 1, 2, 3,  4, 9, 8, 7, 23 ]





// let promise = new Promise((resolve, reject) => {
//     return resolve(200)
// })

// async function fun(){
//     let result = await promise
//     console.log(result);
// }

// fun()




// function fun(str){
//     let result = {}
//     for(let i of str){
//         if(!result[i]){
//             result[i] = 0
//         }
//         result[i] = ++result[i]
//     }
//     return result
// }
// var strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
// console.log(fun(strings)); // { apple: 3, banana: 2, orange: 1 }






// Write a program to print numbers between 1 to 50 which are divisble by 3 and multiple of 6.


// for(let i = 1; i < 50; i++){

//     let result = i % 3 === 0 && i % 6 === 0 ? i : null  

//     console.log(result);
//     // if(  ){
//     //         console.log("number is =>", i);
//     // }
// }

// function fun(){

// }

// let result = fun()

// console.log(result);


// Write a program to count the letters in the given string: ‘An apple a Day keeps Doctor away’.

// function fun(str){
//     let arr = str.split(" ").join("").split("")
//     let resultObj = {}
//     for(let i of arr){
//         if(!resultObj[i]){
//             resultObj[i] = 0
//         }
//         resultObj[i] = ++resultObj[i] 
//     }
//     return resultObj
// }
// let str = "An apple a Day keeps Doctor away"
// console.log(fun(str));

// console.log(str.split("").length);
// for(let i = 1; i < str.split("").length)






