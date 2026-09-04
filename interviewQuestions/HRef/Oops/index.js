 
// ======== //////  ======  Oop's  
// defination  - Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies software development and maintenance by providing some concepts: Object.

// advantage of oops
// 1. Re-usability
// 2. Code Maintenance
// 3. Security
// 4. Design Benefits
// 5. Better productivity
// 6. Easy troubleshooting
// 7. Polymorphism Flexibility
// 8. Problems solving
// https://www.educba.com/advantages-of-oop/

// disadvantage of oops
// Everything is treated as object in OOP so before applying it we need to have excellent thinking in terms of objects.
// We can not apply OOP everywhere as it is not a universal language. It is applied only when it is required.  It is not suitable for all types of problems.
// The length of the programmes developed using OOP language is much larger than the procedural approach. Since the programme becomes larger in size, it requires more time to be executed that leads to slower execution of the programme.

///  ===  greeks 
////  How we are implemented oops concept in javaScript 

// answer - That said, constructors and prototypes can be used to implement class-based OOP patterns in JavaScript. But using them directly to implement features  like inheritance is tricky, so JavaScript provides extra features, layered on top of the prototype model, that map more directly to the concepts of class-based OOP

// There are certain features or mechanisms which makes a Language Object-Oriented like: 
// Object
// Classes
// Encapsulation
// Inheritance



////////======= Object Fundamentals  ======///////  Key value pairs 

////////========= Object Literals ===:- // Object literal is a simple way to.3 define Object 
// const circle = {
//      redius: 1,  
//      location: {    //// redius and location is called a Properties
//           x:1,
//           y:1
//      },
//      draw: function(){    //// which is method || methods and function define logics 
//           console.log('run...')
//      } 
// }
// circle.draw();



///////==== Factory =====:-
//// prblem :- creating Object with a object literal syntax is an issue only if that object has behaviour || Solution Of This :- Factorie and Constructor function  

// Factory Function :- A factory function is any function which is not a class or constructor that returns a (presumably new) object. In JavaScript, any function can return an object. When it does so without the new keyword, it's a factory function

// function createCircle(redius){  //// That function is called factory function 
//      return {
//           redius,  // After Es-6 if your value and Keys are same than we can write on ones
//           draw: function(){   
//                console.log('run...')
//           } 
//      }
// } 
// const circle = createCircle(1);
// circle.draw();
// console.log(circle.redius) 


//////====== Constructor ==== ||  Which is another way to creating a Object its a "Constructor"
// function Circle(redius){
//      // console.log('this', this);
//      this.redius = redius;
//      this.draw = function(){ /// if you use 'this' keyward along with a 'new' operator than which is called constructor  
//           console.log('draw....');
//      }
// } 
// const another = new Circle(1);  
// another.draw(1)
// console.log(another.redius)
////  'new' operator 3 things to happens [ 1. new operator will create Empty Object  }
//// so basically 2 ways to create a object 1st Factory function And 2nd is Constructor


/////////======= Constructor Property :-
// constructor fun() ka firstLatter Capital Hota hai 


///////////========   Functions are Objects :-
// function Circle(redius){
//      // console.log('this', this);
//      this.redius = redius;
//      this.draw = function(){ /// if you use 'this' keyward along with a 'new' operator than which is called constructor  
//           console.log('draw....');
//      }
// } 

// console.log(Circle.name) // // return tha name of the function  
// console.log(Circle.length) // // return tha Number of arguments
// console.log(Circle.constructor)
// console.log(Circle())


// const Circle1 = new Function('radius', `
//    this.radius =  radius;
//    this.draw = function(){
//      console.log('draw');
//    }
// `);

// Circle.call({}, 1);
// Circle.apply({}, [1,2, 3])
// // const circle = new Circle1(1);
// const another = new Circle(1)
// console.log(another)



////////====== Values (permative) Vs Refrence type :-

// valueType Or permative :- Number, String, Boolean, Symbol, Undefined, Null
//  RefrenceType :-  Object, Function, Array

//// permativeType :- which is depends on eachOther   
// let x = 2;
// let y = x;
// console.log(x)
// console.log(y)

//// example primitiveType :-
// let number =  10;
// function increase(number){
//      number++;
// }
// increase(number)
// console.log(number) // o/p is 10 bcz its copied VAlue

//// Example of referenceType
// let number =  {value : 10};
// function increase(number){
//      number.value++;
// }
// increase(number)
// console.log(number) // o/p is 11 bcz its copied reference 

// let x = {value : 10}
// let y = x
// let z = y
// z.value = 50;
// console.log(x.value) // 20
// console.log(y.value) // o/p is 20 bcz its cpoied reference
// console.log(z.value) // 20

//// conculution :- primitives are copied by their value And , Objects are copied by their reference


//////// Examlple ====:---
// function Cir(value){
//      this.value = value,
//      this.fun = function(){
//           console.log('harsh')
//      }
// }
// console.log(typeof(Cir)) 
// const circle =  new Cir(2); /// function converted into object || inside Js function you can also use 'this' keyward in front of variables etc.
// console.log(circle)
// console.log(typeof(circle))




