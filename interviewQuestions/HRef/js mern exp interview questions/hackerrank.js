
/////// ====== Voiler Plate
// function hackerrank(s){   //// == hacker rank
// }
// let s = "hereiamstackerrank"
// let result = hackerrank(s)
// console.log(result)



// let numbers = [78,65,44,33,22,34]
// function bubbleSort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i += 1) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }
//   return array;
// }
// bubbleSort(numbers);



// var numbers = [-1,-1,0,1,1];
// function minusPlus(arr){
//   let neg = 0;
//   let zero = 0;
// let pos = 0;
//   for(let i = 0; i < arr.length ; i++ ){
//     if(arr[i] < 0 ){
//       neg++;
//     }else if(arr[i] === 0){
//       zero++;
//     }else{
//       pos++;
//     }
//   }
//   console.log(neg/arr.length)
//   console.log(zero/arr.length)
//   console.log(pos/arr.length)

// }
// minusPlus(numbers);




// let n = 4;
// function star(n){
//   let str = "";
//   for(let i = 1; i <= n; i++){
//     // console.log(i)
//     for(let j = 0; j < n - i; j++){
//       str += ' ';
//     }
//     for(let k = 0; k < i; k++){
//       str += "#"
//     }
//     str += '\n';
//   }
//   console.log(str)
// }
// star(n)



// let arr = [5,6,4,7,3];
// function minMax(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length ; j++){
//             if(arr[i] > arr[j]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     let min = 0;
//     let max = 0;
//     for(let i = 0; i < arr.length - 1 ; i++){
//         min += arr[i]
//     }
//     for(let i = 1; i < arr.length  ; i++){
//         max += arr[i]
//     }    
//     console.log(min, max)                                                                                       
// }

// minMax(arr);




// let arr = [5,6,4,7,3,7];
// function birthdayCakeCandles(candles) {
//     let tallestElem = Math.max(...candles)
//     console.log(candles.filter((c)=> c == tallestElem ).length)
// const tallestCandle = Math.max(...candles);
// // console.log(...candles) // 5 6 4 7 3 7
// // console.log(tallestCandle) // 7
// // console.log(candles.filter((c) => c == tallestCandle).length) // 2
// return candles.filter((c) => c == tallestCandle).length;
// }
// birthdayCakeCandles(arr);



// ////////////////==== Time conversion 
// let s = '07:05:45PM'
// function timeConversion(s) { 
// const regExTime     = /(\d{2}:\d{2}:\d{2})/g;  /// expert solution
// // console.log(regExTime)
// const fullTime      = s.split(regExTime).filter(c => c !== '');
// // console.log(fullTime)
// const timeSplited   = fullTime[0].split(':'); 
// // console.log(timeSplited)
// const timeIndicator = fullTime[1];

// if(timeIndicator === 'PM'){
//     if(timeSplited[0] !== '12')
//         timeSplited[0] = (+timeSplited[0] + 12).toString();

// } else if(timeIndicator === 'AM'){
//     if(timeSplited[0] === '12'){
//         timeSplited[0] = '00';
//     }
// }
// return timeSplited.join(':')
// }
//  console.log(timeConversion(s)) /// 19:05:45



//  let s = '07:05:45PM'              ////////////////// first time self coded
// function timeConversion(s) {   //// Its my code
//     // Write your code here
// let dt = s
// let myArr  =  dt.split(':')
// let newDt = '';
// for(let i = 0; i < myArr[2].length ; i++){
//   if(myArr[0] === '12'){
//         myArr[0] = '00'
//         let newStr = myArr[2]
//         let st = newStr.replace('P', 'A')
//         myArr[2] = st
//     }else if(myArr[2][i] === 'P'){
//         let kk = parseInt(myArr[0]) + 12
//         myArr[0] = kk.toString()
//     }else{
//         myArr = myArr
//     }
// } 
// let newStr = myArr[0] + ':' + myArr[1] + ':' + myArr[2][0] + myArr[2][1]
// return newStr
// }
// timeConversion(s)


// 75 67 40 33







// function superReducedString(s) {
//     if (s.length == 0) return "Empty String";
//     if (s.length == 1) return s;

