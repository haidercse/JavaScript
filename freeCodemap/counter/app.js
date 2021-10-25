let counter = 0;

function increase(amount) {
    counter = counter + amount;
    console.log(counter);
    document.getElementById('value').innerHTML = counter;
}

function decrease(amount) {
    counter = counter - amount;
    console.log(counter);
    document.getElementById('value').innerHTML = counter;
}

function reset(amount) {

    document.getElementById('value').innerHTML = 0;
}