console.log("JavaScript Operators...");

// javascript operators->

// assignment operator
let a = 10;
a = a + 1;
a += 1; // shorthand for assignment
// console.log(a);

//arithmetic operator
let x = 20;
let y = 10;

console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiply
console.log(x / y); // divide
console.log(x % y); // modulus
console.log(x ** y); // exponents

// increment
// decrement
let num1 = 5;
let num2 = 10;

console.log(++num1); // pre increment
console.log(num2++); // post increment
console.log(num2);

// comparison operator or relational operators
// output -> true or false

let c = 1;
// double == means looselyEqual,  just to check the value not the type
console.log(1 == "1"); // true , 
console.log(c < 1); // fasle
console.log(c >= 1); // true
console.log(c <= 1); // true

// equality operaors (===) -> it checks value and type both--
console.log("1" === "1"); // true- comparing a string to a string
console.log(1 === "1"); // false- comparing an aobject to a string
console.log(c !== 1); // fasle - comparing a number to a number using not==, we defined c in line 34

//logical operator
// logical and -> &&
// logical OR -> ||
console.log(true || false);// true if any of the operand is true => "true"
console.log(true && false); // true if both the operands are true otherwise false=> "false"

// conditional operator -> ternery operator
let points = 90;
let skbdf = (points > 100) ? "gold" : "Silver";// condition state point>100 then if true
// it will print gold, if false it will print silver
console.log(skbdf);
