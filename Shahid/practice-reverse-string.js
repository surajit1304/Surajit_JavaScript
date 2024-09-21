// practice question for string

// javascript program to reverse a string
// example= "hello"
// output -> "olleh"

// "hello" // length = 5

//parameter is the value which the function decleration expect , here its "string", 
//here string is expecting a value
function reverseString(string){// crreated a function reversestring, with a parameter called string

    //empty string
    let newString ='';
    
    for(let i = string.length-1; i>=0; i--){
        newString= newString + string[i];
    }
    return newString;

}

//reverseString(hello)
const inputFromUSer = prompt("Enter a string to reverse:- ")//first line to be executed,
// gives the prompt to user to enter a string
// then entered string is stored in a varible called = inputFromUSer
//then this inputFromUSer value passes as an argument for the function called = reverseString

const result= reverseString(inputFromUSer)// the second line to be ecceuted where the function reversestring 
// is first called.

// argument is the value which we pass against the parameter for the function , 
// in this case = "inputFromUSer" is the argument for the function's parameter = "string"

// we are logging the result
console.log(result)
