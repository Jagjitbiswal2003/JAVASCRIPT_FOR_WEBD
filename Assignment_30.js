// Promises in JS - It means promise.

// EX- I will bring groceries - promise
// 1. promise may pending - pending state
// 2. Fullfilled the promise - Fullfilled
// 3. Reject the promise(for some other work) - Rejected state
// 4. Seteled state - (promise finished)

// These 4 are the states of promises.


// How to create a Promises -
// let variable = new Promise(callbackfunction(resolve,reject){})

let mypromise = new Promise(function(resolve,reject){
      const a = 4;
      const b = 3;
        
      
      setTimeout(() =>{
            if(a===b){
                // resolve() - pending
                   resolve("Promise is resolved !")
            }
            else {
               // reject() - pending
                  reject("The promise is reject !")
            }
        }, 2000)
})

// pending state -
// console.log(mypromise)

// Fullfilled state - then method
mypromise.then(function(data){
  console.log(data)
})

// Rejected state
mypromise.catch(function(failedData){
    console.log(failedData)
})

// Your promises get setelled.
