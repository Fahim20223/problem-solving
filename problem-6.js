// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

const input = [1, 2, 3, 4, 5, 8];
let sum = 0;
for (const number of input) {
  sum += number;
}
console.log(sum);
