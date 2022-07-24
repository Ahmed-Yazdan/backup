var i = 0;
while(i <= 10){
    console.log(i);
    if(i==5){
        break;
    }
    i++;
}

var numbers = [1, 23, 54, 65, 69, 83, 420, 123];

for(var i=0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 90){
        continue;
    }
    console.log(number);
}