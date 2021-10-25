//Game value 

let min = 1,
    max = 10,
    winingNumber = randomNumber(max, min),
    guessLeft = 3

// UI Element 
const game = document.querySelector("#game");
const minNumber = document.querySelector("#min-num");
const maxNumber = document.querySelector("#max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");
const progressBar = document.querySelector(".progress-bar");
const loading = document.querySelector('#loading');

//assign min and max number in UI
minNumber.innerHTML = min;
maxNumber.innerHTML = max;

//listen for submit button
guessBtn.addEventListener("click", (e) => {
    loading.style.display = 'block'
    setTimeout(() => {
        loading.style.display = 'none'
        let guessNumber = parseInt(guessInput.value);

        // validation
        if (guessNumber < min || guessNumber > 10 || isNaN(guessNumber)) {
            setMessage(`please Enter a number between ${min} && ${max}`, 'red');
        } else {
            if (guessNumber == winingNumber) {
                gameOver(true, `${guessNumber} is correct and win`);

                //check progress bar now
                progressBarFunction('progress-bar', '100%', '25px', 'Win Win Win', 'bg-success');



            } else {
                guessLeft = guessLeft - 1;
                if (guessLeft === 0) {

                    gameOver(false, `Game over, You Lost! correct number was ${winingNumber}`);

                    //check progress bar now
                    progressBarFunction('progress-bar', '100%', '25px', 'Lost Lost Lost', 'bg-danger');

                } else {
                    setMessage(`Try agin wrong input ${guessNumber} is not correct ${guessLeft} guess left`, 'red');
                    switch (guessLeft) {
                        case 2:
                            //check progress bar now
                            progressBarFunction('progress-bar', '33%', '25px', '2 left', 'bg-info');
                            break;
                        case 1:
                            //check progress bar now
                            progressBarFunction('progress-bar', '66%', '25px', '1 left', 'bg-warning');
                            break;

                        default:
                            break;
                    }

                }
            }
        }
    }, 2000);
    e.preventDefault();


});

//set message function creating

function setMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}

function gameOver(win, message) {
    let color;
    win == true ? color = 'green' : color = 'red'
        //now disabled input
    guessInput.disabled = true;
    guessInput.style.borderColor = color;

    setMessage(message, color)
        //play again
    guessBtn.innerHTML = 'Play again'
    guessBtn.className += ' btn-success';

}

function progressBarFunction(className, styleWidth, parentElementStyleHeight, progressBarText, ClassList) {
    progressBar.className = className
    progressBar.style.width = styleWidth
    progressBar.parentElement.style.height = parentElementStyleHeight
    progressBar.textContent = progressBarText
    progressBar.classList.add(ClassList);
}

//random number create for win
function randomNumber(max, min) {
    return Math.round(Math.random() * (max - min) + 1);
}
game.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains('btn-success')) {
        console.log('ok');
        window.location.reload();
    }
});