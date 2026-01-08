// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

// Example:

// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:

// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

//Solve :

const arrays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
for (const element of arrays) {
  if (element % 3 === 0 && element % 5 === 0) {
    console.log("PingPong");
  } else if (element % 3 === 0) {
    console.log("Ping");
  } else if (element % 5 === 0) {
    console.log("Pong");
  } else {
    console.log(element);
  }
}
