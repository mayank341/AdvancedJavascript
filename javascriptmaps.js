//map :holds key values pair ,keys can be any dat type
// create a map """
// const fruits=new Map([// map is predefined clss,
//     ["appls", 100],
// //     ["banana", 200],
// //     ["mango", 300],
// //     ["orange", 400]
// // ]);
// // console.log(fruits);


// // the set() methdod:
// // create a map:
// // const fruits=new Map();
// // fruits.set("appls", 100);
// // fruits.set("banana", 200);
// // fruits.set("oranges",200);
// // console.log(fruits);
// // fruits.set("appls", 500);
// // fruits.set("banana", 200);
// // fruits.set("oranges",200);
// // console.log(fruits);

// // // get()methd:

// // fruits.get("appls");

// type :loosely coupled ,
// maps are objects:
// instanceof

// // object vs map:
// // not directly iterable,iterable
// // string ,can be any datatype
// // keys are not well defined ///


// // // the new map method():
// // set: change the exixting CSSFontFeatureValuesRule, 

// fruits.set("apples,500");
// console.log(fruits.size);

// // Map.delete:
// // fruits.delete("apples");
// // console.log(fruits.size);
// // console.log(fruits.has("apples"));
// // console.log(fruits.has("banana"));   

// // Delete a key-value pair from the map
// fruits.delete("apples");
// console.log(fruits.size); // Logs the size after deletion
// console.log(fruits.has("apples")); // Checks if "apples" still exists



// // a function is an srgument for another function is cllback 
// let text=""; 
// fruits.forEach((value, key) => {
//     console.log(`Key: ${key}, Value: ${value}`);
// });


// // map.entries:

// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);
// map.keys()


//map.keys:
 let text="";
for(const x of fruits.keys()){
    text+=x;    
}
console.log(text);


Map.values