function createCounter() {
    let count =0;
    function inner(){
        count++
        return count;
    }
    return inner;
}

let counter = createCounter();
let c2 = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(c2());