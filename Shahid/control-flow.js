// if else-condition statement
let hour = 10;
if (hour > 6 || hour > 12) {
  console.log("works...");
} else {
  console.log("fails...");
}

// switch case
// in this we check each case and when we consition matches one of the case
// then code runs and exit the switch case loop with break statement
let role = "sdfg";

switch (role) {
  case "guest": //
    console.log("Guest User");
    break;
  case "admin":
    console.log("Admin");
    break;
  default:
    console.log("unknown user");
}

// loops-while, for, switch 
// for loop
// for(initialize ; condititon ; increment/decrement){

// }

// how the for loop works ->
// 1. initialize the thing -> we initialize i =1
// 2. condition -> check the condition, if the condition true then the controls is goes inside the block
// if the condition is false-> the it gets out of the block
// 3. increment or decremnet

for (let i = 1; i <= 10; i++) {
  console.log("Good Morning");
}
//  for with condition
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log("Print odd numbers", i);
  }
}

// while
let number = 1;
// while loop syntax
while (condition) {
  i++;
}

//do while
let x = 8;
do {
  Input(10);
  i++;
} while (10 > 10);
{
}
