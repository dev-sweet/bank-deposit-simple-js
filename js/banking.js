// handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount of deposited
   const depositField = document.getElementById('deposit-amount')
   const depositAmount = depositField.value;

   const currentDeposit = document.getElementById('current-deposit');
   const currentDepositAmount = currentDeposit.innerText;
   const totalDeposit = parseInt(currentDepositAmount) + parseInt(depositAmount);

   currentDeposit.innerText = totalDeposit;
    // update bank balance
    const currentBalance = document.getElementById('current-balance');
    const balance = currentBalance.innerText;
    const totalBalance = parseInt(balance) + parseInt(depositAmount);
    currentBalance.innerText = totalBalance;
    //clear deposit field
   depositField.value = '';
});


// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click',function(){
    // get the amount of deposited
   const withdrawField = document.getElementById('withdraw-amount')
   const withdrawAmount = withdrawField.value;
   const currentWithdraw = document.getElementById('current-withdraw'); 
   const currentWithdrawAmount = currentWithdraw.innerText;
   
   const totalWithdraw = parseInt(withdrawAmount) + parseInt(currentWithdrawAmount);
   currentWithdraw.innerText = totalWithdraw;
    // update total balance
    const currentBalance = document.getElementById('current-balance');
    const balance = currentBalance.innerText;
    const totalBalance = parseInt(balance) - parseInt(withdrawAmount);

    currentBalance.innerText = totalBalance;
    //clear withdraw filed
   withdrawField.value = '';
})