//     let foundPos = null;
//     for (let i = 0; i <= s.length - 1; i++) {
//         if (s[i] == s[i + 1]) {
//             foundPos = i;
//             break;
//         } else {
//             foundPos = null;
//         }
//     }

//     if (foundPos !== null) { 
//         return superReducedString(
//             s.replace(`${s[foundPos]}${s[foundPos + 1]}`, '')
//         );
//     } else {
//         return s;
//     }
// }
// let s = 'aaabccddd'
// let result = superReducedString(s)
// console.log(result)

// simple js solution iwith reduce 
// function superReducedString(s) {  // hacker rank solution
//     let res = s.split("").reduce((prev, curr) => prev.charAt(prev.length - 1) === curr ? prev.slice(0, -1) : prev + curr ,'');
//     return res === '' ? 'Empty String' : res;
// }
// let s = 'aaabccddd'
// let result = superReducedString(s)
// console.log(result)


// function superReducedString(s){
// if(s.length == 0) return 'Empty String'
// if(s.length == 1) return s

// let foundPos = null
// for(let i = 0; i < s.length; i++){
//     if(s[i] == s[i + 1]){
//         foundPos = i;
//         break;
//     }else{
//         foundPos = null;
//     }
// }

// if(foundPos !== null){
//     return superReducedString(
//         s.replace(`${s[foundPos]}${s[foundPos + 1]}`, "")
//     )
// }else{
//     return s 
// }
// }
// let s = 'aaabccddddd'
// let result = superReducedString(s)
// console.log(result)




////===  calculate tha number of words 
// function countWords(s){
//     let words = 1 ;
//     for(let i = 0; i < s.length ; i++){
//         if(s[i] === s[i].toUpperCase()){
//             words++;
//         }
//      }
//   return words
// }
// let s = 'saveChangesInTheEditors'
// let result = countWords(s)
// console.log(result)



////  === program strong password // return the minimun number of charsacters
// function minimumNumber(n, password) {
//     let differentCharsMissing = 0
//     let lower = password.match(/[a-z]/)
//     let upper = password.match(/[A-Z]/)
//     let digit = password.match(/[\d]/)
//     let special = password.match(/[\W]/)

//     if (lower == null) differentCharsMissing++
//     if (upper == null) differentCharsMissing++
//     if (digit == null) differentCharsMissing++
//     if (special == null) differentCharsMissing++

//     let sizeMissing = 6 - n 

//     if (sizeMissing > differentCharsMissing) return sizeMissing
//     return differentCharsMissing
// }  

// let n = 11
// let password = '#HackerRank'
// let result = minimumNumber(n, password)
// console.log(result)



/////=== roted string 
// function caesarCipher(s, k) {
// Write your code here
// let clearTextArr = s.split("");
// let original = "abcdefghijklmnopqrstuvwxyz";
// let rotation = k % original.length;
// let roatated = original.slice(rotation) + original.slice(0, rotation);
// clearTextArr.forEach((char, index) => {
//   if (original.includes(char.toLowerCase())) {
//     let idx = original.indexOf(char.toLowerCase());
//     if (/^[A-Z]*$/.test(clearTextArr[index])) {
//       clearTextArr[index] = roatated[idx].toUpperCase();
//     } else {
//       clearTextArr[index] = roatated[idx];
//     }
//   }
// });
// return clearTextArr.join("");
// }
// let str = 'middle-Outz'
// let roted = 2;
// let result = caesarCipher(str, roted)
// console.log(result)


///// ===  whats kind eneglish cxharacters chang in that signal
//  function marsExploration(s){
// let count = 0;   // hacker rank 
// for (let i = 0; i < s.length; i += 3) {
//   s[i] !== "S" ? count++ : "";
//   s[i + 1] !== "O" ? count++ : "";
//   s[i + 2] !== "S" ? count++ : "";
// }
// return count;
//  }
// let str = 'SOSSPSSQSSO'
// let result = marsExploration(str)
// console.log(result)




//// =====  if any string contains "hackerrank" in sequeance than we return "YES" 

// function hackerrank(s){   //// == hacker rank
// const word = "hackerrank"
// let str = ''
// let count = 0;

