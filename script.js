var questionOut = document.querySelector('#question-output');
var choicesOut1 = document.querySelector('#choice1')
var choicesOut2 = document.querySelector('#choice2')
var choicesOut3 = document.querySelector('#choice3')
var choicesOut4 = document.querySelector('#choice4')
var timeEl = document.querySelector('.time');
var start = document.querySelector('#start');
var result = document.querySelector('#result');
var currentIndex = 0;
var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds left';
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            return timeEl.textContent = 'Time is Up';
        }
    }, 1000);
}

function clickCount() {
    if (this.textContent === questionData[currentIndex].answer) {
        result.innerText = 'Correct!';
        currentIndex++;
        choicesOut1.textContent = ''
        choicesOut2.textContent = ''
        choicesOut3.textContent = ''
        choicesOut4.textContent = ''
        showQuestion();

    } else {
        result.innerText = 'Incorrect!';
        secondsLeft -= 5;
        choicesOut1.textContent = ''
        choicesOut2.textContent = ''
        choicesOut3.textContent = ''
        choicesOut4.textContent = ''
        currentIndex++;
        showQuestion();
    }
}

function showQuestion() {
    var questionObj = questionData[currentIndex];
    questionOut.innerText = questionObj.question;

    btnchoice1 = document.createElement('button');
    btnchoice2 = document.createElement('button');
    btnchoice3 = document.createElement('button');
    btnchoice4 = document.createElement('button');

    btnchoice1.textContent = questionData[currentIndex].choices[0];
    btnchoice2.textContent = questionData[currentIndex].choices[1];
    btnchoice3.textContent = questionData[currentIndex].choices[2];
    btnchoice4.textContent = questionData[currentIndex].choices[3];

    choicesOut1.appendChild(btnchoice1);
    choicesOut2.appendChild(btnchoice2);
    choicesOut3.appendChild(btnchoice3);
    choicesOut4.appendChild(btnchoice4);

    btnchoice1.addEventListener('click', clickCount);
    btnchoice2.addEventListener('click', clickCount);
    btnchoice3.addEventListener('click', clickCount);
    btnchoice4.addEventListener('click', clickCount);
};

start.addEventListener('click', setTime);
start.addEventListener('click', showQuestion);




