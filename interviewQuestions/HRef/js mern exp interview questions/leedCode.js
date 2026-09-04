// voiler plate 
// function fun(s){
//     return s
// }
// let str = 'loveleecode'
// console.log(fun(str))



// let nums = [2,5,5,11]
// let target = 10
// function twoSome(nums, target){
//     let newArr = []
//     for(let i = 0; i <= nums.length; i++){
//         for(let j = 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 newArr.push(i, j)
//                 return newArr
//             }
//         }
//     }
//     return newArr
// } 
// console.log(twoSome(nums, target))


/////  Roman to intger
// let symbols = {  
//     "I": 1,
//     "V": 5,
//     "X": 10,
//     "L": 50,
//     "C": 100,
//     "D": 500,
//     "M": 1000
// };
// var romanToInt = function(s) {
//     let value = 0;
//     for(let i = 0; i < s.length- 1; i+=1){
//         // console.log(symbols[s[i]], '<' , symbols[s[i+1]], '?', value, '-=',  symbols[s[i]], ':', value, '+=' , symbols[s[i]]  )
//         symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
//         // console.log(':value =', value)
//     }
//     // console.log(value ,'+', symbols[s[s.length-1]])
//     return value + symbols[s[s.length-1]];
// };
// console.log(romanToInt('IVIV'))

/////  -----  FIZZ BUZZ
// function fizzBuzz(n){
//     let newArr = []
//     for(let i = 1; i <= n; i++){
//         if(i%3===0 && i%5===0){
//             newArr.push('FizzBuzz')
//         }else if(i%3===0){
//             newArr.push('Fizz')
//         }else if(i%5===0){
//             newArr.push('Buzz')
//         }else{
//             newArr.push(`${i}`)
//         }
//     }
//     return newArr
// }
// console.log(fizzBuzz(15))


///////-------  Longest Comon prefix string 
// function fun(strs){  ////  greeks for greeks
//     function longPrefix(str1, str2){
//        let result = ''
//        let n1 = str1.length
//        let n2 = str2.length
//        for(let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++){
//         if(str1[i] != str2[j]){
//             break;
//         }
//         result += str1[i] 
//     }
//     return result
//     }

//     function comparePrefix(arr, n){
//         let prefix = arr[0]
//         for(let i = 1; i < n ; i++){
//             prefix = longPrefix(prefix, arr[i])
//         }
//         return prefix
//     }

//     let len = strs.length
//     let ans = comparePrefix(strs, len)
//     if(ans.length > 0){
//         return ans
//     }else{
//         return ""
//     }

//   }
// let Arr = ["flower","flow","flight", "flow"]
// console.log(fun(Arr))




// find first unique character if string

// function fun(s){  //// SELF
// let uniqueStr = ''
// for(let i of s){
//     let reg = new RegExp(`${i}`, 'g')
//     if(s.match(reg).length === 1 ){
//         uniqueStr = i
//         break;
//     }else{
//         uniqueStr = 0
//     }
// }
// return s.indexOf(uniqueStr)


// for(let i of s){        
//     if(s.indexOf(i)===s.lastIndexOf(i)){
//         return s.indexOf(i)
//     }else{
//         continue
//     }
// }
// return -1


// for(let i=0; i<s.length; i++)
//     if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
// return -1

// console.log(s.indexOf(s[i]), s.lastIndexOf(s[i]))
// }
// let str = 'harshjainrsjniz'
// console.log(fun(str))


//////=-- find  sqrt of number with nearest integer
// console.log(Math.trunc(Math.sqrt(8))) //  SELF

// var mySqrt = function(x) {
//     for(let i=0;i<=x+1;i++){
//         if(i*i>x) return i-1;
//     }
// };
// console.log(mySqrt(8))



////////////// ---  nums1 kohi modify karke sort karna hai 
// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m, n, ...nums2);
//     nums1.sort((a, b) => a - b);
//     console.log(nums1)
// };
// let nums1 = [1,2,3,0,0,0]
// let nums2 = [2,5,6]
// let m = 3, n = 3 
// merge(nums1, m, nums2, n )


// var merge = function(nums1, m, nums2, n) {
//     nums1.length = m;
//     nums2.length = n;
//     nums1.push(...nums2);
//     nums1.sort(function(a,b){return a - b})
//     console.log(nums1)

// };
// let nums1 = [1,2,3,0,0,0]
// let nums2 = [2,5,6]
// let m = 3, n = 3 
// merge(nums1, m, nums2, n )



//  ///// ----  
// function fun(dig){
//     let arrToNumber = BigInt(dig.join('')) + BigInt(1)
//     let str = String(arrToNumber)
//     let newArr = Array.from(str, res => Number(res))
//     return newArr
// }
// let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// console.log(fun(digits))  //  0/p  [  6, 1, 4, 5, 3, 9, 0,  1, 9, 5, 1, 8, 6, 7,  0, 5, 5, 4, 4 ]



//// =---  Remove dublicates from array sorted array  
// function fun(nums){
//     for(let i=0;i<nums.length;){
//         if(nums[i] === nums[i+1]){
//             nums.splice(i,1)
//         }else{
//             i++
//         }
//     }
//     return nums
// }
// let nums = [1,1,2]
// console.log(fun(nums))


////////////--------  find a valid paranthesis
// function fun(s){

//     const stack = [];
//     for (let i = 0 ; i < s.length ; i++) {
//         let c = s.charAt(i);
//         // console.log(c)
//         switch(c) {
//             case '(': stack.push(')');
//                 break;
//             case '[': stack.push(']');
//                 break;
//             case '{': stack.push('}');
//                 break;
//             default:
//                 if (c !== stack.pop()) {
//                     return false;
//                 }
//         }
//     // console.log(stack)
//     }
//     // console.log(stack)
//     return stack.length === 0;
// }
// let s = "(){}[]"
// console.log(fun(s))



