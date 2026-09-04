
// console.log("start")

// let name = "   harsh jain   "
// let nameStart = name.trimStart()
// let nameEnd = name.trimEnd()
// console.log("Name :-", name, name.length, "nameStart :-", nameStart, nameStart.length, "nameEnd :-", nameEnd, nameEnd.length);


//  const obj = {
//       name: "harsh",
//       age:22,
//       lastName: function(){
//            console.log(this.age)
//       }
//  }
// console.log(obj.lastName())
// let lastName = "jain";

// const obj = {
//      name : "name", 
//      age: 22
// };
// const obj2 = {  ...obj , myName : 'nayan' , age1 : 23}
// console.log(Object.entries(obj2))

// console.log(Object.fromEntries(obj));



// // const str = "harsh j".padEnd(8)
// // console.log(str)
// // console.log(str.length)

// const arr = [ 1,2,3,[7,8,[9,[0,7]]]]
// console.log(arr.flat(Infinity))
// console.log(arr.length)

// const arr2 = 
//  [
//    ["na", "harsh" , "jain"], ["age", 22]
// ]

// console.log(arr2)
// console.log(Object.fromEntries(arr2))


// const entries = new Map([
//      ['foo', 'bar'],
//      ['baz', 42]
//    ]);

//    const obj = Object.fromEntries(entries);

//    console.log(obj);
// expected output:

// console.log(arr2[7])
// const arrr =  arr.flat(Infinity)
// console.log(arrr.length)

// const arrrr = ["harh", 33,"jain"]
// const arr2 = [ ...arr, 2,1,4,5,6 ]
// console.log(arr2)

// function update(a,...b){
//      console.log(b,a)
//      for( e of b){
//           console.log(e)
//      }
// }
// console.log(update(3,4,7,8))

// const { jain , last, age   } = obj; 
// console.log(last)
// console.log(jain)
// console.log(degree)


// console.log(obj.name)
// console.log(obj.age)

// const arr = [ "harsh" , 33 , 21  ];

// const [ name, age , dg , deg = 'b' ] = arr ;

// console.log(name)
// console.log(age)
// console.log(deg)
// console.log(degree)


// let bi = Number.MAX_SAFE_INTEGER;
// let ci = 9007199254740991n + 50n;
// console.log(typeof ci)
// console.log(typeof bi)
// let n = null;
// console.log( ??"harsh")

// "use strict";
// a = 5;
// console.log(a)


// function add(a){
// let a = 5;
// function abs(a){    
//      console.log(a)
// }
// return abs
// }
// add(5)


// function calculate(num1 , num2 , operator){
//      return operator(num1, num2)
// }

// console.log(calculate(7 , 4 , add))

// console.log(l)
// var l = 8;

// const outerfun = (a) => {
//      let b = 6;
//      const innerfun = () => {
//           let sum = a + b;
//           console.log(sum)
//      }
//      return innerfun;
//      // console.log(sum)
// }

// let a = outerfun(5)
// console.log(a())


// function sum(num1){
//      return function(num2){
//           return function(num3){
//                return num1 + num2 + num3
//           }
//      }
// }

// console.log(sum(3)(4)(3))


// setTimeout(() => {
//      console.log("work 1 is done")
//      setTimeout(() => {
//           console.log("work 2 is done")
//           setTimeout(() => {
//                console.log("work 3 is done")
//                setTimeout(() => {
//                     console.log("work 4 is done")
//                }, 1000);
//           }, 1000);
//      }, 1000);
// }, 1000);

// const num = parseInt(prompt("Enter tha positive number : ")); 

// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));

// const number = 18;
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

// let num = 15;
// let isPrime;
// if(num === 1){
//      console.log("its not composite or not a prime")
// }else{
     // for( let i = 2; i < 17 ; i++ ){
     //      console.log(i)
     //    // break;
     //      }
//      }
// }


// if(isPrime){
//      console.log("not pri")
// }else{
//      console.log("pri")
// }


// let num = 4;
// let isprime = true;

// if(num === 1){
//      console.log("its not a prime neither its composite number")
// }else if(num > 1){
//      for(let i = 2; i < num; i++){
//           if(num%i === 0){
//                isprime = false;
//                // break;
//                console.log(isprime)
//                break;
//           }
//           // console.log(isPrime)
//      }
//      console.log(isPrime)

//      if(isprime){
//           console.log(`${num} is prime number`)
//      }else{
//           console.log(`${num} is not a prime number`)
//      }
// }


