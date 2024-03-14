 //WAP to calculate the factorial of a number using for loop and function in js.

function calc_factorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  console.log("The factorial of ", num, " is:", factorial);
}
calc_factorial(5); //calling the function with proper argument.