///// ========= Adding / Removing Properties :- 
// function Circle(radius){
//      this.radius = radius;
//      this.draw = function(){
//           console.log('draw'); 
//      }
// }

// const circle = new Circle(10);
// console.log(circle)

// circle.location = { x: 1 };   //// For adding Element
// console.log(circle)

// const propertyName = 'center location';
// circle[propertyName] = { x: 1 };  //// For adding Element
// console.log(circle)
 
// delete circle['location']
// console.log(circle)   //// For removeing Element

// delete circle['center location']
// console.log(circle)   //// For removeing Element



////////======= Enumerating Property :--
// function Circle(radius){
//      this.radius = radius;
//      this.draw = function(){ 
//           console.log('draw');
//      }
// }
// const circle = new Circle(10);
// // // ////  some time you need to itrate over and enumerate tha propertys of object 

// for( let key in circle){  //// to enumerate all tha members in an object we can use for in loop 
//      // console.log(key, circle[key]);
//      if(typeof circle[key] !== 'function')
//      console.log(key, circle[key]);
// }

// const keys = Object.keys(circle) //// get all the keys in that object than Object.keys
// console.log(keys)

// if('radius' in circle) //// if check tha properties and any methods than use in Operator
// console.log("circle has a radius") 



///////======  Private Properties and Methods ::---
// function Circle(radius){

//      let color = 'red';    //// which is localVariable of this function 

//      this.radius = radius;

//      let defaultLocation = { x: 0, y: 0 };

//      let computeOptimumLocation = function(factor){  //// convert this function to private funtion 
//           //...
//           console.log(factor)
//      }

//      this.draw = function(){
//           computeOptimumLocation(0.1); //// you can also accasse this function bcz of concept of closure  
//           // defaultLocation
//           console.log(this.radius) //// if you want a accesses of this new circle object you need to use this 
//           console.log('draw');
//      }
// }
// const circle = new Circle(10);
// // circle.computeOptimumLocation(0.1);
// circle.draw();



////////======== Getter/Setter :------ run in index.html

// function Circle(radius){

//      this.radius = radius;

//      let defaultLocation = { x: 0, y: 0 };

//      this.getDefaultLocation = function() {
//           return defaultLocation
//      }

//      this.draw = function(){
//           console.log('draw');
//      }

//      Object.defineProperty(this, 'defaultLocation', {//// first argument is circular object, second argument is name of the properties, and 3rd argument is an object 
//           get: function(){ /// getter is a function to read property
//                return defaultLocation; //// this is part of the closure of this inner function 
//           },
//           //// if you want to set tha value of tha property from tha outSide so difine a setter
//           set: function(value){ //// takes a one argument

//                // we can also write tha validation before set tha value 
//                // if(!value.x || !value.y)
//                // throw new Error('Invalid Location.'); ////  this is benefjit of setter 
//                // defaultLocation =  value;
//           }

//      });
// }
// const circle = new Circle(10);
// console.log(circle)  // check this on html live server which is show (...)  which is computed property 
// circle.defaultLocation = 1;  //// which is gives tha error 
// circle.draw();
// console.log(circle.getDefaultLocation())



// Try this example for getter and setter 

// let obj = {};

// // with a data property descriptor
// Object.defineProperty(obj, "property1", {
//   value: 788,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// console.log(obj.property1); // 788

// // with an accessor property descriptor
// Object.defineProperty(obj, "property2", {
//      set(newVal) {
//           console.log("Setting Value...");
//           val = newVal;
//      },
//      get() {
//        console.log("Getting Value...");
//        return val;
//      },
//   enumerable: true,
//   configurable: true,
// });

// obj.property2 = 6969; // Setting Value...

// console.log(obj.property2); // 6969
// console.log(obj)


// ////////========= Exercise
/////=========   define StopWatch  solution see inpractice.html


////  exmple of ShudoClassicalInheritance
// function Bike(){
//     this.name = 'firstBike'
// }
// Bike.prototype.info = function(){
//     console.log("this is a", this.name)
// }
// function Car(){
//     this.name = "second"
// }
// Car.prototype = Object.create(Bike.prototype)
// let nn = new Car()
// console.log(nn.info())  // o/p - this is a second

////  Example ofFunctiona;l inheriatnce
// function Bike(data){
//     let x = {};
//     x.name = data.name
//     return x
// }
// function Venom(data){
//     let x = Bike(data)
//     x.info = function(){
//         console.log('this name' + x.name)
//     }
//     return x
// }
// let venom = new Venom({ name: " harsh" })
// console.log(venom.info()) // o/p - this name harsh


// class Animal{
//     speak(){
//         console.log("animal")
//     }
// }
// class Cat extends Animal{
//     speak(){
//         console.log("cat")
//     }
// }

// class Dog extends Animal{
//     speak(){
//         console.log("dog")
//     }
// }

// let cat = new Cat()
// cat.speak()
// let dog = new Dog()
// dog.speak()

let a = 5, b = 6

let c = ab+
console.log(c)