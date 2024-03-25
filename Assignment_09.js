//Object is an unordered collection of key-value pair.
//in object key-value is known as property. key is always a string and value can be any type
//i.e Nubmber,function,array etc.
//syntax for object-
// datatype objectname = {
//key-value pair
//}    Ex-
//  var person = {
//   name:"jagjit",
//   age:20,
//};

var student = {
  name: "Jagjit",
  rollno: 202110071,
  subject: ["Math", "Physics", "Chemistry", "English"],
  address: {
    house_no: 256,
    street: "gandhi road",
    Dist: "Jajpur",
  },
           greet: (full_name) => {
               console.log("Hello"+full_name+"Welcome to JS world!");
           }
     }
       // console.log(student);  //print all the properties of the object.
       // console.log(student.subject); //print arry using dot notation that present in the object. 
       // console.log(student["subject"]); //print array using bracket notation.
       // console.log(student.name); //print the name using dot notation.
       // console.log(student["name"]);//print the name using bracket notation.
       // console.log(student.address) //print the adress object using dot notation.
       //.log(student.address.street); // print the street that present in the add. object using dot notation.
       //student.greet("Jagjit"); // print the function using dot notation.
        
// value modify of object property-
 //student.name="Jagjit Biswal"; //modify using dot notation.
 //student.subject[1]="Java"; //modify using dot notation.
 //student["name"]="Jagjit biswal" modify using bracket notation.
 //console.log(student.name);
 //console.log(student.subject);
 //student.address.house_no=456;
 //console.log(student.address.house_no);

 // delete property from object-
  //delete student.rollno;
  //console.log(student.rollno);
