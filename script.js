const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
const answers = [];
let correctAnswer = 0;
var sec = 30;


//timer
function timer(){
  let timer = setInterval(function(){
      document.getElementById('Countdown').textContent = 'Time left: ' +sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
          alert('Game Over')
      }
  }, 1000);
}
document.getElementById('wrong').addEventListener('click', function(){
  sec-= 5;
  document.getElementById('Countdown').textContent = 'Time left: ' +sec;
})

//questions
const questionsArray = [
  {
    question: "what is a data type used by JavaScript?",
    options: [
      { text: "Numbers", correct: false },
      { text: "Arrays", correct: false },
      { text: "Strings.", correct: false },
      { text: "All of the above.", correct: true },
      
    ]
  },
  {
    question: "What is the proper way to show an Array?",
    options: [
      { text: "[ ]", correct: true },
      { text: "{ }", correct: false },
      { text:"( )", correct: false },
      { text: "None at all", correct: false },
    ]
  },
  {
    question: "In a function, what goes inside the parenthesis, ( )?",
    options: [
      { text: "A Number", correct: false },
      { text: "The parameter", correct: true },
      { text: "A phone number", correct: false},
      { text: "My name", correct: false},
    ]
  },
  { 
    question: "For an eventListener to be added to an object, what needs to be put in the parenthesis, .addEventListener(  ,  )?",
    options: [
      { text: "a phone number, address", correct: false},
      { text: "a latitude, longitude", correct: false},
      { text: "an event, instructions about what to do for the event", correct: true},
      {text: "up up down down left right left right a b then press select, then which level you'd like to play", correct: false},
    ]
  }
];
//randomizing the questions
let shuffledQuestions, currentQuestionIndex;
startButton.addEventListener("click", startGame);

//starting the game
function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questionsArray.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  timer();
  setNextQuestion();
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(questionsArray) {
  questionElement.innerText = questionsArray.question;
  questionsArray.options.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-buttons");

    button.dataset.correct = answer.correct;

    button.onclick = selectAnswer;
    answerButtonElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {
  console.log(e.target.getAttribute("data-correct"));
  if (e.target.getAttribute("data-correct")==='true') {
    setStatusClass(document.body, true)
    Array.from(answerButtonElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct === true)
    })
    function setStatusClass(element, correct) {
   if (correct === true) {
      element.classList.add('correct');
  } else {
    
    element.classList.add('wrong');
  }}
};
  currentQuestionIndex ++;
  if (currentQuestionIndex === questionsArray.length) {
    gameOver();
    console.log("gameOver")
  }else{
  setNextQuestion();
  }
};


function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

if (true) {
  answers.push(+1);
}else {
  timer -1000;
}

function gameOver() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide");
}

function timeOver() {
if (sec === 0) {
  stopTimer
}
}
