let totalCost = 1;
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

console.log(totalSales(1,1,1));
console.log(totalCost);