/////  ---  find a palidrame number 
// function fun(x){
// let strx = String(x)
// let isPalidrome = true
// for(let i = 0; i < strx.length ; i++ ){
//     if(strx[i] !== strx[strx.length - i - 1]){
//         isPalidrome = false
//         break;
//     }else{
//         isPalidrome = true
//     }
// }
// return isPalidrome

// return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));
// }
// let x = 1234321
// console.log(fun(x))


//  ----  Remove element of the Array
// function fun(nums, val){
//  // create array with content of nums but without val items
//  let arr = nums.filter(num => num !== val);
//  // set nums length to zero
//  nums.length = 0;
//  // push content of arr to num
//  nums.push(...arr);
//  //return length of nums
//  return nums.length;
// }
// let str = [3,3]
// let val = 3
// console.log(fun(str, val))


/////////------------ 
// function fun(nums, target){
//     if(nums.includes(target)){
//         return nums.indexOf(target)
//     }else{
//         for(let i = 0; i < nums.length; i++){
//             if(nums[i] < target ){
//                 continue
//             }else{
//                 return i 
//             }
//         }
//         return nums.length
//     }
// }
// let nums = [1,3,5,6], target = 3
// console.log(fun(nums, target)) 


//// --  find last word length
// function fun(s){
// let result = 0 ;
// let newStr = s.trim()
// let id = newStr.lastIndexOf(' ', newStr.length)
// for(let i = id + 1 ; i < newStr.length; i++){
//     result++
// }
// return result

// return s.trim().split(" ").pop().length
// }
// let s =  "   fly me   to   the moon  "
// console.log(fun(s)) // o/p - 4

// function fun(n){  
//     let dp = new Array(n + 1);
//     dp[1] = 1, dp[2] = 2;
//     for (let i = 3; i <= n; i++) {
//         dp[i] = dp[i-1] + dp[i-2];
//     }
//     console.log(dp)
//     return dp[n];

// let prev = 0;
// let cur = 1;
// let temp;
// for (let i = 0; i < n; i++) {
//     temp = prev;
//     prev = cur;
//     cur += temp; 
//     console.log(prev, cur, temp)
// }
// return cur; 
// }
// let n = 5
// console.log(fun(n))



// let str = 20
// let isPrime = true
// for(let i = 0; i <= str; i++){
//     for(let j = 2; j < i; j++ ){
//         if(i%j === 0){
//             isPrime = false
//             break
//         }else{
//             isPrime = true
//         }
//     }
//     if(isPrime){
//         console.log(i)
//     }
// }


// function fib(n){
//     if(n === 0){
//         return 1
//     }else{
//         return fib(n-1) * n
//     }
// }
// let k = 5
// console.log(fib(k))


// let str = '';
// let n = 5;
// for(let i = 0; i < n - 1; i++){
//     for(let j = 1; j <= n - i; j++){
//         str += j
//     }
//     str += '\n'
// }
// console.log(str)


// function fun(s){
//     let isPalidrame = true 
//     for(let i = 1; i < s.length; i++){
//         // console.log(s[i - 1] === s[s.length - i])
//         if(s[i - 1] !== s[s.length - i]){
//             isPalidrame = false;
//             break;
//         }
//     }

//     if(isPalidrame){
//         return true
//     }else{
//         return false
//     }
// }
// let str = [1,2]
// console.log(fun(str))



////  2+ year question ---  without changing special characters we can chang string characters 
// function fun(s){
//     let specialChar = ""
//     let CharAr = ""
//     for(let i = 0; i < s.length; i++){
//         if(s[i].match(/[a-z]/gi)){
//             CharAr += s[i]
//         }else{
//             specialChar += s[i]
//         }
//     }
//     CharAr = CharAr.split('').reverse().join('')

//     let specialCharArr = specialChar.split('') 
//     let arrIndex = []

//     let sArr = s.split('')
//     for(let i = 0; i < specialCharArr.length; i++){
//         while(sArr.includes(specialCharArr[i])){
//             arrIndex.push(sArr.indexOf(specialCharArr[i]))
//             sArr.splice(sArr.indexOf(specialCharArr[i]), 1, null)
//         } 
//     }

//     let arr = CharAr.split('')
//     for(let m = 0; m < arrIndex.length; m++){
//         arr.splice(arrIndex[m], 0, specialChar[m])

//     }
//     return arr.join('')
// }
// let str = 'h,ar&sh-ja@i@n'
// console.log(str)
// console.log(fun(str))

// console.log(/ha/g.test("ha"))


///////////// --  way of find indexNumber SELF-MADE
// let strArr = "haraabb"
// let arr = strArr.split('')
// let  inArr = []
// let ar = ["a", "a", "a", "b", "b"]
// for(let i = 0; i < ar.length; i++){
//     while(arr.includes(ar[i])){
//         inArr.push(arr.indexOf(ar[i])) 
//         arr.splice( arr.indexOf(ar[i]), 1, null )
//     }
// }
// console.log(inArr)
// console.log(arr)


////////// --  1st  // return needle first occurance 
// function run(haystack, needle) {

