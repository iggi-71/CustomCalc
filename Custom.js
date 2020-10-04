let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billAmount = parseFloat(document.getElementById('retail_price').value);
    let numberPeople = parseFloat(document.getElementById('sales_tax').value);
    let soldPrice = parseFloat(document.getElementById('sold_price').value);

    let tax = numberPeople / 100; //0.08
    let finalTax = tax * billAmount; //0.08 * 100
    let made = document.getElementById('profit').value = soldPrice - billAmount - finalTax;
})
