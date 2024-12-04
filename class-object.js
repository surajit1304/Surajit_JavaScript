

// Proptties = name, firstname....
// Object = car
//method/function =fullname
const car={
    name:"BMW",//string
    firstName:"Surajit",
    lastName:"Sengupta",
    fullName(){// fullname is a function, to access the function 
        return this.firstName + " " + this.lastName
    }
}
//console.log(car)// to access the object
//console.log(car.name)//to access the name 
console.log(car.fullName())// to access the function fullName

// in oops , we say class as a blueprint 
// in oops , we say object as a instance 

// class - type of function , and we can add properties with constructor() method
class Person{// Created  a calsss Person
    constructor(name){// Constructor (parameter) , constructor is a keyword , 
        // to implement or initialize values which we going to use in future
        // here name is the value we expect from the class Person
        this.name = name// this keyword -> always reference to the current object
    }
    walk(){
        console.log("Walking....")
    } 

}

// We created a class and build small objects
// for this class : for example the class is a Teacher, 
// and the object is math_teacher 
class Teacher extends Person  {
    teach(){
        console.log("Teach...")
    }
}
const math_teacher = new Teacher()// math_teacher is the object build from the class Teacher
// And all the values in Teacher will will beinherited for the object math_teacher
// console.log(math_teacher.walk())
math_teacher.teach()
math_teacher.walk()


// creating a instance for this class : person1 is an object, person 2 is another 
//object, Person 3 is another and so on. It is an instant of Person which is a class
const person1 = new Person("xyz")
const person2 = new Person("Surajit")
const person3 = new Person("XYZd")
const person4 = new Person("Shahid")
const person5 = new Person("Shahid")
//console.log(person1)
//console.log(person2)
// person1.walk()
