// Polymerphisim(Method overloading or Compile-time polymorphism)

function exampleOverload(a, b) {
    if (arguments.length === 1) {
        // Overloaded method with one argument
        console.log("Received one argument: " + a);
    } else if (arguments.length === 2) {
        // Overloaded method with two arguments
        console.log("Received two arguments: " + a + " and " + b);
    } else {
        console.log("Invalid number of arguments");
    }
}

exampleOverload(1); // Output: Received one argument: 1
exampleOverload(1, 2); // Output: Received two arguments: 1 and 2
