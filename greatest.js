//input both number.
const prompt = require("prompt-sync")();
let num1=Number(prompt("Enter a number : "));
let num2=Number(prompt("Enter a number : "));

//check which is greater.
if(num1>num2){
    console.log(num1 +" is greater");
}else if(num2>num1){
    console.log(num2 + " is greater");
}else{
    console.log("both are equal");
}