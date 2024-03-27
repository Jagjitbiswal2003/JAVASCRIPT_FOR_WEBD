// Call back function
//In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after some operation has been completed or some event has occurred

//syntax-
// in syntax i use arrow functions but we can also use normal function.
// let func1 = (parameter1,parameter2){
    //block of code
    //parameter1(func2 parameter value)
//  }
// let func2 = (parameter3) {
    //block of code
// }

// func1(func2,value of parameter2)


//Ex-1
let is_even = (n) => {
  return n % 2 === 0;
};

let get_result = (evenfn, num) => {
  let iscorrect = evenfn(num);
  console.log(`The number ${num} is even ${iscorrect}`);
};

get_result(is_even, 16);  //call back function.

//Ex-2
let first_name = (callfn, name) => {
  console.log(name);
  callfn("Biswal");
};

let last_name = (last_name) => {
  console.log(last_name);
};

first_name(last_name, "Jagjit");