//     if(haystack.includes(needle)){
//         let count = 0;
//         let indexVal = 0;
//         for(let i = 0; i < haystack.length ; i++){
//             if(haystack[i] === needle[0]){
//                 // console.log(i)
//                 for(let k = 0; k < needle.length; k++){
//                     // console.log(i, k, i + k , count, haystack[i + k] , needle[k])
//                     if(haystack[i + k] === needle[k]){
//                         count++;
//                         console.log(count, needle.length)
//                         if(count === needle.length){
//                             indexVal = i  ;
//                             console.log(indexVal, i , "its indexVal" )
//                             return indexVal
//                             // break
//                         }
//                     }else{
//                         break;
//                     }
//                 }
//                 count = 0;
//             }else{
//                 continue;
//             }
//         }
//     }else{
//         return -1
//     }
// };
// let haystack = "mississippi"
// let needle = "sipp" // 6

// let haystack = "sadbutsad"
// let needle = "sad" // 0
// console.log( run(haystack, needle) )




///////// --2nd // vlid palidrame 
// function fun(s){
//     let newStr = ""
//     for(let i = 0; i < s.length ; i++ ){
//         // let reg = new RegExp("[a-z]", "gi")
//         // console.log(/[a-z]/gi.test(s[i]), s[i])
//         if(/[a-z]/gi.test(s[i]) || /[0-9]/gi.test(s[i]) ){
//             newStr += s[i].toLowerCase()
//             // break
//         }else{
//             continue
//         }
//     }
//     console.log(newStr)
//     // console.log(s.test())
//     let isPalidrame = false
//     for(let i = 0; i < newStr.length; i++ ){
//         if( newStr[i] !== newStr[ newStr.length - i - 1 ] ){
//             isPalidrame = true
//             break;
//         } 
//     }
//     if(isPalidrame){
//         return false
//     }else{
//         return true
//     }
// }
// // let str = "A man, a plan, a canal: Panama" // TRUE
// let str = "0P" // false
// console.log(fun(str))


/////  3rd
// function fun(nums){
// let newArr = nums.filter((curElem, index) => {
//     return nums.indexOf(curElem) !== index
// }) 
// for(let i = 0; i < nums.length; i++){
//     if(!newArr.includes(nums[i])){
//         return nums[i]
//     }
// }
// }
// let str = [1,2,2,1,3,3,5]
// console.log(fun(str))


//// --- program to find majority numbers 
// function fun(nums){
//     let count = 0;
//     let highArr = []

//     for(let i = 0; i < nums.length ; i++){
//         for(let j of nums){
//             if(nums[i] === j){
//                 count++;
//             }
//         }
//         highArr.push(count)
//         count = 0
//     }

//     let maxCountIndex = highArr.indexOf(Math.max(...highArr))
//     return nums[maxCountIndex]
// }
// let str = [2,2,1,1,1,2,2,3,3,1,1,3,3,3,3,'h','h','h', 'h', 'h', 'h', 'h']
// console.log(fun(str))



