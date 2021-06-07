const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");

const questionsArray = [
  {
    question: "what is a data type used by JavaScript?",
    options: [
      { text: "Numbers", correct: false },
      { text: "Arrays", correct: false },
      { text: "Strings.", correct: false },
      { text: "All of the above.", correct: true },
      
    ],
    answer: 3,
  },
  {
    question: "What is the proper way to show an Array?",
    options: [
      { text: "[ ]", correct: true },
      { text: "{ }", correct: false },
      { text:"( )", correct: false },
      { text: "None at all", correct: false },
    ],
    answer: 0,
  },
  {
    question: "In a function, what goes inside the parenthesis, ( )?",
    options: [
      { text: "A Number", correct: false },
      { text: "The parameter", correct: true },
      { text: "A phone number", correct: false},
      { text: "My name", correct: false},
    ],
    answer: 1,
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
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// getAttribute
// console.log(questionsArray);
