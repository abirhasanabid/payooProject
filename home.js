document.getElementById('add-money').addEventListener('click', function (e) {
    e.preventDefault();

    const addMoneyAmount = document.getElementById('addmoney-amount').value;

    const mainBalance = document.getElementById('main-balance').innerText;

    const addMoneyPassword = document.getElementById('addmoney-password').value;
    if (addMoneyPassword === '1234') {
        const newBalance = parseFloat(mainBalance) + parseFloat(addMoneyAmount);
        document.getElementById('main-balance').innerText = newBalance;

    } else {
        alert('Failed to add money!Please try again')
    }
})


document.querySelector('#cash-out-money-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const cashOutAmmount = document.querySelector('#cash-out-amount').value;
    const cashOutPassword = document.querySelector('#cash-out-password').value;
    if (cashOutPassword === '1234') {
        const mainBalance = document.querySelector('#main-balance').innerText;
        const restAmmount = mainBalance - cashOutAmmount;
        document.querySelector('#main-balance').innerText = restAmmount;
        if (restAmmount < 0) {
            const mainBalance = document.querySelector('#main-balance').innerText = 'invalid ammount';
        }
    } else {
        alert('You must fullfill the two input');
    }

})