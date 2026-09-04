
///////====== Abstraction :--- chacha
// function Circle(radius){
//      this.radius = radius;
//      this.defaultLocation = { x: 0, y: 0 };
//      this.computeOptimumLocation = function(factor){
//           //...
//           console.log(factor)
//      }
//      this.draw = function(){
//           this.computeOptimumLocation(0.1); /// which is also run in draw funtion and its called abstruction  || hide tha details and show tha assetials
//           console.log('draw');
//      }
// }
// const circle = new Circle(10);
// circle.computeOptimumLocation(20.2); //// 20.2
// circle.draw(); /// 0.1


//// =====   Abstraction in JavaScript | Explained


// In JavaScript, most of the elements are based on “objects,” and it utilizes “Object-Oriented
//  Programming” (OOP) in its own ways.

// The concept of Abstraction in JavaScript is to hide the implementation details and highlight an object’s essential features to the users. That’s how embedding Abstraction in a JavaScript program can enhance the readability of the code and avoid duplication.
//  By providing only important details to the users, it also improves the security of an application. 


//////====  Abstract Classes in JavaScript
// If a class comprises one or more abstract methods, it is known as an “Abstract Class” and 
// this type of class has abstract as well as regular JavaScript methods. Remember, to implement
// Abstraction in a class, you have to declare at least one abstract method.

//////=======  Abstract Methods in JavaScript 
// In an Abstract class, a type of method that is only declared and has no implementation or
// “function body” is known as “Abstract Method“. The abstract method must be declared in 
// an Abstract class, whereas its definition can be added in the sub-classes.

// We will now demonstrate the procedure for creating an Abstract class.

// Example: How to create Abstract Class in JavaScript
// First of all, we will create a constructor function named “Person” having a “name” property.
//  The created “Person” function will act as an “Abstract Class”: 


// function Person() {
//      this.name = "Alex";
//      //// console.log(this.constructor) // [Function: Object] 
//      if (this.constructor === Person) {
//        throw new Error("Your Error Message...");
//      }
//  };

//  console.log(Person) // // [Function: Person]

// //  In the next step, we will define an “info()” method for the “Person” Abstract class which
//  returns the 

// value of the “name” property:
 
// Person.prototype.info = function () {
//      return this.name;
// }

// // Lastly, we will create a “person” instance of the Abstract Class:

// var person = new Person();   /// if you create Person intance than it will give error
// // Execution of the provided code will throw an error as we can not create objects or
//  instances of an Abstract class:

// Now, we will extend the above-given example by implementing the “Inheritance”. 
// For this purpose, we will create another constructor function that inherits the methods
// and properties of the “Person” Abstract class.
 


////////======= Example: How to extend Abstract Class in JavaScript
// In the same example, we will define a construct function (subclass) named “Teacher” that
// inherits the properties and methods of the created “Person” class by utilizing the
// “Prototype Chaining”:
   
  
// function Person() {
//      this.name = "Alex";
//      if (this.constructor === Person) {
//       throw new Error("Your Error Message...");
//      }
//  };
//  Person.prototype.info = function () {
//      return "Person name is: " + this.name;
//  }
//  function Teacher(name) {
//      this.name = name;
//  }
 
//  Teacher.prototype = Object.create(Person.prototype);
//  var teacher1 = new Teacher("Stepheny");
//  console.log(teacher1.info()); //// Person name is: Stepheny

//  In this case, the implementation of the “Person” Abstract class is hidden, and the “Teacher”
//  Subclass can only access the “info()” method to return the value of the “name” property:


//////=== We have tried to implement Abstraction in previous examples; however, all of the
//  properties of an Abstract Class are not completely satisfied; as we have not defined any
//  Abstract methods yet.

// The ES6 JavaScript version offers many enhanced features such as creating “Class” using the
//  “class” keyword and implementing methods. It also allows you to define Abstract methods
//  within an Abstract class and extend them in the child or subclasses with the help of
//  “Inheritance”.

// In the following example, we will implement a JavaScript Abstract Class having the specified
//  properties.


///////=======  Example: How to implement Abstraction in JavaScript

////// By utilizing the “class” keyword, we will now define “Person” as an Abstract class,
//  having a “constructor()”, and an “info()” Abstract method:

class Person {
     constructor() {
     if (this.constructor == Person) {
          throw new Error("Your Error Message...");
          }
     }
     info() {
          throw new Error(" Added abstract Method has no implementation");
     }
}

// ///// Next, we will create a subclass “Teacher,” which inherits the properties and method of
//  the “Person” class using “Inheritance” and define the implementation of the Parent class
//  abstract method “info()” in the “Teacher” class:

class Teacher extends Person {
     info() {
         console.log("I am a Teacher");
     }
}
var teacher1 = new Teacher();
teacher1.info(); //// I am a Teacher ///// As you can see, the implementation of the “info()” method is successfully executed:



////////==== If the Parent class abstract “info()” method is invoked in the “Teacher” class,
//  it will throw an error. To verify this case, add the following code line in the definition
//  of the child class “info()” method and then again execute the program:


// class Person {
//      constructor() {
//      if (this.constructor == Person) {
//           throw new Error("Your Error Message...");
//           }
//      }
//      info() {
//           throw new Error(" Added abstract Method has no implementation");
//      }
// }

// class Teacher extends Person {
//      info() {
//           super.info();  /////== bcz of this parent class ki info methid run hogi 
//           console.log("I am a Teacher");
//      }
// }
// var teacher1 = new Teacher();
// teacher1.info(); //// Added abstract Method has no implementation

//We have compiled all of the essential information related to Abstraction in JavaScript.

/////===== Conclusion
// Abstraction in JavaScript can be implemented with the help of Abstract Classes and Abstract
//  Methods. In JavaScript, an Abstract class must contain at least one or more declared
//  Abstract methods, whereas its definition can be added in its sub-classes. Abstraction in
//  JavaScript hides the complicated and hard-to-comprehend details of the underlying system.
//  This write-up explained Abstraction in JavaScript along with suitable examples.
