// Async await - it is used instead of then and catch to get the promises value

let promise = new Promise(function(resolve,reject){
      let a = 4
       if(a===4)
        resolve("a value is 4")
       else
         reject("a value is not 4")
});

async function check() {
    let data = await promise;
    console.log("Executing")
    console.log(data)
}
     check()