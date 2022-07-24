const numbers = [4, 6, 8, 10];
const output2 = [];

const doubleIt = number => number * 2; 

for(const number of numbers){
    const result = doubleIT(number);
    output.push(result);
}
console.log(numbers);
console.log(output);


const output = numbers.map(doubleIt);
const output = numbers.map(n => n*2);
console.log(output);

