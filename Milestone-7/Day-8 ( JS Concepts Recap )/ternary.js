const money = 80;
let food;
if(money>100){
    food = "biriyani";
} 
else{
    food = "Cha biscuit";
};

// Ternary Operator

// Variable = condition ? codes which will be executed if the condition is true : codes which will be executed if the condition is false;
let food1 = money>100 ? "Biritani" : "Cha Bisucuit";

let food2 = (money>100 && food==='') ? "asd" : 'nai';



// Number to string conversion
const num = 50;
// console.log(num);
const num1 = num+'';
// console.log(num1);

// String to number conversion
const input = "55";
const inputNumber = +input;
console.log(inputNumber);


// ----------- //
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ? showUser() : hideUser();

// Another system using &&
isActive && showUser();

// Use ||
isActive || hideUser();

// Toggle boolean
isActive = !isActive;
