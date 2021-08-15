document.addEventListener("DOMContentLoaded", function (){});
const startButton = document.getElementById("start-btn");
const saveBtn = document.getElementById("saveBtn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
const leaderBoard = document.getElementById("leaderBoard");
const record = document.getElementById("record");
const endOfGame = document.querySelector("#endOfGame");
const container = document.querySelector(".container");
const playersInitials = document.querySelector('#record').value;
const playersScore = document.getElementsByClassName("#leaderBoard").value; 
const gameClockId = 1200;
let players = {};
let score = [];
let sec = 30;

function preventDefault (event) {
  event.preventDefault;
}

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

//questions
const questionsArray = [
  {
    question: "what is a data type used by JavaScript?",
    options: [
      {
        text: "Numbers",
        answer: false,
      },
      {
        text: "Arrays",
        answer: false,
      },
      {
        text: "Strings.",
        answer: false,
      },
      {
        text: "All of the above.",
        answer: true,
      },
    ],
  },
  {
    question: "What is the proper way to show an Array?",
    options: [
      {
        text: "[ ]",
        answer: true,
      },
      {
        text: "{ }",
        answer: false,
      },
      {
        text: "( )",
        answer: false,
      },
      {
        text: "None at all",
        answer: false,
      },
    ],
  },
  {
    question: "In a function, what goes inside the parenthesis, ( )?",
    options: [
      {
        text: "A Number",
        answer: false,
      },
      {
        text: "The parameter",
        answer: true,
      },
      {
        text: "A phone number",
        answer: false,
      },
      {
        text: "My name",
        answer: false,
      },
    ],
  },
  {
    question:
      "For an eventListener to be added to an object, what needs to be put in the parenthesis, .addEventListener(  ,  )?",
    options: [
      {
        text: "a phone number, address",
        answer: false,
      },
      {
        text: "a latitude, longitude",
        answer: false,
      },
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

//starting the game
function startGame() {
  startButton.classList.add("hide");
  endOfGame.classList.add("hide");
  shuffledQuestions = questionsArray.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  timer();
  setNextQuestion();
}
//hiding the scoreboard and form for initials
function endGame() {
  container.classList.add("hide");
  endOfGame.classList.remove("hide");
  clearInterval(gameClockId);
  // handleSave();
  // console.log(handleSave);
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
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}
// determining if the selected answer is correct
function selectAnswer(e) {
  const buttonElement = e.target;
  const answer = buttonElement.dataset.answer;
  setStatusClass(document.body, answer);
  // if else statement to subtract time.
  if (answer === "false") {
    sec = sec - 5;
    document.getElementById("Countdown").textContent = "Time left: " + sec;
  } else {
  }
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.answer);
  });
  //declaring end of the game. Still inside function.
  currentQuestionIndex++;
  if (currentQuestionIndex === questionsArray.length) {
    
    gameOver();
  } else {
    setNextQuestion();
  }
}
//changing the background color to show if the answer is correct or wrong
function setStatusClass(element, answer) {
  clearStatusClass(element);
  if (answer === "true") {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

// clearing the background color of correct or wrong
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// hiding the game over screen
function gameOver() {
  clearStatusClass(document.body);
endGame();
saveScore();
// preventDefault();
}
// ending the game due to out of time
function timeOver() {
  if (!sec === 0) {
    saveScore();
    // preventDefault();
    console.log(score);
    gameOver();
    return (score = 0);
  }
}

 function saveScore (gameClockId) {
  gameClockId.innerHTML = playersScore;
  console.log("Score Saved!");
  // e.preventDefault;

  // const savedRecord = {
  //   score: playersScore,
  //   name: playersInitials
  // }
 };
  //deleting the () from saveScore resulted in object object???? 
saveBtn.addEventListener('click', saveScore())
console.log(object);
;

function displayRecord() {
  const savedRecord = JSON.parse(localStorage.getItem(players)) || [];
  document.querySelector("#leaderBoard").innerText =players;
for (let i = 0; i < savedRecord.length; i++) {
  const element = savedRecord[i];
  let li = document.createElement('li');
  li.textContent = element.players;
  document.querySelector('#leaderBoard').append(li);
}
}
function handleSave () {
  const savedRecord = JSON.stringify(localStorage.getItem(endOfGame)) || [];
  document.querySelector("#leaderBoard").innerText =players;
  
for (let i = 0; i < savedRecord.length; i++) {
  const element = savedRecord[i];
  let li = document.createElement('li');
  li.textContent = element.players;
  document.querySelector('#leaderBoard').append(li);
  
}
}

function handleScore() {
  let score = sec;
  score.innerText = document.querySelector("#leaderBoard");
}
handleSave();
displayRecord();
handleScore();