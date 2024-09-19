// document.getElementById('login-btn').addEventListener('click',function(e){
//     e.preventDefault();
//     const inputNumber = document.getElementById('mobile-number').value;
//     const pinInputValue = document.getElementById('pin').value;

//     if(inputNumber==='5'&& pinInputValue==='1234'){
//         console.log('you are logged in');
//     }else{
//         console.log('worng password or number');
//     }
// })


document.querySelector('#login-btn').addEventListener('click',function(e){
    e.preventDefault();

    const phoneNumber = document.querySelector('#mobile-number').value;
    const inputPin = document.querySelector('#pin').value;

    if(phoneNumber==='5'&& inputPin ==='1234'){
        console.log('You are logged in');
    }else{
        alert('Wrong number and password');
    }

    window.location.href = './homePage.html'
})