// when the user clicks any button
// calculate a random comp result
// display the comp result below
//   user selection
// if the comp result beats the user
//   result, display "you lose" and
//   add one to the comp score
// if the user result beats the comp
//   result, display "you win" and
//   add one to the user score

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

var numCompResult;
var compResult;
var userChoice;

function randomiseCompScore() {
  numCompResult = Math.floor((Math.random() * 3));
  if (numCompResult === 0) {
    compResult = "Rock";
  } else if (numCompResult === 1) {
    compResult = "Paper";
  } else if (numCompResult === 2) {
    compResult = "Scissors";
  }
  console.log("computer result", compResult);
};

console.log("computer result", compResult);

var rockRandomiseCompScore = function() {
  randomiseCompScore();
  userChoice = "Rock";
};

var paperRandomiseCompScore = function() {
  randomiseCompScore();
  userChoice = "Paper";
};

var scissorsRandomiseCompScore = function() {
  randomiseCompScore();
  userChoice = "Scissors";
};

console.log("user choice", userChoice);

rockButton.addEventListener("click", rockRandomiseCompScore, false);
paperButton.addEventListener("click", paperRandomiseCompScore, false);
scissorsButton.addEventListener("click", scissorsRandomiseCompScore, false);

var winner;

function whoWins(compResult, userChoice) {
  if (compResult === userChoice) {
    winner = "draw";
  } else if (compResult === "Rock" && userChoice ==="Paper") {
    winner = "comp";
  } else if (compResult === "Paper" && userChoice === "Scissors") {
    winner = "user";
  } else {
    winner = "no one";
  }
  return winner;
}
