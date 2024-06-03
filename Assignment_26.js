// Read about Asynchronous in JS

const fs = require("fs")


console.log("Hi from JS")

// File reading and the function check1 and check2 are run in asychronouslly.

let data = fs.readFile("File.txt",check1)

function check1(err,data){
     if(err)
        console.log("The server get an error"+err)
    else
    console.log("The content of Data:"+data)
}

let data1 = fs.readFile("File1.txt",check2)

function check2(err,data1){
     if(err)
        console.log("The server get an error"+err)
     else
     console.log("The content of Data:"+data1)
}

console.log("Again visit to my JS server,Thank you!")
