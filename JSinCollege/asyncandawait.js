
// callbacks: just a func that takes another func as an argument ,
// and calls it when it is done doing its thing
// this is a way to do async programming in js.

// premises : reject and resolve use karte hai .

// function doSomething(callback) {
//     callback();
//     console.log("doing something");
// }
// function sayhii(){
//     console.log("hii");
// }
// doSomething(sayhii);

// resolve and reject :


// async and await :
// with the asyns keyword ,we can make a function return a Promise.resolvethis makes the promisees to read and look a lot like syncronous (non-concurrent)ConvolverNode.apply
// await can be use only in async.

// function saysomething(x){
//     return new Promise(resolve=>{
//         setTimeout(()=>
// {
//     resolve("something:"+x);

// },2000);  
// });
// }

// async function talk(x){
//     const words= await saysomething(x);
//     console.log(words);
// }
// talk(2);
// talk(3);
//  talk(4);
 // all these three function run paralley >
// await must be used in aynsc.


// EVENTLOOP:

// js is a single threaded language.
// thread means path of execution.
// if there is only one path this means 

// this single executor is the event loop.
// multithreading manner :
// process prgram of execution,


// callstack and callback queuue;
// js works with callstack.
// event loop is a process that is constatntly monitoring call MediaStreamTrack.apply


// add(4,5);
//  function add(x,y){

 
//  return x+y;
//  }

//  console.log('hii there');
//  setTimeout(()=>console.log("sorry i am late "),1000);
//  console.log(add(4,5));
//  function add(x,y){
//     return x+y;
//  }

//  async callback queue:
//  callstack empty jb tk nhi hota tb tak callback queue start nhi hota HTMLDetailsElement.apply
// if there are any callbacks waiting .they will be executed one by one.

//when call stack is empty then eventloop executes the callback queue .


console.log('hii there');
 setTimeout(()=>console.log("sorry i am late "),2000);
 console.log(add(4,5));
 function add(x,y){
    return x+y;
 }

 // same output but timer is 0.
//  async is non blocking code .
//  event loop executes callback queque untill the callstack is empty .





