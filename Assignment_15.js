// Filter method - it will return a new array comtaining the elemnts which is satisfy the condition.

let arr = [1, 2, 3, 4, 5, 6]

let result = arr.filter((num) => {
     return num % 2 == 0
})

console.log(result)


// reduced method - it return a single value from the array as per the condition.

let result1 = arr.reduce((sum , num) => {
     return sum + num 
},0)
   console.log(result1)