// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

//solve:

const input = "hello world vaia ki Obhosta";

const split = input.split(" ");
// console.log(split);

for (let i = 0; i < split.length; i++) {
  split[i] = split[i][0].toUpperCase() + split[i].slice(1).toLowerCase();
}
const joined = split.join(" ");
console.log(joined);
// const result = input.toUpperCase();
// console.log(result);
