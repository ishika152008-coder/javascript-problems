function analyzeCart(cart) {

    let items = cart.filter(item => item.quantity > 0);
    let price = items.map(item => item.price*item.quantity);
    let bill = price.reduce((acc,curr)=> acc+curr,0);
    return bill;
}

let cart = [
    {name: "Shoes", price: 2000, quantity: 2},
    {name: "Shirt", price: 1000, quantity: 0},
    {name: "Watch", price: 3000, quantity: 1}
];

console.log(analyzeCart(cart));