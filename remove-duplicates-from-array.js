// function to remove duplicates from an array
// normalisation in table => remove multiple instances of same value

// 1. create a function name = removeDuplicates 
// 2. create an dummy array with 2 or 3 repetitve value 
// 3. write the logic to remove the duplicates value
// 4. iterate over array to check same values



// 2 ways to create a function

// 1. syntax
// function removeDuplicates() {
// // code here
// return 2 + 2
// }

// const result= removeDuplicates();  // 4


// // 2.  arrow function syntax
// const newFunction=()=>{
// // code here
// }

const originalUsers = [1,2,3,4,5,6,7,8,1,2,3,9,5];
// result => [1,2,3,4,5,6,7,8,9]
// originalUsers[0]

function removeDuplicates(users){// if you give a param that means you expect an input from the user like in this case we need an input from the user that is the 
// code here

for(let i=0; i < users.length ; i++){//users.length means in this case the dot - 
    // code will run
    // originalUsers[0]
    // console.log(i)//1,2,3......
    console.log(users[i]); // 1
    const uniqueArray =[];
    // check the values
    if(!uniqueArray.includes(users[i])){// the value of te method is compared to the Unique array
        // code will run
        uniqueArray.push(users[i])

    }//include is a method, if include has a value then this condition is met , if this condition true or false? 

    
}




}

removeDuplicates(originalUsers); // this is how to run a function, we are passing the users array as a  argument to the function