//// ---  Containe Duplicates
// function fun(nums){
//     let newArr = nums.filter((curElem, index) => {
//         return nums.indexOf(curElem) !== index
//     })
//     console.log(newArr)
//     if(newArr.length !== 0){
//         return true
//     }else{
//         return false
//     }

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         if(nums[i] === nums[j]){
//             return true
//         }
//     }
// }
// return false
// }
// let str = [1,2,3,4]
// console.log(fun(str))



////  --- find out missing number
// function fun(nums){
//     let sortedArr = nums.sort((a, b) => a - b)
//     let missingNum = 0
//     for(let i = 0; i <= sortedArr[sortedArr.length - 1] ; i++){
//         if( i !== sortedArr[i] ){
//             missingNum = i
//             break;
//         }
//     }
//     if(missingNum === 0){
//         return sortedArr[sortedArr.length - 1] + 1
//     }else{
//         return missingNum
//     }
// }
// let nums = [1]
// console.log(fun(nums))


//// ---   find a Happy number 
// let n = 19 , 
// if let n = 2 // false
// Explanation:
// 1**2 + 9**2 = 82
// 8**2 + 2**2 = 68
// 6**2 + 8**2 = 100
// 1**2 + 0**2 + 0**2 = 1
// let n = 19 // o/p  true

// function fun(n){
//     let isHappy = false
//     let numStr = String(n)
//     let numArr = Array.from(numStr, res => Number(res))
//     let squareArr = []
//     // console.log(numArr)
//     while(!isHappy){
//         console.log(numArr)
//         let checked = 0;
//         for(let i = 0; i < numArr.length; i++){
//             squareArr.push(numArr[i]**2)
//         }
//         for(let j = 0; j < squareArr.length; j++ ){
//             checked += squareArr[j]
//         }
//         if(checked === 1){
//             return "its a happy number"
//         }else{
//             numArr = []
//             let checkedStr = String(checked)
//             let checkedArr = Array.from(checkedStr, res => Number(res))
//             console.log(checkedArr, numArr)
//             for(let k = 0; k < checkedArr.length; k++){
//                 numArr.push(checkedArr[k])
//             }
//         }
//         console.log(checked)
//         isHappy = true
//     }
//     console.log(squareArr)
//     return n
// }



////  ---  not submit in leedcode
// var isHappy = function(n) {
//     // console.log(n)
//     let result = n;
//     const visited = {};
//     const getDigits = number => `${number}`.split('').map(str => Number(str));

//     // const getDigits = (number) => { // self
//     //     return Array.from(`${number}`, res => Number(res))
//     // }

//     // escape loop if result is 1
//     while (result !== 1) {
//         let digits = getDigits(result);
//         // console.log(digits)
//         result = digits.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
//         // console.log(result)
//         // memorized visited results. it's not a happy number when revisit occurs
//         if (visited[result] === undefined) {
//             // console.log(visited[result]) 
//             visited[result] = true;
//         } else {
//             // console.log(visited[result]) 
//             return false
//         }
//     }
//     return true;
// };
// n = 19
// console.log(isHappy(n))  // try to full 




/////---- Reverse bits 1st chng number to binary after reverse that binay num and return its integer value

// function fun(n){
//     return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);
// }
// let n = 11111111111111111111111111111101
// console.log(fun(n)) // o/p 3221225471  // Not Working bcz that bigInt type we cant not access




//////---- Excel Sheet Column Number

// function fun(columnTitle){
//     /////-- SELF // someCase which gives wrong output like "FXSHRXW" correct o/p is 2147483647  
//     // let charArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//     // let excelSheetNum = 0;
//     // let mulArr = []
//     // for(let j = 0; j < columnTitle.length; j++){
//     //     for(let i = 0; i < charArr.length; i++){
//     //         if(columnTitle[j] === charArr[i]){
//     //             mulArr.push(i+1)
//     //         }
//     //     }
//     // }
//     // for(let k = 0; k < mulArr.length - 1; k++){
//     //     excelSheetNum += mulArr[k]*26
//     // }
//     // return  excelSheetNum + mulArr[mulArr.length - 1]

//     let result = 0;
//     let length = columnTitle.length;
//     for(let i = 0; i < length; i++){
//         result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, length - (i + 1));
//     }
//     return result;
// }
// let n = "ZY"
// console.log(fun(n))



// function fun(nums1, nums2){
//     if(nums1.length !== nums2.length){
//         var minArr = nums1.length > nums2.length ? nums2 : nums1
//         var maxArr = nums1.length < nums2.length ? nums2 : nums1
//     }else{
//         var minArr = nums1
//         var maxArr = nums2
//     }
//     let newArr = []
//     // console.log(minArr, maxArr)
//     for(let i = 0; i < minArr.length ; i++){
//         for(let j = 0; j < maxArr.length; j++){
//             if(minArr[i] === maxArr[j] ){
//                 // console.log(j, maxArr)
//                 newArr.push(minArr[i])
//                 maxArr.splice(j, 1)
//                 break;
//             }
//         }
//     }
//     return newArr
// }

// // let nums1 = [1,2,2,1], nums2 = [2,2]  // o/p   [2,2]
// // let nums1 = [4,9,5], nums2 = [9,4,9]  // o/p   [4,9]
// // let nums1 = [1,2], nums2 = [1,1]  // o/p  [1]
// let nums1 = [3,1,2], nums2 = [1,1]  // o/p   [1] 
// console.log(fun(nums1, nums2))



////-- valid anagram 
// function fun(s, t){
//     if(s.length === t.length){
//         for(let j of t){
//             // if(s.includes(j) === false){
//             //     return false
//             // }
//         }
//     }else{
//         return false
//     }
//     return true
// }
// let s = "aacc", t = "ccac" 
// console.log(fun(s, t))


// console.log(s.includes("z"))



/////////////////// ----------------------- practice for exp. interview ------------- 

// function fun(s){
//     let aCount=0, pCount=0, lCount=0;
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === "A"){
//             aCount++;
//         }else if(s[i] === "P"){
//             pCount++;
//         }else{
//             lCount++;
//         }
//     }

//     if(aCount > 2) return false
//     if(/LLL/.test(s)) return false
//     return true
// }
// let str = "PPALLPPPAA"
// console.log(fun(str))


/////-----------------------
// function fun(nums, divisors) {
//     let maximumDivisorArray = divisors.map((curElem, index) => {
//         let count = 0;
//         for(let i = 0; i < nums.length ; i++){
//             if(nums[i] % curElem === 0){
//                 count++;
//             }
//         }
//         return count
//     })

//     console.log(maximumDivisorArray);

//     let maxDivi = Math.max(...maximumDivisorArray)

//     let finalarr = []

//     for(let i = 0; i < maximumDivisorArray.length ; i++){
//         if( maximumDivisorArray[i] === maxDivi ){
//             finalarr.push(i)
//         }
//     }
//     let st = [ ...divisors  ]
//     let sortAse = st.sort((a, b) =>  a - b)

//     if(maxDivi === 0) return sortAse[0]

//     let val = finalarr.map((curElem, index) => {
//         return divisors[curElem]
//     })
//     return Math.min(...val)
// }
// let nums = [92,31,34,19,96,6,58,98,14,94,4,95,41,23,98], divisors = [26,69,35,52,92,26,32,61,60,19,43,22,59,96,40,42,59,48,36,41,14,100,68,63,42,55,93,4,55]
// let nums = [24,73,63,76,44,30,11,16,71,87,10], divisors = [49,32,72,53,89,96,93,27,49,20,53,30,70,70,79,100,99,96,58,51,21]
// let nums = [42], divisors = [60,25,4,58,23,22,27,26,3,79,64]
// console.log(fun(nums, divisors))






// function fun(tokens) {
//      const stack = [];
//      for (const s of tokens) {
//           const c = s.charAt(0);
//           console.log(c, stack);
//           if (c === '+') {
//                const b = stack.pop();
//                const a = stack.pop();
//                stack.push(a + b);
//           } else if (c === '-' && s.length === 1) {
//                console.log("run..");
//                const b = stack.pop();
//                const a = stack.pop();
//                stack.push(a - b);
//           } else if (c === '*') {
//                const b = stack.pop();
//                const a = stack.pop();
//                stack.push(a * b);
//           } else if (c === '/') {
//                const b = stack.pop();
//                const a = stack.pop();
//                stack.push((a / b) | 0); // Truncate towards zero
//           } else {
//                stack.push(parseInt(s));
//           }
//      }
//      return stack[0];
// }
// let tokens = ["-22", "-11", "+", "3", "*"]
// console.log(fun(tokens))


// --------- move 0 at the and of array ---- 
// function fun(nums) {
//        let m = 0, temp;
//        for (let i = 0; i < nums.length; i++) {
//          if (nums[i] != 0) {
//            temp = nums[i];
//            nums[i] = nums[m];
//            nums[m] = temp;
//            m++;
//          }
//        }
//        return nums;
// }
// let str = [0,1,0,3,12]
// console.log(fun(str)) // [ 1, 3, 12, 0, 0 ]



// function fun(nums){
//      let maxNum = nums.length
//      let missingNum;
//      for(let i = 0; i <= maxNum ; i++){
//           if(!nums.includes(i)){
//                missingNum =  i
//           }
//      }
//      return missingNum
// }
// let str = [9,6,4,2,3,5,7,0,1] // 8 
// let str = [0,1] // 2
// let str = [1] // 0
// console.log(fun(str))



// function fun(s, t) {
//      if (s.length !== t.length) {
//           return false;
//       }
      
//       var freq = new Array(26).fill(0);
//       for (var i = 0; i < s.length; i++) {
//           freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//           freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
//       }
      
//       for (var i = 0; i < freq.length; i++) {
//           if (freq[i] !== 0) {
//               return false;
//           }
//       }
      
//       return true;
//      // let newStr = s.split("")
//      // let anagram = ""
//      // if (newStr.length === 2) {
//      //      anagram = newStr.reverse().join("")
//      // } else {

//      //      for (let i = 0; i < Math.ceil(newStr.length / 2); i++) {
//      //           if (i % 2 === 1) {
//      //                let temp = newStr[i]
//      //                newStr[i] = newStr[i - 1]
//      //                newStr[i - 1] = temp
//      //           }
//      //      }

//      //      anagram = newStr.join("")
//      // }

//      // console.log(anagram);
//      // return anagram === t
// }
// // let s = "anagram", t = "nagaram"
// let s = "ab", t = "ba"
// console.log(fun(s, t))
// // console.log(s[0]);



// const createCounter = (n) => {
//     let count = n
//     return function(){
//         return count++
//     }
// }
// const counter = createCounter(10)
// counter()
// counter()
// counter()



// async function sleep(millis) { 
//         return new Promise((resolve, reject) => { setTimeout(() => { console.log("hello"); resolve(200); }, millis); });
// }

// const res = sleep()
// console.log(res); // hello




// Array.prototype.last = function(Array){
//     return this.length === 0 ? -1 : this[this.length - 1]
// }

// let arr = [1,2,3,4]
// let ar = []

// console.log(ar.last())
// console.log(arr.last())




// let nums = [1,2,3,4]
// let nums = [1,2,8,3,10,23]
// let fn = function sum(accum, curr) { return accum + curr; }
// let fn = function sum(accum, curr) { return (curr + accum) % 2; }
// let init = 0

// var reduce = function(nums, fn, init) {
//     if(nums.length === 0) return init
//     for(let i = 1; i < nums.length; i++){
//         init = fn(init, nums[i])
//     }
//     return init
// };

// console.log(reduce(nums, fn, init))


// function fun(s){
//     let palidromeStr = ""
//     for(let i = 0; i < s.length ; i++){
//         let extarctStr = s.slice(0, i)
//         let reverseArr = extarctStr.split("").reverse().join("")
//         console.log(extarctStr, reverseArr);
//     }
//     return s
// }
// let str = 'loveevolee'
// console.log(fun(str))


// function fun(s){
//      let strArr = s.split('')
//      let regExp = /[aeiou]/ig
//      let matchArrs = s.match(regExp)
//      let j = matchArrs.length - 1;
//      for(let i in strArr){
//           if(matchArrs.includes(strArr[i])){
//                strArr.splice(i, 1, matchArrs[j]  )
//                j--;
//           }
//      }
//     return strArr.join("")
// }
// let str = "aA"
// console.log(fun(str))


// console.log("harsh".replace);

// Example 1:
// "aeiou"
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede


// // console.log("k");
// let p1 = new Promise((resolve, reject) => {
//      setTimeout(() => {
//           console.log("run.. setTimeOut");
//           resolve("resolve done")
//      }, 2000);
// })

// p1.then((res) => {
//      console.log(res);
//      let p2 = new Promise((resolve, reject) => {
//           setTimeout(() => {
//                resolve("ddd")
//           }, 2000);
//      })
//      return p2
// }).then(val => console.log(val))
// .catch(err => console.log(err)) 













// let arr = [23,54, 1,12,56,78,33,67,91,7,62,10,4]
// console.log(arr.sort((a, b) => a - b));
// let withOutEven = arr.filter((curElem, index) => {
//      return curElem % 2 === 0
// })
// let evenNum = []
// for(let i = 0; i < withOutEven.length ; i++){
//      for(let j = 0; j < withOutEven.length ; j++){
//           if(withOutEven[i] > withOutEven[j]){
//                let temp = withOutEven[i]
//                withOutEven[i] = withOutEven[j]
//                withOutEven[j] = temp 
//           }
//      }
// }
// let desArr = [...withOutEven]
// for(let i = 0; i < desArr.length ; i++){
//      for(let j = 0; j < desArr.length ; j++){
//           if(desArr[i] < desArr[j]){
//                let temp = desArr[i]
//                desArr[i] = desArr[j]
//                desArr[j] = temp 
//           }
//      }
// }
// console.log("withOutEven ==>", withOutEven);
// console.log(" asecding order==>",withOutEven);
// console.log("desc ==>", desArr);











// o/p
// Ind: [
//      { res: 'Ind', loc: 'Indore', name: 'farzi' },
//      { res: 'Ind', loc: 'Indore', name: 'def' },
//      { res: 'Ind', loc: 'Indore', name: 'pqr' }
//    ],
//    Thai: [
//      { res: 'Thai', loc: 'Indore', name: 'dnd' },
//      { res: 'Thai', loc: 'Indore', name: 'test11' },
//      { res: 'Thai', loc: 'Indore', name: 'test' }
//    ],
//    Chinese: [
//      { res: 'Chinese', loc: 'Indore', name: 'xyz' },
//      { res: 'Chinese', loc: 'Indore', name: 'social' }
//    ],








// function fun(nums){
//     let count = 0
//     let candidate
//     for (let i = 0; i < nums.length; i++) {
//         if (count === 0) {
//             candidate = nums[i]
//             count = 1
//         } else if (candidate === nums[i]) {
//             count++
//         } else {
//             count--
//         }
//     }
//    return candidate
// }
// // let str = [2,2,1,1,1,2, 1,6,5,2,2]
// let str = [1,1,1,2,5,3,4,5]
// // let str = [6,5,5]
// console.log(fun(str))


// function majorityElement(nums) {
//      let counts = {};
//      let majorityThreshold = nums.length / 2;
//      // console.log(majorityThreshold);
//      for (let i = 0; i < nums.length; i++) {
//          let num = nums[i];
//          counts[num] = (counts[num] || 0) + 1;
//          console.log(counts);
//          if (counts[num] > majorityThreshold) {
//              return num;
//          }
//      }
//      return null; // No majority element found
//  }
 
//  // Example usage:
//  const array = [2, 2, 1, 1, 1, 2, 2];
//  console.log(majorityElement(array)); // Output: 2




// function fun(prices){
//      // let minNum = Math.min(...prices)
//      // if(prices.indexOf(minNum) === prices.length - 1) return 0
//      // let faterMinPirceArr = prices.splice(prices.indexOf(minNum), prices.length)
//      // let maxNum =  Math.max(...faterMinPirceArr)
//      // if(maxNum - minNum  >= 0  ) return maxNum - minNum 
//      // else return 0 


//      // let aseOdr = [...prices].sort((a, b) => a - b)
//      // let checkProfit = false;
//      // let profit = 0
//      // for(let i = 0; i < aseOdr.length; i++){
//      //      let index = prices.indexOf(aseOdr[i]) 
//      //      let remainArr = [...prices].splice(index, prices.length)
//      //      for(let i of remainArr){
//      //           if( i > remainArr[0] ) {
//      //                checkProfit = true;
//      //                let maxVal = Math.max(...remainArr) - remainArr[0]
//      //                profit = maxVal > profit ? maxVal : profit
//      //                break;
//      //           } 
//      //      }
//      // }
//      // if(!checkProfit) return 0
//      // return profit

//      let left = 0; // Buy
//   let right = 1; // sell
//   let max_profit = 0;
//   while (right < prices.length) {
//     if (prices[left] < prices[right]) {
//       let profit = prices[right] - prices[left]; // our current profit

//       max_profit = Math.max(max_profit, profit);
//     } else {
//       left = right;
//     }
//     right++;
//   }
//   return max_profit;
// }
// // let str = [7,1,5,3,6,4]
// let str = [2,4,1]
// console.log(fun(str))



// var firstPalindrome = function(words) {
//   let fill;
//   try {
//     words.filter((curElme, index) => {
//         if(curElme === curElme.split("").reverse().join("")){
//           throw curElme
//         } 
//       return fill
//     })

//   } catch (elem) {
//     fill = elem
//   }
//   return fill ? fill : ""



//     // let fil = words.reduce((accum, curElme, index) => {
//     //   let check = false
//     //     if(curElme === curElme.split("").reverse().join("")){
//     //       check = true
//     //       // break;
//     //     } 
//     //     if(check) accum = curElme
//     //   return accum
//     // }, "")


// //     let fil;
// // try {
// //   fil = words.reduce((accum, curElme) => {
// //     if (accum !== "") return accum; // If a palindrome is already found, return it without further processing
// //     if (curElme === curElme.split("").reverse().join("")) {
// //       throw curElme; // Throw an exception to break out of the loop
// //     }
// //     return accum;
// //   }, "");
// // } catch (matchedElement) {
// //   fil = matchedElement; // Catch the thrown element and assign it to fil
// // }


//     // console.log(fill);
//     // return fill ? fill : ""
// };
// let s = ["abc","car","ada","racecar","cool"]
// console.log(firstPalindrome(s))









// function fun(obj){
//   if(Array.isArray(obj)){
//     return obj.length === 0;
//   }else if( typeof obj === "object" && !Array.isArray(obj) ){
//     return Object.keys(obj).length === 0;
//   }else{
//     return false
//   }
// }
// let str = {"x": 5, "y": 42}
// console.log(fun(str))
// console.log(JSON.parse(str), str);



// console.log(Object.keys());
// obj = 
// console.log(obj);



// let promise = new Promise(resolve => setTimeout(() => {
//   resolve(100)
// }, 1000))
// let promiseT = new Promise((resolve, reject) => setTimeout(() => {
//   // resolve(100)
//   reject("som")
  
// }, 1000))
// async function fun(pro){
//   let res = await pro
//   console.log(res);
//   console.log("run...");
// }
// fun(promise)
// fun(promiseT)






// let arr1 = [
//   {"id": 1, "x": 2, "y": 3},
//   {"id": 2, "x": 3, "y": 6, "z" : 33},
//   {"id": 3, "x": 31, "y": 6},
//   {"id": 4, "x": 32, "y": 6}
// ]
// let arr2 = [
//   {"id": 2, "x": 10, "y": 20},
//   {"id": 3, "x": 0, "y": 0},
//   {"id": 4, "x": 31, "y": 6}
// ]

// let arr1 = [{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}]
// let arr2 = [{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]


// let arr1 = [{"id":1,"b":{"b": 94},"v":[4,3],"y":48}]
// let arr2  = [{"id":1,"b":{"c": 84},"v":[1,3]}]


// let arr1 = [{"id":1,"x":36,"d":26,"f":35}]
// let arr2 = [{"id":4,"c":20,"z":75}, {"id":2,"o":48,"z":84,"y":61}, {"id":1,"x":36,"d":26,"f":5}]
// // // Output: [
// //   {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// // ]
// function fun(arr1, arr2){
//   // let finalArr = [...arr1, ...arr2]
//   // let result = finalArr.map((curElem, index) => {
//   //   for(let i = index + 1; i < finalArr.length; i++){
//   //     if(curElem.id === finalArr[i].id){
//   //       curElem = { ...curElem, ...finalArr[i] }
//   //     }
//   //   }
//   //   return curElem
//   // })

//   // let uniqueArray = result.reduce((accu, elem, indx) => {
//   //   let exitArr = accu.findIndex(item => item.id === elem.id)
//   //   if(exitArr === -1){
//   //     accu.push(elem)
//   //   } 
//   //   return accu
//   // }, []).sort((a, b) => a.id - b.id) 
//   // return uniqueArray


//   // let finalArr = [...arr1, ...arr2]
//   // let uniqueArray = finalArr.reduce((accu, elem, indx) => {
//   //   let exitArr = accu.findIndex(item => item.id === elem.id)
//   //   if(exitArr === -1){
//   //     let remainElem = arr2.find( i => i.id === elem.id )
//   //     if(remainElem){
//   //       accu.push({...elem, ...remainElem})
//   //     }else{
//   //       accu.push(elem)
//   //     }
//   //   } 
//   //   return accu
//   // }, []).sort((a, b) => a.id - b.id) 
//   // return uniqueArray



//   // const result = {};
//   //   for (let i = 0; i < arr1.length; i++) {
//   //       result[arr1[i].id] = arr1[i];
//   //   } 
//   //   for (let i = 0; i < arr2.length; i++) {
//   //       if (result[arr2[i].id]) {
//   //           for (const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key];  
//   //       } else {
//   //           result[arr2[i].id] = arr2[i];
//   //       }
//   //   } 

//   //   return Object.values(result);


//   // var joinedHashMap = {}
//   //   // concat arr1 and arr2
//   //   for(var objFromArray of arr1.concat(arr2)) {
//   //       var id = objFromArray.id;
//   //       // check if id (object as a value) already in hashMap
//   //       joinedHashMap[id] ?
//   //       // if yes, assign new value to it using spread operator "..." combining 2 objects
//   //       joinedHashMap[id] = {...joinedHashMap[id], ...objFromArray} :
//   //       // if no, assing object from array as a value
//   //       joinedHashMap[id] = objFromArray
//   //   }
//   //   // since we don't need keys and only values, we use Object.values({}) method which will return an array of values
//   //   return Object.values(joinedHashMap)



//   // let items = arr1.concat(arr2);
//   //   let result = {};
//   //   for(const obj of items) {
//   //     if(!result[obj.id]) {
//   //       result[obj.id] = obj;
//   //       continue;
//   //     } 
//   //       result[obj.id] = {...result[obj.id], ...obj};
//   //   }
//   //   return Object.values(result);

//   let result = {}
//   let items = arr1.concat(arr2)
//   // console.log(items);
//   for(let item of items){
//     if(!result[item.id]){
//       result[item.id] = item
//     }
//     result[item.id] = { ...result[item.id], ...item  }
//   }
//   // console.log(result);
//   return Object.values(result)
// }
// console.log(fun(arr1, arr2))




// var fibGenerator = function*() {
//      let secondLast = 0
//      let last = 1
//      while(true){
//           yield secondLast
//           let next = secondLast + last
//           secondLast = last
//           last = next
//      }
// };

// const gen = fibGenerator();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 0





// var createCounter = function(init) {
//      // let res = init
//      let res = init;
//      return {
//           decrement : () => --init ,
//           increment : () => ++init ,
//           reset : function(){
//                init = res
//                return init
//           }
//      }
// };
// const counter = createCounter(0)
// console.log(counter);
// console.log("counter ", counter.increment()); 
// console.log("counter ", counter.increment());
// console.log("counter ", counter.decrement());
// console.log("counter reset ", counter.reset());
// console.log("counter reset ", counter.reset());
// [0,1,2,0,0]
// [1,2,1,0,0] 






// var once = function(fn) {
    
//      let i = 0;
//      return function(...args){
//          let arr = [...args]
//          while(i === 0){
//           i++;
//           return fn.apply(null, arr)
//          }
//          return undefined
         
//      }
//  };
 
 
//   let fn = (a,b,c) => (a + b + c)
//   let onceFn = once(fn)
//   console.log(onceFn(6,4,2,4,5,3,2)); // 6
//   console.log(onceFn(2,3,6)); // returns undefined without calling fn
//   [[6,4,2,4,5,3,2]]



// var ArrayWrapper = function(nums) {
//     this.nums = nums;
// };

// ArrayWrapper.prototype.valueof = function(){
//     return this.nums.reduce((accum, curElem) => {
//         return accum += curElem
//     }, 0)
// }

// let nums = [1,2,3,4,5]
// let obj = new ArrayWrapper(nums)
// console.log(obj.valueof(), obj); // o/p  15




// var expect = function(val) {
//     return {
//         toBe: function(b){
//             if(b === null) throw new Error('Not Equal')
//             return val === b
//         },
//         notToBe: function(c){
//             return val !== c
//         }
//     }
// };


// console.log(expect(5).toBe(null)); // true
// console.log(expect(5).notToBe(5)); // true
 
// expect(5).notToBe(5); // throws "Equal"



// var sortBy = function(arr, fn) {
    
//     let result = arr.filter(fn).sort((a, b) => a - b)
//     return result
// };


// const fn = (x) => x.x
// let mm = [{"x":1},{"x": 0},{"x": -1}]   // [{"x":-1},{"x":0},{"x":1}]

// const fn = (x) => x
// let mm = [-1,0,10]

// let res = mm.map(fn).sort((a, b) => a - b).reduce((accum, ele, index)=> {
//     let elem = mm.find(curlem => fn(curlem) === ele)
//     console.log(elem);
//     if(elem || elem === 0) accum.push(elem)
//     return accum
// }, [])



// function fun(arr, size){ // [[1,9,6],[3,2]]
//     let result = []
//     while( arr.length > size ){
//         result.push(arr.splice(0, size))
//     }
//     result.push(arr)

//     // let sunArraysLen = Math.ceil(arr.length / size)
//     // for (let index = 0; index < sunArraysLen; index++) {
//     //     if(arr.length < size){
//     //         result.push(arr)
//     //     }else{
//     //         result.push(arr.splice(0, size))
//     //     }
//     // }
//     return result
// }
// let arr = [1,9,6,4,5,6,10,12,13,3,2], size = 3
// // let arr = [1,2,3,4,5], size = 1
// // let arr = [8,5,3,2,6], size = 6
// // let arr = [], size = 1
// console.log(fun(arr, size))


// let fn = (x) => x * 2, args = [4,1,2,3], t = 35
// var cancellable = function(fn, args, t) {

//     fn(...args);
//     let timer = setInterval(() => fn(...args), t);

//     let cancelFn = () => clearInterval(timer);
//     return cancelFn;

//     // function fun(x){

//     // }
//     // console.log(fn(...args));
//     // fun(...args)

//     // let i = 1
//     // let m = setInterval(() => {
//     //     i++;
//     //     console.log(i);
//     //     if(i > 5){
//     //         clearInterval(m)
//     //     }
//     // }, 2000);

//     // const cancelTimeMs = () => {

//     // }
//     //  const cancelFn = () => {
//     //      for(let i of args){
//     //          return setInterval(fn(i), t);
//     //         }
//     //     }

//     // setTimeout(cancelFn, 1000);
//     // console.log(i);
//     // console.log(m);
//     // const cancelFn = () => {
//         // for(let i of args){
           
//         // }
//     // }
    
//     // clearInterval(cancelFn, )
//     // return args
// };

// console.log(cancellable(fn, args, t));



// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 


// function fun(x){
//     // console.log(( 231 > x && x > -231 ));
//     // console.log(strX);
//     // let strX = String(x).split("").filter(item => Number(item) !== 0).join("")
//     let rr = String(x).split("")
//     let strX = rr.filter((item, ind) => {
//         let startInd = rr.findIndex(ele => Number(ele) !== 0)
//         let lastInd = rr.length - 1
//         for(let i in rr){
//             console.log(rr[rr.length - i - 1]);
//             if(rr[rr.length - i - 1] !== 0 ){
//                 lastInd = Number(i)
//             }
//         }
//     // console.log(lastInd, ");"
//         if(ind >= startInd && ind <= lastInd){
//             return true
//         }
    
//     }).join("")
// console.log(strX);
//     if(/[0-9]/.test(strX[0]) && ( 231 > Number(strX) && Number(strX) > -231 )){
//         return strX.split("").reverse().join("")
//     }else if(( 231 > Number(strX) && Number(strX) > -231 )){
//         return - strX.slice(1).split("").reverse().join("")
//     }else{
//         return 0
//     }
// }
// // let str = 1534236469
// // let str = 123
// // let str = 900000
// let str = 901000
// console.log(fun(str))

// let rr = [ "0","1", "0"]

// let neArr = rr.filter((item, ind) => {
//     let startInd = rr.findIndex(ele => ele !== 0)
//     let lastInd = rr.length - 1
//     for(let i in rr){
//         if(rr[rr.length - i - 1] !== 0 ){
//             lastInd = Number(i)
//         }
//     }
//     if(ind >= startInd && ind <= lastInd){
//         return true
//     }

// })
// console.log(neArr)



// function fun(nums, target){
//     let startIndex = nums.indexOf(target)
//     let endIndex = -1
//     for(let i = nums.length - 1; i >= 0 ; i--){
//         if(target === nums[i]){
//             endIndex = i
//             break;
//         }
//     }
//     return [ startIndex, endIndex ]
// }
// let nums = [5,7,7,10], target = 8
// // let nums = [1], target = 1
// // let nums = [3,3,3], target = 3
// console.log(fun(nums, target))



function fun(nums){

    var permute = function (nums) {
        let result = [];
    
        permuteRec(nums, 0, result);
    
        return result;
    };
    
    // This function will swap characters for every
    // permutation
    function swapNums(nums, i, j) {
    let swapIndex = [...nums];
    
      let temp = swapIndex[j];
      swapIndex[j] = swapIndex[i];
      
      swapIndex[i] = temp;
    
      return swapIndex
    }
    
    function permuteRec(nums, currentIndex, result) {
        var swappedNums;
    
        if (currentIndex === nums.length - 1) {
            result.push(nums);
            return;
        }
    
        for (var index = currentIndex; index < nums.length; index++) {
            swappedNums = swapNums(nums, currentIndex, index);
            permuteRec(swappedNums, currentIndex + 1, result);
        }
    }
    
    return permute(nums)

}
let nums = [1,2,3]
console.log(fun(nums))
