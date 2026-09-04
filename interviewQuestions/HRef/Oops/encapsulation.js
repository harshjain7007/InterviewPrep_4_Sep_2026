

/////////////////============ Encapsulation Example =======:- chacha
//////// normal Program || normal way to solve this problem 
// let baseSalary = 30000;
// let overtime = 10;
// let rate = 20;
  

// function getWage(baseSalary, overtime, rate){ //// fun() with parameter 
//      return baseSalary + (overtime * rate);
// }
 
// console.log(getWage(baseSalary, overtime, rate))


////// now we can write Object orirnted way 
// let employee = {
//      baseSalary : 30000,
//      overtime : 30,
//      rate : 20, 
//      getWage: function(){  //// fun() with no parameter which is benefhit of Encapsulation 
//           return this.baseSalary + (this.overtime * this.rate);
//      } 
// };
// console.log(employee.getWage());



///////=====  Encapsulation in JavaScript :---

// Encapsulation in JavaScript is a methodology used for hiding information. It is based on
// the concept that object properties should not be exposed publicly to the outside world.

// // == {Implementing Encapsulation in JavaScript prevents access to the variables by adding
//  public entities inside an object, which the callers can use to achieve specific results }.
 
// Example: Implementing Encapsulation in JavaScript
 
// var student= {
//      name : "Alexander",
// };
// console.log("student name is : "+ student.name);  // student name is : Alexander
// student.name = "Max";
// console.log("student name is : "+ student.name);  //  student name is : Max
// student.name = "Paul";
// console.log("student name is : "+ student.name);  //  student name is : Paul

// As you can see, everything is working perfectly according to the added logic. However,
// a problem will arise when a user inputs an integer value for the “student.name” property.


///////======  Example: Validating data with Encapsulation methods in JavaScript  :--
 
// suppos we have a condition student.name   is not a number {And ya fhir check validation
//  which is not name length less than 9 characters }

// For this purpose, we will utilize a Regex Expression “/\d+/” that will keep a check on
//  “one or more occurrences of the digit characters (0-9)“. This Regex Expression will be
//  added in a new setter method, “setName” which performs further testing:

// var student = {
//      name: "Alexander",
//      setName: function (value) {    //  “setName” which performs further testing:
//         var expression = new RegExp(/\d+/); // This Regex Expression will be added in a new setter method
//              if (expression.test(value)) {
//           console.log("Invalid Name is entered");  
//         }
//         else {
//            this.name = value;
//         }   
//      },
//       getName: function () {  // Next we will add a getter method “getName” to retrieve the “student.name” property value:
//           return this.name;       
//      }
// }

// console.log(student.getName());  /// alexender
// student.setName("Max"); 
// console.log(student.getName());  /// Max
// student.setName(34); /// Error
// console.log(student.getName()); 


// {Regex Expression means ::-- Regular expressions are patterns used to match character
//  combinations in strings. In JavaScript, regular expressions are also objects. These
//  patterns are used with the exec() and test() methods of RegExp, and with the match(),
//  matchAll(), replace(), replaceAll(), search(), and split() methods of String.
//  This chapter describes JavaScript regular expressions.  

//  Creating a Regular Expression ::-- You construct a regular expression in one of two ways:
// 1. Using a regular expression literal, which consists of a pattern enclosed between slashes,
//  as follows:
//////// ===========  const re = /ab+c/;   {Regular expression literals provide compilation of
//  the regular expression when the script is loaded. If the regular expression remains constant,
//  using this can improve performance.}
// 2. Or calling the constructor function of the RegExp object, as follows:
/////// ===========  const re = new RegExp('ab+c');  {Using the constructor function provides
//  runtime compilation of the regular expression. Use the constructor function when you know
//  the regular expression pattern will be changing, or you don't know the pattern and
//  are getting it from another source, such as user input.}}


 ///// // -=========== We have successfully performed the validation using a Regex Expression
//  in the setter method, but our program is not fully encapsulated. That’s because the “name”
//  property is declared globally, which permits the caller to access and modify its value:
  
// // try this  

// student.name = 34;
// console.log(typeof(student.getName()));   //// "34"

// // The above-given output shows that when we have directly accessed the “name” property
// of the “student” object, validation does not happen, and “34” is set as the property value.
//  This action proves that if an object’s property is available globally, it can be easily
//  accessed, which risks the security of the data.


///////======= Encapsulation in JavaScript using Function Scope

// Rather than exposing the object’s properties; we need to hide it from the outside.
//  To do so, you can use the “var” keyword to define a private property and enclose 
// it in the scope of a function.

// Example: Encapsulation in JavaScript using Function Scope
// In the following “newFunc()” definition, “x” is a private variable which can be accessed 
// within the function’s body:

// function newFunc(){
// let x = "linuxhint.com";
// console.log(x);
// }
// console.log(x);   //// Error - bcz, “newFunc()” and we are accessing it in terms of
//  Global scope:

///  prblm is -- Similarly, adding “name” as a private variable within the “setter” method
//  will restrict its direct access. In this scenario, the “name” variable can not be utilized
//  outside of the “setter” method scope, which means that the “getter” method can not access
//  it too.

////  so we can use closure

/////////============ Encapsulation in JavaScript using Closures
// Inside a parent function, “Closures” allow a function to utilize another function’s 
// local variable.

// F or instance, we have a private variable “name“, which can be accessed by both methods
//  “getName” and “setName” within the function scope. As a result, anytime the anonymous
//  function is invoked, it must return the inner object and assign it to an outside variable.

// Example: Encapsulation in JavaScript using Closures

/////// //== In this example, when we invoke the “setName()” and “getName()” functions,
//  this action generates a new invocation closure scope. The scope is then preserved
//  by returning a pointer to the “student” object:

var student = function () {
     var name = "Alexander";
     var expression = new RegExp(/\d+/);
       return {
         setName: function (value) {
           if (expression.test(value)) { 
             console.log("Invalid Name is entered");
           }
           else {
             name = value;
           }
         },
         getName: function () {
           return name;
         }
       };
   }();  //// The given function ending with “()” indicates that we are invoking the function and assigning the returned value to the “student” variable

console.log(student.getName());
student.setName("Max");
console.log(student.getName());
student.setName(76);
student.name = 76;
console.log(student.getName());

////// In this case, Encapsulation is fully implemented using Closures, and the callers can
//  not access the private variable directly:


//////========  Conclusion
// Using Function scopes and Closures, Encapsulation in JavaScript can be implemented easily.
//  With the help of Encapsulation, you can bind the data or a single unit to the methods that
//  are performing some operations on it. It also permits you to validate and control the data
//  flow in a JavaScript application. This write-up explained Encapsulation in JavaScript along
//  with suitable examples.
