//WAP to create a calculator having the operations like +,-,*,/ usng switch case.

function calculator(operation, num1, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero!";
      }
      return num1 / num2;
    default:
      return "Invalid operation";
  }
}

console.log(calculator("+", 5, 3));  // calling the function with appropriate parameter.
console.log(calculator("-", 7, 2));
console.log(calculator("*", 4, 6));
console.log(calculator("/", 8, 2));
console.log(calculator("%", 5, 2));
