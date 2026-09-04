
////////======  JavaScript Program to Display Date and Time
// let dt = new Date().toLocaleTimeString()
// let dd =  new Date().toLocaleDateString()
// console.log(dt)
// console.log(dd)
// let date = new Date( 2022, 3, 5, 11, 14, 28 )
// let dateTime = date.toLocaleTimeString()
// let dateDate = date.toLocaleDateString()
// console.log(date)
// console.log(dateTime, 'time')
// console.log(dateDate, 'date') 


//////=========  JavaScript Program to Check Leap Year
// let year =  2000
// if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
//     console.log(year + ' is a leap year')
// }else {
//     console.log(year + ' which is not a leap year')
// }



/////////========= JavaScript Program to Format the Date
// let date = new Date()
// let day =  date.getDay()
// let month =  date.getMonth()
// let year = date.getFullYear()
// if(day < 10){
//     day = '0' + day
// }
// if(month < 10){
//     month = '0' + month
// }
// let formatedDate = day + '-' + month + '-' + year
// console.log(formatedDate)


//////==== JavaScript Program to Create Countdown Timer
// time to countdown from (in milliseconds)
// let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
// // countdown timer
// let x = setInterval(function() {
//     // get today's date and time in milliseconds
//     let now = new Date().getTime();
//     // find the interval between now and the countdown time
//     let timeLeft = countDownDate - now;
//     // time calculations for days, hours, minutes and seconds
//     const days = Math.floor( timeLeft/(1000*60*60*24) );
//     const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
//     const minutes = Math.floor( (timeLeft/1000/60) % 60 );
//     const seconds = Math.floor( (timeLeft/1000) % 60 );
//     // display the result in the element with id="demo"
//     console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
//     // clearing countdown when complete
//     if (timeLeft < 0) {
//         clearInterval(x);
//         console.log('CountDown Finished');
//     }
//     }, 2000);



/////==== Javascript Program to Generate a Random Number Between Two Numbers
function randomNum(min, max){
    console.log(Math.floor(Math.random()*(max - min + 1) + min))
}
let min = 10;
let max = 20;
randomNum(min, max)


//////===== JavaScript Program to Check if a Number is Float or Integer
// let num = 85.01    // SELF
// let strNum = String(num)
// console.log(typeof(num))
// let check = false;
// for(let i of strNum){
//     if(i === '.'){
//         check = true
//         break;
//     }
// }
// if(check){
//     console.log(num, 'its a float')
// }else{
//     console.log(num, 'its a integer')
// }


// let x = 7; // programiz
// console.log(Number.isInteger(x)) // true

// let x = 9;  // pragramix RegExp expression 
// let regExPattern = /^-?[0-9]+$/
// console.log(regExPattern.test(x)) // true
