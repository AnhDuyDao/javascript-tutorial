'use strict';

function calcAge(birthYear) {
   const age = 2037 - birthYear;

   function printAge() {
      const output = `${firstName}, you are ${age} years old, born in ${birthYear}.`;
      console.log(output);
   }
   printAge();
   return age;
}

const firstName = 'Anh';
calcAge(1991);
console.log(age);
