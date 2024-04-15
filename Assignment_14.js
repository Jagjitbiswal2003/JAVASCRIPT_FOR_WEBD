// important array function 
// 1. find - return the element when the condition is true.

let arr = [1, 2, 3, 4, -5, 6, -7 ]
let result = arr.find((element) => {
     return element > 0
} )
 console.log(result)

 // 2. findindex - return the index of the element when the condition is true

 let result1 = arr.findIndex((element) => {
    return element > 0
} )
console.log(result1)

// 3. some - gives true or false based on a condition.
//it will return true even 1 element satisfies the condition. 

let result2 = arr.some((element) => {
    return element > 0
} )
console.log(result2)

// 4.every : it will give true only if all elements satisfy the condition.

let result3 = arr.every((element) => {
    return element > 0
} )
console.log(result3)