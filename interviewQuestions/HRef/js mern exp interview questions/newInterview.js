// square matrix , and rotate it in 90 degree
//  find the least difference position number between this two array and return position (not index)   arFirst = [ 4,5,6,7,3 ] , arSecond = [ 44, 55,33, 9, 6 ]

// MATRIX  matrix-npm pakage availble But we can use only javaScript
// simple matrix
// let a = [1, 2];
// let b = [2, 3];
// let c = []
// for(let i = 0; i < a.length ; i++){
//     c[i] = a[i] + b[i]
// }
// console.log(c)

////// --   multidimesinal Array
// let a = [[1,2],
//         [3,4,6],
//         [1, 2]]

// let b = [[5,6],
//         [7,8,5],
//         [3, 4]]

// let c = [[], [], []]

// for(let i = 0; i < a.length; i++){ //  logic for outSide // number of array element
//     for(let j = 0; j < a[i].length; j++){ // logic for inSide // number of array inside array element
//             c[i][j] = a[i][j] + b[i][j]
//     }
// }
// console.log(c) // o/p :-  [ [ 6, 8 ], [ 10, 12 ], [ 4, 6 ] ]

///// ---  find square of multidimesional array || matrix
// let a = [[1,2],
//         [3,4,6],
//         [1, 2]]

// let c = [[], [], []]

// for(let i = 0; i < a.length; i++){
//     for(let j = 0; j < a[i].length; j++){
//         c[i][j] = a[i][j]**2
//     }
// }

// console.log(c) // [ [ 1, 4 ], [ 9, 16, 36 ], [ 1, 4 ] ]

////--------- Gamma Stack ---------
// Given a square matrix, turn it by 90 degrees in a clockwise direction without using any extra space.
// https://www.enjoyalgorithms.com/blog/rotate-a-matrix-by-90-degrees-in-an-anticlockwise-direction   //
// https://www.geeksforgeeks.org/program-addition-two-matrices/

// Input:
// 1 2 3
// 4 5 6
// 7 8 9
// Output: // clockWise direction
// 7 4 1
// 8 5 2
// 9 6 3
// Input:
// 1 2
// 3 4
// Output: // clockWise direction
// 3 1
// 4 2

// Input:
// 1 2 3
// 4 5 6
// 7 8 9
// Output: // antiClockWise direction
// 3 2 1
// 6 5 4
// 9 8 7

// let a = [[1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9] ]
// let squareMatrix = [[], [], []]
//     for(let i = 0; i < a.length; i++){
//         for(let j = 0; j < a[i].length; j++){
//             // console.log(i, j, a.length - j - 1, i )
//             // squareMatrix[i][j] =  a[a.length - j - 1][i] // Clock Wise - Direction
//             squareMatrix[i][j] = a[j][a.length - i - 1] // AntiClock Wise - Direction
//         }
//     }
// console.log(squareMatrix)

// Q2 :- Find   the leaset Differance Between Two Arrays , and print least differeance index value both arrays
// let arrFirst = [1,10,5,23,13]
// let arrSecond = [9,2,12,7,8]
// let diffArray = []
// for(let i = 0; i < arrFirst.length; i++){
//     diffArray.push(Math.abs(arrFirst[i] - arrSecond[i]))
// }
// let minElem = Math.min(...diffArray)
// let indexVal = diffArray.findIndex((curElem) => {
//     return curElem === minElem
// })
// console.log(arrFirst[indexVal], arrSecond[indexVal])

// Q3 =  totalAmount koi v 2 elment ke euqal rahe and return karana hai 1st wale amount ka index number our our uska hi indexPosition  o/p :- 2 6  :- (jaise hi amount match ho jaye 1st wale ka indexNumber, and 1st wale ka indexPosition)
// let sunny = 5
// let jonny = 10
// let totalAmount = sunny + jonny
// let icePrice = [ 1,4,6,5,7,9 ]
// let val = 0, match = false
// for(let i = 0; i < icePrice.length; i++){
//     let matchedVal = totalAmount - icePrice[i]
//     for(let j = i ;j < icePrice.length; j++ ){
//         // console.log(matchedVal, icePrice[j])
//         if(matchedVal === icePrice[j] ){
//             val = icePrice[i]
//             match = true;
//             break;
//         }
//     }
//     if(match){
//         break;
//     }
// }
// console.log(icePrice.indexOf(val), icePrice[icePrice.indexOf(val)]) // 2 6

/// ---  Gensis
// Q1. Write a program which finds difference between two variables representing inTime and Outtime of an employee on 24 hour clock on same date.

// function workingTimeOfEmployee(date, t1, t2){
//     // console.log(date)
//     // if(Date === )
//     let t1Arr = t1.split(":")
//     let t2Arr = t2.split(":")
//     let resultArr = []
//     for(let i in t1Arr){
//             resultArr.push(Math.abs(t1Arr[i] - t2Arr[i]))
//     }

