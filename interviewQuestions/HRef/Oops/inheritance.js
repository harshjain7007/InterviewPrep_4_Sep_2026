
/////====== Types of Inheritance in JavaScript

///== In JavaScript, Inheritance is a mechanism that permits an object to inherit all of the
//  methods and properties of its parent or base object. It is also considered a crucial 
// component of OOP (Object Oriented Programming).

///=={ The idea behind implementing Inheritance in JavaScript is to add new objects that are
//  derived from existing objects. When the newly created object becomes a child or derived
//  object of a parent class, it can inherit all of its methods and properties. }

 
////==== Types of Inheritance in JavaScript
// JavaScript supports the following types of Inheritance:

// Prototypal Inheritance
// Pseudoclassical Inheritance
// Functional Inheritance

// ///////======  Prototypal Inheritance In JavaScript

// “Prototypal Inheritance” enables you to access properties and methods of a parent object. In this type of inheritance, a newly created object is permitted to inherit the properties and method of an existing object.

// { Typically, “Object.getPrototypeOf()” and “Object.setPrototypeOf()” can be used to get and
//  set an object’s Prototype; however, ES6 standardize the “__proto__” accessor property that can be utilized for the similar purpose.}

// Syntax of Prototypal Inheritance In JavaScript :- ChildObject.__proto__ = ParentObject

// Example: How to implement Prototypal Inheritance In JavaScript


// let Bike= {
//      color: "Blue",
// };

// let Venom = {     
//      name: "Venom",
// };

// console.log(Venom.color)  //// undefined
// Venom.__proto__ = Bike
// console.log(Venom.color)  //// blue




///////////========  Pseudoclassical Inheritance in JavaScript :---

// The idea of implementing the “Pseudoclassical Inheritance” is to create an “inherited”
//  function that assists in associating the child class to the parent class.
// we will use the “prototype” property to implement the Pseudoclassical inheritance

// For this purpose, the Pseudoclassical Inheritance utilizes:

// // :- A “constructor()” function
// // :- “new” operator for creating instances
// // :- A “prototype” property that establishes the chain of inheritance and is assigned to
//  the constructor function so that all instances inherit the specified property.

// ////==={ ProtoType :- Every object in JavaScript has a built-in property, 
// which is called its prototype. The prototype is itself an object, so the prototype will 
// have its own prototype, making what's called a prototype chain. The chain ends when we reach 
// a prototype that has null for its own prototype.
// // Note: The property of an object that points to its prototype is not called prototype. 
// Its name is not standard, but in practice all browsers use __proto__. The standard way to 
//  access an object's prototype is the Object.getPrototypeOf() method.}

//  Example: How to implement Pseudoclassical Inheritance in JavaScript

// function Bike(){  //// Constructor Function
//      this.name = 'Bike';
// }

// Bike.prototype.info = function(){   ///== We will create an “info()” function that will be inherited by the child objects of “Bike”:
//      console.log('This is a ' + this.name );
// };
// function Venom() { ///== we will declare another object named “Venom,” and 
//      Bike.call(this); ////=== utilize the “Bike.call()” method for invoking the Bike constructor():
//      this.name = 'Venom';
// }
// // ////== then, we will use the “prototype” property to implement the Pseudoclassical inheritance between “Venom” object and “Bike” object:
// Venom.prototype = Object.create(Bike.prototype);  
// Venom.prototype.constructor = Bike;
// // ////=== In the last step, the “new“operator is utilized for creating the two instances, “venom” and “bike“:
// var venom = new Venom();
// var bike = new Bike();
// // //// ==== After doing so, the “info()” function is invoked for both instances:
// console.log(venom)
// console.log(bike)
// venom.info(); //This is a Venom
// bike.info(); // This is a Bike
// ////===As you can see from the below-given output, the Pseudoclassical Inheritance is implemented, and the instance “venom” inherited and executed the “info()” function successfully :

//// EX-
// function Bike(){
//      this.name = 'firstBike'
//  }
//  Bike.prototype.info = function(){
//      console.log("this is a", this.name)
//  }
//  function Car(){
//      this.name = "SEcomd"
//  }
//  Car.prototype = Object.create(Bike.prototype)
//  let nn = new Car()
//  console.log(nn.info())



///////========== Functional Inheritance in JavaScript

// // The mechanism of inheriting properties by applying an augmenting function
//  (function having generic functionality) to an object instance is known as “Functional 
//  Inheritance”. The defined augmenting function employs dynamic object extension to add 
// additional properties and methods to an object instance. You can also use its “closure scope”
//  to keep some data private.


/////===={ Augmentation is one of my favorite features of JavaScript. Being able to, at any
//  point, add static and instance methods to new and existing types is a wonderful feature of
//  this
//   dynamic language. 
// Exmple:- Array.prototype.indexOf = function (item) {excluded for brevity} }
////=={ An instance, on the other hand, is the instantiation of a class; that is. For example,
//  Victoria could be an instance of the Employee class, representing a particular individual as
//   an employee. An instance has exactly the same properties of its parent class
//    (no more, no less). }


// // Example: How to implement Functional Inheritance in JavaScript

// // In this example, we will create a “Bike” object having a inner object named “x”:

function Bike(data) {
     let x= {};
     x.name = data.name;
     return x;
}
  
// // Then, we will create a child object named “Venom” which establishes the inheritance 
// with the “Bike” class. This child object will comprises an augmenting function “info” which
//  can have the access to the “name” property of the “x” object:

function Venom(data) {
     let x= Bike(data);
     x.info= function () {
     return "This is a " + x.name + " Bike";
     };
     return x;
}

// // To implement the Functional Inheritance, we will create “venom” as a child instance 
// and pass the value of the “name” property as “data” argument:

var venom = Venom({ name: "Venom" });

// // The given “console.log()” method will fetch the value of the “x.name” property
//  from the parent “Bike” object and print it on the console:

console.log(venom) 
console.log(venom.info());  //// This is a Venom Bike

// // That was all about the types of inheritance in JavaScript. You can further explore them 
// according to your preferences.

// // Conclusion
// // Prototypal Inheritance, Pseudoclassical Inheritance, and Functional Inheritance are
//  different types of Inheritance in JavaScript. A Prototypal type of Inheritance is
//  implemented using the “__proto__” property, whereas, in Functional Inheritance, 
// an augmenting function is defined which accesses the properties of the parent class.
//  Moreover, the Pseudoclassical Inheritance utilizes a constructor() function, “new” operator,
//  and prototype property to embed inheritance between two objects. This write-up discussed 
// different types of Inheritance in JavaScript.
