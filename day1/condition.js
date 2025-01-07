// condition operators

// if, if-else, else-if-ladder, switch, ternary


if (true){
    console.log("It is greater")
}

if (false){
    console.log("It is greater")
}

let age = 100
if (age >= 18){
    console.log("Major")
}else{
    console.log("Minor")
}


// ternary

isAdult = 15
isAdult >= 18 ? console.log("Major") : console.log("Minor")

// else if ladder

let day = prompt("Enter day");

if(day == 1){
    console.log("Sunday")
}else if(day == 2){
    console.log("Monday")
}else if(day == 3){
    console.log("Tuesday")
}else if (day == 4){
    console.log("Wednesday")
}else if (day == 5){
    console.log("Thursday")
}else if (day == 6){
    console.log("Friday")
}else if (day == 7){
    console.log("Saturday")
}
else{
    console.log("Invalid day")
}


// Switch Operator

let days = Number(prompt("Enter Day"))
// console.log(days, typeof(days))
switch(days){
    case 1:
        console.log("Sun")
        break;
    case 2:
        console.log("Mon")
        break;
    case 3:
        console.log("Tue")
        break;
    case 4:
        console.log("Wed")
        break;
    case 5:
        console.log("Thu")
        break;
    case 6:
        console.log("Fri")
        break;
    case 7:
        console.log("Sat")
        break;
    default:
        console.log("Invalid day")
}



// Loops

