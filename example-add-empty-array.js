const first = [3,4]// create a n array first 
const second=[7,8]//create an array second
console.log (first,second)//Display first and second
first.unshift(1,2)//add two elements in the beginning
console.log (first,second);
second.push(5,6)//add two elements in the end
console.log(second)
const combine =first.concat(second)// concatenate two arrays and result in combine
console.log(combine)//Display combine
//first.splice(2,0,"x","y")//add two elements at position 3 from inndex 0 of the array [1,2,3,4]
//console.log(first)
//first.splice(3,0,"x","y")//add two elements at position 3 from inndex 0 of the array [1,2,3,4]
//console.log(first)
first.splice(3,0,"x","y")//add two elements at position 3 from inndex 0 of the array [1,2,3,4]
console.log(first)// last digit vanishes??
(6) [1, 2, 3, 'x', 'y', 4]//splice first parameter =index, second parameter =delete count, 