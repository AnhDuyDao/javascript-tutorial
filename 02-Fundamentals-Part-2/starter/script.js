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
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'Anh'));
console.log(yearUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }

    return retirement;
    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetirement(1991, 'Duy Anh'));
console.log(yearUntilRetirement(1970, 'Mike'));

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);
//const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']; // Error: Cannot assign to 'friends' because it is a constant

const firstName = 'Anh';
const anh = [firstName, 'Duy', 2037 - 1991, 'student', friends];

console.log(anh);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

// Add a elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


// Object
const anh = {
    firstName: 'Anh',
    lastName: 'Duy',
    age: 2037 - 1991,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(anh);
console.log(anh.lastName);
console.log(anh['age']);

const nameKey = 'Name';
console.log(anh['first' + nameKey]);
console.log(anh['last' + nameKey]);

// console.log(anh.'last' + nameKey) Unexpected string

// const interestedIn = prompt('What do you want to know about Anh? Choose between firstName, lastName, age, job, and friends');
// console.log(interestedIn);
// console.log(anh[interestedIn]);
// if (anh[interestedIn]) {
//     console.log(anh[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }
// Adding a new property with dot notation
anh.location = 'Portugal';
// Adding a new property with bracket notation
anh['twitter'] = '@anhduy';
console.log(anh);

console.log(`${anh.firstName} has ${anh.friends.length} friends, and his best friend is called ${anh.friends[0]}`);

const anh = {
    firstName: 'Anh',
    lastName: 'Duy',
    birthYeah: 1991,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function (birthYeah) {
    //     return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${anh.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};
console.log(anh.calcAge());
console.log(anh.age);
// console.log(anh['calcAge'](1991));
console.log(anh.getSummary());
*/
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}