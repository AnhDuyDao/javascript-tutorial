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

const massMark = 78; // kg
const heightMark = 1.69; // m
const massJohn = 92; // kg
const heightJohn = 1.95; // m

const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);

const markHigherBMI = bmiMark > bmiJohn;


const firstName = "Anh";
const lastName = "Duy";
const job = "programmer";
const birthYear = 1999;
const year = 2025;

const anh = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(anh);

const anhNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(anhNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

Challenge #2

const massMark = 78; // kg
const heightMark = 1.69; // m
const massJohn = 92; // kg
const heightJohn = 1.95; // m

const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}

// Type conversion and coercion
// Conversion means we manuallu convert a value from one type to another
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // Number() converts string to number
console.log(Number(inputYear) + 18);
console.log(Number('Jonas')); // NaN (Not a Number)
console.log(typeof NaN); // number
console.log(String(23), 23); // String() converts number to string
// Coercion means JavaScript automatically converts a value from one type to another
console.log('I am ' + 23 + ' years old'); // string + number = string
console.log('23' - '10' - 3); // string - string = number
console.log('23' / '2'); // string / string = number
let n = '1' + 1;
n = n - 1;
console.log(typeof (n), n);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas'));
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height; // height is undefined
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");a
}

const age = '18';
if (age === 18)
    console.log('You just became an adult :D (strict)');

// Avoid using == to compare values, use === instead
if (age == 18)
    console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favorite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) {
    console.log('Why not 23?');
}

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy! 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy! 🏆');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both teams win the trophy! 🏆');
} else {
    console.log('No team wins the trophy 😢');
}

const day = 'saturday';
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}
// Expression produce a value
3 + 4
1991
true && false && !false;
// Statement does not produce a value & it end with a semicolon
if (23 > 10) {
    const str = '23 is bigger';
}
// Template literals can be used to embed expressions not statements
const me = 'Anh';
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/
// Ternary operator produce a value, it is an expression
const age = 23;
age >= 18 ? console.log('I like to drink boba tea 🍵') :
    console.log('I like to drink milk tea 🥛');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);