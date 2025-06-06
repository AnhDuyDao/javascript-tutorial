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
*/

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

