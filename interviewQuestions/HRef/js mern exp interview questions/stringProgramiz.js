// function fun(str){
//     let variable = '';    
//     return variable
// }
// let str = ;
// let result =  fun(str)
// console.log(result)


///////======= String Programs 
// function checkPalidrome(str){
    // let palidrome = false; ///  SELF soltion
    // for(let i = 0; i < str.length ; i++){
    //     if(str[i] === str[(str.length - 1 )- i]){
    //         palidrome = true
    //     }else{
    //         palidrome = false;
    //         break; 
    //     }
    // }
    // if(palidrome){
    //     console.log('this str is palidrome')
    // }else{
    //     console.log('which is not a palidrome')
    // } 


    // programiz using for loop
    // let len = str.length;
    // for(let i = 0; i < len/2; i++){
    //     console.log(i)
    //     if(str[i] !== str[len - 1 - i]){
    //         return 'which is not polidrome'
    //     }
    // }
    // return 'which is polidrome '

    // let strAr = str.split('') //  convert string to array
    // let reverStrAr = strAr.reverse() // reverse array
    // let strKK = reverStrAr.join('') // array to string
    
    // if(str === strKK ){  // check ppolidrome
    //     return 'polidrome'
    // }else{
    //     return 'not polidrome'
    // }
// }
// let str = 'nayan';
// let result =  checkPalidrome(str);
// console.log(result)


/////=====  JavaScript Program to Sort Words in Alphabetical Order
// let word = 'zxy' //  self solution // sorted only singal array
// let wordArr = word.split('') // Str to arr 
// let sordedWord = wordArr.sort()  // sort arr
// let resulteWord = sordedWord.join('') // arr to str
// console.log(resulteWord)

// let word  = 'I am the king'  /// sorted the words   
// let wordArr = word.split(' ')
// let result =  wordArr.sort()
// for( let i of result){
//     console.log(i)// javaScript sort method first print Uppercase latter than its printed lowercase latter
// }

////////======= JavaScript Program to Replace Characters of a String
// let strOne = 'harsh is a good boy really good';  //  SELF - replace all character
// let strArr = strOne.split(' ') 
// for(let i in strArr ){
//     if(strArr[i] == 'good'){
//         strArr[i] = 'bad'
//     }  
// }
// console.log(strArr)


// using REGex exp 
// let str = 'mr Red has a red house and which is have a red car'
// let RegEx = /red/g  // REGExp expression
// let strResult = str.replace(RegEx, 'blue')
// console.log(strResult)

////====  JavaScript Program to Reverse a String
// function reverseString(str){    
    // let newStr = '';
    // let strAr = str.split(' ') // programiz  using built in method
    // let revArr = strAr.reverse()
    // newStr = revArr.join(' ')

    // for(let i = str.length - 1; i >= 0; i--){  //  programiz using for loop
    //     newStr += str[i]
    // }
    // return newStr
// }
// let str = 'my name is harsh jain'
// let result =  reverseString(str)
// console.log(result)

////=== JavaScript Program to Check the Number of Occurrences of a Character in the String
// function fun(str, countChar){ // SELF-solution
//     let variable = 0;
//     // for(let i = 0 ; i < str.length; i++){  /// using for loop
//     //     if(str.charAt(i) === countChar ){
//     //         variable += 1;
//     //     }
//     // }

//     let reg = new RegExp(`${countChar}`,'g')  /// SELF - using REGEX
//     variable = str.match(reg).length 
//     return variable
// }
// let str = 'harshjainharsh';
// let countChar = 'h'
// let result =  fun(str, countChar)
// console.log(result)


////////====== JavaScript Program to Convert the First Letter of a String into UpperCase
// function fun(str){
//     let variable = '';

    // let firstLet = str[0].toUpperCase()  // SELF - for loop
    // let lastLet = ''
    // for(let i = 1; i < str.length; i++){
    //     lastLet += str[i]
    // }
    // variable = firstLet + lastLet

    // variable = str.replace(str.charAt(0), str.charAt(0).toUpperCase()) //  SELF - using replace mehtod

    // variable = str.charAt(0).toUpperCase() + str.slice(1)  //  programiz -  using slice

    // variable = str.replace(/^./, str.charAt(0).toUpperCase()) // programiz - using RegEXP

//     return variable
// }
// let str = 'harsh jain' ;
// let result =  fun(str)
// console.log(result)


//////=======  JavaScript Program to Count the Number of Vowels in a String
//  function fun(str){
//     let variable = 0;
    // for(let i = 0; i < str.length ; i++){ // SELF 
    //     if(str[i] === 'a' || str[i] ===  'e' || str[i] ===  'i' || str[i] ===  'o' || str[i] ===  'u'){
    //         variable++;
    //     }
    // }   

    // variable =  str.match(/[aeiou]/g).length // progrmiz -  Regex using   

