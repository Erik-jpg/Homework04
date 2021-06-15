const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
const leaderBoard = document.getElementById("leader");
const placeholder = document.getElementById("placeholder");
const answers = [];
let correctAnswer = 0;
var sec = 30;


//timer
function timer(){
  let gameClockId = setInterval(function(){
      document.getElementById('Countdown').textContent = 'Time left: ' +sec;
      sec--;
      if (sec < 0) {
          clearInterval(gameClockId);
          alert('Game Over')
      }
  }, 1000);
}
document.getElementById('answer-buttons').addEventListener('click', function(e){
  if (false) {sec-= 5;
  document.getElementById('Countdown').textContent = 'Time left: ' +sec;
}});


//questions
const questionsArray = [
  {
    question: "what is a data type used by JavaScript?",
    options: [
      { text: "Numbers", answer: false },
      { text: "Arrays", answer: false },
      { text: "Strings.", answer: false },
      { text: "All of the above.", answer: true },
      
    ]
  },
  {
    question: "What is the proper way to show an Array?",
    options: [
      { text: "[ ]", answer: true },
      { text: "{ }", answer: false },
      { text:"( )", answer: false },
      { text: "None at all", answer: false },
    ]
  },
  {
    question: "In a function, what goes inside the parenthesis, ( )?",
    options: [
      { text: "A Number", answer: false },
      { text: "The parameter", answer: true },
      { text: "A phone number", answer: false},
      { text: "My name", answer: false},
    ]
  },
  { 
    question: "For an eventListener to be added to an object, what needs to be put in the parenthesis, .addEventListener(  ,  )?",
    options: [
      { text: "a phone number, address", answer: false},
      { text: "a latitude, longitude", answer: false},
      { text: "an event, instructions about what to do for the event", answer: true},
      {text: "up up down down left right left right a b then press select, then which level you'd like to play", answer: false},
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
//hiding the scoreboard and form for initials
function endGame() { 
  //hide questions and answers 
  // display endGame screen 
  
  // leader-board').addEventListener(startGame, leader-board.classList.remove('hide'));
  // document.getElementById('placeholder').addEventListener(startGame, leader-board.classList.remove('hide'));
  // clearInterval(timer);
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
    button.dataset.answer = answer.correct;
    button.onclick = selectAnswer;
    answerButtonElement.appendChild(button);
  });
}
// clearing the previous question and setting the next
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}
// determining if the selected answer is correct
function selectAnswer(e) {
  console.log(e.target.getAttribute("data-answer"));
  if (e.target.getAttribute("data-answer")==='true') {
    setStatusClass(document.body, true)
    Array.from(answerButtonElement.children).forEach(button => {
      setStatusClass(button, button.dataset.answer === true)
    })

    //changing the background color to show if the answer is correct or wrong
    function setStatusClass(element, answer) {
   if (answer === true) {
      element.classList.add('body.correct');
  } else {
    
    element.classList.add('body.wrong');
  }}
};
//declaring end of the game
  currentQuestionIndex ++; 
 
  if (currentQuestionIndex === questionsArray.length) {
    console.log('gameOver');
    gameOver();
   
  }else{
    console.log("current: ", currentQuestionIndex);
  setNextQuestion();
  }
};

// clearing the background color of correct or wrong 
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}
// score keeping
if (true) {
  answers.push(+1);
}else {
  timer -1000;
}
// hiding the game over screen
function gameOver() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide");
  endGame();
}
// ending the game due to out of time
function timeOver() {
if (sec === 0) {
  stopTimer
}
}
// revealing the leader-board and placeholder form
document.getElementById('placeholder').placeholder = 'Please enter your initials here';
document.getElementById('placeholder').addEventListener('alert', placeholder.classList.remove('hide'));