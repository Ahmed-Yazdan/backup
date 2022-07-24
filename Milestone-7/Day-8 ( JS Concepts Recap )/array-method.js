const products = [
    {name:'laptop',price:69000,color:'blue'},
    {name:'mobile',price:12000,color:'red'},
    {name:'desktop',price:100000,color:'green'},
    {name:'camera',price:231,color:'yellow'},
    {name:'underwear',price:69420,color:'brown'},
    {name:'t-shirt',price:213,color:'black and white'}
];

const names = products.map(product => product.name);
console.log(names);

// For each
products.forEach(product => console.log(product.name));

// Filter
const cheap = products.filter(product => product.price <= 50000);
console.log(cheap);

const specificNames = products.filter(product => product.name.includes('n'));
console.log(specificNames);

// Find ( Returns only the firts element which fulfills it's condition )
const findName = products.find(product => product.name.includes('l'));
console.log(findName);
