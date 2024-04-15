// Higher order function - Map and forEach

let arr = [1, 2, 3, 4, 5]

// map 

let result = arr.map((num) =>  {
      return num ** 2;
})

console.log(result)

// forEach 
let sum = 0
let result1 = arr.forEach((num , index) => {
    console.log(`Element at index ${index} is: ${num}`);
})