const employee = {
    ide: "VS CODE",
    designation:"Developer",
    software:"Mac",
    langugaes: ['html', 'css', 'javaScript'],
    specification: {
        height:66,
        weight:67,
        adress:"Kumar Khali",
        drink:"Water"
    }
};

// From normal object to JSSON.stringify()
const employeeJSON = JSON.stringify(employee);

// From stringified object to normal object
const employeeObj = JSON.parse(employeeJSON);


// F E T C H
/* const url = `https://www.google.com`;
fetch(url)
.then(res => res.JSON)
.then(data => console.log(data)); */


// Key and Values
const keys = Object.keys(employee);
const values = Object.values(employee);

// For
const array = [23,45,65,23,12];
// If return is not necessery
array.forEach(number => console.log(number));

// If return is necessery
array.map(number => 2*number);

// for of ( on array like object )
// for in ( on object )

// Add or remove form an array
const products = [
    {name:'laptop',price:69000,color:'blue'},
    {name:'mobile',price:12000,color:'red'},
    {name:'desktop',price:100000,color:'green'},
    {name:'camera',price:231,color:'yellow'},
    {name:'underwear',price:69420,color:'brown'},
    {name:'t-shirt',price:213,color:'black and white'}
];

const newProduct = {name:"web cam", price:700, color:"red"};

// Copy products array and then add newProduct in it
const newProducts = [...products, newProduct];

// Create a new arrray without a specific element
const remaining = products.filter(product => product.name !== "phone");
console.log(remaining);