// Array destructuring
const numbers = [23,3545];
// const x = numbers[0];
// const y = numbers[1];
const [x,y] = [12,34];
console.log(x,y);

const[a,b] = numbers; 
console.log(a,b);


function boxify(num1,num2){
    const nums = [num1,num2];
    return nums;
};

// Object destructuring
const {name, age} = {name:'Sakib Khan',age:14};
const {name, age} = {name:'Kala Jahangir',age:21};

const employee = {
    ide: "VS CODE",
    designation:"Developer",
    software:"Mac",
    langugaes: [html,css,javaScript],
    specification: {
        height:66,
        weight:67,
        adress:"Kumar Khali",
        drink:"Water"
    }
};

const {software, ide} = employee;

// Optional chaining
const {weight, adress} = employee?.specification;