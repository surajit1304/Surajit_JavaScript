const num = [1, 2, 3, 1, 4];

// finding elements
console.log(num.indexOf(1)); // return index of the searched element
console.log(num.indexOf(1, 2)); // search 1 from index 2 in array

console.log(num.lastIndexOf(1)); // search from the last elements

console.log(num.indexOf("1")); //return -1 if element is not present
console.log(num.includes(1)); // checks searched element is present or not

const courses = [
  // courses = array of  objects
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
];

const findCourse = courses.find(function (c) {
  return c.name === "b";
});

console.log(findCourse);
