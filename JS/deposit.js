// step-1
document.getElementById('btn-Deposit').addEventListener('click', function () {
    // step-2
    const depositBox = document.getElementById('depositBox');
    const depositString = depositBox.value;
    const deposit = parseFloat(depositString);

    // deposit filed empty
    depositBox.value = '';

    if (isNaN(deposit)) {
        alert('Please Provide A Valid Number');
        return;
    }

    // step-3
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountTotalString = depositAmount.innerText;
    const depositAmountTotal = parseFloat(depositAmountTotalString);
    const depositAmountTotal2 = deposit + depositAmountTotal;
    // step - 4
    depositAmount.innerText = depositAmountTotal2;

    // Step - 5
    const balance = document.getElementById('balance');
    const previousBalanceString = balance.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    const balanceTotal = deposit + previousBalance;
    //    Step -6
    balance.innerText = balanceTotal;
})
document.getElementById('btnWithdraw').addEventListener('click', function () {
    // console.log('are caca apne')
    const withdrawBox = document.getElementById('withdrawBox');
    const withdrawBoxValue = withdrawBox.value;
    const withdrawBoxValueNumber = parseFloat(withdrawBoxValue);
    // console.log(withdrawBoxValue)
    withdrawBox.value = '';

    if (isNaN(withdrawBoxValueNumber)) {
        alert('Please Provide A Valid Number');
        return;
    }

    const Withdraw = document.getElementById('Withdraw');
    const WithdrawText = Withdraw.innerText;
    const withdrawNumber = parseFloat(WithdrawText);

    const WithdrawBalance = document.getElementById('balance');
    const WithdrawBalanceText = WithdrawBalance.innerText;
    const WithdrawBalanceNumber = parseFloat(WithdrawBalanceText);

    if (withdrawBoxValueNumber > WithdrawBalanceNumber) {
        alert('Eto Taka Nai');
        return;
    }

    const withdrawNumberTotal = withdrawBoxValueNumber + withdrawNumber;
    Withdraw.innerText = withdrawNumberTotal;

    const WithdrawBalanceTotal = WithdrawBalanceNumber - withdrawBoxValueNumber;
    WithdrawBalance.innerText = WithdrawBalanceTotal;

})