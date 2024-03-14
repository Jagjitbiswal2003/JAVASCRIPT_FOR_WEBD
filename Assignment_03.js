//WAP to check whether the number is amstrong or not usinf loop and function in js
function is_amstrong(num, n) {
  let temp = num;
  let remainder = 0;
  let sum = 0;
  while (num != 0) {
    remainder = num % 10;
    sum = sum + Math.pow(remainder, n);
    num = Math.floor(num / 10); // Using Math.floor() for integer division;
  }
  if (temp === sum) {
    console.log("The number ", temp, " is Amstrong number!");
  } else {
    console.log("The number ", temp, " is not an Amstrong number!");
  }
}

let number = 6144;
let digits = number.toString().length; // Get the number of digits in the number
console.log(is_amstrong(number, digits)); // calling the function with appropriate parameter.
