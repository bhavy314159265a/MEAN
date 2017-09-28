window.addEventListener("load", bindEvent);

function bindEvent() {
    loadQuestion(currentQuestion);
    document.getElementById("next").addEventListener("click", loadNext)
}
var currentQuestion = 0;
var container = document.getElementById("quizContainer");

function loadQuestion(index) {
    var q = questions[index];
    var questEle = document.getElementById("question");
    var op1 = document.getElementById("op1");
    var op2 = document.getElementById("op2");
    var op3 = document.getElementById("op3");
    var op4 = document.getElementById("op4");
    questEle.innerHTML = q.question;
    op1.innerHTML = q.option1;
    op2.innerHTML = q.option2;
    op3.innerHTML = q.option3;
    op4.innerHTML = q.option4;
}
var score = 0;
function loadNext() {
    var selectedOption = document.querySelector("input[type = radio]:checked");
    console.log(selectedOption);
    if (!selectedOption) {
        alert("please select your answer!!");
        return;
    }
    var answer = selectedOption.value;
    selectedOption.checked = false;
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    }
    var Nextbutton = document.getElementById("next");
    var totalQuestions = questions.length;
    var result = document.getElementById("result");
    currentQuestion++;
    if (currentQuestion == totalQuestions - 1) {
        Nextbutton.innerHTML = "finish"
    }
    if (currentQuestion == totalQuestions) {
        alert("YOUR TEST IS COMPLETED");
        result.innerHTML = "YOUR SCORE IS: "+score+"/50";
    }
    loadQuestion(currentQuestion);
}