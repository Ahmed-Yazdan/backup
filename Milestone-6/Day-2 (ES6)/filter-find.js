const numbers = [12,34,65,12,34,1,567,324,12,87];

const products = [
    { name:'KhankirPola', id:'tor mayere cdi', price:49, color:'shit' },
    { name:'MagirPO69', id:'tor nani re cdi', price:69, color:'shit' },
    { name:'MagirPO420', id:'tor mayere hoga mari', price:19, color:'shit' }
];

const bigNumber = numbers.filter(number => number>20);
// console.log(bigNumber);

const expensiveProducts = products.filter(product => product.price > 68);
console.log(expensiveProducts);
