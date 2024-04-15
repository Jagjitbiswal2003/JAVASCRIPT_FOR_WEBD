// Function inheritance

class person{
    constructor(name, age){
          this.name = name;
          this.age = age;
    }
         persondetail(){
            console.log(`The name is: ${this.name} and age is: ${this.age}`)
        };
    
}

class teacher extends person{
    constructor(name, age, classstrength)  {
       //in inheritance without super keyword constructor never inherit.
        super(name, age)  // used to inherit the constructor from another class
        this.classstrength = classstrength
    }
    teacherdetails(){
         super.persondetail()  //function inheritance
    };
}

let teacher1 = new teacher('Jagjit',35,56)
teacher1.teacherdetails();
