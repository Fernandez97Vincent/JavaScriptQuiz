
let questions = [
  {
    question: "What is my name",
    choice1: "LOL",
    choice2: "LMF",
    choice3: "you",
    choice4: "yeah",
    answer: "2",
  },

  {
    question: "What is your name",
    choice1: "LOLsd",
    choice2: "LMFAOsd",
    choice3: "youre",
    choice4: "ye",
    answer: "2",
  }
];
    
// start section
const startElement = document.querySelector('.start-btn');

// quiz question section
let runningQuestionIndex = 0;
let lastQuestionIndex = questions.length - 1;
const choiceOne = document.querySelector('#one');
const choiceTwo = document.querySelector('#two');
const choiceThree = document.querySelector('#three');
const choiceFour = document.querySelector('#four');
const questionMain = document.querySelector('.q1');
const questionElementContainer = document.querySelector('.question');
const questionChoices = document.querySelector('#answer-button');
const timerElement = document.querySelector('.timerCount');
// creating a new list with the array
const newList = document.createElement("li");
const newUl = document.createElement("ul");
var timerCount;


// event listener to start the game
startElement.addEventListener('click', startGame);

// start the game - start timer countdown (add later)
function startGame() {
  render();
  console.log("started");
  startTimer();
  timerCount = 60;
  startElement.classList.add('hide');
  // stops user from pressing start again
  startElement.disabled = true;
  
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

function render() {
  let x = questions[runningQuestionIndex];
  questionElementContainer.innerHTML = x.question;
  choiceOne.innerHTML = x.choice1;
  choiceTwo.innerHTML = x.choice2;
  choiceThree.innerHTML = x.choice3;
  choiceFour.innerHTML = x.choice4;
  runningQuestionIndex++;
  

}

/*
// rendering the array of questions
// need to grab actual question, choices, then answer
function render(questionName) {
  questionMain.innerHTML = "";
  newUl.innerHTML = "";
// can create a loop to go through all the items then create a new list using newList and newUl variables
for (var i = 0; i < questions.length; i++) {
  // set the question array equal to title in order to make myQuestion = to the title, or question
  var myQuestion = questions[questionName].title;
  
  // now set the choice
  var myChoice = questions[questionName].choices;

  // set the question to the question container
  questionElementContainer.textContent = myQuestion;
}

myChoice.forEach(function (newAnswer) {
  newList.textContent = newAnswer;
  questionMain.appendChild(newUl);
  newUl.appendChild(newList);
  
})

}
*/


 




