let n = 10;
let count = 0;

for (let i = 1; i <= n; i++) {
    if(i%3===0){
        count += 1;
    }
}

console.log(count);