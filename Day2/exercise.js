//level1
let challenge = "30 Days Of JavaScript.";

console.log(challenge);

console.log(challenge.length);

console.log(challenge.toLocaleUpperCase());

console.log(challenge.toLocaleLowerCase());

console.log(challenge.substring(3));

console.log(challenge.slice(0, 2));

console.log(challenge.includes("Script"));

console.log(challenge.split(" "));

//10

let str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'";
console.log(str.split(","));

console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt("J"));

console.log(challenge.indexOf("a"));

console.log(challenge.lastIndexOf("a"));

let sent =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sent.indexOf("because"));

console.log(sent.lastIndexOf("because"));

console.log(sent.search("because"));

let sent1 = "   30 Days Of JavaScript   ";
console.log(sent1.trim());

console.log(challenge.startsWith("30"));

console.log(challenge.endsWith("Script"));

console.log(challenge.match("a"));
let patt = /a/gi;

console.log(challenge.match(patt));

console.log("30 Days of ".concat("JavaScript"));

console.log(challenge.repeat(2));

//level2
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

console.log(typeof "10" == 10);

console.log(parseInt("9.8") == 10);

console.log("python".includes("on") && "jargon".includes("on"));

console.log("I hope this course is not full of jargon".includes("jargon"));

console.log(Math.random() * 107); //0-100

console.log(Math.random() * 100); //50-100

console.log(Math.random() * 256); //0-255

//9,10

console.log(
  `1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125`
);

console.log(sent.indexOf("because"));
console.log("because".length);
console.log("because because because".length);
console.log(sent.substr(31, 23));

//level3
let sent2 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love";
patt = /love/gi;
//1

console.log(sent2.match("love"));
console.log(sent2.match(patt));
//2

console.log(sent.match(/because/gi));
//3

let sent3 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
//4
