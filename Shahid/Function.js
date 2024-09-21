// There are two syntax for functions : normal function and arrow function

//normal functions syntax
//  function functionName(parameter1,parameter2,...){
//     console.log(num1)
// }
// functionName(argument1,argument2,...) // we need to call a function to execute 


// arrow function syntax : 
//this is another form of sysntax with a lesser number of lines for eg, we are not 
//using the keyword function, lesser number of lines , more efficient

const functionNew = (num)=>{
console.log(num)
}
functionNew(5)// we called the function and passed parameter 5 

// Global scope and Local Scope in a function call

let color ='red' // global variable, just to show the syntax
function Myname(){// Name of the function Myname 
    let Firstname='Surajit';  // firstName = local scope varible let
    return Firstname;  // return the value of firstname and stop execution here
}

function another(){// Created a function another
    color ="pink"// used the global variable color
    return color;
}
another()// execute the function output red

const output=another();
console.log(output) // 
//console.log(greet)  // get an error
//console.log(Firstname) // get an error

