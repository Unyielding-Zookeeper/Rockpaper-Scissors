const resultsDiv = document.getElementById('results');

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

function playGame() {
  function playRound(humanChoice, computerChoice) {
    const resultText = `You picked ${humanChoice}, computer picked ${computerChoice}`;
    resultsDiv.textContent = resultText;

    if (humanChoice === computerChoice) {
      resultsDiv.textContent = "It's a tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}. Score: ${humanScore} - ${computerScore}`;
    } else {
      computerScore++;
      resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}. Score: ${humanScore} - ${computerScore}`;
    }

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore === 5) {
        resultsDiv.textContent += `\n🎉 You won the game!`;
      } else {
        resultsDiv.textContent += `\n💀 The computer won the game!`;
      }

      document.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
      });
    }
  }

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const playerChoice = button.id;
      const computerChoice = getComputerChoice();
      playRound(playerChoice, computerChoice);
    });
  });
}

playGame();
