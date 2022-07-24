const fish = {id:58, name:"King Hilsha", phone:"01920120912",dress:"rupali"};
const phone = fish.phone;

const { phone, dress, id, name } = fish;

// Conplex Object
const  company = {
    name:'GrameenPhone',
    ceo: {id:1, name:'Azmol', food:'Pitza'},
    web: {work:'website development', employee:22, framework:'REACT'}
};

// Destructuring Syntex
const { work, framework, employee} = company.web;