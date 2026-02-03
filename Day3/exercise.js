//level 1
let firstName = "Shrishti";
let lastName = "Pandey";
let country = "India";
let city = "Pune";
let age = 22;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log("10" === 10);
console.log(parseInt("9.8") === 10);

console.log(Boolean(true));
console.log(Boolean(false));

console.log(Boolean(-9)); //+ve & -ve nos
console.log(Boolean("Shhri")); //strings are truthy

console.log(Boolean(0)); //0 is f
console.log(Boolean("")); //empty str is f
//also null, undefined , NaN

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

console.log(("python".length = "jargon".length));
console.log("python".length !== "jargon".length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

console.log("python".includes("on") && "dragon".includes("on"));
console.log(!("python".includes("on") && "dragon".includes("on")));

let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

//level 2
const prompt = require("prompt-sync")();
let h = prompt("enter height: "),
  b = prompt("enter base: ");
console.log("area of triangle is : ", h * b);

let s1 = Number(prompt("side a: ")),
  s2 = Number(prompt("side b: ")),
  s3 = Number(prompt("side c: "));
///here itshows  s1 + s2 + s3 =  543 as prompt returns string
//use Number / parseInt to do math
console.log("perimeter of triangle is : ", s1 + s2 + s3);

let l = Number(prompt("enter length: ")),
  w = Number(prompt("enter width: "));
console.log("Area of rectangle: ", l * w);
console.log("perimeter of rectangle: ", 2 * (l + w));

const PI = Math.PI;
console.log(PI);
let r = Number(prompt("enter radius: "));
console.log("Area of circle: ", PI * r * r);
console.log("perimeter of circle: ", 2 * PI * r);

//3,4,5,6
let hours = prompt("enter hrs: "),
  ratePerHour = prompt("enter rph: ");
console.log("weekly earnings is : ", hours * ratePerHour);

console.log("Shrishti".length > 7 ? "Your name is long" : "Your name is short");

let fName = "Asabeneh";
let lName = "Yetayeh";
console.log(
  fName.length > lName.length
    ? `Your first name, ${fName} is longer than your family name, ${lName}`
    : `${lName} is larger than ${fName} `
);

let myAge = 250;
let yourAge = 25;
console.log("I am ", myAge - yourAge, " years older than you.");

let birthYr = prompt("Enter birth year: ");
let currentYr = now.getFullYear();
let calAge = currentYr - birthYr;
console.log(
  calAge >= 18
    ? `You are ${calAge}. You are old enough to drive`
    : `You are ${calAge}. You will be allowed to drive after ${
        18 - calAge
      } years.`
);

let livedYrs = prompt("Enter number of years you live: ");
console.log("You lived " + livedYrs * now.getTime() + " seconds.");

/**
 * YYYY-MM-DD HH:mm
 * DD-MM-YYYY HH:mm
 * DD/MM/YYYY HH:mm
 */
console.log(
  now.getFullYear() +
    "-" +
    now.getMonth() +
    "-" +
    now.getDate() +
    "  " +
    now.getHours() +
    ":" +
    now.getMinutes()
);
console.log(
  now.getDate() +
    "-" +
    now.getMonth() +
    "-" +
    now.getFullYear() +
    "  " +
    now.getHours() +
    ":" +
    now.getMinutes()
);
console.log(
  now.getDate() +
    "/" +
    now.getMonth() +
    "/" +
    now.getFullYear() +
    "  " +
    now.getHours() +
    ":" +
    now.getMinutes()
);

//level3
let hrs = ("0" + now.getHours()).slice(-2);
let mins = ("0" + now.getMinutes()).slice(-2);

console.log(hrs + " : " + mins);

console.log(
  now.getFullYear() +
    "-" +
    now.getMonth() +
    "-" +
    now.getDate() +
    "  " +
    hrs +
    ":" +
    mins
);
