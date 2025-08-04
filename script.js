const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
}
function getHumanChoice() {
    let choice = prompt('Choose rock, paper, or scissors');
    if (choice !== null) {
        choice = choice.toLowerCase();
    }
    return choice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("Human picked:", humanChoice);
    console.log("Computer picked:", computerChoice);
}
const human = getHumanChoice();
const computer = getComputerChoice();

playRound(human, computer);