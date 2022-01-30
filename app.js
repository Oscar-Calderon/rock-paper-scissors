console.log("Hello world");

// Funcion para que el computador eliga piedra, papel o tijera
function computerPlay(){
    let randomSelection = (Math.floor(Math.random() * 3) + 1);
    let computerChoice;
    if (randomSelection === 1) {
        computerChoice = "rock";
        return computerChoice;
    }
    else if (randomSelection === 2){
        computerChoice = "paper";
        return computerChoice;
    }
    else {
        computerChoice = "scissors";
        return computerChoice;
    }
 }

//Funcion para que el jugador elija piedra papel o tijera
function playerPlay(){
    let playerInput = window.prompt("Rock, paper or scissors?");
    let playerChoice = playerInput.toLowerCase();
    return playerChoice;
}

function playRound (computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        return "It's a tie!"
    }
    else if (  (computerSelection === "rock" && playerSelection === "scissors")
            || (computerSelection === "scissors" && playerSelection === "paper")
            || (computerSelection === "paper" && playerSelection === "rock")) {
        return "The computer wins!";
    }
    else {
        return "Player wins!"
    }
}

function game(){
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    console.log("The computer has chosen " + computerSelection);
    console.log("The player has chosen " + playerSelection);
    let results = playRound(computerSelection, playerSelection)
    console.log(results);
}

game();