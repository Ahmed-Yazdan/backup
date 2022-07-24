class Support {
    name;
    role ='Support web developer';
    address = 'BD';
    constructor(name){
        this.name = name;
    }
    startSession(){
        console.log('start a support session');
    }
}

const aamir = new Support("aamir");
const salman = new Support("salman");
console.log(aamir);
console.log(salman);