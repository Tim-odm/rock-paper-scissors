function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return "scissors";
  } else  if (num == 1) {
    return "rock";
  } else {
    return "paper";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "scissors") {
    if (computerSelection === "scissors") {
      console.log("You drew.");
    } else if (computerSelection === "paper") {
      console.log("You won! Scissors beats paper.");
    } else {
      console.log("You lost! Rock beats scissors");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("You lose! Scissors beats paper.");
    } else if (computerSelection === "paper") {
      console.log("You drew.");
    } else {
      console.log("You won! Paper beats rock.");
    }
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log("You Won! Rock beats scissors.");
    } else if (computerSelection === "paper") {
      console.log("You lose. Paper beats rock.");
    } else {
      console.log("You drew.");
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))


