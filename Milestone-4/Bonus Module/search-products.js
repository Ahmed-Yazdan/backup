const products = [
    {name:'samsung s3 phone',price:12000},
    {name:'apple a5 phone',price:50000},
    {name:'mi 10i phone',price:14000},
    {name:'legion 20 phone',price:69000},
    {name:'baal saal',price:0},
    {name:'laptop hello69',price:69420}
];

function searchproducts(products, searchText){
    const matchedItem = [];
    for(const product of products){
        const name = product.name;
        if(name.indexOf(searchText) != -1){
                matchedItem.push(product);
        }
    }
    return matchedItem;
};


const matched = searchproducts(products,'phone');
console.log(matched);