const buttons = document.querySelectorAll("button")
for (const button of buttons) {
  button.addEventListener('click', playGame)
}

function playGame() {
    let humanSelection = this.id;
    let computerSelection = computerPlay();
    console.log("You chose " + humanSelection);
    console.log("The computer chose " + computerSelection);

    function computerPlay() {
        const computerMoveChoices = ["rock", "paper", "scissors"];
        let computerSelection = computerMoveChoices[Math.floor(Math.random() * 3)];
        return computerSelection;
    }

    if (humanSelection === "rock" && computerSelection === "scissors" 
    || humanSelection === "paper" && computerSelection === "rock" 
    || humanSelection === "scissors" && computerSelection === "paper") {
        alert(`BOOM! The computer chose ${computerSelection}! You Won!`);
    } else if (humanSelection === computerSelection) {
        alert(`Awkward.. the computer chose ${computerSelection}, too! You Tied!`);
    } else {
        alert(`OUCH! The computer chose ${computerSelection}! You Lost!`);
    }
}