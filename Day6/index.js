for (let i = 0; i <= 5; i++) {
  console.log(i);
}
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
const numbers1 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // can be shorten, sum += numbers[i]
}

console.log(sum);

const numbers = [1, 2, 3, 4, 5];
const newArr1 = [];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] ** 2);
}

console.log(newArr);

const countries1 = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr2 = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

console.log(newArr2);
