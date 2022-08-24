
// 1) Bu gun dersde yazdiqlarimizi praktika etmek

// let stu1 = {
//     name: "Togrul",
//     surname: "Quluzde",
//     age: 23,
//     phoneNumbers: [43654,23145643],

//     groups:[{
//         name: "P130",
//         room: "Sirius",
//         teachers:[
//             {
//                 name:"Cavid",
//                 age: 28
//             },
//             {
//                 name:"Rovsen",
//                 age: 22
//             }
//         ]
//     },
//       {
//         name:"DL210",
//         room: "Pluton",
//         teachers:["Cavid","Gulnar"]

//       }]
// }

//console.log(st1.phoneNumbers);

// for (const item of stu1.phoneNumbers) {
//     if (item == 43654) {
//         console.log(stu1.name);
//     }
// }


//  let isExist = stu1.phoneNumbers.includes(43654);

//  if (isExist) {
//     console.log("Var");
//  }
//  else{
//     console.log("Yoxdur");
//  }

// for (const item of stu1.groups) {
//     if (item.room == "Sirius") {
//         console.log(item.name);
//     }
// }

// for (const item of stu1.groups) {
//     if (item.name == "P130") {
//         console.log(item.teachers);
//     }
// }



// let teacherFullData = ()=>{
//     for (const item of stu1.groups) {
//         if (item.name == "P130") {
//             for (const teacher of item.teachers) {
//                 if (teacher.name == "Cavid") {
//                     return (`${teacher.name}- ${teacher.age}`);
//                 }
//             }
//         }
//     }
// }

// console.log(teacherFullData());


//  function setGroupTeacher(grupName) {
// return `${teacherFullData()} ${grupName}`
//  }

// let setGroupTeacher = (grupaName) =>{
//       let teacherData = teacherFullData();

//       return `${teacherData} ${grupaName}`
// }

// let group = "P120";

// console.log(setGroupTeacher(group));

// let stu2 = {
//     name: "Seid",
//     surname: "Nuraliyev",
//     age: 23
// }
// let stu3 = {
//     name: "Mirsamir",
//     surname: "Ezimzade",
//     age: 23
// }



// let students = [stu1, stu2, stu3];


// for (const item of students) {
//     console.log(item["name"]);
//     console.log(item.name + " ")+ item.surname;

// }


// let stu1 = {
//     name: "Togrul",
//     surname: "Quluzde",
//     age: 23,
//     phoneNumbers: [43654,23145643],

//     groups:[{
//         name: "P130",
//         room: "Sirius",
//         teachers:[
//             {
//                 name:"Cavid",
//                 age: 28
//             },
//             {
//                 name:"Rovsen",
//                 age: 22
//             }
//         ]
//     },
//       {
//         name:"DL210",
//         room: "Pluton",
//         teachers:["Cavid","Gulnar"]

//       }]
// }


// let stu1 = {
//     id: 1,
//     name: "Ramil",
//     surname: "Binnatov"
// }


// let stu2 = {
//     id: 2,
//     name: "Togrul",
//     surname: "Quluzade"
// }

// let stu3 = {
//     id: 3,
//     name: "Emil",
//     surname: "Abdullayev"
// }

// let stu4 = {
//     id: 4,
//     name: "Seadet",
//     surname: "Murseliyeva"
// }






// let group = {
//     name: "P130",
//     capacity: 4,
//     students: [],

//     addStudent: function (stu) {

        // find method alternative 
//         let student = this.students.filter(m=>m.id == stu.id);
//         if (student != 0 ) { 
//             console.log("Already exist");
//             return;
//         }
//         if (this.students.length != this.capacity) {
//             this.students.push(stu);
//             return;
//         }
//         console.log("Qrupda bosh yer yoxdur");
//     }
// }
           
//             let student = this.students.find(m=>m.id == stu.id);
//         if (student != undefined ) { 
//             console.log("Already exist");
//             return;
//         }
//         if (this.students.length != this.capacity) {
//             this.students.push(stu);
//             return;
//         }
//         console.log("Qrupda bosh yer yoxdur");
//     }
// }

 

// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);
// group.addStudent(stu4);



  
// function Book(){
//    this.name = name;
//    this.author = author;

//    function getFullData(){
//     console.log(name + "-" + author);
//    }
// }

// let book = new Book("Xosrov", "Nizami");

// Book.prototype.pagecount = 55;

//     Book.prototype.getAuthor = function (){
//         console.log(author);
          
//     }
// console.log(book);

 

// let group ={
//     name:"P130",
//     capacity: 5,
//     students:[],
//     addStudent: function(stu){
//         if (this.students.length !=  this.capacity) {
//             this.students.push(stu);
//             return;
//        }
//        console.log("Qrupda bosh yer yoxdur");
//     }
// }

// group.addStudent("Orxan");
// group.addStudent("Togrul");
// group.addStudent("Seid");
// group.addStudent("Esqin");
// group.addStudent("Cavidan");
// group.addStudent("Ramil");
// group.addStudent("Azer");


// console.log(group.students);

// class Person{
//     constructor(name,surname){
//         this.name = name;
//         this.surname = surname;
//     }

//     getFullName(){
//         console.log(this.name + " " + this.surname);   
//       }
// }
 

// class Employe extends Person{
    
// }

// let employee = new Employe("Cavidan","Qadirli")

// employee.getFullName();
// console.log(employee.surname);




// 2) String qebul eden bir function yaziriq

let words = "Salam Olsun Hamiya"

function getLengthOfWords(str) {
    const wordLength=[];
   let chars = str.split(" ");
       for (let i = 0; i < chars.length; i++) {

        wordLength[i]=chars[i].length
       }
       return wordLength;

}
 console.log(getLengthOfWords(words));    
     
 



    
    