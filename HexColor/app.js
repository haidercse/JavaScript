function generateColor() {
    let hexCodes = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'
    ];
    let color = '#';

    for (let i = 0; i < 6; i++) {
        let num = Math.round(Math.random() * 15);
        console.log(num);
        let num2 = hexCodes[num];

        color = color + num2;
        console.log(color);
    }

    let outPut = document.querySelector('#output');
    let container = document.querySelector('#container');
    container.style.background = color;
    outPut.innerHTML = color;
}