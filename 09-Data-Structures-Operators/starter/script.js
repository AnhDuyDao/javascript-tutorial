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

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Enhanced object literals for computed properties name
const openingHours = {
   [weekdays[3]]: {
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
};

// Data needed for first part of the section
const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenze, Italy',
   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   // openingHours: openingHours, // Before ES6 when u try to access the openingHours object, u have to write openingHours: openingHours

   // ES6 enhanced object literals for properties
   openingHours,

   // Before ES6: We need to write a property and assign a function to it
   // order: function (starterIndex, mainIndex) {
   //    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   // },

   // ES6 enhanced object literals for method
   order(starterIndex, mainIndex) {
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
console.log(menu); // ['Focaccia', 'Bruschetta', 'Garlic Bread']

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

console.log('--- OR ---');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(null || 0 || '' || 'Hello' || 23 || null);

// Setting default values
restaurant.numGuests = 0;
// Solution 1: Using ternary operator
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // 10

// Solution 2: Using logical OR operator (Short-circuiting)
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('--- AND ---');
// Return the first falsy value or the last value
// Oposite of OR operator
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

// Practical example
// if (restaurant.orderPizza) {
//    restaurant.orderPizza('Mushrooms', 'Spinach');
// }

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');

// 0 is falsy so it take the last value but we want to take numGuest = 0
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);
// Solution: Nullish coalescing operator
// Nullish: null  and undefined (NOT include 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = {
   name: 'Carpi',
   numGuests: 0,
};

const rest2 = {
   name: 'La Piazza',
   owner: 'Giovanni Rossi',
};

// Or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Logical assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// And assignment operator
rest1.ower &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// Coding challenge 1
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
const game = {
   team1: 'Bayern Munich',
   team2: 'Borrussia Dortmund',
   players: [
      [
         'Neuer',
         'Pavard',
         'Martinez',
         'Alaba',
         'Davies',
         'Kimmich',
         'Goretzka',
         'Coman',
         'Muller',
         'Gnarby',
         'Lewandowski',
      ],
      [
         'Burki',
         'Schulz',
         'Hummels',
         'Akanji',
         'Hakimi',
         'Weigl',
         'Witsel',
         'Hazard',
         'Brandt',
         'Sancho',
         'Gotze',
      ],
   ],
   score: '4:0',
   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
   date: 'Nov 9th, 2037',
   odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
   },
};

// 1.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

// 5.
// Solution 1
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// Solution 2
// Destructing nested object
const {
   odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
// REST parameter ... players
const printGoals = function (...players) {
   console.log(`${players.length} goals were scored by ${players.join(', ')}.`);
};
// Arbitrary number of player names (not an array)
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
// printGoals(game.scored); // log 1 goals were score because game.scored is an array and when it is passed into the printGoals function, it is nested inside players array
printGoals(...game.scored);

// 7
team1 < team2 && console.log('Team 1 is more likely to win.');
team2 < team1 && console.log('Team 2 is more likely to win.');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// For of loop, drawback: cannot access index
for (const item of menu) {
   console.log(item);
}

// For of loop, with index
// Destructuring array from menu.entries()
for (const [index, item] of menu.entries()) {
   console.log(`${index + 1}: ${item}`);
}

// Optional chaining property of object
// Check if a property exists
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// Error: Cannot read property 'open' of undefined
// console.log(restaurant.openingHours.mon.open);
// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
// const anh = {
//    firstName: 'Anh',
//    lastName: 'Duy',
//    age: 2037 - 1991,
//    job: 'student',
//    friends: ['Michael', 'Peter', 'Steven'],
// };

// const interestedIn = prompt(
//    'What do you want to know about Anh? Choose between firstName, lastName, age, job, and friends'
// );
// console.log(interestedIn);
// console.log(anh[interestedIn]);
// if (anh[interestedIn]) {
//    console.log(anh[interestedIn]);
// } else {
//    console.log(
//       'Wrong request! Choose between firstName, lastName, age, job, and friends'
//    );
// }

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
   console.log(day);
   // Using variable name as key to access property
   // Espceially we use openingHours.mon(tue,wed) but now we write
   // using bracket to create a property in openingHours with variable name 
   openingHours[day] to dynamic access
   const open = restaurant.openingHours[day]?.open ?? 'closed';
   console.log(`On ${day}, we open at ${open}`);
}

