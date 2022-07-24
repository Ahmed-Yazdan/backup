// Problem - 1 //
// 0,025 mon = 1 seer
function seerToMon(seer){
    // error handling
    if(seer < 0){
        return 'please give a positive number';
    } 
    else if(typeof seer == 'string'){
        return 'please give numbers not texts';
    }
    // returning value
    return seer * 0.025;
};

// --------------------------------------------- //

// Problem - 2 //

let totalCost = 0;
function totalSales(shirtQuantity,pantQuantity,shoeQuantity){
    // error handling
    if(shirtQuantity<0 || pantQuantity<0 || shoeQuantity<0){
        return 'please provide positive numbers';
    }
    else if(typeof shirtQuantity != "number" || typeof pantQuantity != "number" || typeof shoeQuantity != "number"){
        return 'please provide numbers not texts';
    }
    
    // price list
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    
    // returning value
    return totalCost = (shirtPrice * shirtQuantity)+(pantPrice * pantQuantity) + (shoePrice * shoeQuantity);
};

// --------------------------------------------- //

// Problem - 3 //

let deliveryCharge = 0;
function deliveryCost(quantity){
    // declaring constant values
    const first100shirtPrice = 100 * 100;
    const second100shirtPrice = 100 * 80;
    // error handling
    if(quantity < 0){
        return 'Please give a positive number';
    }
    else if(typeof quantity != "number"){
        return 'Please give a number not text!'
    }
    // calculating programms
    if(quantity<100){
        return deliveryCharge = quantity * 100;
    }
   
    else if(quantity>100 && quantity<=200){
        const remainingShirtsFor200 = quantity - 100;
        return deliveryCharge = first100shirtPrice + (remainingShirtsFor200 * 80);
    }
    
    else if(quantity>200){
        const remainingShirtsFor200plus = quantity - 200;
        return deliveryCharge = first100shirtPrice + second100shirtPrice + (remainingShirtsFor200plus * 50);
    }
};

// --------------------------------------------- //

// Problem - 4 //
const friendsArray = ['hello','buyyy','sami', 'seam','ramisa', 'rafi', 'matin', 'rana'];
let finalPerfectFriend ='';

function perfectFriend(allFriends){

    for(let i=0; i<friendsArray.length; i++){
        // error handling
        if(friendsArray[i] == []){
            return 'Please provide a name';
        }

        let friends = friendsArray[i];
        let friendNames = friends.length;
        // returning value
        if(friendNames == 5){
            return finalPerfectFriend = friendsArray[i];
        }
    }
};


console.log(perfectFriend(friendsArray));