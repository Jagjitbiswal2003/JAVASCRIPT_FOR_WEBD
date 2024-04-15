//Inheritane in JS


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
        console.log(`The name is: ${this.name} and age is: ${this.age} and classstrength is ${this.classstrength}`)
        console.log('Teacher class inherit the person class')
    };
}

class student extends teacher{
    constructor(name, age, classstrength,rollno)  {
        
         super(name, age, classstrength)  
         this.rollno = rollno
     }
     studentdetails(){
         console.log(`The name is: ${this.name} and age is: ${this.age} classstrength is ${this.classstrength} and the rollno is ${this.rollno} `)
         console.log('Student class inherit the Teacher class')
     };
}

let person1 = new person("Jagjit",21)
//person1.persondetail()


let teacher1 = new teacher("Jagjit",21,45)
teacher1.teacherdetails()

teacher1.persondetail()

let student1 = new student("Jagjit",21,45,71)
student1.studentdetails()
