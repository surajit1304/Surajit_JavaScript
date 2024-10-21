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

function removeDuplicates(users){// if you give a param that means you expect an input  
    // users = originalUsers
    //from the user like in this 
    //case we need an input from the user that is the array
    // code here
    //users is the parameter
    //Function requires an input to execute. That input is the parameter in this case users
    // users =[1,2,3,4,5,6,7,8,1,2,3,9,5];
    
    const uniqueArray =[];// created an empty array to store unique values. 
    // 2
    for(let i=0; i < users.length ; i++){//users.length means , length measures array length,
    // means the element in the array which is 13 in number. 
    // in this case the dot - parsing all the numbers using a for loop
    // originalUsers[0]
    // console.log(i)//1,2,3......
    // console.log(users[i]); // 1

    //Uniquearray is the 
    //output

    // 3
    // check the values
    if(!uniqueArray.includes(users[i])){// the value of te method is compared to the Unique array
        // uniqueArray.includes(1) - this is a method which check in the uniqeAarray the value of 
        // in the array , if the value present so the condition is true , if the value not present then the 
        // condition is false
        // !uniqueArray.includes(users[i]) = 
        // code will run
        uniqueArray.push(users[i])

    }//include is a method, if include has a value then this condition is met , if this condition true or false? 
   

}
return uniqueArray;// return should be outside the scope. 

}

// Now to run the function to remove duplicates 
// To run a function : function name ()
console.log(removeDuplicates(originalUsers)); 
// this is how to run a function, we are passing the users array as 
//if you put unique array you are hardcoding
//argument to the function



