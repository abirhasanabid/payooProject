document.getElementById('login-btn').addEventListener('click',function(e){
    e.preventDefault();
    const inputNumber = document.getElementById('mobile-number').value;
    console.log(inputNumber);
    const pinInputValue = document.getElementById('pin').value;
    console.log(pinInputValue);
})