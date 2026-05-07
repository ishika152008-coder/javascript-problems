let arr = [1, 2, 3, 4, 5];

let even = arr.filter(x=>x%2===0);
let sq = even.map(even=>even*even);
let result = sq.reduce((a,b)=>a+b);

console.log(result);