//factorial of a number.

//input from the user.
const prompt = require("prompt-sync")();
let num = Number(prompt("enter a number : "));

//factorial of a number.
if(num===0){
    console.log("factorial =1 ");
}
else{


let fact=1;
for( let i=1;i<=num;i++){
    fact=fact*i;
}
console.log("factorial = "+fact);
}
