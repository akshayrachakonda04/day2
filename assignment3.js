// write a condition to check greatest among 3 numbers using if else and switch case take a b c from prompt 
// write in both if else and switch case

let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));
let c = parseInt(prompt("Enter third number")); 

if (a > b && a > c) {
    console.log("a is greater");
}
else if (b > a && b > c) {
    console.log("b is greater");
}
else {
    console.log("c is greater");
}

//using switch case
switch (true) {
    case a > b && a > c:
        console.log("a is greater");
        break;
    case b > a && b > c:
        console.log("b is greater");
        break;
    default:
        console.log("c is greater");
        break;
}