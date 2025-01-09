// functions

// --> function is a building block of javascript
// function is a block of code which is used to execute specific task.
// function is a non-primitive data type
// function can be reusable.

// function addtocart(){
//     alert("Hii")
//     document.body.style.background="red"
// }


// function a(){
//     console.log("hi")
// }
// a()

// function sum(a,b){
//     console.log(a+b);
// }
// sum(2,3)


// Types of functions

// named function --> Function is having a name and invoked(calling) function
// anonymous function --> A function does not have a name , --> It cannot be executed it by itself
// function expression --> an anonymous function  
// IIFE (Immediate invoke function expression) --> It can be called 
// arrow function --> It is introduced in ES6 feature., --> It concises the normal function syntax, --> It is similar to anonymous function
// higher order function
// callback function


// cuurent version of JS --- ES14.
// ES--> ECMA Script (European computer manufacturing association)



// --------------- named function
// function greet(){
//     console.log("Welcome here.")
// }
// greet()

// anonymous function
// --> It does not execute


// --------- function expression

// let x = function(){
//     console.log("Anonymous function is not executing but executing with variable")
// }
// x()

// --------- IIFE --> It can be called only once, but all remaining functions can be called 'N' no of times.
// (
//     function(){
//         console.log("IIFE")
//     }
// )()


// ----------- Arrow function

let x = /* () */ _ =>{console.log("Arrow function")}
x()

let y = (a,b) => {console.log(a+b)}
y(2,3)

let z = _ => console.log("Hello")
z()


let a = (a,b) => {return a+b}
console.log(a(20,30))

let b = (a,b) => a*b
console.log(b(20,30))