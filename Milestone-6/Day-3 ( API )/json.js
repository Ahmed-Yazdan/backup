// const user = {name:"Rakib", class:10, hobby:"Watching porn"};
// const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

const shop = {
    name: 'KalaJahangir Super Shop',
    address: 'KalaJahangir Road',
    products: ['a', 'b', 'c', 'd', 'e'],
    profit:1500,
    owner: {
        name:'Alia Bhatt',
        Job: 'Actor'
    },
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);

const parsedStringify = JSON.parse(shopStringified);

// console.log(shop);
console.log(shopStringified);
console.log(parsedStringify)