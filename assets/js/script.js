//Declare variables.
var currentQuestion = 0;
var time = questions.length *15;
var timerid;
var c = 60;
var totquestions = questions.length;
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextBtn = document.getElementById("next");
var startBtn = document.getElementById("start");
var subBtn = document.getElementById("submit");
var result = document.getElementById("result");
var timerEl = document.getElementById("timer");


//Load question and choices for user to select.
function loadQuestion (questionIndex){
    document.getElementById("start").disabled = true;
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
//Go through all questions, take user option and check if that is the correct answer. If answer is correct add to score, if user is wrong go to next question. If there are not more questions stop clock and display score.
function loadNextQuestion(){
    var userChoice = document.querySelector('input[type=radio]:checked');
    if(!userChoice){
        alert("Please select answer.");
        return;
    }
    var answer = userChoice.value;
    if(questions[currentQuestion].answer === answer){
        time += 1;
    }
    if(questions[currentQuestion].answer !== answer){
        time -= 5;
    }
    userChoice.checked = false;
    currentQuestion++;
    if (currentQuestion == totquestions){
        startBtn.style.visibility='hidden';
        nextBtn.style.visibility='hidden';
        quizContainer.style.display="none";
        result.style.display=time;
        result.textContent = time;
        return;
    }
    loadQuestion(currentQuestion);
}

//Calculate score.
// function calcScore(){
//     document.getElementById("result").score;
//     return;
// }


//Stopwatch
var myTimer;
function clock() {
    myTimer = setInterval(clocktick, 1000);
    
}

function clocktick() {
    time--;
    timerEl.textContent=time
    if(time<=0) {
    clearInterval(myTimer); 
// end quiz() {  
    }
}