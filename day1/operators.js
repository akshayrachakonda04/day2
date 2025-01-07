// Arithmetic operators

console.log(5+5);
console.log(10+"100")
console.log("HI"+10)
console.log(10+"3000")
console.log("HI"+10+10)


// substraction

console.log("hi"-10)
console.log("10"-5)
console.log(5-4-"Hi")

// division

console.log(10/2)
console.log("10"/2)

// exponential

console.log(2**5)
console.log("2"**5)

// modulus

console.log(5%2)
console.log(10%2)
console.log("10"%2)

// increment

let a = 10;
console.log(a++)
console.log(a)
console.log(++a)
console.log(a)

// decrement

let b = 5
console.log(--b)
console.log(b)
console.log(b--)
console.log(b)


// Assignment operators

// --> Add(+=), Sub(-=), mul(*=), div(/=), mod(%=), exp(**=) assignments
let c = 10;
console.log(c+=10)
console.log(c-=5)
console.log(c*=2)
console.log(c/=2)
console.log(c%=2)
console.log(c**=3)


// Relational Operators

//  ==, ===, !=, !==, >, >=, <, <=

console.log(10 == 10)
console.log("10" == 10) // checks only value 
console.log(10 === 10)
console.log("10" === 10) // checks data type
console.log(10 != 10)

console.log(10 != 5) // checks value
console.log("10" != 10)
console.log("10" != "10")

console.log(10 !== 10) // checks datatype
console.log("10" !== 10) 

console.log(10 > 10)
console.log(10 >= 10)
console.log("10" > 10)
console.log("10" >= "0")
console.log("10" >= "8")

// logical operator

console.log((10 > 5) && (10 < 15))
console.log((10 > 15) && (10 < 15))
console.log((10 > 5) || (10 < 15))
console.log((10 < 5) || (10 > 15))