// Individual get elements for rock/paper/scissor buttons
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const resultText = document.getElementById('resultText');
const choicesText = document.getElementById('choicesText');
let userscore = document.getElementById('userScore');
let compscore = document.getElementById('compScore');


// Declaring global variables
var compResult;
var userChoice;

// Determine the computer's move
function randomiseCompScore() {
  var numCompResult;
  numCompResult = Math.floor((Math.random() * 3));
  if (numCompResult === 0) {
    compResult = "Rock";
  } else if (numCompResult === 1) {
    compResult = "Paper";
  } else if (numCompResult === 2) {
    compResult = "Scissors";
  }
};

// Determine who wins the game
function whoWins(a, b) {
  var winner;
  var gameResult;
  if (a === b) {
    winner = "draw";
  } else if (a === "Rock" && b ==="Paper") {
    winner = "user";
  } else if (a === "Rock" && b === "Scissors") {
    winner = "comp";
  } else if (a === "Paper" && b === "Rock") {
    winner = "comp";
  } else if (a === "Paper" && b === "Scissors") {
    winner = "user";
  } else if (a === "Scissors" && b === "Rock") {
    winner = "user";
  } else if (a === "Scissors" && b === "Paper") {
    winner = "comp";
  };
  let userCounter = 0;
  let compCounter = 0;
  if (winner === "user") {
    gameResult = "You win!";
    userCounter++;
    resultText.innerHTML = gameResult;
  } else if (winner === "comp") {
    gameResult = "The computer wins!";
    compCounter++;
    resultText.innerHTML = gameResult;
  } else if (winner === "draw") {
    gameResult = "The game is a draw...";
    resultText.innerHTML = gameResult;
  }
  userscore.innerHTML = userCounter;
  compscore.innerHTML = compCounter;
  console.log(gameResult);
}

// Run possible user journeys
rockButton.addEventListener("click", function() {
  randomiseCompScore();
  userChoice = "Rock";
  whoWins(compResult, userChoice);
  choicesText.innerHTML = "You chose " + userChoice + ", the computer chose " + compResult;
})
;
paperButton.addEventListener("click", function() {
  randomiseCompScore();
  userChoice = "Paper";
  whoWins(compResult, userChoice);
  choicesText.innerHTML = "You chose " + userChoice + ", the computer chose " + compResult;
});

scissorsButton.addEventListener("click", function() {
  randomiseCompScore();
  userChoice = "Scissors";
  whoWins(compResult, userChoice);
  choicesText.innerHTML = "You chose " + userChoice + ", the computer chose " + compResult;
});