// let num = 0;
// let isPrime = true;

// if(num === 1){
//      console.log("its not a prime number or not composite number")
// }else if(num > 1){
//      for(let i = 2; i < num; i++){
//           if(num%i === 0){
//                isPrime = false;
//                // break;
//           }
        
//      }
//      if(isPrime){
//           console.log("prime number")
//      }else{
//           console.log("not prime number")
//      }
// // }

// let n = 6;
// let str = "";

// for(let i = n/2; i < n; i+=2){
//      // str += i;
//      for(let j = 1; j < n-i; j+=2){
//           str += "j"
//      }

//      for(let k = 0; k < i; k++){
//      str += "k"
//      }

//      for(let k = 0; k < n-i; k++){
//           str += "l"
//      }

//      for(let k = 0; k < i; k++){
//           str += "k"
//           }
//      str += "\n"
// }

// console.log(str)

// let str1 = 0;
// let n = 5
// for(let i = 0 ; i < n; i++){
//      // console.log(i) 
//      for(let j = 0; j < n ; j++){
//           // console.log(j) 
//           for(let k = 0 ; k < n ; k++){
//           //     console.log(k) 
//           str1 +=  k;
//           }
//           // str1 += "\n"
//      }
// }
// console.log(str1)

// let str = "harsh jain hazrsh "
// let str2 = "nayan jain"
// let newStr = str.trimEnd()
// let newStr2 = str.repeat(3)
// let newStr3 = str.substr(2, 5)

// console.log(newStr3)

// console.log(str.concat(" jay ho ", str2))
// console.log(newStr2)
// console.log(str.slice(-5, -2))
// console.log(str.length)
// console.log(newStr.length)
// console.log(newStr.length)
// console.log(newStr3)
// console.log(str[15])


// let arr =  [[8,9], [7,8]]
// let arr3 = [8,9,7]
// let arr2 = [ 'harsh', 'nayan', 'babu',  'harsh', 'babu', 'harsh', 'harshJain']

// let newArr = arr.reduce((accumulator, element , index, arr)=>{
//      return accumulator += element
// })
// let newArr2 = arr3.toString()

// console.log(newArr2)
// console.log(typeof newArr2)

// console.log(newArr2)
// console.log(arr)






// let newArr2 = arr2.includes('babub')
// console.log(newArr)
// console.log(newArr2)



// if(n === 0) return 0;
// if(n === 1) return 1;

// ---- with recursion
// function fib(n) {
//      if (n < 2) {
//        return n;
//      }
//      return fib(n - 1) + fib(n - 2); // Fn-1 + Fn-2
// }

// for(let i = 0; i < 10;i++){
//   console.log(fib(i))
// }


// --- without recursion 
// function fibonacci(n) {
//   let fibSeries = [];
//   for (let i = 0; i < n; i++) {
//     if (i <= 1) {
//       fibSeries.push(i);
//     } else {
//       fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
//     }
//   }
//   return fibSeries;
// }

// // Example: Generate Fibonacci series for the first 10 numbers
// let result = fibonacci(10);
// console.log(result);


   

// let n = 7;

// function fib(n){
//      if(n < 2){
//           return n 
//      }
//      return fib(n - 1) + fib( n - 2)
// }


// const num =  fib(n)
// console.log(num)

// let num = 5;
// function recur(num){
//      if(num < 2){
//           return num
//      }else{
//           return recur(num - 1)
//      }
// }     
// console.log(recur(num))


// function totalSum(num){
//      if num in [0, 1]
// }

// console.log(totalSum(5))

// for(let i = 0; i < 5; i++){
     
// }
// console.log(fun(i))

// function sum(num){
//      if(num > 0){
//           return num + sum(num-1)
//      }
//      else{
//           return 0
//      }
// }
// console.log(sum(6))

// console.log("hello world")

// let arr = [];
// // let l = 1;
// for(let i = 1 ; i <= 5; i++){
//      // let m = i*i;
//      // l += m;
//      let newArr = arr[i]
//      console.log(m)
// }
// console.log(l)

// let arr = [1,2,3,4];
// let arr = [1,2,3,4];

// let arr = [];
// let n =6;

// function fac(){

//      for(let i = 1; i <= n; i++){
//           arr.push(i)
//      }
//      console.log(arr)
//      let fac = arr.reduce((accumulator, element, index, arr)=>{
//           return accumulator*element
//      })
//      return fac
// }
// console.log(fac())

