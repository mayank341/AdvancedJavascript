//objects and keys:
// 1. Create a map of the world using the Leaflet library.
// const apples={name:'apples'};
// const bananas={name:'bananas'};
// const oranges={name:'oranges'};

// //create an Map
// const fruits =new Map();

// //add new elemst sto the Map
// fruits.set('apples',500 );
// fruits.set('bananas',300 );
// fruits.set('oranges',300 );

// fruits.get("apples");// return undefinesd
// // fruits.get(apples);



// create an array :
// const fruits=[{name:"apples",quantity:500},
// {name:"bananas",quantity:300},{name:"oranges",quantity:300},
// {name:"kiwi",quantity:200},
// ];
// // callback function to Group element s:
// function myCallback({quantity}){
//     return quantity>300?"ok":"not ok";
// }
// // group by qunatity
// const result=Map.groupBy(fruits,myCallback);
// console.log(result);

// create:
//  an object 
// ipt destructuring: 
// const person={
//     firstname:"John",
//     lastname:"Doe",
//     age:30,
// };
// destructuring the object:
// let {firstname,lastname,age}=person;
// console.log(firstname,lastname,age);

// create an object 
// Destructuring is not destructive let
// let {firstname,lastname,age,country="us"}=person;
// console.log(firstname,lastname,age,country);

// // destructuring the object:
// let{lastname:name}=person;
// console.log(name);

// string destructuring:
// let name="GurukulTheSchools";
// let[a1,a2,a3,a4,a5]=name;
// console.log(a1,a2,a3,a4,a5);

// // create an array :
// const fruits = ["apples","bananas","oranges","kiwi"];
// // let[fruits1,fruits2]=fruits;
// // console.log(fruits1,fruits2);

// // skipping array values:

// let[fruits1,,,fruits2]=fruits;
// console.log(fruits1);
// console.log(fruits2);

//  create an array :
// const fruits = ["apples","bananas","oranges","kiwi"];
// // destructuring the array:
// let{[0]:fruits1,[1]:fruits2}=fruits;
// console.log(fruits1);
// console.log(fruits2);


// // rest property : and spreds ::: spreds calling and rest property is used for   functioning 
// //  create an array :
// const numbers=[10,20,30,40,50,60,70];
// // destructuring 
// const [a,b,...rest]=numbers;
// console.log(a)
// console.log(b)
// console.log(rest)

// create a map :
// const fruits =new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);
// // destruct 
// let text="";
// for(const[key,value]of fruits){
//     text+=key+" is"+value+"\n";
// }
// console.log(text);

// swapping java script variables:

// let firstname="john";
// let lastname="doe";
// [firstname,lastname]=[lastname,firstname]
// console.log(firstname);
// console.log(lastname);

// exponential opertaor:
// let x=5;
// let z=x**2;
// // console.log(z);
// let z=Math.pow()

//
// let x=5;
// x**=2;
// console.log(x);


// includes():

// const fruits=["banana","orange","apple","mango"];
// console.log(fruits.includes("mango",2));
// console.log(fruits.includes("banana",2));
// console.log(fruits.includes("mango",2));

// includes() is case sensitive ,



//  topic : trailing commas-
// trailing commas have been legal in array laterals.
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);
// console.log(arr.length);

// const sparseArray=[1,,,4,5,,];
// console.log(sparseArray);
// console.log(sparseArray.length);

// const arr=[,];
// console.log(arr.length);

// const person={
//     firstname="john",
//     lastname="davsi",
//     age:30,
// }
const person={
    firstname:"john",
    
    age:30,
}

console.log(person);

// function create{
//     w,

// }












