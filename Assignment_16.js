//Constructor in JS
// for constructo you have to use the function not arrow function.
let Student = function(name, age, rollno, branch) {
    this.name = name;
    this.age = age;
    this.rollno = rollno;
    this.branch = branch;

    this.printinfo = function(){
        console.log(`The name of student ${this.name}, age ${this.age}, roll no is ${this.rollno}, and branch ${this.branch}`);
    };
}

let student1 = new Student("jagjit", 22, 71, "CSE");
student1.printinfo(); 
