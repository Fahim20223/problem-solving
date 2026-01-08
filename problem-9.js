// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

const input = 5;
let result = 1;
for (let i = 1; i <= input; i++) {
  result = result * i;
}
console.log(result);
