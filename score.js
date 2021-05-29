//Criteria:
//When I click the start button, a timer starts 
    //add button and eventListener to start timer
//When I answer a question, then I am presented with another question
   //User Interactions prompt the next question
//If an answer is incorrect, time is subtracted from the timer
     //compare an array (answers) and store the data (score)
//The quiz ends if all the questions are answered or the timer ends
    //after x amount answers (this could end the timer) or time runs out, the application ends
// people who have made it to the end of the quiz can leave their initials
    //store and compare answers given and an array of correct answers and then place in a table of possible spots and allow the user to leave initials

    //start with one question and then go on to the next
    //I think maybe switching between pages for questions?
    //set onclick event with if correct or incorrect answers
    //maybe a boolean? correct = true, incorrect = false?
    //set id for correct and a different one for wrong

    //example: const rightAnswer = document.querySelector('#right-answer');
    //rightAnswer.addEventListener('click')

    //object might be easier than an array
    var storedScores = JSON.parse(localStorage.getItem("userData"));
    var highScoresArea = document.querySelector("#highScoresList");
    var backBtn = document.querySelector("#backButton");
    var clearBtn = document.querySelector("#clearScores");
    
    
    function displayScores() {
        if (storedScores !== null) {
            var scoreList = document.createElement("ol");
            scoreList.className = "scoreListClass";
            for (var i = 0; i < storedScores.length; i++) {
                var initials = storedScores[i].inits;
                var scores = storedScores[i].userScore
                var scoreEntry = document.createElement("li");
                scoreEntry.innerHTML = initials + " - " + scores;
                scoreList.appendChild(scoreEntry);
            }
            highScoresArea.appendChild(scoreList);
        }
    };
    
    displayScores();
    
    backBtn.addEventListener("click", function () {
        location.href = "index.html";
    });
    
    clearBtn.addEventListener("click", function () {
        highScoresArea.innerHTML = "";
        window.localStorage.clear();
    
    });