const kibria = {
    id:1,
    money: 6969,
    name:'PLayboy Mofiz',
    treatDey: function(expense){
        this.money = this.money - expense;
        return this.money;
    } 
};

const heroBalam = {
    id:102,
    money:9696,
    name:'Hero Alam', 
}

const normalGolam = {
    id:111,
    money:9696,
    name:'Normal Golam', 
}

kibria.treatDey(100);
console.log(kibria.money);


const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
console.log(heroBalam);