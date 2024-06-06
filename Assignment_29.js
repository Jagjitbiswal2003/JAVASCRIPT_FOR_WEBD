// setInterval(callback function,time) - It is used to execute the callback function again and again with a respective interval     
//setInterval -  it is followed the Async behaviour.


function greet(data){
   console.log("Welcome from JS")
}

//setInterval(greet,2000) it will run untill and unless manually stop 

// How to stop the setInterval after a specific time orelse it will run untill and unless we manually stop

let timer = setInterval(greet,1000)

setInterval(function(){
    clearInterval(timer)
}, 3000)