//     let vowels = ["a", "e", "i", "o", "u"]
//     for(let i of str.toLowerCase()){
//         if(vowels.includes(i)){
//             variable++;
//         }
//     }
//     return variable
// }
// let str = 'harshjain eoua';
// let result =  fun(str)
// console.log(result)


///////=============  JavaScript Program to Check Whether a String Starts and Ends With Certain Characters
// function fun(str){ // programiz
    // if(str.startsWith('h') && str.endsWith('n')){
    //     return 'starting h ending n'
    // }else if(str.startsWith('h')){
    //     return 'starting h but not ending n'
    // }else if(str.endsWith('n')){
    //     return 'not starting h ending n'
    // }else{
    //     return 'not starting h and not ending n'
    // }


//     if(/^h/g.test(str) && /n$/g.test(str) ){ /// programiz - using REGExp
//         return 'starting h and ending n '
//     }else if(/^h/g.test(str)){
//         return 'starting h but not ending n '
//     }else if(/n$/g.test(str)){
//         return 'not starting h but ending n '
//     }else{
//         return 'not start h and end n'
//     }
// }
// let str = 'harshjain' ;
// let result =  fun(str)
// console.log(result)



///////=====  JavaScript Program to Replace All Occurrences of a String
// let str = 'mr red has red house and red car'

// let result =  str.split('red').join('blue') // programiz 
// console.log(result)

// let reg =  str.replace(/red/g, 'blue')  //// SELF 
// console.log(reg)

// let strAr =  str.split(' ') // SELF
//     for(let i in strAr){
//         console.log(i)
//         if(strAr[i] == 'red'){
//             strAr[i] = 'blue' 
//         }
//     }
// console.log(strAr)



///////====  JavaScript Program to Create Multiline Strings
// let str = 'harsh jain \nfrom \nUSA'  //  using \n
// console.log(str)  

// let newStr =  `harsh jain   
//       form
//       gadarwara`
// console.log(newStr)  /// using template literals


///// ====  JavaScript Program to Format Numbers as Currency Strings
// let result = (2500).toLocaleString('en-US',{  // using toLocalSting  3 more solutions in prograamiz 
//     style : 'currency',
//     currency : 'USD'    
// })
// console.log(result)


/////====  JavaScript Program to Generate Random String
// function generateString(num){  // SELF ==  programiz
//     let str = 'ABCDEFGHIJKLMNOPQRSTWXYZ'
//     let result = '';
//     for(let i = 0; i < num; i++){
//         result += str[Math.floor(Math.random()*str.length)] 
//     }
//     console.log(result)
// }
// let numberOfCharacter = 5;
// generateString(numberOfCharacter)

// const result = Math.random().toString(36).substring(2,7);  //  programiz using built methods
// console.log(result);


//////=====  JavaScript Program to Check if a String Starts With Another String 

// let str =  'harshjain'
// console.log(str.startsWith('h'))  // true  //  using startWith method

// console.log(str.indexOf('h') ==  0)  // truw  //  using indexOf

// console.log(/^h/.test(str)) //  true //  using RegEx


///// =====  JavaScript Program to Trim a String
// let str =  '  harshjain  '  //  SELF
// console.log(str)   
// console.log(str.trim())  // trimStart() , trimEnd()    


/////====   JavaScript Program to Check Whether a String Contains a Substring
// let str = 'harshjain';
// console.log(str.includes('ars'))  //  true
// console.log(str.indexOf('ars'))  //  1
// console.log(/ars/g.test(str))   //  true

////=====  JavaScript Program to Compare Two Strings
// let strOne = 'harsh'
// let strTwo = 'harsh'
// console.log(strOne.toUpperCase() ===  strTwo.toUpperCase()) // true
// console.log(/ars/g.test(strOne) === /ars/g.test(strTwo)) // true

///// program to replace all line breaks in a string with <br>
// const string = `I am Learning JavaScript.
// JavaScript is fun.
// JavaScript is easy.`;
// const result = string.split('\n').join('<br>');   
// console.log(result);


/////===  JavaScript Program to Get File Extension 
// function fileExtention(filename){
    // let x = filename.split('.').pop() // using split and pop

    // let extan = '';  // SELF
    // for(let i in filename ){
    //     if( filename[i] === '.'){
    //         for(let j = i; j < filename.length; j++){
    //             extan += filename[j]
    //         }
    //     }else{
    //         continue
    //     }
    // }
    // console.log(extan)

    // let x = '';  
    // let dot = filename.lastIndexOf('.') 
    // x  = filename.substring(dot + 1, filename.length)
    // return x
// }
// let filename = 'module.js'
// let result =  fileExtention(filename)
// console.log(result)


//////==== JavaScript Program to Remove All Whitespaces From a Text
// let str = '   hello world   '
// console.log(str.trim())
// console.log(str.split(' ').join(''))








