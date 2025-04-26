// CONDITIONAL STATEMENT
// Conditional statements are used to perform different actions based on different conditions.

//   if statement:
// let age=15;

// if(age>=18){
//     console.log("u can vote");
// }

// if(age<18){
//     console.log("u cannot vote");
// }

// let mode="dark";
// let color;

// if(mode==="dark"){
//     color="black";

// }
// if(mode==="light"){
//     color="white";}
// console.log(color);


//if else statement :
// let age=15;

// if(age>=18){
//     console.log("u can vote");
// }
// else{
//     console.log("u cannot vote");
// }

// even or odd using if else :
// let num=10;
// if(num%2==0){
//     console.log("even number");
// }   
// else
// console.log("odd number");

// // else if statement :



// // ternary operator:  simpler ,compact if else, 
// let age=15;
// age>=18?console.log("adult"):console.log("not adult");

// //mdn docs:


// practice sheet:
//question 1. get user to input a number using prompt('enter a number:') check if the nmber is a multiple of 5 or not?

// let number = prompt('enter a number:');
// if (number % 5 === 0) {
//     alert(number + " is a multiple of 5.");
// } else {
//     alert(number + " is not a multiple of 5.");
// }

// alert("hello!");
//  let name=prompt("hello");
//  console.log(name );

// question2 : write a code which can give grades to students according to their scores :
let score=prompt("enter your score between (0-100):");
// let score =85;
let grade;

if(score>=90 && score<100){
    console.log("grade A");}
 else if(score >=80 && score<90){
    console.log("grade B");
 }
else if(score>=70 && score <80){
        console.log("grade c");
    }
    else if(score>=60 && score <70){
        console.log("grade D");
    }
    else if(score>=50 &&score<60){
        console.log("grade E");
    }


