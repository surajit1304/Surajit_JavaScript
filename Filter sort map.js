//const numbers = [1, 4, 9, 2, 6, 3];

// sorting
//const sortedArray = numbers.sort();
//console.log(sortedArray);

// filter() ->
// Returns the elements of an array that meet the condition
// specified in a callback function.
const num = [1, 2, -1, 3, -5];
const filteredArray = num.filter(function (number) {
  return number > 1;
});
console.log(filteredArray); // [1,2,3]

//map()

// map function useCase => to print values from an array or we say from the api or database
const items = filteredArray.map(function (n) {// Filter array 2 and 3, display
 return `this is number = ${n}`;// Temmplate literal
});
console.log(items);
