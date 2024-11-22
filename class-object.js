

// Proptties = name, firstname....
// Object = car
//method =fullname
const car={
    name:"BMW",//string
    firstName:"Surajit",
    lastName:"Sengupta",
    fullName(){
        return this.firstName + " " + this.lastName
    }
}

// in oops , we say class as a blueprint 
// in oops , we say object as a instance 

// class - type of function , and we can add properties with constructor() method
class Person{// Created  a calsss Person
    constructor(name){// Constructor (parameter) 
        this.name = name
    }
    walk(){
        console.log("Walking....")
    } 

}


// creating a instance for this class : person1 is an object, person 2 is another 
//object, Person 3 is another and so on. It is an instant of Person which is a class
const person1 = new Person("xyz")
const person2 = new Person("Surajit")
const person3 = new Person("XYZd")
const person4 = new Person("Shahid")
const person5 = new Person("Shahid")
console.log(person1)
console.log(person2)
person1.walk()
