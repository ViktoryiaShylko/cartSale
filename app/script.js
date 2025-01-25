let prices = document.querySelectorAll('.price');
let total = document.querySelector('.final-price');
let sale =  document.querySelector('.sale');
let btn = document.querySelector('.btn');

let sumPrice = 0;

prices.forEach (function(item) {
    sumPrice += +item.innerText;
});

total.innerText = sumPrice;

btn.addEventListener('click', function(){
    let discount = +sale.innerText;
    total.innerText=sumPrice * (1 - discount / 100);
})
