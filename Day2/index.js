//primitive data types
/**
 * are immutable
 * we cannot modify it
 * are compared by its values
 */
/**
 * Numbers
 * Strings
 * Booleans
 * Null
 * Undefined
 * Symbol
 */
let word = "JavaScript";

/**
 * ????
 * If we try to modify the string stored in variable word,
 * JavaScript should raise an error. Any data type under a s
 * ingle quote, double quote, or backtick quote is a string data type.
 */
word[0] = "Y";

/**
 * let numOne = 4;
 * let numTwo = 4;  //true
 */
let numOne = 4;
let numTwo = 5;
console.log(numOne == numTwo); //false

let js = "javascript";
let py = "python";
console.log(js == py); //false

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); //false

//non-primitive data types
/**
 * are modifiable or mutable, evrn  after it gets created
 */
/**
 * Objects
 * Arrays
 */

//Arrays
//- is a list of data values in a [] separated by commas
//- can contain the same or different data types

let nums1 = [1, 2, 3];
nums1[0] = 10;
console.log(nums1);

//non-prim cannot be compared by value
//Evenif 2 non-prim have the same properties and values, they are not strictly equal.
let nums2 = [1, 2, 3, 4, 5];
let numbers = [1, 2, 3, 4, 5];
console.log(nums2 == numbers); // false

let user1 = {
  name: "shri",
  role: "stu",
  country: "In",
};
let user2 = {
  name: "shri",
  role: "stu",
  country: "In",
};
console.log(user1 == user2); // false

//- we do not compare arrays, functions, or objects
//-nonprim  values are referred to as reference types,

//Numbers(int,decimals)
//age,mass[int] & gravity,PI [decimals]

//math object-is a built-in static object
//properties for mathematical const & methods for mathematical func

const pi = Math.PI;
console.log(pi);

//.round() -  rounds to closest integer
console.log(Math.round(4.6));
console.log(Math.round(4.2));

//.floor() - rounds down to closest integer
console.log(Math.floor(pi));

//.ceil() - rounds up to closest integer
console.log(Math.ceil(pi));

//min() & max()
console.log(Math.min(1, 2, 3, 3, 4, 0, 5));
console.log(Math.max(1, 2, 3, 3, 4, 0, 5));

//random()
console.log(Math.random()); //between 0 to 0.999999
console.log(Math.random() * 11); //0-10 [if want to round down (Math.floor(Math.random()*11))]

//absolute value
console.log(Math.abs(-50));

//square root
console.log(Math.sqrt(10));

//power
console.log(Math.pow(3, 3)); //3^3=27

//logarithm
console.log(Math.log(2));

//trigonometric
console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.tan(0));
// console.log(Math.cosec(0));
// console.log(Math.sec(0));
// console.log(Math.cot(0));

//Strings - sequence of characters written in '',"",``
let fname = "Shri ";
let lname = "Pandey";
let greet = `Hello `;
let greetFrom = fname + lname; //concatenation
console.log(greet + greetFrom);

//escape sequences in strings
console.log("'Seeing is believing,' isn't it? \n\"Hello\" \t from Shri, \n");

//template literals
let a = 5;
let b = 3;
console.log(`${a} + ${b} = ` + (a + b));
console.log(`${a} is greather than ${b}: ${a > b}`);

//string methods
let string = "JavaScript";
console.log(string[0]);
console.log(string.length - 1); //last index
//toUpperCase() & toLowerCase()
console.log(string.toUpperCase());
console.log(string.toLowerCase());

//negative indexing
console.log(string.slice(-4));
console.log(string.slice(0, -4));

//substr()
console.log(string.substr(4, 6)); //start index, num of char to extract
console.log(string.substr(4)); //from index 4 to end
//substring()
console.log(string.substring(0, 4)); //start n end index
console.log(string.substring(4)); //from index 4 to end

//split()
let string2 = "30 Days Of JavaScript.";
console.log(string2.split()); //in an array
console.log(string2.split(" ")); //each words in ''
console.log(string.split("")); //each char

//slice() - extracts part of a string of givven index.[0,4- after this discarded]
console.log(string.slice(0, 4) + "sliced part");
console.log(string.slice(4));
console.log(string2.slice(0, 2) + "sliced part");

//trim()-remove spaces at start & end
console.log(string2.trim());
console.log(string.trim());

//includes()-it checks if substr arg exists in string. return a boolean
console.log(string2.includes("Days"));
console.log(string2.includes("days"));

//replace()-it repolaces for this instance only, string = original string
console.log(string.replace("Script", "Oracle"));
console.log(string); //even after replace string remains same

//charAt() - identifies char at given index[]
console.log(string.charAt(4));

//charCodeAt() - gives ascii of char at  index[]
console.log(string.charCodeAt(0));

//indexOf()- give index no of char/text, only first occurrence,returns -1 if not found
console.log(string2.indexOf("a"));
console.log(string2.indexOf("Java"));
console.log(string2.indexOf("hello"));
//lastIndexOf()
console.log(string2.lastIndexOf("30"));
//concat()
console.log(string.concat(" ", "html"));

// startsWith() - checks if string strts with arg,returns boolean
// endsWith() - checks if string ends with arg,returns boolean
//search()-searches for arg, returns index of 1st occurrence
//repeat()- repeats the string for given no of times
console.log(string2.repeat(2));

//casting-converting one data type to another data type
//string - intger
let n1 = "5";
let n_int = parseInt(n1);
console.log(typeof n_int);
//string - float
let n2 = "5.8";
let n_float = parseFloat(n2);
console.log(typeof n_float);
//float - integer
let f1 = 9.81;
let f_int = Math.floor(f1);
console.log(typeof f_int);
//integer - string
let n3 = 10;
let str_n = n3.toString(); //
console.log(typeof str_n);

const para =
  "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React.";
console.log(para);
