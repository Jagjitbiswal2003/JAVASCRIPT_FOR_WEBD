//In this program we see the arrow function.
//1.No need to use function keyword.
//2.No need to use () in case of single parameter
//3..No need to use {} if single line code is there.

//Write an arrow function that takes two numbers as input and returns the larger of the two.
let max_of_two = (a,b) => {      //arrow function declaration. a and b are two parameters.
        if(a>=b) {
             return a;
        }
         else
          return b;
}
  console.log("Max between two numbers is:"+max_of_two(10,12));   //calling arrow function.