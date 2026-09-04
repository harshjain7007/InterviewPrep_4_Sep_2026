// let objFirst = {
//      name : 'harsh',
//      age : 23
// }
// let objSec = {
//      lastName : 'jain'
// }

// objSec.__proto__ = objFirst
// console.log(objSec.name , objSec.age) 


// function First(){
//      this.Name = 'crater',
//      this.z = {x : 0, y: 0}
// }
// First.prototype.info = function(){
//      console.log(this.Name)
// }

// let newFt = new First()
// console.log(newFt)
// newFt.info()

// function Second(){
//      First.call(this),
//      this.Name = 'jain'
// }
// Second.prototype = Object.create(First.prototype)
// const creP = new Second()
// console.log(creP)
// console.log(creP.Name)
// console.log(creP.z)


// function Student(data){
//      let x = {};
//      x.Name = data.name;
//      return x
// }

// function StudentName(data){
//      let x = Student(data);
//      x.info = function(){
//           console.log('Name is :', data.name)
//      }    
//      return x
// }

// const xyz = new StudentName({name : 'jainSab'})
// console.log(xyz)
// xyz.info()


// function Circle(radius){
//      this.rr = radius,
//      this.draw = function(data){
//           console.log(data)
//      },
//      this.prin = function(){
//           this.draw(5.6)
//      }
// }

// let newCir = new Circle(21)
// console.log(newCir.prin())


// let childObj = {
//      first : 20,
//      second : 30
// }

// let parentObj = {
//      last : 50
// }

// childObj.__proto__ = parentObj
// console.log(childObj.last)



// let result = obj.plush()
// console.log(result)

// function Bike(){
//      this.name = "Bike"
// }

// Bike.prototype.info = function(){
//      console.log("its name is", this.name)
// }

// function Venom(){
//      Bike.call(this)
//      this.name = "Venom"
// }

// Venom.prototype = Object.create(Bike.prototype)
// Venom.prototype.constructor = Bike
 
// let venom = new Venom()
// venom.info()

// let newBike = new Bike()
// newBike.info()




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
// venom.info();
// bike.info();


// function Bike(data){
//      let x = {};
//      x.name = data.name;
//      return x
// }

// function Venom(data){
//      let x = Bike(data);
//      x.info = function(){
//           console.log("this is a " + this.name + " Bike")
//      }
//      return x
// }

// let venom = new Venom({ name : "Venomm" })

// venom.info()


class Animal {
     speak(){
          console.log("animal have a different sounds")
     }
}

class Cat extends Animal{
     speak(){
          console.log("meow")
     }
}

class Dog extends Animal{
     speak(){
          console.log("bho")
     }
}

let cat = new Cat()
cat.speak()
let dog = new Dog()
dog.speak()


let str = 'harshjain'
console.log(str.slice(2, 3))
console.log(str)