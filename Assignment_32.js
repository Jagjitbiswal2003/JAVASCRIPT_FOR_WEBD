// Shallow copy - In JavaScript, a shallow copy is a copy of an object or array where only the top-level elements are copied. This means that nested objects or arrays are not copied
// For shallow copy we use the spread operator {...}
/* Advantages of Shallow Copy
// Performance: Shallow copies are typically faster and less memory-intensive compared to deep copies because they only copy references to nested objects rather than duplicating them.
 Simplicity: Easier to implement and understand, especially for simple data structures or when deep copying is unnecessary. */ 

 let obj1 = {
    name:"jagjit",
    age:21,

    adress: {
       city:'punjab'
    }
 }

 let obj2 = {...obj1}  // shallow copy

 //console.log(obj2)

  obj2.name='hero'
  obj2.city='odisha'
 console.log(obj1,obj2)
