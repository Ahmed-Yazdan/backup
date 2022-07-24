const bottle = { color:'yellow', hold:'water', price:50 , isCleaned:true };

//Getting all properties name
const keys = Object.keys(bottle);
// console.log(keys);

//Getting all values
const values = Object.values(bottle);
// console.log(values);

//Getting all properties and values together ( With two dimensional array)
const pairs = Object.entries(bottle);
// console.log(pairs);

//Sealing an object
// Object.seal(bottle);
Object.freeze(bottle);

bottle.price = 100; 
bottle.height = '16';


//Deleting an element from object
delete bottle.isCleaned;
console.log(bottle);