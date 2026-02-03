//boolean value reruens either true or false

let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3;
let falseValue = 4 < 3;

//true (nos,string,'true', 'yes')
//false (0,'', null, undefined, 'false', 'no',empty string)

//undefined
let firstName;
console.log(firstName);

//null
let empty = null;
console.log(empty);

//assignment operators
/**
 *  = (y is stored in x)
 *  += (x+y result stored in x) [x+=y || x=x+y]
 *  -= (x-y result stored in x) [x-=y || x=x-y]
 *  *= (x*y result stored in x) [x*=y || x=x*y]
 *  /= (x/y result stored in x) [x/=y || x=x/y]
 *  %= (x%y result stored in x) [x%=y || x=x%y]
 *  **= (x**y result stored in x) [x**=y || x=x**y]
 */

let numOne = 10;
let numTwo = 5;
let sum1 = numOne + numTwo;
let diff1 = numOne - numTwo;
let mult1 = numOne * numTwo;
let div1 = numOne / numTwo;
let remainder1 = numOne % numTwo;
let powerOf1 = numOne ** numTwo;
console.log(sum1, diff1, mult1, div1, remainder1, powerOf1);

//arithmetic operator(+/-/*/div/%/**)
let n1 = 10;
let n2 = 5;

let sum2 = n1 + n2;
let diff2 = n1 - n2;
let mult2 = n1 * n2;
let div2 = n1 / n2;
let remainder2 = n1 % n2;
let powerOf2 = n1 ** n2;
console.log(sum2, diff2, mult2, div2, remainder2, powerOf2);

//areofCircle
const PI = 3.14;
let radius = 100;
let areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);

//weightofObject
const gravity = 9.81;
let mass = 72;
let weight = mass * gravity;
console.log(weight);

const boilingPoint = 100;
const bodyTemp = 37;

//concatenation with interpolation
console.log(
  `Boiling point of water is ${boilingPoint} oC. \nTemp is ${bodyTemp} oC.\nEarth gravaity is ${gravity} m/s2.`
);

//also it can be done using + operator
let printInfo =
  "BoilingPt" +
  boilingPoint +
  " oC.\nTemp is " +
  bodyTemp +
  " oC.\nEarthgravity " +
  gravity +
  " m/s2.";
console.log(printInfo);

//comparison operator
/**
 *  == eq in val only in x,y [x==y]
 * === eq in val and type in x,y [x===y]
 * != not eq in val only in x,y [x!=y]
 * !== not eq in val and type in x,y [x!==y]
 * > greater than [x>y]
 * < less than [x<y]
 * >= greater than eq [x>=y]
 * <= less than eq [x<=y]
 */
console.log("comparison operators");
console.log(3 > 2); //t
console.log(3 >= 2); //t
console.log(2 <= 3); //t
console.log(3 == 2); //f checks value
console.log(3 != 2); //t
console.log(3 == "3"); //t checks value
console.log(3 === "3"); //f checks value and type
console.log(3 !== "3"); //t
console.log(3 != 3); //f
console.log(3 !== 3); //f
console.log(0 == false); //t -- 0 is false in binary, therefore true
console.log(0 === false); //f
console.log(0 == ""); //t
console.log(0 == " "); //t
console.log(0 === ""); //f
console.log(1 == true); //t
console.log(1 === true); //f
console.log(undefined == null); //t
console.log(undefined === null); //f
console.log(NaN == NaN); //f
console.log(NaN === NaN); //f
console.log(typeof NaN); //num

//.lenth prop signifies num of char in a string
console.log("length property");
console.log("lemon".length == "lemonade".length); //f
console.log("lemon".length != "lemonade".length); //t
console.log("lemon".length < "lemonade".length); //t
console.log("lemon".length == "mango".length); //t
console.log("lemon".length != "mango".length); //f
console.log("tomato".length == "potato".length); // t
console.log("python".length > "dragon".length); // f

//logical operators
/**
 * && ampersand (and) both conditions must be true [x&&y]
 * || pipe (or) one of the conditions must be true [x||y]
 * ! not (negation) give false for true and true for false [!x]
 */

console.log("logical operators");

//&& (and / ampersand) operator
// t && t => t , t && f => f , f && t => f , f && f => f
let check1 = 4 > 3 && 5 < 4;
console.log(check1);
let check2 = 4 > 3 || 5 < 4;
console.log(check2);

// || (or / pipe) operator
// t || t => t , t || f => t , f || t => t , f || f => f
let check3 = 4 > 3 || 5 < 4;
console.log(check3);
let check4 = 4 < 3 || 5 < 4;
console.log(check4);

// ! (not / negation) operator
// !t => f , !f => t
let isLightOff = !isLightOn;
console.log(isLightOff);
let isRaining1 = !isRaining;
console.log(isRaining1);
let isMarried1 = !false; //not eq false is true
console.log(isMarried1);

//increment operators
let count = 3;
//preincrement - calcution n print together
console.log(++count); //count = 0+1 fist then print

//postincrement - print acctual value then calution in next console
console.log(count++); //count = 3 print, then count=3+1
console.log(count); //if not printed again count will be 4 but not shown

//decrement operators
// predecrement -  calcution n print together
console.log(--count); //count=4-1=3 first then print
//postdecrement - print acctual value then calution in next console
console.log(count--); //count=3 print, then drement
console.log(count); //if not printed again count will be 2 but not shown

//window alert
// let arl = alert("Welcome to 30 Days of JavaScript!");
// console.log(arl);

//window prompt
// let num3 = prompt("Enter no: ");
// console.log(num3);

//window confirm
// const agree = confirm("Are you sure? ");
// console.log(agree);

//date object
let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());
