var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn")
var secondsLeft = (questions.length * 15 + 1);
var timerEl = document.getElementById("timer");
var scoreSubmitEl = document.querySelector("#your-score");
var userScoreEl = document.getElementById("user-score");
var question = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var userName;
var questionNumber = -1;
var answer;

function startTimer() {

  document.getElementById("home").classList.add('d-none');
  document.getElementById("quiz").classList.remove('d-none');
  setTimer();
  createQuestions();
}

function setTimer() {
    var countdown = setInterval(function() {
      secondsLeft--;
      timerElement.textContent = "Time: " + secondsLeft;

      if (secondsLeft === 0 || questionNumber === questions.length) {
        clearInterval(countdown);
        setTimeout(displayScore, 500);
    }
  }, 1000);
}

function createQuestions() {
  questionNumber++;
  answer = questions[questionNumber].answer

  questionHead.textContent = questions[questionNumber].title;
  answerChoices.innerHTML = "";

  var choices = questions[questionNumber].choices;

  for (var i = 0; i < choices.length; i++) {
    var nextChoice = document.createElement("button");

    nextChoice.textCOntent = choices[i]
    answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
  }
}

function displayScore() {
  document.getElementById("quiz").claasList.add("d-none");
  document.getElementById("your-score").classList.remove("d-none");
  userScoreEl.textContent = "Final Score: " + secondsLeft + ".";
}

startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  addScore();

  window.location.href = "./assets/scoreboard.html"
});

function addScore () {
    userName = document.getElementById("userName").value


var newScore = {
    name: userName,
    score: secondsLeft
  };
  var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
  highScores.push(newScore)
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function hideFeedback(){
  var pElement = document.getElementsByClassName("torf")[0]
  pElement.style.display="none"
}

function showFeed(){
  var pElement = document.getElementsByClassName("torf") [0]
  pElement.removeAttribute("style");
}

answerChoices.addEventListener("click", function (event){
  var pElement = document.getElementsByClassName("torf") [0]
  
  if (answer === event.target.textContent) {
    pElement.innerHTML = "tru";
    setTimeout(hideFeedback,1225);
    showFeedback();

  } else {
    pElement.innerHTML = "false";
    setTimeout(hideFeedback,1225);
    secondsLeft = secondsLeft - 15;
    showFeedback();  
  }
  makeQuestions();
});