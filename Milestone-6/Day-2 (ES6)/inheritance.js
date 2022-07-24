class TeamMember{
    name;
    designation='Student care web dev';
    address = 'Bangladesh';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    buildARoutine(Student){
        console.log(`${this.name} Built a routine for ${student}`);
    }
}

class Support extends TeamMember{
    startSession(){
        console.log('start a support session');
    }
}

// const aamir = new Support("aamir");
// const salman = new Support("salman");
// console.log(aamir);
// console.log(salman);


class studentCare{
    name;
    designation='Student care web dev';
    address = 'Bangladesh';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    buildARoutine(Student){
        console.log(`${this.name} Built a routine for ${student}`);
    }
};

class NeptuneDev{
    name;
    designation='Student care web dev';
    address = 'Bangladesh';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    releaseApp(version){
        console.log(`bla bla bla`);
    }
};1

const alia = new studentCare('Alia Bhatt', 'Delhi');
const kalaJahangir = new studentCare('Kala Jahangir', 'Mohammadpur');
console.log(alia,kalaJahangir);