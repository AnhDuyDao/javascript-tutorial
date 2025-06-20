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
*/

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