// function fac(x){
//      if( x === 0 ){
//           return 0
//      }else{
//           return  x + fac(x-1)
//      }
// }
// console.log(fac(5))


// function gcd(A,B){
//      if(!B){
//           return A
//      }else{
//           return gcd(B,A%B)
//      }
// }
// console.log(gcd(10, 30))


// function findGcd(a, b, c){
//   let maxVal = Math.max(a, b, c)
//   // console.log(maxVal);
//   for(let i = maxVal - 1 ; i > 1 ; i-- ){
//     // console.log(i, a % i === 0,  b % i === 0, c % i === 0);
//     if(a % i === 0 && b % i === 0 && c % i === 0){
//       console.log(i);
//       break;
//     }
    
//   }
//   return 1
// }
// console.log(findGcd(19, 11, 17))




// let arr = [];
// // let newArr = [];

// function middleint(a, b){
//      for(let i = a ; i <= b; i++){
//           arr.push(i)
//      }
//      console.log(arr)
//      arr.shift();
//      arr.pop();
//      console.log(arr)
// }

// middleint(3,7)

// var range = function(){

// }
// console.log(range(2, 9))

// debugger;

// var range = function(start_num, end_num) 
// {
//   if (end_num - start_num === 2) 
//   {
//     return [start_num + 1];
//   } 
//   else 
//   {
//     var list = range(start_num, end_num - 1);
//     list.push(end_num - 1);
//     return list;
//   }
// };
// console.log(range(5,9));

// console.log(2**3)


// function fib(x){

//      if(x < 2){
//           return x
//      }else{
//           return fib(x-2) + fib(x-1) 
//      }

// }

// console.log(fib(3))




// let checkNum = function(x){
//      if(x%2 == 0){
//           console.log("even number")
//      }else{
//           console.log("odd number")
//      }
// }
// console.log(checkNum(6))


// function total(){
//   for(let i = 0; i < arr.length; i++){
//     // console.log(arr[i])

//      tt += arr[i]
//   }
// }
// total()
// console.log(tt)
// let arrTotal = arr.reduce((accumulator, value, index, arr)=>{
//   return accumulator+value
// })
// console.log(arrTotal)





// function mint(A,B){
//      if(A === A || B === B){
//           return 
//      }else{

//      }
// }


// const arr = [ 'harsh' , 'nayan' , 'jain']

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// const newArr = arr.map(function (val, index , arr){
//      return  arr[0]
// })

// console.log(newArr)


// const adArr = [
//      {
//           id: 1,
//           name: "harsh",
//           degree: "B.tech"
//      },
//      {
//           id: 2,
//           name: "ashu",
//           degree: "BCom"
//      },
//      {
//           id: 3,
//           name: "Vj",
//           degree: "Mca"
//      },
//      {
//           id: 3,
//           name: "Vj",
//           degree: "Mca"
//      },
//      {
//           id: 3,
//           name: "Vj",
//           degree: "Mca"
//      },
//      {
//           id: 3,
//           name: "Vj",
//           degree: "Mca"
//      },
//      {
//           id: 3,
//           name: "Vj",
//           degree: "Mca"
//      },
//      {
//           id: 3,
//           name: "Vj",
//           degree: "Mca"
//      },
//      {
//           id: 3,
//           name: "Vj",
//           degree: "Mca"
//      },
//      {
//           id: 3,
//           name: "Vj",
//           degree: "Mca"
//      }
// ]

// console.log(adArr[1].name)

// const NewAdArr = adArr.map( (val) => {
//      return ` my name is ${val.name}`

// })

// console.log(adArr)
// console.log(NewAdArr)

// const str = "harsha"

// let x = 2;
// let y = 2;
// let z = 2;

// if( x === y && y === z && z === x ){
//      console.log("equl hai")
// }else{
//      console.log("ni hai")
// }

// const mk = "harsh jainh";
// let k ;
// const str = () => {
//      // console.log("str")
//      k = `${mk}`
//      return k
// }

// console.log(str())
// console.log(k)


// const fulname = ["harsh", "jain"]

// const biodata = [...fulname, "age" , "22"]

// console.log(biodata)
// console.log(fulname)

// const obj = {
//      name : "harsh",
//      lastName : "jain",
//      age : "23"
// }

// const { objFirst , ...remaing } = obj
// console.log(objFirst)
// console.log(remaing)
// console.log(obj.name)

