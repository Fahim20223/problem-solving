// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

//solve:
const input = [1, 2, 3, 3, 3, 4, 5, 5, 6, 6, 6, 6, 6, 6];
const uniq = [...new Set(input)];
console.log(uniq);
