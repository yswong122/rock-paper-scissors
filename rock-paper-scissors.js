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

// Plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    console.log("draw");
    return "draw";
  }
  result = checkWin(playerSelection, computerSelection);
  printResult(result,playerSelection,computerSelection);
  return result;
}

function checkValid(playerSelection) {
  if (playerSelection == "paper" ||
    playerSelection == "rock" ||
    playerSelection == "scissors") {
      console.log("invalid moves");
      return false;
  }
  return true;
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
  isWin ?
    console.log(`You Win! ${playerSelection} beats ${computerSelection}.`) :
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
}

// play a game of rock paper scissors contains 5 round
function game() {
  let computerWinCount = 0;
  let playerWinCount = 0;
  for (let i = 0; i < 5; i++) {
    let validInput = false;
    while (validInput == false) {
      let playerSelection = prompt("What's your move?", "");
      checkValid(playerSelection);
    }
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    switch (result) {
      case "win":
        playerWinCount++;
        break;
      case "lose":
        computerWinCount++;
        break;
    } 
  }
  printFinalWinner(playerWinCount,computerWinCount);
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