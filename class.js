//  class-is blueprint,template ,collection of objects ,
//  prototypes:
//  object is an entity having state and behaviour(properties and methd)
//  js object have a special property called prototypes.

// direct way
const student = {
  fullName: " harekrishna", // these properties are also called state
  marks: 99,
  printMarks: function () {
    // function also called methods ,behaviour of objecy
    console.log("marks=", this.marks); //student.marks
  },
};
console.log(student);
// a special identity showing property:prototype object

let arr = ["apple", "mango", "banana"];
console.log(typeof arr);
console.log(arr);

// Inside array, some functions are automattically developed like push ,pull,etc 
// // these all come from  prototypes
arr.push("litchi");
console.log(arr);

//  we can make our prototypes also :
const employee={
    calcTax(){
        console.log("tax rate is 10%");
    }
};
employee.calcTax();

const KaranArjun={
    salary:5000,
};
console.log(KaranArjun);

const KaranArjun2={
    salary:5000,
};



// we can set prototype using --proto--,
//NOTE: if object and prototype have same method ,objects method will be used .

// har ek object ke proto ke ander apne class ko call kar sakte hai 
KaranArjun.__proto__=employee;
KaranArjun2.__proto__=employee;
// KaranArjun3.__proto__=employee;
// KaranArjun4.__proto__=employee;
// KaranArjun5.__proto__=employee;

console.log(KaranArjun2);



