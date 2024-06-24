// Deep copy - In JavaScript, a deep copy refers to creating a completely independent duplicate of a complex data structure, like an object or an array, including all nested objects and arrays within it.

let obj1 = {
    name:"jagjit",
    age:21,

    adress: {
       city:'punjab'
    }
 }

 let obj2 = JSON.parse(JSON.stringify(obj1)) // Deep copy

 // console.log(obj1,obj2)

 obj2.adress.city='odisha'

 console.log(obj1)
 console.log(obj2)