const prompt = require("prompt-sync")();

//input from the user.
let num = Number(prompt("Enter a number: "));

//cheking weather even or odd.
if(num%2===0){
    console.log(num +" is even");
}else{
    console.log(num +" is odd");
}