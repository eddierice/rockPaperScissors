function computerPlay() {
    const computerMoveChoices = ["rock", "paper", "scissors"];
    let computerSelection = computerMoveChoices[Math.floor(Math.random() * 3)];
    return computerSelection;
}

function humanPlay() {
    const getHumanSelection = prompt("Rock, Paper, or Scissors?");
    let humanSelection = getHumanSelection.toLowerCase();

    if (humanSelection === "rock" || humanSelection === "paper" || humanSelection === "scissors") {
        return(humanSelection);
    } else {
        alert("Dude.. you must choose rock, paper, or scissors! Try again!");
        humanPlay();
    }
}

function playGame() {
    let computerSelection = computerPlay();
    let humanSelection = humanPlay();

    if (humanSelection === "rock" && computerSelection === "scissors" || humanSelection === "paper" && computerSelection === "rock" || humanSelection === "scissors" && computerSelection === "paper") {
        alert(`BOOM! The computer chose ${computerSelection}! You Won!`);
    } else if (humanSelection === computerSelection) {
        alert(`Awkward.. the computer chose ${computerSelection}, too! You Tied!`);
    } else {
        alert(`OUCH! The computer chose ${computerSelection}! You Lost!`);
    }
}