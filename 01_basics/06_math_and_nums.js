const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance); // This exclusively typecasts itself as Number => [Number : 100]

// console.log(balance.toString().length); => We can convert number to string to perform some tasks like this.

// console.log(balance.toFixed(1)); // This returns number with only 1 digit after decimal.

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); => This rounds off the number to 4 digits // 123.8966 => 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //This converts number to Indian Currency System 
//1000000 => 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // returns an empty object Math
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); Rounds off the number 4.6 => 5
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // Returns a random value everytime between 0(inclusive) - 1 (exclusive).
console.log((Math.random()*10) + 1); // Now this will return random value between 1 - 11
console.log(Math.floor(Math.random()*10) + 1); // Returns an integer between 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Returns an integer between min and max.