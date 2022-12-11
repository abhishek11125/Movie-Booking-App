// Store the wallet amount to your local storage with key "amount"
let wallet_value = document.getElementById('wallet');
let data = JSON.parse(localStorage.getItem('amount'));
wallet_value.innerText = data;
let addAmount = ()=>{
    let money = document.getElementById('amount').value;
    let x = +money;
    let y = +wallet_value.innerText;
    let z = wallet_value.innerText = x+y;
     localStorage.setItem('amount',JSON.stringify(z));
}