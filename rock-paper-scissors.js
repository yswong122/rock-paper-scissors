// Computer randomly return rock, paper or scissors
function computerPlay() {
  let randomMove = Math.floor(Math.random() * 3);
  switch (randomMove) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function checkWin(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      return (computerSelection == "paper") ? "lose" : "win";
    case "scissors":
      return (computerSelection == "rock") ? "lose" : "win";
    case "paper":
      return (computerSelection == "scissors") ? "lose" : "win";
  }
}

function printResult(isWin, playerSelection, computerSelection) {
  let div = document.createElement("div");
  if (isWin == "win") {
    div.textContent = (`You Win! ${playerSelection} beats ${computerSelection}.`);
  } else {
    div.textContent = (`You Lose! ${computerSelection} beats ${playerSelection}.`);
  }
  document.body.appendChild(div);
}

// Plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    let div = document.createElement("div");
    div.textContent = `draw.`;
    document.body.appendChild(div);
    return "draw";
  }
  result = checkWin(playerSelection, computerSelection);
  printResult(result,playerSelection,computerSelection);
  return result;
}

// play a game of rock paper scissors contains 5 round
function printRunningScore() {
  let computerWinCount = 0;
  let playerWinCount = 0;
  let div = document.createElement("div");
  div.textContent = `Player: ${playerWinCount}, Computer: ${computerWinCount}`;
  div.classList.add("running-score");
  document.querySelector("#message").appendChild(div);
}

function printFinalWinner(playerWinCount, computerWinCount) {
  if (playerWinCount > computerWinCount) {
    console.log("You are the winner!");
  } else if (playerWinCount == computerWinCount) {
    console.log("Tie!");
  } else {
    console.log("Unfortunately, you lose...");
  }
}

printRunningScore();

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    playRound(e.target.id,computerPlay());
  })
});