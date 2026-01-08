// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

const input = [1, 2, 3, 4, 5, 6];
const array = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 === 0) {
    array.push(input[i]);
  }
}
console.log(array);
