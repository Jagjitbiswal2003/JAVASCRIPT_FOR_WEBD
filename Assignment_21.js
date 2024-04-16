// Polymerphisim(Method Overriding or  Runtime polymorphism ) 

// Parent class
class Animal {
    speak() {
        return "Animal makes a sound";
    }
}

// Child class
class Dog extends Animal {
    // Method overriding
    speak() {
        return "Dog barks";
    }
}

// Create instances
const animal = new Animal();
const dog = new Dog();

// Call methods
console.log(animal.speak()); // Output: Animal makes a sound
console.log(dog.speak());    // Output: Dog barks
