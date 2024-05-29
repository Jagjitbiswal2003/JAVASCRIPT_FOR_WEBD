// Prototype in JS.
// Prototype - Prototypes are the mechanism by which JavaScript objects inherit features from other objects.

// Implement -

// when you work on a project then use this method

// This is the way to create a custom prototype which is used in all objects.
Object.prototype.welcome = "Welcome from prototype"

// Creating a function custom prototype which is use in all objects
Object.prototype.myData=function(){
     return "this is a custom function"
}


let users = {
    getname:function(){
        return this.name;
     },
     getgender:function(){
        return this.gender;
     }
}

let student = {
     name:"Jagjit",
     age:20,
     gender:"Male",

    // getname:users.getname // it is another way to setting the prototype
}

let teacher = {
    name:"Ajay Roy",
    age:40,
    gender:"Male",
    
   // getgender:users.getgender   // it is another way to setting the prototype
}

//setting the prototype of the student and teacher objects to the users object. This process is commonly referred to as prototypal inheritance. By setting the __proto__ property, the student and teacher objects inherit properties and methods from the users object. use always this one ->
student.__proto__ = users;
teacher.__proto__ = users;

console.log(student.getname());    // student object inherit the feature from users object. 
console.log(teacher.getgender());  // teacher object inherit the feature from users object. 

console.log(teacher.welcome)
console.log(student.myData())
// JS have many number of predefine prototype for different objects. 