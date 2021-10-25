//take some dummy question 
const quizData = [{
        question: 'How old is Haider? ',
        a: '15',
        b: '25',
        c: '35',
        d: '45',
        correct: 'b'
    },
    {
        question: 'What is most used programing Language? ',
        a: 'c',
        b: 'Java',
        c: 'JavaScript',
        d: 'php',
        correct: 'c'
    },
    {
        question: 'Who is the president of US? ',
        a: 'Donald Trump',
        b: 'Jo Biden',
        c: 'Jon de',
        d: 'Jom Do',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for? ',
        a: 'Hypertext markup language',
        b: 'Hyper Boolean',
        c: 'Programing Language',
        d: 'Web related Language',
        correct: 'a'
    },
    {
        question: 'What year was launce Javascript? ',
        a: '2020',
        b: '1870',
        c: '2015',
        d: '2004',
        correct: 'd'
    }
]
const quiz = document.getElementById("quiz");
const selected = document.querySelectorAll(".form-check-input");
const questElement = document.getElementById("question");
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");

//get button
const submitBtn = document.querySelector(".btn");

//current question will take fro index number that will increase
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelected();
    const currentQuizData = quizData[currentQuiz]

    questElement.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;

}
//get function for selected or not selected check
function getSelected() {

    let value = undefined;
    selected.forEach((select) => {
        if (select.checked) {
            value = select.id;
        }
    });
    return value;
}
// for deSelected 
function deSelected(params) {
    selected.forEach((select) => {
        select.checked = false;

    });

}
//submit event
submitBtn.addEventListener("click", (e) => {
    //checked to the see the select
    let selectValue = getSelected();

    if (selectValue) {
        if (selectValue === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();

        } else {
            quiz.className = 'bg-success mt-5 card text-center'
            quiz.innerHTML = `You have got result Out of ${quizData.length} in ${score}
              <button class="btn btn-warning btn-block" onclick="location.reload()">Reload</button>
            `
        }

    }

})