// Optional chaining Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisitto?.(0, 1) ?? 'Method does not exist');

// Optional chaining Arrays
const users = [
   { name: 'Anh', email: 'hello@anh.io' },
   { name: 'Duy', email: 'hello@duy.io' },
];
console.log(users[0]?.name ?? 'User array empty');
const [user1, user2, user3] = users;
console.log(user1?.name ?? 'User does not exist');
console.log(user3?.name ?? 'User does not exist');

// Looping object: opbject keys, values, entries
// Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
   openStr += `${day}, `;
}
console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]: destructuring an arr
// value is an object [key, {open, close}]: destructuring an object
for (const [key, { open, close }] of entries) {
   console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
*/
/*
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}

const game = {
   team1: 'Bayern Munich',
   team2: 'Borrussia Dortmund',
   players: [
      [
         'Neuer',
         'Pavard',
         'Martinez',
         'Alaba',
         'Davies',
         'Kimmich',
         'Goretzka',
         'Coman',
         'Muller',
         'Gnarby',
         'Lewandowski',
      ],
      [
         'Burki',
         'Schulz',
         'Hummels',
         'Akanji',
         'Hakimi',
         'Weigl',
         'Witsel',
         'Hazard',
         'Brandt',
         'Sancho',
         'Gotze',
      ],
   ],
   score: '4:0',
   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
   date: 'Nov 9th, 2037',
   odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
   },
};
// 1.
for (const [i, player] of game.scored.entries()) {
   console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
   average += odd;
}
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
   console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4
const scorers = {};
for (const player of game.scored) {
   console.log(player);
   scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
}
console.log(scorers);

// Sets: A collection of unique values
// Pass in a iterable (array, string, set, map) and it will return a new array with the elements of the iterable
const orderSet = new Set([
   'Pasta',
   'Pizza',
   'Pizza',
   'Risotto',
   'Pasta',
   'Pizza',
]);
console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size); // 3
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) {
   console.log(order);
}

// Example: Remove duplicates from an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// For only to know how many unique values
console.log(
   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('DuyAnh').size); // 6

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
   .set('open', 11)
   .set('close', 23)
   .set(true, 'We are open')
   .set(false, 'We are closed');
// console.log(rest);

console.log(rest.get('name')); // Classico Italiano

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Check if a key exists in the map
console.log(rest.has('categories')); // true
// Delete a key-value pair
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test'); // Set a key-value pair with an array as key
rest.set(document.querySelector('h1'), 'Heading'); // Set a key-value pair with an HTML element as key
// rest.set([1, 2], 'Test'); // Set a key-value pair with an array as key
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr)); // undefined because the array is a different reference in memory

const question = new Map([
   ['question', 'What is the best programming language?'],
   [1, 'C'],
   [2, 'Java'],
   [3, 'JavaScript'],
   ['correct', 3],
   [true, 'Correct!'],
   [false, 'Try again!'],
]);
console.log(question);
// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quizz app
console.log(question.get('question'));
for (const [key, value] of question) {
   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
const answer = 3; // Simulate user input for testing
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

// Coding challenge 3
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/
const gameEvents = new Map([
   [17, 'GOAL'],
   [36, 'Substitution'],
   [47, 'GOAL'],
   [61, 'Substitution'],
   [64, 'Yellow card'],
   [69, 'Red card'],
   [70, 'Substitution'],
   [72, 'Substitution'],
   [76, 'GOAL'],
   [80, 'GOAL'],
   [92, 'Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
   `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL
for (const [min, event] of gameEvents) {
   const half = min <= 45 ? 'FIRST HALF' : 'SECOND HALF';
   console.log(`[${half}] ${min}: ${event}`);
}
