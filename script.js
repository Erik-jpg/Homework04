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
    answer: 0
  },
];


let shuffledQuestions, currentQuestionIndex;
startButton.addEventListener("click", startGame);

function startGame() {
  console.log("started");
  startButton.classList.add("hide");
  shuffledQuestions = questionsArray.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestionsArray[currentQuestionsArrayIndex]);
}

function showQuestion(questionsArray) {
  questionElement.innerText = question.questionsArray;
  questionsArray.answers.array.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("Answer-button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  })
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {}

console.log(questionsArray);