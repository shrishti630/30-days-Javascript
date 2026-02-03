console.log("Hello, World!");
console.log(1, 2, 3, 4, 5);
console.log("Happy", "New", "Year", 2026);
console.log("Welcome", "to", 30, "days", "of", "JavaScript");

//comments
// single-line comment
/**
 *  multi-line comment
 * helpful to highlight important information
 */

//syntax error- if m/c is unable to understand the code

console.log(2 + 3);
console.log(3 - 3);
console.log(3 * 3);
console.log(10 / 2);
console.log(10 % 2); //modulus
console.log(3 ** 3); //exponentiation

//ways of adding scripts in html
//-inline - within the script tag/aading js to attribute level
//-internal - adding js logic in script tag in html file
//-external - separate js file linked to html file
//-multiple external scripts - more than 1 js files

//datatypes
//-number
//-string
//-boolean
//-undefined - not assigned value to a defined variable & if function not returning anything
//-null

//checking datatype
let x;
console.log(typeof x);
console.log(typeof 10);
console.log(typeof "Hello");

//variables - are containers of data, used to store data in mem loc. When declared, a mem is reserved, and when assigned value(data), loc is filled.
//keywords to declare variables var,let, const
//let- a variable's value changes at different times
//const- a variable's value never changes/constant[PI=3.14]

const PI = 3.14;
// let PI = 3.14; shows error as declared with const
//declaarration in one line
let a = 10,
  b = 12,
  c = 14;
let fname = "shri";
let age = 22;
let isMarried = false;

