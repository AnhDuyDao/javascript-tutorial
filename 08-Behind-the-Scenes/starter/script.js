'use strict';

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
      console.log(millennial);

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
