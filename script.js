const roundResult = document.querySelector('#round-score');

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
  playRound("rock", getComputerChoice());
});
const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
  playRound("paper", getComputerChoice());
});
const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
  playRound("scissors", getComputerChoice());
});


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
      roundResult.textContent = "You drew";
    } else if (computerSelection === "paper") {
      roundResult.textContent = "You won! Scissors beats paper.";
      updateScore(true);
    } else {
      roundResult.textContent = "You lost! Rock beats scissors";
      updateScore(false);
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      roundResult.textContent = "You lose! Scissors beats paper.";
      updateScore(false);
    } else if (computerSelection === "paper") {
      roundResult.textContent = "You drew.";
    } else {
      roundResult.textContent = "You won! Paper beats rock.";
      updateScore(true);
    }
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      roundResult.textContent = "You Won! Rock beats scissors.";
      updateScore(true);
    } else if (computerSelection === "paper") {
      roundResult.textContent = "You lose. Paper beats rock.";
      updateScore(false);
    } else {
      roundResult.textContent = "You drew.";
    }
  }
}

const scoreText = document.querySelector('#score')
let playerScore = 0;
let computerScore = 0;
function updateScore(playerWon) {
  if (playerWon) {
    playerScore++;
  } else {
    computerScore++;
  }
  scoreText.textContent = `Player ${playerScore} - ${computerScore} Computer`
}


