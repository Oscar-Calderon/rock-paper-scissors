const playerChoiceBTN = document.querySelectorAll("button");
const playerChoiceDisplay = document.querySelector("#player-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const winnerDisplay = document.querySelector("#winner");
const choices = ["rock", "paper", "scissors"];
let playerChoice;
let compSelection;

playerChoiceBTN.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.id; // al clickear un boton se guarda el id en la variable
        computerChoice();
        playerChoiceDisplay.innerText = "Your choice is " + playerChoice;
        computerChoiceDisplay.innerText = "The computer choice is " + compSelection;
        winnerDisplay.innerText = playRound(compSelection, playerChoice);      
    });
});

// Funcion para que el computador eliga piedra, papel o tijera
function computerChoice(){
    const randomChoice = Math.floor(Math.random() * choices.length);
    compSelection = choices[randomChoice];
 }

function playRound (computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        return "It's a tie!";
    }
    else if (  (computerSelection === "rock" && playerSelection === "scissors")
            || (computerSelection === "scissors" && playerSelection === "paper")
            || (computerSelection === "paper" && playerSelection === "rock")) {
        return "The computer wins!";
    }
    else {
        return "Player wins!";
    }
}



/* function game(){
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    console.log("The computer has chosen " + computerSelection);
    console.log("The player has chosen " + playerSelection);
    let results = playRound(computerSelection, playerSelection)
    console.log(results);
}

game();
 */

