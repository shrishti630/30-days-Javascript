//conditionals
/**
 * to makr decision on dif conditions
 * top - bottom
 * 2 ways
 * -conditonal exectuion [1 / more statement if condition is true]
 * repetitive execution [1/more state till condition is true]{if,else,elseif}
 */
/**
 * if
 * if else
 * if else if else
 * switch
 * ternary operator
 */

//if - if true then statement will be executed
let num1 = 5;
if (num1 > 0) {
  console.log(`${num1} is +ve number`);
}

//if else - if true 1st block will be executed or else condition 2nd block will be executed
let num2 = 3;
if (num2 > 0) {
  console.log(`${num2} is a +ve number`);
} else {
  console.log(`${num2} is a -ve number`);
}

let isRaining = true;
if (isRaining) {
  console.log("raincoat.");
} else {
  console.log("No raincoat.");
}
let n1 = -3;
if (n1 > 0) {
  console.log("n1 is positive no ");
} else {
  console.log("n1 is negative no ");
}

//if - else if - else - multiple conditions
/**
 * syntax
 * if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code
}
 */

let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}

let weather = "sunny";
if (weather === "rainy") {
  console.log("You need a rain coat.");
} else if (weather === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather === "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for rain coat.");
}

//switch - alternative to multiple if else if else
// code block with different cases

// let weather = "cloudy";

switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
}

// Switch More Examples
const prompt = require("prompt-sync")();
let dayUserInput = prompt("What day is today ?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("It is not a week day.");
}

let num = prompt("Enter number");
switch (true) {
  case num > 0:
    console.log("Number is positive");
    break;
  case num == 0:
    console.log("Numbers is zero");
    break;
  case num < 0:
    console.log("Number is negative");
    break;
  default:
    console.log("Entered value was not a number");
}
