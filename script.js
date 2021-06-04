const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");

const questionsArray = [
  {
    question: "what do wise men say?",
    options: [
      { text: "only fools rush in.", correct: true },
      { text: "hell is a happy place.", correct: false },
    ],
    answer: 0,
  },
  {
    question: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah?",
    options: [
      { text: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.", correct: true },
      { text: "hell is a happy place.", correct: false },
    ],
    answer: 0,
  },
  {
    question: "what do wise men say?",
    options: [
      { text: "only fools rush in.", correct: true },
      { text: "hell is a happy place.", correct: false },
    ],
    answer: 0,
  },
];

let shuffledQuestions, currentQuestionIndex;
startButton.addEventListener("click", startGame);

function startGame() {
  console.log("started");
  startButton.classList.add("hide");
  shuffledQuestions = questionsArray.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
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
    button.classList.add("Answer-button");

    button.dataset.correct = answer.correct;

    button.onclick = selectAnswer;
    answerButtonElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {
  console.log(e.target.getAttribute("data-correct"));
  if (e.target.getAttribute("data-correct")==='true') {
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    e.target.classList.add('correct');
  } else {
    
    e.target.classList.add('wrong');
  }
  currentQuestionIndex ++;
  if (currentQuestionIndex === questionsArray.length) {
    // call endGame function here
    console.log("gameOver")
  }else{
  setNextQuestion();
  }
};
function setStatusClass(element, correct){
  clearStatusClass(element)
}

// getAttribute
// console.log(questionsArray);
