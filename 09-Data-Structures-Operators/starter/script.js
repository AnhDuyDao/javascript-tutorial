'use strict';

// Data needed for a later exercise
const flights =
   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
   'pasta',
   'gnocchi',
   'tomatoes',
   'olive oil',
   'garlic',
   'basil',
]);

const mexicanFoods = new Set([
   'tortillas',
   'beans',
   'rice',
   'tomatoes',
   'avocado',
   'garlic',
]);

// Data needed for first part of the section
const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenze, Italy',
   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

   openingHours: {
      thu: {
         open: 12,
         close: 22,
      },
      fri: {
         open: 11,
         close: 23,
      },
      sat: {
         open: 0, // Open 24 hours
         close: 24,
      },
   },

   order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },

   orderDelivery: function ({
      starterIndex = 1,
      mainIndex = 0,
      time = '20:00',
      address,
   }) {
      console.log(
         `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
   },

   orderPasta: function (ing1, ing2, ing3) {
      console.log(
         `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
   },

   orderPizza: function (mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
   },
};
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables in usual way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching variables using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
console.log(restaurant.order(2, 0)); // ['Garlic Bread', 'Pizza']

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); // 8 9 undefined

restaurant.orderDelivery({
   time: '22:30',
   address: 'Via del Sole, 21',
   mainIndex: 2,
   starterIndex: 2,
});

restaurant.orderDelivery({
   address: 'Via del Sole, 21',
   starterIndex: 1,
});

// Destructuring Objects
// Has to be the same name as the property in the object
const { name, categories, openingHours } = restaurant;
console.log(name, openingHours, categories);

// Rename properties while destructuring objects using the colon syntax
const {
   name: restaurantName,
   openingHours: hours,
   categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values while destructuring objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objects (Switching variables)
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b); // 23 7

// Nested objects
const {
   fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // { open: 11, close: 23 }

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread operator
const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]

// Spread operator takes the elements of the array and spreads them out
// Useful for passing elements of an array as individual arguments in functions
console.log(...newArr); // Get elements out of the array
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocchi']
// Similar to the destructuring, the big difference is that the spread operator does not create new variables, it just spreads the elements of the array into a new array

// Shallow copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // ['Focaccia', 'Bruschetta', 'Garlic Bread

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(...str);
// Cannot use template literals with spread operator
// Cause it is not a place for multiple arguments
// Only works with arrays and passing them as arguments into functions
// console.log(`${...str} Duy Anh`);

// Real-world example
// const ingredients = [
//    prompt("Let's make pasta! Ingredient 1?"),
//    prompt('Ingredient 2?'),
//    prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Spread operator with objects (ES2018) even though objects are not iterables
const newRestaurant = { ...restaurant, founder: 'Giuseppe', foundedIn: 1998 };
console.log(newRestaurant);

// Shallow copy of the restaurant object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
*/

// 1. Destructuring assignment with rest pattern
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
console.log(typeof others); // object because array is an object in JavaScript

const [pizza, , risotto, ...otherFood] = [
   ...restaurant.mainMenu,
   ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// otherFood does not include skip elements. The rest operator must be the last element in the destructuring assignment. And only one rest operator is allowed in the destructuring assignment
// const [pizza, , risotto, ...otherFood, bread] = [
//    ...restaurant.mainMenu,
//    ...restaurant.starterMenu,
// ];

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(sat);

// 2. Functions with rest parameter
const add = function (...numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
   console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onions', 'Olives', 'Spinach');
restaurant.orderPizza('Beef');
