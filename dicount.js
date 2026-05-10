function analyzeProducts(products) {

    let product = products.filter(item => item.rating>=4);
    let discount = product.map(pr => pr.price-pr.price*0.2);
    if(discount.length == 0) {
        return 0;
    }

    let cheapest = discount.reduce((item1, item2) =>
        item1 < item2 ? item1 : item2
    );

    return cheapest;
} 

let products = [
    {name:"Phone", price:50000, rating:4.5},
    {name:"Laptop", price:80000, rating:3.8},
    {name:"Watch", price:10000, rating:4.2}
];

console.log(analyzeProducts(products));