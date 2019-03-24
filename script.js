// Individual get elements for rock/paper/scissor buttons
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const resultText = document.getElementById('resultText');
const choicesText = document.getElementById('choicesText');

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
  if (winner === "user") {
    gameResult = "You win!";
    resultText.innerHTML = gameResult;
  } else if (winner === "comp") {
    gameResult = "The computer wins!";
    resultText.innerHTML = gameResult;
  } else if (winner === "draw") {
    gameResult = "The game is a draw...";
    resultText.innerHTML = gameResult;
  }
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
