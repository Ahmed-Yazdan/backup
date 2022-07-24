const numbers = [3,4,5,69,6,29,123,324,6,234,32];
const numberSliced = numbers.slice(4, 8);

//Splice to remove elements from array
// const numberSpliced = numbers.splice(4,3);

const numberSpliced2 = numbers.splice(4, 3, 999, 111, 222, 777, 000);


console.log(numberSpliced2);
console.log(numbers);