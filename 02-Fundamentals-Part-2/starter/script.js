// Strict mode, always at the top of the file
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

if (hasDriversLicense) {
    console.log('I can drive :D');
}

//const interface = 'Audio'; // 'interface' is a reserved keyword in JavaScript, so it should not be used as a variable name
//const private = 534; // 'private' is also a reserved keyword, so it should not be used as a variable name
function logger() {
    console.log('My name is Duy Anh');
}
// Calling / running / invoking function
logger();
console.log(typeof (logger())); // return undefined value (one of five falsy value)

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration 
// You can call function declaration before they are defined in the code
const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
// Function expression (Anonymous function)
// You can not call function expression before they are defined int he code (Error: ... before initialization)
// Because of hoisting (more about this in the future)
// Prefer using this way to write a function because we should define the function on top of the code to make the structure clean and avoid bug
const age2 = calcAge2(1991);

console.log(age2);
*/
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yeatUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yeatUntilRetirement(1991, 'Anh'));
console.log(yeatUntilRetirement(1980, 'Bob'));

