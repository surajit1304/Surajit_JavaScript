// object -> key value pair of similar kind of data 

const car = {// object is defined by curly braces just like array defined by sqare bracket
    //object can get an array, function, variable,nested-object etc
    // Colon is separated Key Value pair
    // Created a object car , and added key value - string and a function accelerate in this case "type"
    name:'Audi A4',//Key value pair
    color:'white',
    modal:2024,
    accelerate:function(){// accelerate is the function. In this case function is the keyword to create function
        console.log("Move forward")
    },

    companies:{  // "Companies" is an nested object
        first:"BMW",
        second:"Mercedes"
    },
    wheels:[] // aaray  
};

console.log(car.companies.first)
// to access values of the object -> name, model or functon (accelerate)
car.name // "Audi A4"
car.modal // 2024
car.accelerate() // Move forward
// to print model and color
console.log(car.name )
console.log(car.modal)

// to add new values to the object
car.type = "SUV";

// to delete 
delete car.type  // delete both key and value
console.log(car);

// object destructurining
  const person ={// person is the object, username and age are key value pairs 
    username:"Surajit",
    age:30,
    gender:'male',
    country:"India"
  }
  // accessisng the username from person object by 2 ways
//   1 directly 
  console.log(person.username)
  console.log( person.age)
  console.log(person.gender)
//   2. By object destructuring 
  const {username,age,gender, country} = person // object destructuring
  console.log(username,age)
  
//   (person.age) and  (age)  , both prints age = 30



// Primitive type and Refeence type

// Primitive => is a value that has no poperties or methods mainly constant values that will not change 
// String = "Name"
// Number = 78
// boolean = true
// null 
// undefined
// symbol
// bigint

let g = 8; // different variables
let h = g; // are different variable 
g = 10;
console.log(g)// Console is a 
console.log(h)


// Reference type -> mutable
// objects,
// arrays,
// function 
// Use case : 

const old= {
    username:"Surajit",
    age:30,
    gender:'male',
    country:"India"
    
}

const j = old;
console.log(j);
j.username = "Shahid";
console.log("J->", j); // j-> : 

console.log("old->",old);

setInterval(()=>{
  console.log("Settimeout")
},3000)




console.log("Hello")