const numbers = [12,345,12,75,23];
const student = {
    name:"Kala Jahangir",
    age:69,
    movies:['Sokina tumi kar','Number One Sakib Khan',"Valobasha dibi naki bolo"]
};

const about = `My name is ${student.name}. My age is ${numbers[2]}. I liked the movie ${student.movies[2]} `;
console.log(about);

// Arrow function
const withoutParameter = () => 44;
console.log(withoutParameter())

const withOneParameter = num1 => num1;
console.log(withOneParameter(12));

const withParameter = (num1,num2,num3) => num1+num2*num3;
console.log(withParameter(12,12,12));

// Spread Operator ( Clones an array but is not affected by any changes made to the original array after declaration)
const newNumbers = [...numbers];

// Create a new array from an older array and add a new element to it
const currentNumbers = [...numbers,55,56,57];