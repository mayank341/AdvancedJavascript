
//prototypes-
// Person.prototype.introduce=function(){// anonomus func
//     console.log("hi i am ", this.firstname );
// };

// Prototypes
     class Person{
        constructor(firstname,lastname){
            this.firstname=firstname;
            this.lastname=lastname;
        }
        greet(){
            console.log("Hello",this.firstname,this.lastname,"Nice to meet you");
        }
    }
    Person.prototype.introduce= function(){
    console.log("Hi ,I'm", this.firstname);
    };
    Person.prototype.favoriteColor="green";// prototype to add properties or methods to an object
    let p = new Person("Maria","Saga");
    console.log(p.favouriteColor);
    p.introduce();

    
