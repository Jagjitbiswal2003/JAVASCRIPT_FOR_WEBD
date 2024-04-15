// Class and use of Constructor keyword.
class student {
     constructor(name, age){
         this.name = name;
         this.age = age;
     } 
         printinfo(){
             console.log(`The name is: ${this.name} and age is: ${this.age}`)
         };
}

 let student1 = new student("Jagjit",26);
 student1.printinfo();