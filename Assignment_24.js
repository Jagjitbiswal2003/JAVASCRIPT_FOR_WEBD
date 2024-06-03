// call,apply and bind method
let person1= {
  Name:"Jagjit",
  Age:21,
  Gender:"Male",
  
  printdetails : function(){
     console.log(`My name is:${this.Name} My age is:${this.Age}`)
  }
}

let printname_and_city = function(city,village){
    console.log(`My name is:${this.Name} and the city is:${city} and the village is:${village}`)
}

let person2= {
    Name:"Ashish",
    Age:23,
    Gender:"Male"
  }

 // Call method
  person1.printdetails.call(person2)
 // global method calling by call method for a object
  printname_and_city.call(person1,"Bhubaneswar","Mangalpur")

 
 
  //Apply method
  printname_and_city.apply(person2,['Bhubaneswar','Mangalpur'])
  // In apply method the parameters are given by the array. 
 person1.printdetails.apply(person2)


 // Bind method - In this method you can store the function in a variable
 let check = printname_and_city.bind(person2,"Bhubaneswar","Mangalpur")
 check()

