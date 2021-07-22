//play the game when the button is clicked
const buttons = document.querySelectorAll("button")
for (const button of buttons) {
  button.addEventListener('click', playGame)
}

//remove the buttons and add text
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

let buttonDiv = document.getElementById("buttons");

let outcomeMessage = document.createElement("H1");
outcomeMessage.classList.add("outcomeMessage");

let restartButton = document.createElement("a");
restartButton.setAttribute('class', 'restart');
restartButton.setAttribute('onClick', 'refresh()');
restartButton.innerHTML = "PLAY AGAIN";

function refresh() {
   location.reload();
}


//run the game logic
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
        buttonDiv.appendChild(outcomeMessage).innerHTML = "The computer chose " + computerSelection + ". You Win!";
        outcomeMessage.className = "animate__animated animate__flash outcomeMessage";
    } else if (humanSelection === computerSelection) {
        buttonDiv.appendChild(outcomeMessage).innerHTML = "The computer chose " + computerSelection + ". You Tied!";
        outcomeMessage.className = "animate__animated animate__rubberBand outcomeMessage";
    } else {
        buttonDiv.appendChild(outcomeMessage).innerHTML = "The computer chose " + computerSelection + ". You Lost!";
        outcomeMessage.className = "animate__animated animate__shakeX outcomeMessage";
    }

    removeElementsByClass("btn");
    buttonDiv.appendChild(restartButton);
}

