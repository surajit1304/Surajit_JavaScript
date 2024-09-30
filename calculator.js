// simple calculator program

// 1. text that says ,whast you want to perform. eg, addition,subtraction, multiplication, and division
//     +, -, *, / 
// 2. take input of first number
// 3. take input of second number
// 4. perform the specified operation  ->
// 5. result output

// start here
//Nan - is "not a Number" if you do not put anything when prompted 

// 1. -> take input from user to perform action
let operation = prompt("Enter operation (+,-,*,/)")
console.log(operation)

// 2. -> take input of the first number
let first = parseFloat(prompt("Enter first number"))
console.log(first)

// 3. -> take input of the second number
let second = parseFloat(prompt("Enter the second number"))
console.log(second)

// 4. -> perform the operation 
if(operation === "+"){
   let result= first + second;
   console.log(result)
}
if(operation === "-"){
  let result = first - second 
  console.log(result)
  //  
}
if(operation === "*"){
  let result = first * second 
  console.log(result)
  //  
}
if(operation === "/"){
  let result = first / second 
  console.log(result)
   // 
}

