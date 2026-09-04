
/////======  What is Polymorphism in JavaScript

// Objects might act differently in different contexts because all of the object-oriented programming principles are based on objects usage. Polymorphism refers to the concept that there can be multiple forms of a single method, and depending upon the runtime scenario, one type of object can have different behavior.It utilizes “Inheritance” for this purpose. In Polymorphism, multiple objects can have the same methods but with different implementations, and an object and its related method are selected based on the user preferences.


// MethodOverriding - A child class will use the methods with the same name  that are most closely associate with it. 
// MethodOverLoading || FunctionOverLoading - Unlike other programming languages, JavaScript Does not support Function Overloading.  seeWithExmaple -   https://www.geeksforgeeks.org/function-overloading-in-javascript/

/// difference between overriding AND overLoading
// method overriding -  Method overriding is a run-time polymorphism. Method overriding always needs inheritance. In method overriding, methods must have the same name and same signature.
// method overloading - Method overloading is a compile-time polymorphism. Method overloading may or may not require inheritance.  In method overloading, methods must have the same name and different signatures.

// Example 1: Using Polymorphism in JavaScript

// Animals are frequently used to explain Polymorphism. In the below-give n example, “Animal” is a parent class whereas, Cat and Dog are its derived or child classes. The speak() method is common in both child classes n .The user can select an object from any child class at runtime, and the JavaScript interpreter will invoke the “speak()” method accordingly.

// According to the above-given description, we have defined the parent Animal class and its two child classes, Cat and Dog, in our program. Then we have added a “speak()” method in the Animal class.

//In this example, we will not define the “speak()” method in the child classes. As a result of it, the Cat and Dog class will utilize the Animal class “speak()” method:

// class Animal{
//     speak()
//     {
//       console.log("Animals have different sounds");
//     }
// }

// class Cat extends Animal{

//   }

// class Dog extends Animal{

// }

// Next, we will create two objects; one for the “Cat” and other for the “Dog” class respectively and then invoke the “speak()” method of the parent class by the help of the created objects:

// var cat = new Cat();  
// cat.speak(); //// Animals have different sounds
// var dog  = new Dog();
// dog.speak();  //// Animals have different sounds


// // // Example 2: Using Polymorphism with Method Overriding in JavaScript

// Method overriding {is a specific type of Polymorphism that permits a child class to implement the method already added in the parent or base class, in a different manner. Upon doing so,} the child class overrides the method of the parent class.

// JavaScript interpreter will determine which method you want to execute. If you have created a parent class object, then the method which exists in the parent class will be executed. However, invoking the same method with the child class object will execute the child or derived class method.

// In this example, we will override the “speak()” method of the “Animal” class using Polymorphism. For this  purpose, we will write speak() method in our Cat and Dog classes which will override the speak() method  of the parent class. Lastly, we will invoke the defined methods using a forEach loop:


/////--- which is example of method overRiding
// class Animal
//   {  
//     speak() {  
//       console.log("Animals have different sounds"); }  
//   }  
// class Cat extends Animal
//   {  
// speak(){
// console.log("Cat says Meow Meow");}
//   }  
// class Dog extends Animal
//   {  
// speak(){
// console.log("Dog say Woof Woof");}
//   }  
// var x=[new Cat(), new Dog()]  
// x.forEach(function(info) {  
// info.speak(); });   //  Cat says Meow Meow  <br> Dog say Woof Woof //// It can be clearly verified from the above output, the speak() method of Animal class is overridden by the child classes(Cat and Dog).


// The output will show the strings added in the “speak()” method of Cat and Dog classes:

/////////==========  Why you should use Polymorphism in JavaScript

// Here are some of the advantages of using Polymorphism in JavaScript:

// Polymorphism enables the programmers to reuse the code, which saves time.
// Implicit type conversion is supported by Polymorphism.
// It allows a child class to have the same name method added in the parent class, with different functionality.
// In different scenarios, a method’s functionality is added differently.
// Single variables can be utilized for storing multiple data types. 

//////======   Conclusion  
// Polymorphism in JavaScript refers to the concept of reusing a single piece of code multiple times.By utilizing Polymorphism, you can define multiple forms of a method, and depending upon the runtime scenario, one type of object can have different behavior. This write-up discussed Polymorphism in JavaScript with the help of appropriate examples.


// class Animal {
//      speak() {
//           console.log('animal sounds')
//      }
// }

// class Cat extends Animal {
//      speak() {
//           console.log('meow')
//      }
// }

// class Dog extends Animal {
//      speak() {
//           console.log('bhow')
//      }
// }

// var cat = new Cat()
// cat.speak()
// var dog = new Dog()
// dog.speak()