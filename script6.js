
// class person{
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }

//     getFullName() {
//         return this.#firstname;

//     }
//     setFullName(firstname) {
//         this.#firstname = firstname;
//     }
//     getLastName() {
//         return this.#lastname;
//     }
//     setLastName(lastname) {
//         this.#lastname = lastname;
//     }
// }
// let p=new person("John","Doe");
// console.log(p.getFullName());

// console.log(p.getLastName());
// p.setFullName("Amit");
// console.log(p.getFullName());

// Inheritance: reusability of code, is a mechanism in OOP that allows one class to inherit the properties and methods of another class. The class that inherits is called the child class, and the class being inherited from is called the parent class. Inheritance allows for code reusability and a hierarchical relationship between classes.
// purpose of inheritance in js in one sentence: Inheritance in JavaScript allows one class to inherit properties and methods from another class, promoting code reusability and a hierarchical relationship between classes.

// generalistion to specialsistion : ""
//
class vehicle{
    consturctor(color,currentSpeed,maxSpeed){
        this.color=color;
        this.currentSpeed=currentSpeed;
        this.maxSpeed=maxSpeed;
    }

move(){
    console.log("moving",this.currentSpeed);
}
stop(){
    console.log("stopping",);
}
accelrate(amount){
    this.currentSpeed+=amount;
}
}
class Motorcycle extends vehicle{
    constructor(color,currentSpeed,maxSpeed,engineCapacity){
        super(color,currentSpeed,maxSpeed);// super parent calss ke constructor ko call kar rah hai 
        this.fuel=this.fuel;}
        dowheelie(){
            console.log("driving on one wheel");
        }
    }

     let motor=new Motorcycle("red", 0, 120, "gasoline");
    console.log(motor.color);

    motor.accelerate(20);
    motor.move();

    

