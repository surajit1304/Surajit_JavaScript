// let { log } = console;. To empty an array
let numbers = [1, 2, 3, 4, 56, 4, 52, 8, 78, 52, 65, 45, 21, 11];// two types of variable "let" and "const
let another = numbers; //


// solution 1- Emptying an array
numbers = [];// Empty array
console.log("number array",numbers)
// another=[]
console.log("another",another);
// anything after the dot is the method

// solution 2
console.log("lenght->", numbers.length);//   "length" in ana array shouws the number of elements in an array
//numbers.length means that the numbers array has a method called length to calculate the lenght of the array 
// numbers is an array and lenght is the method
numbers.length = 0;// assigning length of the number array to zero, that means array is empty...num
console.log(numbers);

// solution 3 -> effective and most efficient method - Hard coded 
// [1, 2, 3, 4, 56, 4, 52, 8, 78, 52, 65, 45, 21, 11] - This is hard coded 
let newArray=[1, 2, 3, 4, 56, 4, 52, 8, 78, 52, 65, 45, 21, 11];
// newArray.splice(0,14)// this is hardcoded
newArray.splice(0,newArray.length) // the best method to empty an array od n elements
console.log(newArray);


//let and con