// const obj2 = {
//      age : 23,
//      ...obj,
//      gender : "male"
// }

// console.log(obj2.lastName)


// const shootG = [ 'IGI', 'COD', 'STRIKER' , 'VICE_CITY' ] 
// var [ first, second , ...remaining ] = shootG;
// console.log(first)
// console.log(second)
// console.log(remaining)

// var obj = {
//      name1 : "harshJain",
//      age2 : 23,
//      gender3 : "male"
// }

// var obj2 =  {
//      name : "nayanJain",
//      age : 24,
//      gender : "male"
// }

// const obj3 = {
//      ...obj,
//      ...obj2
// }

// let  str = "a2345678"
// console.log(str.charAt(7))
// console.log(str.charCodeAt(0))

// let str2 = 'h2'
// console.log(str2.charCodeAt(1))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// let newStr =  str.concat(' space ', str2)



// let str = '   ARA,SHa,2aa,aaa    '
// console.log("harsh".length)
// console.log(str.split(","))
// console.log(str.length)
// let kk =  str.trimEnd()
// console.log(kk.length)
// console.log(kk)


// let str =  "abcdefghabcdefgh"
// console.log(str.search("d"))
// let newStr = str.replace("cde", "HAR")
// // console.log(newStr)
// // console.log(str.slice(2, 7))
// // console.log(str.substr(20, 5))
// // console.log(str.substring(5, -10))
// console.log(newStr)
// console.log(str)

// let arr = [ ["harsh", ["jbin" , ["df"]]],[ "from", "jain"], [100, 10,27, 21],[ 22, 23, 24, 25] ]
// let newArr = arr.filter(element => { return element === 'jain' })
// console.log(arr)
// let newArr = arr.reduce(( accumulator ,curElem, index, arr)=> {
//      return accumulator  += curElem + index
// })

// let newArr = arr.flat(2)
// console.log(Object.fromEntries(arr))
// console.log(newArr)
// console.log(typeof(newArr))
// console.log(typeof(arr))

// let arrk = [3,4,5]
// console.log(typeof(arrk))


// const arr = ['harsh', 'jain', 'male']

// let [Name, cast, gender ] = arr

// console.log(Name)
// console.log(cast)
// console.log(gender)


// const myName = 'harshJain'
// const biodata = {
//      name : [myName],
//      age : 23 +3,
//      gender : 'male'
// }
// console.log(Object.entries(biodata))


// const num =  Number.MAX_SAFE_INTEGER
// // console.log(num)
// // console.log(typeof(num))
// const newnum = 9007199254740991n + 188n
// console.log(typeof(newnum))


// let {name , age, Deg = "B.tech"} = biodata;
// console.log(name)
// console.log(age)
// console.log(Deg)

// let myName = 'harsh'
// let myAge = 23
// const nio ={ myName, myAge }
// console.log(nio.values)
// console.log(biodata.name)

// const kk = false ?? "defaulte string"
// console.log(kk)


// function add(a,b){
//      return a+b
// }

// function sub(a, b){
//      return a - b
// }

// function addSub(c, d){
//      return c + d
// }

// const result = addSub(add(9,5), sub(9, 5));
// console.log(result)


// function first(){
//      setTimeout(() => {
//           console.log('first')
//      }, 1500);
// }

// function second(){
//      console.log("second")
// }

// first()
// second()

// let n = 5;
// let str = '';
// for(let i = 0; n > i; i++){
//      for(let j = 0 ; n > j; j++){
//           str += '*';
//      }
//      str += '\n'
// }

// for(let i = 1; i <= n; i++){
//      for(let j = 0; j < n-i ; j++){
//         str += ' '
//      }
//      for(let k = 0; k < 2*i-1; k++){
//           // str += '*';
//           if(i === 1){
//                str += '*'
//           }else{
//                if(k === 0 || k === 2*i-2 ){
//                     str += '*'
//                }else{
//                     str += ' '
//                }
//           }
//      }
//      str += '\n'
// }
// for(let i = 1; i <= n; i++){
//      for(let j = 0; j < i ; j++){
//         str += ' '
//      }
//      for(let k = 0; k < 2*(n-i)-1; k++){
//           // str += '*';
//           if(k === 0 || k === 2*(n-i)-2 ){
//                str += '*'
//           }else{
//                str += ' '
//           }
//      }
//      str += '\n'
// }
// console.log(str)


