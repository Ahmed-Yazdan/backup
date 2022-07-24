function getInputValue(inputId){
    // Getting deposit amount from user
    const depositInput = document.getElementById(inputId);
    const newDepositAmounText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmounText);
    //Clear the deposit input field
    depositInput.value='';
    return newDepositAmount;
};




//Handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    // Getting deposit amount from user
   
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmounText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmounText);
    
    //Final deposit amount
    const depositTotal = document.getElementById('deposit-total');
    
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText); 
    
    const newDepositTotal = previousDepositAmount + getInputValue('deposit-input');
    depositTotal.innerText = newDepositTotal;



    // Update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalaceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalaceTotal + getInputValue('deposit-input');
    balanceTotal.innerText = newBalanceTotal;
});


//Handle withdraw Event//
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    //Set Withdraw Total//
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    withdrawInput.value = '';

    //Updating Total Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;5

    //Clear withdraw input//
    withdrawInput.value='';
});