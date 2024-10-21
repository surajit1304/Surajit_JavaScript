// // // 1. declare a constant variable with value = 5
const myConstant = 5;
// myConstant = 5; // "=" => assignment operator,
// when we declare a variable with const datatype then we cannot reassign the value
// console.log(myConstant)



// // // 2. declare a let varible with value = "Surajit"
let myVariable="Surajit"; 
// console.log(gdpmyVariable)



// // // 3. create an array of name cars and put some values
let carNames = ["Tesla","Honda", "Mercedes"];
console.log(carNames);




// 4. create an object of name country and put some key value pairs like capital,  number of states, etc
let country = {// Country is an object.
    name: "USA",// name = Key, USA is the value
    population: "330 million",
    perCapitaIncome: "60,000 dollars"
};

// get values from an object 
// 1. dot operator - to access values from an object
console.log(country.name)

// 2. bracket operator - to access value directly and dynamically
console.log(country['name'])

console.log(country)



// 5. create a function of name greet and run it, Function is a datattype 
function greet() {
    console.log(" Hello, how are you");
}
greet();


// 6. create an function with arrow function syntax , name it sum and do sum of two numbers
const sum = (a,b) => {return a+ b};//a,b are parameters
console.log(sum(5,10));//5 and 10 are arguments for the parameters 



// 7. create a function of any name and accept an array as parameter and console.log the array
// syntax 
// function name(parameter=array, integer or datatypes){
//
// }
// name()   -> Call the function

function Hello(arr)
{ 
    console.log(arr) //Body : display arr
    
};

Hello(carNames); //Call the function



// // 8. create a for loop to print 1 to 10 
for (let i=1;i<=10;i++)
    console.log(i)


// 9. Iterate over an array= [1,2,3,4,5,6 and log the result
let myArray=[1,2,3,4,5,6,7,8,9,10,11];


for(let i=0; i < myArray.length; i++){//myArray.length means=6, it can be hardcoded but myArray.length gives you theflexibility. 
    console.log(myArray[i])}

// 10.Iterate over an object which you have created in task 4

// Javascript update 
// for of  => iterate over array
// for in  => iterate over object


// for (let index in carNames) {// For in is being used for array, not just object in this case 
//   console.log(index, carNames[index]);// printing the value like red, black, purple as per the
// }

const country1 = {
    name: "USA",
    latitute: 2662,
    longitute: 78990,
  };
  
  console.log(country1);
  // syntax
  // for(let anything in objectYouMade){
  // your code here
  // }
  
  for (let anything in country1) {
    //   console.log(anything); // will prints only keys -> name , latitute, longitute
    console.log(anything, country1[anything]);
  }
  