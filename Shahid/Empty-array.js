// to delete a number from the array- pop, shift, splice 
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// end
number.pop();
console.log (number)// delete number 9)

// beginnign
number.shift();// Delete number 1
console.log(number)

// middle or anywhere
number.splice(1, 5);//first parameter=index, second param=delete count (number of elements)
// in this case the number 2  is index 1 and deleting five numbers after index 1-  2,3,4,5,6), and the third ptameter is optional delete if 0  
console.log(number);