// console.log("harsh")

// function parent(){
//      let point = 0
//      function child(){
//           console.log(point)
//           let outer = 1
//           function ineerChild(){
//                console.log(outer)
//           }
//           ineerChild()
//      }
//      child()
// }
// parent()


// let arr = [1,2,3,4,5]
// function squre(){
//      let newArr = arr.map((ele)=>{
//           return ele * 2
//      })
//      console.log(newArr)
// }

// console.log(arr)
// squre()

// function squareArray(){
//      let data = [1,2,3,4,5,6]
//      function square(){
//          for(let i = 0; i<data.length;++i){
//              data[i]=data[i]*2
//          }
//          return data
//      }
//      return square;
//  } 
//  console.log(squareArray())
//  let sq = squareArray()
//  console.log(sq())

// console.log("harsh jain ")
// function obj(person_name, person_age ){
//      this.name = person_name
//      this.age = person_age
//      clik = function clicked(){
//           console.log('cliked')
//      }
// }

// let objext = new Obj('harsh', 23)
// console.log(objext.name)
// console.log(objext.age)
// console.log(typeof(objext))
// console.log(objext)

// const number = new Number (57);
// console.log(number); // 57

// console.log(typeof(number))

// const arr = [1,2,3]
// console.log(typeof(arr))

// let student = {
//       name : 'harsh',
//       lastName : 'jain'
// }

// Object.defineProperty(student, "getName", {
//      get : function(){
//           return name
//      }
// } )


// console.log(student.name)
// console.log(student.lastName)

// let val = 24.2
// console.log(parseInt(val))

// const obj = {
//      name : 'harsh ',
//      age : 22,
//      greet : function(){
//           let surname = 'jain '
//           console.log('name is ' + this.name + surname + 'and age is ' + this.age)
//      }
// }

// obj.greet()

// function construct(){
//      this.name = 'Harsh'
// }
// construct.prototype.age = 22
// let person = new construct()
// console.log(person.age) // { name: 'Harsh' }
// console.log(person.__proto__) // { age: 22 }

// construct.prototype = {age : 50}
// let person3 = new construct()
// console.log(person3.age) // 50
// console.log(person.age) // 22

// console.log("harsh")


// const number3 = "3/0"/2;
// console.log(number3) // NaN

// let x =  Boolean(1);
// console.log(x)
// console.log(typeof(x))



// else
//      console.log('else runing...')

// let x;
// if(true)
//   x = 'trueValue';
// else
//   y = "store"

// console.log(x)
// console.log(y)

// console.log("harsh")
// let sum = 0;
// let i = 0;
// while(i < 5){
//   console.log('harhliuauwsedhfaiu')
//   i += 1;
// } ;
// for(let i = 1; i < n ; i++){
//   for(let j = 1; j < 3; j++){
//     if(  i === 3 ){
      
//     }
//   }
// // }


// const obj = {
//   name : 'harsh',
//   age : function clicked(){
//     return 22
//   }
// }

// const obj2 = {
//   name2 : obj.name,
//   age2 : obj.age()
// }

// console.log(obj2.age2)

// console.log(obj2.name2)

// class Animals{
//   constructor(name){
//       this.name = name;
//   }
  
//   animalName(){
//       return `${name}`;
//   }
// }


// class Pets extends Animals{
//   constructor(name, speicy){
//       super(name);
//       this.speicy = speicy;
//   }
  
//   speicyName(){
//       return `${speicy}`;
//   }
// }


// console.log(Pets.speicyName())

// class Foo {
//   static classMethod() {
//     return 'hello';
//   }

//   static returnSomething(){
//     return 'name is'
//   }
// }

// class Bar extends Foo {
//   static classMethod() {
//     return super.classMethod() + ', too';
//   }

//   static returnSomething(){
//     return super.returnSomething() + ' harsh jain'
//   }
// }

// console.log(Bar.classMethod()); // 'hello, too'

// console.log(Foo.returnSomething())
// console.log(Bar.returnSomething())


// function parent(){
  
//   let x = 3;

//   function child (){
//     // x = 5;
//     console.log(x)
//   }
//   child()
// }

// parent()


// function countDown(number) {
//   console.log(number);
//   const newNumber = number - 1;
//   if (newNumber > 0) {
//       countDown(newNumber);
//   }
// }
// countDown(4);


// function factorial(x){

