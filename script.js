const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
    }
    
function getHumanChoice() {
    let choice = prompt('Choose rock, paper, or scissors');
    if (choice !== null) {
        choice = choice.toLowerCase();
    }
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        console.log("Human picked:", humanChoice);
        console.log("Computer picked:", computerChoice);
    }
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(human, computer);

}

const human = getHumanChoice();
const computer = getComputerChoice();


playGame();
