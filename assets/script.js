var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn")
var secondsLeft = (questions.length * 15 + 1);
var timerEl = document.getElementById("timer");
var scoreSubmitEl = document.querySelector("#your-score");
var userScoreEl = document.getElementById("user-score");
var question = document.get.getElementById("questions");
var answer = document.getElementById("answers");
var userName;
var questionNumber = -1;
var answer;

function startTimer() {

  document.getElementById("home").classList.add('d-none');
  document.getElementById("quiz").classList.remove('d-none');
  setTimer();
  makeQuestions();
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

function displayScore() {
  document.getElementById("quiz").claasList.add("d-none");
  document.getElementById("your-score").classList.remove("d-none");
  userScoreEl.textContent = "Final Score: " + secondsLeft + ".";
}

