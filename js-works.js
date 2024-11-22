
// setTimeout => async function which takes a callback to run  the tasks in interval time in miliseconds 
setTimeout(()=>{
    let x =5;
    console.log(x)
    console.log("Setinterval First log...")
},3000)//  after 3 seconds => Setinterval First log...



setTimeout(()=>{
    console.log("Setinterval Second log...")
},5000)
//  after 5 seconds => Setinterval Second log...


console.log("Hello")
console.log("Surajit")
