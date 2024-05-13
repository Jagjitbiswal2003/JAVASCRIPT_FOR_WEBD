// Define a Car object using a constructor function

function Car(make, model, year) {
    // Private properties
    let _make = make;
    let _model = model;
    let _year = year;
  
    // Public method to get the make of the car
    this.getMake = function() {
      return _make;
    };
  
    // Public method to get the model of the car
    this.getModel = function() {
      return _model;
    };
  
    // Public method to get the year of the car
    this.getYear = function() {
      return _year;
    };
  
    // Public method to display details of the car
    this.displayDetails = function() {
      return `${_year} ${_make} ${_model}`;
    };
  }
  
  // Create a new instance of Car
  let myCar = new Car('Toyota', 'Camry', 2020);
  
  // Accessing public methods to retrieve data
  console.log(myCar.displayDetails()); // Output: 2020 Toyota Camry
  console.log(myCar.getMake()); // Output: Toyota
  console.log(myCar.getModel()); // Output: Camry
  console.log(myCar.getYear()); // Output: 2020
  
  // Attempting to access private properties directly will result in undefined
  console.log(myCar._make); // Output: undefined
  console.log(myCar._model); // Output: undefined
  console.log(myCar._year); // Output: undefined
  