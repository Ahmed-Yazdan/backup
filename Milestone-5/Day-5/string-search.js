const products = [
    "Dell hardcore i29 200GB laptop",
    "Iphone 1TB camera flashlight phone",
    "Dell Yellow laptop with black camera",
    "Mi10i with maximum level MIUI",
    "HTC komdami lowprice phone",
    "Dell Paykhana golden Laptop",
    "Paykhana Diamond varient  color"
];



//IndexOf method


/*for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}

console.log(output); */

// Includes method
/* const output = [];
const searching = 'laptop';

for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
    }
};
console.log(output); */

const output = [];
const searching = 'DeLl';
//Starts with method
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    };
};
console.log(output);