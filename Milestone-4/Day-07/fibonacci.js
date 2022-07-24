/* const fibo = [0,1];
for(let i = 2; i<=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log(fibo); */

function fibonacciSeries(n){
    if(typeof n != 'number'){
        return 'please give a valid number';
    }
    if(n < 2){
        return 'please enter a positive number greater then 2'
    }
    const fibo = [0, 1];
    for(let i=2; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

console.log(fibonacciSeries(12));


