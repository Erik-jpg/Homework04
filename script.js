const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
const leaderBoard = document.getElementById("leaderBoard");
const placeholder = document.getElementById("placeholder");
const endOfGame = document.getElementsByClassName("endOfGame");
const container = document.querySelector(".container");

let gameClockId;
const correctAnswer = [];
let score = 0;
var sec = 30;

//timer
function timer() {
  gameClockId = setInterval(function () {
    document.getElementById("Countdown").textContent = "Time left: " + sec;
    sec--;
    if (sec < 0) {
      clearInterval(gameClockId);
      alert("Game Over");
    }
  }, 1000);
}
document
  .getElementById("answer-buttons")
  .addEventListener("click", function (e) {
    if (false) {
      sec -= 5;
      document.getElementById("Countdown").textContent = "Time left: " + sec;
      sec--;
    }
  });

//questions
const questionsArray = [
  {
    question: "what is a data type used by JavaScript?",
    options: [
      { text: "Numbers", answer: false },
      { text: "Arrays", answer: false },
      { text: "Strings.", answer: false },
      { text: "All of the above.", answer: true },
      { answer: "All of the above" },
    ],
  },
  {
    question: "What is the proper way to show an Array?",
    options: [
      { text: "[ ]", answer: true },
      { text: "{ }", answer: false },
      { text: "( )", answer: false },
      { text: "None at all", answer: false },
    ],
  },
  {
    question: "In a function, what goes inside the parenthesis, ( )?",
    options: [
      { text: "A Number", answer: false },
      { text: "The parameter", answer: true },
      { text: "A phone number", answer: false },
      { text: "My name", answer: false },
    ],
  },
  {
    question:
      "For an eventListener to be added to an object, what needs to be put in the parenthesis, .addEventListener(  ,  )?",
    options: [
      { text: "a phone number, address", answer: false },
      { text: "a latitude, longitude", answer: false },
      {
        text: "an event, instructions about what to do for the event",
        answer: true,
      },
      {
        text: "up up down down left right left right a b then press select, then which level you'd like to play",
        answer: false,
      },
    ],
  },
];
//randomizing the questions
let shuffledQuestions, currentQuestionIndex;
startButton.addEventListener("click", startGame);
// document.getElementsByClassName(endOdGame).addEventListener("click", startGame);
//starting the game
function startGame() {
  startButton.classList.add("hide");
  // leaderBoard.classList.add("hide");
  shuffledQuestions = questionsArray.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  timer();
  setNextQuestion();
}
//hiding the scoreboard and form for initials
function endGame() {
  container.classList.add("hide");
  leaderBoard.classList.remove("hide");
  placeholder.classList.remove("hide");
  clearInterval(gameClockId);
}

// prompting the next question
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
//creating the buttons for answers
function showQuestion(questionsArray) {
  questionElement.innerText = questionsArray.question;
  questionsArray.options.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-buttons");
    button.dataset.answer = answer.answer;
    button.onclick = selectAnswer;
    answerButtonElement.appendChild(button);
  });
}
// clearing the previous question and setting the next
function resetState() {
  clearStatusClass(document.body);
  // nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}
// determining if the selected answer is correct
function selectAnswer(e) {
  console.log(e.target.getAttribute("data-answer"));
  if (e.target.getAttribute("data-answer") === "true") {
    setStatusClass(document.body, true);
    Array.from(answerButtonElement.children).forEach((button) => {
      setStatusClass(button, button.dataset.answer === true);
    });

    //changing the background color to show if the answer is correct or wrong
    function setStatusClass(element, answer) {
      if ("data-answer" === true) {
        element.classList.add("body.correct");
      } else {
        element.classList.add("body.wrong");
      }
    }
  }

  //declaring end of the game
  currentQuestionIndex++;

  if (currentQuestionIndex === questionsArray.length) {
    console.log("gameOver");
    gameOver();
  } else {
    console.log("current: ", currentQuestionIndex);
    setNextQuestion();
  }
}

// clearing the background color of correct or wrong
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
// score keeping
if (true) {
  score++;
} else {
  timer -= 1000;
}
// hiding the game over screen
function gameOver() {
  clearStatusClass(document.body);
  
  endGame();
}
// ending the game due to out of time
function timeOver() {
  if (!sec === 0) {
    stopTimer;
  return  score = 0;
  }
}
function handleScore (score){
  score += time
  return score;
}
document.getElementById("leaderBoard").innerText = 'Your score is: ' +score;

// revealing the leader-board and placeholder form
document.getElementById("placeholder").placeholder =
  "Please enter your initials here";
document
  .getElementById("placeholder")
  .addEventListener(
    "alert",
    document.getElementById("placeholder").classList.remove("hide")
  );
console.log(score);
