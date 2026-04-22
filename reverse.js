//reverse of a number.

//input from the user.
const prompt = require("prompt-sync")();
let num = Number(prompt("enter a number : "));

//reverse of a number.
let rev = 0;

while (num!==0){

let digit = num % 10;
rev = rev *10 + digit; 
num = Math.floor(num/10);
}
console.log("reverse of a number ="+rev);