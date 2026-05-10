function analyzeOrders(orders) {

    let status = orders.filter(st => st.status=="Delivered");
    let tax = status.map(pr => pr.amount+pr.amount*0.18);
    if(tax.length==0){
        return 0;
    }
    let highest = tax.reduce((item1,item2)=> item1>item2?item1:item2);
    return highest;

}

let orders = [
    {customer:"Aman", amount:2000, status:"Delivered"},
    {customer:"Riya", amount:5000, status:"Pending"},
    {customer:"Kunal", amount:3000, status:"Delivered"}
];

console.log(analyzeOrders(orders));