//   if(x===0){
//     return 1;
//   }else{
//     return x * factorial(x-1)
//   }
  // let  result = number * factorial(number - 1)

  // return result



  // for(let i = 0; number > i ; i++ ){
  //   console.log(number)
  // }
  // console.log(number)
  // let newNumber = number + 1
  // if(newNumber < 10){
  //   countDown(newNumber)
//   // }
// }

// console.log('harsh')

// let n = 6;
// let str = '';
// for(let i = n/2 ; i < n; i+=2){
//   console.log(i)
//   for(let j = 1; j < n-i; j+=2){
//     str += '#';
//     // console.log(j , 'j')
//   }

//   for(let j = 0; j < i; j++){
//     str += '*';
//   }

//   for(let j = 0; j < n-i; j++){
//     // console.log(j, '= j')
//     str += '#'
//   }
//   for(let j = 0; j < i; j++){
//     str += '*'
//   }
//   str += '\n';
// }
// console.log(str)

// var n = 6;
// var str = "";
// for (let i = n / 2; i < n; i += 2) {
//   // print first spaces
//   console.log(i)
//   for (let j = 1; j < n - i; j += 2) {
//     str += " ";
//     console.log(j, '= j')
//   }
//   // print first stars
//   for (let j = 1; j < i + 1; j++) {
//     str += "*";
//   }
//   // print second spaces
//   for (let j = 1; j < n - i + 1; j++) {
//     str += " ";
//   }
//   // print second stars
//   for (let j = 1; j < i + 1; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// // lower part
// // inverted pyramid
// for (let i = n; i > 0; i--) {
//   for (let j = 0; j < n - i; j++) {
//     str += " ";
//   }
//   for (let j = 1; j < i * 2; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);
// let str = 'ha,rsh,jain'
// let strO = 'gadarwara'
// console.log(str.concat(" / from /  ", strO ))
// arr.push(40)
// arr.unshift(45)
// arr.pop()
// arr.shift()
// console.log(arr.filter((e)=>{
  //   return 20 < e
  // }));
  
// let ar = [ 'z','y','x','d','b','c','a' , 'ac', 'ab']
// let newAr = ar.sort()
// console.log(newAr)

// let arr = [ [1,2,3], [4,5,6], [9,8,9] ]
// let firstDiagonal = 0;
// let secondDiagonal = 0;
// for(let i = 0; i < arr.length ; i++){
//   firstDiagonal += arr[i][i]
// }
// for(let i = 0; i < arr.length ; i++){
//   secondDiagonal += arr[i][arr[i].length - (i+1)]
// }
// console.log(firstDiagonal) // 15
// console.log(secondDiagonal)
// console.log(Math.abs(secondDiagonal - firstDiagonal))

// function calc(arr){
//   let firstDiagonal = 0;
//   let secondDiagonal = 0;
//   for (let i=0; i < arr.length; i++){
//     // console.log(i)
//      firstDiagonal+=arr[i][i]; 
//     } 
//     for (let i=0; i < arr.length; i++) {
//       console.log(i)
//      secondDiagonal+=arr[i][arr[i].length - (i + 1)]; 
//     }
// return Math.abs(firstDiagonal - secondDiagonal);
// }

// console.log(calc(arr))


// let arr = [ [1,2,3], [4,5,6], [9,8,9] ]
// function calc(arr){
// return (arr[0][2] + arr[1][1] + arr[2][0]) - (arr[0][0] + arr[1][1] + arr[2][2])
// }
// console.log(calc(arr));

// let firstD = arr[0][0] + arr[1][1] + arr[2][2];
// let secondD = arr[0][2] + arr[1][1] + arr[2][0];  
// console.log(firstD)
// console.log(secondD)
// let total = secondD - firstD
// console.log(total)

// console.log(arr[0][1])

// function calc(arr){
  // console.log(arr[0][1] + arr[0][1])
  // return arr[0][1] + arr[1][2] + arr[2][2] - arr[0][2] + arr[1][2] + arr[2][0] ;
// }
// calc(arr)





// let createArr = [];


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



// let arr = [ [1,2,3], [4,5,6], [9,8,9] ]
// let arrTwo = [ [1,2,3], [4,5,6], [9,8,9] ]

// let finalArr = []

// for(let i = 0; i < arr.length ; i++){
//   finalArr.push([])
//   for(let j = 0; j < arr[i].length ; j++){
//     finalArr[i].push(arr[i][j] + arrTwo[i][j])
//   }
// }

// console.log(finalArr);