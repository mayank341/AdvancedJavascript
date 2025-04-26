// class Person{
//     eat(){
//         console.log("eat");
    
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer{
//     work(){
//         console.log("solve problems,build something ");
//     }
// }
// let  ShradhaObj=new Engineer 
// console.log(ShradhaObj);
// console.log(ShradhaObj.work());


// class Doctor{
//     work(){
//         console.log("treat Something");
//     }
// }
// let AnchuObj= new Doctor
// console.log(AnchuObj); 
// console.log(AnchuObj.work()); 

// Super keyword: 















// LETS PRACTICE :
//Q:As you are Creating a website for your college .Create a class USer with 2 properties ,name and email.It also has a  method called viewData() that allows user to view website data .
// student data:
// let DATA="secret information";

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

// viewData(){
//     console.log("data=",DATA);
// }
// }
// let student1=new User("shardha","abc@email.com");
// let student2=new User("aman","aman@email.com");
// console.log(student1)
// console.log(student1.viewData())
// // college dean :
// let teacher1=new User("Dean","dean@college.com");
// console.log(teacher1.viewData());
// console.log(teacher1);
// console.log(student1.viewData());


//Question2: Create a new class called Admin which inherits it from User.Add a new method called editData to Admin that allows it to edit website data.
let DATA="secret information";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

viewData(){
    console.log("data=",DATA);
}
}
class Admin extends User{
    constructor(name,email){// this is used to store informataion data of admin1,
        super(name,email) // parent ke constructor ko call karne ke liye super ka use krte hai 
    }
    editData(){
 DATA="some new value ";
    }
}
let admin1=new User("admin","admin@email.com");
console.log(admin1);
console.log(DATA);
console.log(admin1.editData());
console.log(DATA);


