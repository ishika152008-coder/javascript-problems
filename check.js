//input a number from the user.
const prompt = require("prompt-sync")();
let num = Number(prompt("enter a number : "));

//checking wheather a number is pos, neg or zero.
if(num>0){
    console.log(num + " number is positive");
}else if(num<0){
    console.log(num + " number is negative");
}else{
    console.log(num + " number is zero");
}