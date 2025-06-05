/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

// Variable name conventions

let firstName = "Jonas";
console.log(firstName);

let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
// console.log(typeof true);
// console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(year);
console.log(typeof year);

console.log(typeof null);


// Using let to declare variables and reassign values
let age = 30;
age = 31;

// Using const to declare variables that should not be reassigned
const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = "programmer";
job = "teacher";


const now = 2025;
const ageAnh = now - 1999;
const ageSarah = now - 2009;
console.log(ageAnh, ageSarah);

console.log(ageAnh * 2, ageAnh / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8
const firstName = "Anh";
const lastName = "Duy"
console.log(firstName + " " + lastName); // String concatenation
console.log(firstName, lastName); // Anh Duy still have a space in between because this is not a string concatenation

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageAnh > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1999 > now - 2009); // true

Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

const massMark = 78; // kg
const heightMark = 1.69; // m
const massJohn = 92; // kg
const heightJohn = 1.95; // m

const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);

const markHigherBMI = bmiMark > bmiJohn;
