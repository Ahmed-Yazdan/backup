const phones = [
    {name: 'samsung s5', price:45000, storage:64},
    {name: 'walton z34', price:12000, storage:32},
    {name: 'xiomi 10i', price:27500, storage:128},
    {name: 'htc baal-saal', price:69000, storage:69},
    {name: 'Asus rog 5', price:100000, storage:256},
    {name: 'Iphone 12 pro max', price:135000, storage:256}
];

let cheapest = phones[0];

for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}

console.log(cheapest);