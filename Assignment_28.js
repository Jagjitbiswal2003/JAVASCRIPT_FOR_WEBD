// SetTimeout(callback function,time) - setTimeout is followed the Async behaviour

console.log("Welcome")

function greet(){
    console.log("SetTimeout function is invoked! after ",time)
}
let time = 2000
//setTimeout(greet,2000) 

//or

setTimeout(greet,time) // 2000msec - 2sec


console.log("Lets ends here!")