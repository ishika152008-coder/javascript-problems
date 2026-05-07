let n = 10;
let isPrime = true;

for (let i = 2; i < n; i++) {
    if(n%i===0){
        isPrime= false;
        break;
    }
}

if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}