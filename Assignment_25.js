// Read about Synchronous in JS

const fs = require("fs")

console.log("Hii")


let data = fs.readFileSync('File.txt') // Read file synchronouslly
console.log("The content of the file:"+data)


console.log("Again visit to my JS server,Thank you!")

