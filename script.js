document.addEventListener("DOMContentLoaded", function () {});
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
// const leaderBoard = document.getElementById("leaderBoard");
const record = document.getElementById("record");
const endOfGame = document.querySelectorAll(".endOfGame");
const container = document.querySelector(".container");
// const endOfGame = document.querySelector("#record", "#leaderBoard");
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
document.querySelectorAll('endOdGame').addEventListener("click", function(e) {
  e.document.querySelector(".endOfGame").classList.add("hide");
});

//starting the game
function startGame() {
  startButton.classList.add("hide");
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
  // nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}
// determining if the selected answer is correct
function selectAnswer(e) {
  // console.log(e.target.dataset.answer);
  const buttonElement = e.target;
  const answer = buttonElement.dataset.answer;

  setStatusClass(document.body, answer);
  // if else statement to subtract time.
  console.log(typeof answer);
  if (answer === 'false') {
    console.log('the answer is wrong');
    sec= sec-5;
    document.getElementById("Countdown").textContent = "Time left: " + sec;
    
  } else {
    
  }
  Array.from(answerButtonElement.children).forEach((button) => {
    // console.log(button);
    setStatusClass(button, button.dataset.answer);
  });
  //declaring end of the game. Still inside function.
  currentQuestionIndex++;
  // console.log(currentQuestionIndex);
  if (currentQuestionIndex === questionsArray.length) {
    console.log("gameOver");
    gameOver();
  } else {
    // console.log("current: ", currentQuestionIndex);
    setNextQuestion();
  }
}
//changing the background color to show if the answer is correct or wrong
function setStatusClass(element, answer) {
  // console.log(answer, element);
  clearStatusClass(element);
  
  if (answer === 'true') {
    element.classList.add("correct");
    // console.log(element);
  } else {
    element.classList.add("wrong");
  }
}
// setStatusClass(document.body, "true");
// clearing the background color of correct or wrong
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
// score keeping
if (true) {
  score++;
} else {
  timer() -= 1000;
}
// hiding the game over screen
function gameOver() {
  clearStatusClass(document.body);
  endGame();
}
// ending the game due to out of time
function timeOver() {
  if (!sec === 0) {
    handleScore();
    gameOver();
    return (score = 0);
  }
}
function handleScore(score) {
  score += time;
  return score;
}

//body doesn't change color to match answers, .endOfGame doesn't remove hide class at gameOver.
