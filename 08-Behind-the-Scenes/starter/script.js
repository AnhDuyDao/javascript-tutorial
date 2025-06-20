'use strict';
/*
function calcAge(birthYear) {
   const age = 2037 - birthYear;
   function printAge() {
      let output = `${firstName}, you are ${age} years old, born in ${birthYear}.`;
      console.log(output);

      if (birthYear >= 1981 && birthYear <= 1996) {
         var millennial = true; // var is function-scoped so it still exists inside printAge

         // Creating NEW variables with the same name as outer scope's variables
         const firstName = 'Steve';

         // Reassigning outer scope's variable
         output = 'NEW OUTPUT!';

         const str = `Oh, you are a millennial, ${firstName}.`;
         console.log(str);

         // Function is block scoped in ES6, only in 'use strict' mode
         function add(a, b) {
            return a + b;
         }
      }
      //console.log(str);
      console.log(millennial); // print true because 'var' is function-scoped, so it can be accessed here

      // Always use 'use strict' mode
      //console.log(add(2, 3)); // If you dont use 'use strict', this will work
      console.log(output);
   }

   printAge();
   return age;
}
const firstName = 'Anh';
calcAge(1991);
// console.log(age); // This will throw an error because age is not defined in this scope
// printAge(); // This will throw an error because printAge is not defined in this scope


console.log(me);
// console.log(job);
// console.log(year);

var me = 'Anh';
let job = 'Software Engineer';
const year = 1991;

console.log(addDecl(2, 3)); // This will work because function declarations are hoisted
// console.log(addExpr(2, 3)); // This will throw an error because function expressions are not hoisted
console.log(addArrow); // Return undefined
// console.log(addArrow(2, 3)); // This will throw an error because arrow functions are not hoisted

function addDecl(a, b) {
   return a + b;
}

// With var, function expressions are hoisted but not initialized, it becomes undefined
// So calling undefined(2,3) will throw an error
// TypeError: undefined is not a function
const addExpr = function (a, b) {
   return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
   console.log('All products deleted!');
}

//console.log(this);

const calcAge = function (birthYear) {
   console.log(2037 - birthYear);
   //console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
   console.log(2037 - birthYear);
   //console.log(this); // print out window object in browser
};

calcAgeArrow(1991);

const anh = {
   year: 1991,
   calcAge: function () {
      console.log(this);
      console.log(2037 - this.year);
   },
};

anh.calcAge();

const matilda = {
   year: 2017,
};

// Method borrowing (copy method from one object to another)
// Function are just values in JavaScript, so we can assign them to other variables
matilda.calcAge = anh.calcAge;
matilda.calcAge(); // this will refer to matilda object

const f = anh.calcAge;
f();
*/
// Previous lecture: var creates a variable in the global scope, that leads to create a property in the window object
// var firstName = 'Matilda'; // 'var' creates a variable in the global scope, so it becomes a property of the window object
const anh = {
   firstName: 'Anh',
   year: 1991,
   calcAge: function () {
      // console.log(this);
      console.log(2037 - this.year);

      // Solution 1: to the 'this' keyword issue in nested functions before ES6
      // const self = this;
      // const isMillennial = function () {
      //    console.log(self);
      //    console.log(self.year >= 1981 && self.year <= 1996);
      //    // console.log(this.year >= 1981 && this.year <= 1996);
      // };

      // Solution 2:
      const isMillennial = () => {
         console.log(this);
         console.log(this.year >= 1981 && this.year <= 1996);
      };

      isMillennial();
   },

   greet: () => {
      console.log(this);
      console.log(`Hey ${this.firstName}`); // this will refer to window object, print out 'Hey undefined'
      // this.firstName is undefined because there is no 'firstName' property in the window object
   },
};

anh.greet();
anh.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
   console.log(arguments);
   return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
   console.log(arguments); // This will throw an error because arrow functions do not have 'arguments' keyword
   return a + b;
};

addArrow(2, 5);
