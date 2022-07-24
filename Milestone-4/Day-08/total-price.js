const products = [
    {name:'laptop',price:43000},
    {name:'shirt',price:500},
    {name:'shirt',price:500},
    {name:'phone',price:55000},
];

let totalPrice = 0;
for(const product of products){
    totalPrice = totalPrice + product.price;
}

// console.log(totalPrice);

const cart = [
    {name:'laptop' ,price:43000, quantity:1},
    {name:'shirt',price:500, quantity:8},
    {name:'watch',price:3680, quantity:3},
    {name:'phone',price:55000, quantity:1},
];
let totalPrice1 = 0;
for(const product of cart){
    totalPrice1 = totalPrice1 + (product.price * product.quantity);
}
console.log(totalPrice1);