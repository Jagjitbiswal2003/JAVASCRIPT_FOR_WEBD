// Closures and nested function

// Closures - A closure in JavaScript is a function that remembers and can access variables from outside its own scope, even after the outer function has finished executing.

function print(){
     let name = 'jagjit'
     function printname(){
      console.log(name)
     
        let age = 21
         function printage(){
            console.log(age,name)
        }
          return printage
    }
         return printname
      
  }  

 let g1 = print()
 g1()

 let g2 = g1()
 g2()