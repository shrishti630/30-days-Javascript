/**
 * conditionals -
 */
const prompt = require("prompt-sync")();
let age = Number(prompt("Enter your age: "));

//if else
if (age >= 18) {
  console.log(`You are ${age}. You are old enough to drive`);
} else {
  console.log(
    `You are ${age}. You will be allowed to drive after ${18 - age} years`
  );
}

//if-else if-else
let myAge = 25; // assume my age
let yourAge = Number(prompt("Enter your age: "));

if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
  console.log(`You are ${myAge - yourAge} years younger than me.`);
} else {
  console.log("We are the same age.");
}

//if else
let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}
//ternary operator
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

//if else
let num = Number(prompt("Enter a number: "));

if (num % 2 === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}

let score = Number(prompt("Enter your score: "));
if (score >= 80 && score <= 100) {
  console.log("A");
} else if (score >= 70 && score < 89) {
  console.log("B");
} else if (score >= 60 && score < 69) {
  console.log("C");
} else if (score >= 50 && score < 59) {
  console.log("D");
} else if (score >= 0 && score < 49) {
  console.log("F");
}

let season = prompt("Enter month: ").toLowerCase();
if (season === "september" || season === "october" || season === "november") {
  console.log("The season is Autumn");
} else if (
  season === "december" ||
  season === "january" ||
  season === "february"
) {
  console.log("The season is Winter");
} else if (season === "march" || season === "april" || season === "may") {
  console.log("The season is Spring");
} else if (season === "june" || season === "july" || season === "august") {
  console.log("The season is Summer");
}

// Switch Statement
let dayInput = prompt("What day is today ? ");
let day = dayInput.toLowerCase();

switch (day) {
  case "monday":
    console.log(`${day} is a working day.`);
    break;
  case "tuesday":
    console.log(`${day} is a working day.`);
    break;
  case "wednesday":
    console.log(`${day} is a working day.`);
    break;
  case "thursday":
    console.log(`${day} is a working day.`);
    break;
  case "friday":
    console.log(`${day} is a working day.`);
    break;
  case "saturday":
    console.log(`${day} is a weekend`);
    break;
  case "sunday":
    console.log(`${day} is a weekend.`);
    break;
  default:
    console.log("It is not a week day.");
}
