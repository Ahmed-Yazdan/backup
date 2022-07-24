function factorial(n){
    if(n==1){
        return 1;
    }
    return n * factorial(n-1);
};

const myFactorial = factorial(7);
console.log(myFactorial);