const friends = ['Tom', 'Jerry', 'Tom Holland','Playboy mofiz'];
const products = [
    { name:'KhankirPola', id:'tor mayere cdi', price:69, color:'shit' },
    { name:'MagirPO69', id:'tor nani re cdi', price:69, color:'shit' },
    { name:'MagirPO420', id:'tor mayere hoga mari', price:69, color:'shit' }
];

const productNames = products.map(p => p.name);
const productPrices = products.map(price => price.price);
console.log(productNames);
console.log(productPrices);

// const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);