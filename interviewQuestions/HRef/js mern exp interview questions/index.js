
////////====   swaping two numbers 
// ===   without variable
//   let a = 5;
//   let b = 6;
//   a = a + b;
//   b = a - b;
//   a = a - b;
//  console.log(a)  // 6
//  console.log(b)  // 5

// ===  with variable
//  let a = 5;
//  let b = 6;
//  let c;
//  c = a;
//  a = b;
//  b = c;
// console.log(a) // 6
// console.log(b) // 5


//////////  ============  sorting of array in number
// let arr = [4, 32, 2, 5, 8, 100, 10];  // 
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp; 
//     }
//   }
// }
// console.log("Sorted array=>", arr);



// function bubbleSort(array) {   //// ===stack overflow
//     var done = false;
//     while (!done) {
//       done = true;
//       for (var i = 1; i < array.length; i += 1) {
//         if (array[i - 1] > array[i]) {
//           done = false;
//           var tmp = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = tmp;
//         }
//       }
//     }
//     return array;
//   }
//   var numbers = [12, 10, 15, 11, 14, 13, 16 , 100, 10];
//   bubbleSort(numbers);
//   console.log(numbers);


/////////============ fibonacchi series logic ===========//////////////

// let number = parseInt(5)       /////=== programiz
// let n1 = 0, n2 = 1, nextTerm
// for(let i  = 1; i <= number; i++){
//     console.log(n1)
//     nextTerm = n1 + n2
//     n1 = n2;
//     n2 = nextTerm
// }

// using recursion :-
// function fibonacci(n) {
//     if (n === 0) {
//         return 0
//     }
//     if (n === 1) {
//         return 1
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(7)) // 13

// let number = parseInt(16)  /////=== programiz  - maximum value number variable tak hi print hoga 
// let n1 = 0, n2 = 1, nextTerm
// nextTerm =  n1 + n2
// while(n1 <= number){
//     console.log(n1)
//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2
// }

// program to display fibonacci sequence using recursion
// let n = 10
// function fact(num){
//     // return num
//     if(num === 0 || num === 1){
//         return num
//     }else {
//         return  fact(num - 1) + fact(num - 2)
//     }
// }
// for(let i = 0; i < n ; i++){
//      console.log(fact(i))
// }


// function fibonacci(num) {
//     if(num < 2) {
//         return num;
//     }
//     else {
//         return fibonacci(num-1) + fibonacci(num - 2);
//     }
// }
// const nTerms = 5; // take nth term input from the user
// if(nTerms <=0) {
//     console.log('Enter a positive integer.');
// }
// else {
//     for(let i = 0; i < nTerms; i++) {
//         console.log(fibonacci(i));
//     }
// }


///////// ========= check prime number  ===========//////////////
// defination of prime number and composite number :- Prime numbers are numbers greater than 1. They only have two
// factors, 1 and the number itself. This means these numbers cannot be divided by any number other than 1 and the number
// itself without leaving a remainder. Numbers that have more than 2 factors are known as composite numbers.  

// // // take input from the user  
// const number = parseInt(2);   //// programiz
// let isPrime = true;
// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }
// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }
// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }


//////////////// =============   Factorial Number   ============///////////

// let number = 5;
// let fact;
// if(number < 0){
//     console.log('negative factorial not exite less than 0 value numbers')
// }else if (number === 0){
//     console.log(`tha factorial of number is ${number}`)
// }else{
//     fact = 1;
//     for(let i = 1; i <= number ; i ++){
//         fact *= i
//     }
//     console.log(`The factorial of ${number} is ${fact}.`);
// }


////////========= Reverse string and store anything string  ========//////
// let str = 'abcde'
// let newStr = '';
// // console.log(str[0]) //a
// // console.log(str.length) //5
// for(let i = 1; i <= str.length ; i++){
//     newStr += str[str.length - i]
// }
// console.log(newStr)

// let str = "jjjass"
// console.log(str.split('').reverse().join(''))


// function sum(a){
//     return function(b){
//         return a + b
//     }
// }

// console.log(sum(1)(2))

// let i = 1
// if(i===1 && i === 2 && i === 3)
// console.log("yes")
// else console.log("no")


////// ---  find HCF of the number 
// let num1 = 12;
// let num2 = 24;
// let HCF = 0
// for(let i = 0; i <= num1 && i <= num2; i++){
//     if(num1 % i === 0 && num2 % i === 0){
//         HCF = i
//     }
// }
// console.log(HCF) // 12
// let LCM = (num1 * num2)/HCF
// console.log(LCM)


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
// console.log(LCM) // 360





// -------------------------------------------------------------------------------------------
// let year =  2008
// console.log(0 == year % 4, 0 != year % 100, 0 == year % 400, year % 100);
// if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
//     console.log(year + ' is a leap year')
// }else {
//     console.log(year + ' which is not a leap year')
// }


// console.log(typeof 3.3); // number
// console.log(Number.isInteger(5)); // true

// console.log(Number.toFixed(2));

let originalNumber = 123;
let formattedNumber = originalNumber.toFixed(4);
// console.log(~2 + 1 + 5);


// let arr = [ 1, 2, 3, 4, 5]
// let arrj = arr.filter((cur, ind) => {
//      return cur < 3
// }).map((curElem, index) => {
//      return  curElem + 10 
// }).reduce((accumulator, curElem) => {
//      return accumulator += curElem
// })


// let a = [[1, 2, 3], 
//         [4, 5, 6],   
//         [7, 8, 9]] 

// let resultMatrix = [[],[],[]]

// for(let i = 0; i < a.length ; i++){
//      for(let j = 0; j < a[i].length ; j++){
//           // console.log(a[a.length - 1 - i][j]);
//           // resultMatrix[i][j] = a[j][a.length - i - 1]
//           resultMatrix[i][j] = a[a.length - j - 1][i]
//      }
// }

// console.log(resultMatrix);



// let arrOne = [ 1, 2, 3, 4, 5, 6 ]
// let arrTwo = [ 5, 6, 7, 8, 9 ]
// let finalArr = [ ...arrOne, ...arrTwo ]
// let removeDuplicates = finalArr.filter((curElem, ind) => {
//      return ind === finalArr.indexOf(curElem)
// })
// console.log(removeDuplicates);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 5];
// let uniqueArray = [];
// for (let i = 0; i < arr.length; i++) {
// //     if (uniqueArray.indexOf(arr[i]) === -1) {
//      // console.log(uniqueArray.find((curElem, index) => curElem === arr[i]));
//     if (uniqueArray.find((curElem, index) => curElem === arr[i]) === undefined) {
//         // If the element is not already in uniqueArray, add it
//         uniqueArray.push(arr[i]);
//     }
// }
// console.log(uniqueArray);

// for (let index = 0; index < finalArr.length; index++) {
//      for(let i = 0; i < arrTwo.length ; i++ ){
//           if(finalArr[index] === arrTwo[i]){
//                removeArr.push(finalArr[index])
//                break;
//           }
//      }
// }

// console.log(removeArr);
// // const removeDuplicateArr = finalArr.filter((curElem, index) => {
// //      return   finalArr.indexOf(index) === curElem
// // })



// console.log(set.has("harsh"));

// console.log(set)


