// QUANTITY METER FUNCTION //
function quantityMeter(idName,isAddition){
    const input = document.getElementById(idName);
    const productNumber = input.value;
    if(isAddition == true){
        input.value = parseInt(productNumber) + 1;
    } 
    else if(productNumber > 0){
        input.value = parseInt(productNumber) - 1; 
    }
    // Updating phone price
    const phoneTotal = document.getElementById('phone-total');
    const phoneNumber = document.getElementById('phone-number').value;
    phoneTotal.innerText = parseInt(phoneNumber) * 1219;
    // Updating case price
    const caseTotal = document.getElementById('case-total');
    const caseNumber = document.getElementById('case-number').value;
    caseTotal.innerText = parseInt(caseNumber) * 59;
    //Calculating Sub Total
    calculateTotal();
};
// QUANTITY METER FUNCTION //


// PHONE _______ QUANTITY
document.getElementById('phone-plus').addEventListener('click', function(){
    quantityMeter('phone-number',true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    quantityMeter('phone-number',false);
});

// CASE _______ QUANTITY
document.getElementById('case-plus').addEventListener('click', function(){
    quantityMeter('case-number',true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    quantityMeter('case-number',false);
});


function getInputValue(product){
    const productPriceText = document.getElementById(product+'-total').innerText;
    const productPrize = parseInt(productPriceText);
    return productPrize;
};


function calculateTotal(){
    const phonePrice = getInputValue('phone');
    const casePrice = getInputValue('case');
    const subTotal = phonePrice + casePrice;
    const tax = subTotal/10;
    const totalPrice = subTotal + tax;
    //Update on website
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
};

// document.getElementById('check-out').addEventListener('click', function(){
//     const subTotalText = document.getElementById('sub-total').innerText;
//     let subTotal = parseInt(subTotalText);
//     subTotal = calculateSubTotal();
// });




















/* function getInputValue(product){
    const phroductInput = document.getElementById(product+'-number').value;
    const productNumber = parseInt(phroductInput).value;
    return productNumber;
};

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    console.log(subTotal);
}; */






















































