let student = {       //creating a object and gives some properties to it.
    name: "Jagjit",
    rollno: 202110071,
    subject: ["Math", "Physics", "Chemistry", "English"],
    address: {
      house_no: 256,
      street: "gandhi road",
      Dist: "Jajpur",
    },   
};
 //Object Destructuring -
 
 //Destructure the object with key name.
 //let {name , rollno, subject,address:{street}} = student; 
 // console.log(name);
 // console.log(rollno);
 // console.log(subject);
 // console.log(street);
 
 //We destructure the object with local name.
 let {name:n , rollno:r, subject:s,address:{street:st,Dist:d}} = student;
 console.log(n);
  console.log(r);
  console.log(s);
  console.log(st);
  console.log(d);
