// cash in 
document.getElementById('add-money').addEventListener('click', function (e) {
    e.preventDefault();

    const addMoneyAmount = document.getElementById('addmoney-amount').value;

    const mainBalance = document.getElementById('main-balance').innerText;

    const addMoneyPassword = document.getElementById('addmoney-password').value;
    if (addMoneyPassword === '1234') {
        const newBalance = parseFloat(mainBalance) + parseFloat(addMoneyAmount);
        document.getElementById('main-balance').innerText = newBalance;

    } else {
        alert('Failed to add money!Please try again');
    }

})
// first add money btn
document.getElementById('first-add-money-btn').addEventListener('click',function(){
const addMoneyClickDiv = document.getElementById('add-money-click-div').classList.remove('hidden');
const cashOutMoneyClickDiv = document.getElementById('cash-out-money-click-div').classList.add('hidden')

})


// cash out
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
            const avbleBalance = document.querySelector('#avble-balance').innerHTML = '';
        }
    } else {
        alert('You must fullfill the two input');
    }

})

// first cash out btn
document.getElementById('first-cast-out-btn').addEventListener('click',function(){
    const cashOutMoneyClickDiv = document.getElementById('cash-out-money-click-div').classList.remove('hidden');
    const addMoneyClickDiv = document.getElementById('add-money-click-div').classList.add('hidden');
})


// back-btn

// querySelector and getElementsByClassName kaj korbe na kno?

document.querySelector('.back-btn').addEventListener('click',function(){
    window.location.href ='./index.html'
})