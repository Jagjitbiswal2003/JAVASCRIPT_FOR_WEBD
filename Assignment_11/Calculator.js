let add = (a,b) => {
     return a+b;
}
let sub = (a,b) => {
    return a-b;
}
let mul = (a,b) => {   
return a*b;
}
 
let divi = (a,b) => {
      if(b===0)
      console.log("Value can't divide by zero");
      else
     return a/b;
}

module.exports ={
    addition:add,
    substraction:sub,
    multiplication:mul,
    division:divi
}
