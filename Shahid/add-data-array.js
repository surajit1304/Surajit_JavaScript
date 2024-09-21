// add data in an array - Unshift, push, splice (three methods)
const numbers = [3, 4];// an array containing two elements , "constant " or "let" are two types of declaring varaiable 
console.log(numbers);

// begining
numbers.unshift(1, 2);
console.log(numbers);

// end
numbers.push(5, 6);
console.log(numbers);
[1, 2, 3, 4, 5, 6];

// anywhere
numbers.splice(2, 0, "a", "b");
console.log(numbers);
