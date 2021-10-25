document.querySelector('#tip-form').onchange = function() {
    // Selecting Elements
    let bill = Number(document.querySelector('#totalBill').value);
    let tip = document.querySelector('#tipInput').value;
    let tipOutput = document.querySelector('#tipOutput');
    let tipAmount = document.querySelector('#tipAmount');
    let totalBillWithTip = document.querySelector('#totalBillWithTip');
    let results = document.querySelector('#results');

    let tipAmountResult = (bill * (tip / 100));
    let finalResult = bill + tipAmountResult;
    tipAmount.value = tipAmountResult.toFixed(2);
    totalBillWithTip.value = finalResult.toFixed(2);
    tipOutput.innerHTML = `${tip}%`
    results.style.display = 'block'

};