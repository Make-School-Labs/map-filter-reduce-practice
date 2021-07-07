// ================================================================

// Array methods challenges!

// Your goal is to write some functions implementations of various regular array methods
// Slice, Splice, Find, indexOf, find, push, pop, reverse, shift, unshift

// Write your code here in this file.

// *************************************
// Test your code by running: `npm test`
// *************************************

// Every challenge is preceeded with simple implementation of each method using the groceries array
// The other challenges expect to receive parameter data from the instrument data set defined in instruments.js file
// Your goal is to extract the relevant piece of information from the data and return it.
// =================================================================
const groceries = [
    "Pasta",
    "Cereal",
    "bananas",
    "apples",
    "oranges",
    "mangoes",
    "strawberries",
    "blueberries",
    "Cheese",
    "Eggs",
    "crackers",
    "Tomato sauce",
  ];

// Slice method returns a shallow copy of a portion of an array into
// a new array object selected from start to end (end not included)
//where start and end represent the index of items in that array.

let fruits = groceries.slice(2, 8);
// console.table(fruits); // output [bananas, apples, oranges, mangoes, strawberries, blueberries]

// 1 ---------------------------------------------------------------
// In the instruments data, woodwind instruments are in place between index 3 and index 12
// Return an array of woodwind instruments using the slice method
function woodWindInstruments(instrumentsArray) {
  return [];
}


module.exports = {
    woodWindInstruments,
};
