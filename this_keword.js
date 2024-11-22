// this keyword ->  always returns a reference to the current object  

const car={
    name:"BMW",//string
    firstName:"Surajit",
    lastName:"Sengupta",
    fullName:function(){
        return this.firstName + " " + this.lastName
    }
}

console.log(car.fullName()) // Surajit Sengupta

const userName = car.fullName() 
console.log(userName)  // Surajit Sengupta


