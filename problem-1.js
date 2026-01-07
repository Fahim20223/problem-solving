// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"

// Solve :

const greeting = "hello";

const splits = greeting.split("");
// console.log(splits);
// const reversing = splits.reverse();
const reversing = splits.reverse().join("");

console.log(reversing);
