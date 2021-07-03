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
  return updateRunningScore(result);
}

// play a game of rock paper scissors contains 5 round
function printRunningScore() {
  let playerLabel = document.createElement("p");
  playerLabel.textContent = "Player:";
  playerLabel.classList.add("player-label");
  document.querySelector("#message").appendChild(playerLabel)

  let playerScore = document.createElement("div");
  playerScore.textContent = `0`;
  playerScore.classList.add("player-score");
  document.querySelector(".player-label").appendChild(playerScore);

  let computerLabel = document.createElement("p");
  computerLabel.textContent = "Computer:";
  computerLabel.classList.add("computer-label");
  document.querySelector("#message").appendChild(computerLabel)
  let computerScore = document.createElement("div");
  computerScore.textContent = `0`;
  computerScore.classList.add("computer-score");
  document.querySelector(".computer-label").appendChild(computerScore);
}

function updateRunningScore(result) {
  let computer = document.querySelector(".computer-score");
  computerScore = parseInt(computer.textContent);
  let player = document.querySelector(".player-score");
  playerScore = parseInt(player.textContent);
  if (result === "lose") {
    computerScore += 1;
    computer.textContent = computerScore;
  } else if (result === "win") {
    playerScore += 1;
    player.textContent = playerScore;
  }

  if (computerScore === 5) {
    printFinalWinner("computer");
  } else if (playerScore === 5) {
    printFinalWinner("player");
  }
}

function printFinalWinner(winner) {
  let winnerMesage = document.createElement("div");
  if (winner === "player") {
    winnerMesage.textContent = "You are the winner!";
  } else if (winner === "computer")  {
    winnerMesage.textContent = "You Lose...";
  }
  document.querySelector("#message").appendChild(winnerMesage);
}

printRunningScore();

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    playRound(e.target.id,computerPlay());
  })
});