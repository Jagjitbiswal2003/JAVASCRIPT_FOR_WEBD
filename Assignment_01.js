// WAP to find the maximum  among three number in js.

// How to take user input in js-
// 1.for string - prompt("enter the string");
//2.for integer -  parseInt(prompt("enter the meassage"));
//parseInt-is used convert the string to int
//but i am not use this.


let a = 12
let b = 20
let c = 3

let largest;  // Declare a variable to store the largest number

// Find the maximum using a single if-else chain for efficiency
if (a >= b && a >= c) {
  largest = a;
} else if (b >= a && b >= c) {
  largest = b;
} else {
  largest = c;
}

console.log("The maximum among three numbers is:", largest);


