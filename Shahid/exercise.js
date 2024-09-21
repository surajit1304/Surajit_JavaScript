// excerice 1
// To rpint out range of numbers starting from min to max and inserted in an array

function arrayFromNumber(min,max){// function declaration
    // code to be executed 
    // min < max 
    //     loop work 
    // min > max
    //     loop end
   const output=[];
   for(let num=min ;num <= max; num++){// code will execute from min to max and then exit the loop once max is reached and execute 
        output.push(num) //push value into an array
   }
    return output;//execute when output array reaches maxand function will return a value
}
const range = arrayFromNumber(-20,5) // -10
console.log(range);