//     return resultArr.join(':')
// }
// let date =   "18/3/2023" // new Date().toLocaleDateString()
// let t1 = "9:30:00"
// let t2 = "17:35:10"
// console.log(workingTimeOfEmployee(date, t1, t2))

///---  Using Regular Expression, write code to validate following pattern
// NN NNNNNN-NNNN
// where N is a digit
// let reg = new RegExp("^[0-9]{2} [0-9]{6}-[0-9]{4}$", "g")
// console.log(reg.test("22 666666-4444")) // true
// console.log(reg)

///////-----  Write a program to handle the arithmetic exception (divide by 0) and handle the exception in main method // which is java question i think
// try {
//     let c = 4/0
//     console.log(c)
// } catch (error) {
//     console.log(error.message)
// }

////---- Write a program find the given string Str = 'Genesis” exist in file or not.
// import fs from "fs"
// let str = "Genesis"
// fs.readFile('./Sample.txt', "utf8", (err, data) => {
//     // if (err) throw err;
// if(err){
//     console.log(err)
// }else{
//     console.log(data) // chng play the genesis game
//     let reg = new RegExp(str, "gi")
//     console.log(reg)  // /Genesis/gi
//     let result = data.match(reg)
//     console.log(result) // [ 'genesis' ]
//     if(result){
//         console.log(str, "exist")
//     }else{
//         console.log(str, "not exist")
//     }
// }
// });

// print table between  n and m n = 3, m = 5
// let n = 3, m = 5
// let arrOne = []
// for(let i = n; i <= m; i++){
//     for(let j = 1; j <= 10; j++){
//         arrOne.push( i * j )
//     }
// }
// console.log(arrOne)
// for(let i = 0; i < 10; i++){
//     console.log( `${arrOne[i]} ${arrOne[i + 10]} ${arrOne[i+ 20]}` )
// }

///// --- Given three ints a b c, one of them  is small, one is medium and one is large. Return true if the three values are evenly spaced so the difference between small and medium is the same as the difference between medium and large.
// function fun(a, b, c){
//     let isEvenly = false
//     let firstTwoDiff = a > b ? a - b : b - a
//     let secondThirdDiff = b > c ? b - c : c - b
//     if(firstTwoDiff === secondThirdDiff){
//         return true
//     }else{
//         return false
//     }
// }
// let a = 3, b = 5, c = 7
// let result = fun(a,b,c)
// console.log(result) // true

//////---  Q1. Write a program called CheckVowelsDigits, which prompts the user for a String. counts the number of vowels |a. e, i. o. u. A O, UI and digits (0 9) contained in the string, and prints the counts and the percentages (with 2 decimal digits) For example
// Enter a String: testing12345
// Number of vowels: 2 (16.67%)
// Number of digits.5 (41.67%)

// function CheckVowelsDigits(str){
//     let  countVowels = 0, countDigits = 0;
//     for(let i = 0; i < str.length ; i++){
//         if(str[i].match(/[aeiou]/gi)){
//             countVowels++;
//         }else if( str[i].match(/[0-9]/gi) ){
//             countDigits++;
//         }else{
//             continue;
//         }
//     }
//     let vowelPersentage = Math.round(countVowels * 100 / str.length * 100)/100
//     let digitPersentage = Math.round( countDigits * 100 / str.length  * 100)/100

//     // console.log(vowelPersentage, digitPersentage)
//     return `Number of Vowels ${countVowels} (${vowelPersentage}) Number of Digits ${countDigits}(${digitPersentage})`
// }
// let str = "testing12345"
// console.log(CheckVowelsDigits(str))

// Q2. Write a program to filter the given string "ab5c2d4ef12s" in to two strings first contains all alphabets and second contains all numbers
// let str = "ab5c2d4ef12s"
// let num = "", char = "";
// for(let i = 0; i < str.length; i++){
//     if(isNaN(Number(str[i]))){
//         char += str[i]
//     }else{
//         num += str[i]
//     }
// }
// console.log(str)
// console.log(char, num)

// Find two largest number in give array :- [1,50,65,45,33,22,78,90]
// let ar = [1,50,65,45,33,22,78,90]
// let sortArr = ar.sort((a, b) => a - b)
// console.log(sortArr[sortArr.length-2], sortArr[sortArr.length-1])

// Draw Pattern
// 1 2 3 4
//   5 6 7
//     8 9
//       10
// let str = "";
// let n = 4
// let m = 0;
// for(let i = 0; i < n; i++){
//     for(let j = 0; j < i; j++){
//         str += " "
//     }

//     for(let k = 0; k < n - i; k++){
//         m++;
//         str += m
//     }
//     str += '\n'
// }
// console.log(str)