// for(let char of s){
//   console.log(word[count])
//   if(char === word[count]){
//     str += char
//     count++
//   }
// }
// return str === word ? "YES" : "NO"



// let comArr = s.split('')     ///SELF
// let str = "hackerrank"
// let arrStr = str.split('')
// let newArr = []
// if( str.length <= s.length ){
//   for(let i = 0; i <  arrStr.length ; i++){
//     for(let j = 0; j < comArr.length; j++){
//       if(arrStr[i] === comArr[j]){
//         console.log(comArr)
//         newArr.push(arrStr[i])
//         comArr.splice(0, j + 1)
//         break
//       }
//     }
//   }
//   let newStr  = newArr.join('')
//   if(newStr === str){
//     return "YES"
//   }else{
//     return "NO"
//   }
// }else{
//   return "NO"
// }
// }
// let s = "hereiamstackerrank"
// let result = hackerrank(s)
// console.log(result)




/////   find all alfhabets present in stirng  yes or not 

// function hackerrank(s){   
// return new Set(s.toLowerCase().match(/[a-z]/g)).size === 26 ? 'pangram' : 'not pangram'   ///// == hackerrank

// let check = "abcdefghijklmnopqrstuvwxyz"   ////===  SELF
// let pra = true
// for(let i = 0; i < check.length; i++){
//   if(s.toLowerCase().includes(check[i].toLowerCase()) === false){
//     pra = false
//     console.log(check[i])
//     break
//   }
// }
// if(pra){
//   return 'pangram'
// }else{
//   return 'not pangram'
// }
// }
// let s = "We promptly judged antique ivory buckles for the next prize"
// let result = hackerrank(s)
// console.log(result)



/////  checck weighted sum  /// ni bna tha 
// function hackerrank(s , que){   
//  SOLUTIN ONE HACKERRANK
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// let weightFound = [];
// let weights = [];
// let quantityClusteredIndex = 0;
// let count = 0;
// let quantitySkips = 0;
// let subText = "";

// while(count < s.length){

//         quantityClusteredIndex = count;
//         quantitySkips = 0;
//         subText = "";

//         while(s[count] === s[quantityClusteredIndex]){
//             subText += s[quantityClusteredIndex];
//             weights.push(subText.length * (alphabet.indexOf(subText[0]) + 1));
//             quantityClusteredIndex++;
//             quantitySkips++;
//         }

//         count += quantitySkips;
//     }

//     for(let query of queries){
//         weightFound.push(weights.indexOf(query) !== -1 ? "Yes" : "No");
//     }

//     return weightFound;
// }
// let s = "abbcccdddd"
// let queries = [1,7,5,4,15]
// let result = hackerrank(s, queries)
// console.log(result)



// function hackerrank(s){   //// == hacker rank

//   let values = []

//     for (let i = 1;i<=s.length-1; i++){
//         values.push(Math.abs(s[i].charCodeAt()-s[i-1].charCodeAt()))
//     }
//     let reverseValues = [...values].reverse()
//     let result = values.every((val,index)=>    val===reverseValues[index])
//     return result ? 'Funny' : 'Not Funny'

//   let check, reversStr = ""
//   reversStr = s.split("").reverse().join("")
//   let arr1 = [] , arr2 = [];
//   for(let a of s){
//     arr1.push(a.charCodeAt())
//   }
//   for(let a of reversStr){
//     arr2.push(a.charCodeAt())
//   }
//   console.log(arr1, arr2);
//   return arr1 === arr2 ? 'Funny' : 'Not Funny'
// }
// let s = "acxz"

// let result = hackerrank(s)
// console.log(result)


// let values = []
//     for (let i = 1;i<=s.length-1; i++){
//         values.push(Math.abs(s[i].charCodeAt()-s[i-1].charCodeAt()))
//     }
//     let reverseValues = [...values].reverse()
//     let result = values.every((val,index)=>val===reverseValues[index])
    
// return result ? 'Funny' : 'Not Funny'


// let arrOne = [4,2,3, 0] 
// let arrTwo = [4,2,3, 8]
// let res = arrTwo.every((curElem, index) => curElem === arrOne[index])
// console.log(res); // false


// let arr = [5,1,2,3]
// let del = arr.shift()
// console.log(del, arr); // 5



