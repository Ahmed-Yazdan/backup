// let factorial = 1;
// for(let i = 1; i <= 3; i++){
//     factorial = factorial*i;
// }
// console.log(factorial);

function factorialCalculator(num){
    let factorial = 1;
    for(i=1; i<=num; i++){
        factorial = factorial * i;
    }
    return factorial;
};

console.log(factorialCalculator(3));