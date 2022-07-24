function addNumber(num1,num2,){
    let result = 0;
    for(const number of arguments){
        result = result + number;
    }
    return result;
};

const sum = addNumber(35, 5, 50, 100, 10);
console.log(sum);
