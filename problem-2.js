// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

//solve :

// const vowels = ["a", "e", "i", "o", "u"];
const vowels = ["A", "E", "I", "O", "U"];
const string = "programming";
let count = 0;

for (let i = 0; i < string.length; i++) {
  // const str = string[i].toLowerCases();
  const str = string[i].toUpperCase();
  if (vowels.includes(str)) {
    count++;
  }
}
console.log(count);
// if (string.join()) {
//   console.log(string);
// }
