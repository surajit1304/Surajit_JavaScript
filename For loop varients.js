// do-while loop syntax -->
// do {
//   prompt("input");
//   alert("adjfhkkdf");
//   console.log("")
//   // code block to be executed
// } while (condition);

// for loop varients ->
// 1. For of loop = to iterate over array
// 2. For in loop = to iterate over objects
// forEach = iterate over array


// for loop basic syntax
// for(let i=0;i<10;i++){
// }
const numbers = [1, 2, 3];
// for of loop is usally use for array iteration
// for in loop is used to iterate over objects
// but we can use both of them to iterate over each other example line 44

for (let num of numbers) {// "of" is equivalent to I=0, I=++) usually you use of for arrays 
  console.log(num);
}

// // for in loop = iterate over objects
const person = {// Person is a vaiable type Constant
 name: "Surajit",// value of the object for the key "Name ""
  age: 67,// Value for key "age"
};

// For object it has key and value. this key will print the keys of the object = person, "let" - key is referrring to each elemnt in objects
for (let key in person) {// key is a variable  to store key value for object Person, "in" is causing the loop or iteration
 console.log(key); // will prints only keys -> name , age
}

// this value will print the values of the object = person
for (let value in person) {
 console.log(person[value]); // wil prints the values of the respt keys => Surajit, 67
}

// "for in" loop to iterate over an array as an exmaple - not just for object
const color = ["red", "black", "pink"];
for (let index in color) {// For in is being used for array, not just object in this case 
  console.log(index, color[index]);// printing the value like red, black, purple as per the
  // index 0,1,2
}



// for each loop syntax
let newArray =[1,2,3]
newArray.forEach(element => {// To join function use forEach
  console.log(element)
});
