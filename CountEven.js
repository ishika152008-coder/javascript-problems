let arr = [1, 2, 3, 4, 6];

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2===0){
        count += 1;
    }
}

console.log(count);