//input from the user.
const prompt = require("prompt-sync")();
let num = Number(prompt("enter a number :"));

//sum of n number.
let sum=0;
for(let i=1;i<=num;i++){
    sum=sum+i;
}
console.log(sum + " is sum of n numbers");