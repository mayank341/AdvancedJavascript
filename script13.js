// sync in js : Synchronous means the code runs in a partiicular sequence of instructions given in the program.
// each instruction waits for the previous inctruction to complete its execution .

console.log("one");
console.log("two");
console.log("three");


// //Asynchronous PROgramming: Due to Synchronous programming ,sometimes imp instructions get blocked due to some prevoius instructions ,which causes a delay in the UI.
// Asyn. code execution allows to execute next instruction z immediately and doen not block the flow.

  // setTimeout : first time leta hai tb output deta hai 
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,4000);// timeout 2s=2000ms

setTimeout(()=>{
    console.log("hello");
},4000);

console.log("four");
console.log("five");

// Callbacks :<A callback is a function passed as an argument to another function>
 