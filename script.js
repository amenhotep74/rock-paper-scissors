// declaring variables for global use 
// var computerChoice;
// var computerSelection;
// const rock = 0;
// const paper = 1;
// const scissors = 2;


// Function to generate a random number for the computer
function computerPlay() {
    var computerSelection = Math.floor(Math.random() * 3);
    
    if(computerSelection === 0){
        console.log("Computer: rock!");
        return "rock";
    }
    else if(computerSelection === 1){
        console.log("Computer: paper!");
        return "paper";
    }
    else if(computerSelection === 2){
        console.log("Computer: scissors!");
        return "scissors";
    } else {
        console.log("Invalid Computer Choice");
    }
}
let playerScore = 0;
let computerScore = 0;

function playRound() {
    const computerChoice = computerPlay();
    let playerChoice = prompt("rock, paper, scissors?");
    playerChoice = playerChoice.toLowerCase();

    var roundCount = 0;
    
    if (playerChoice === computerChoice){
        console.log("Tie");
    }
    // Player Rock / Computer Paper
    else if (playerChoice === "rock" && computerChoice === "paper"){
        console.log("Player Rock / Computer Paper");
        console.log("You lose!");
        ++computerScore;
        console.log("Computerscore " + computerScore);
        roundCount += 1;
    }
    // Player Paper / Computer Rock 
    else if (playerChoice === "paper" && computerChoice === "rock"){
        console.log("Player Paper / Computer Rock");
        console.log("You Win!");
        ++playerScore;
        console.log("Playerscore " + playerScore);
        roundCount += 1;
    }
    // Player Paper / Computer Scissors
    else if (playerChoice === "paper" && computerChoice === "scissors"){
        console.log("Player Paper / Computer Scissors");
        console.log("You Lose!");
        ++computerScore;
        console.log("Computerscore " + computerScore);
        roundCount += 1;

    }
    // Player Scissors / Computer Paper
    else if (playerChoice === "scissors" && computerChoice === "paper"){
        console.log("Player Scissors / Computer Paper");
        console.log("You win!");
        ++playerScore;
        console.log("Computerscore " + computerScore);
        roundCount += 1;
    }
    // Player Rock / Computer Scissors 
    else if (playerChoice === "rock" && computerChoice === "scissors"){
        console.log("Player Rock / Computer Scissors");
        console.log("You Win!");
        ++playerScore;
        console.log("Playerscore " + playerScore);
        roundCount += 1;
    }
    // Player Scissors / Computer Rock 
    else if (playerChoice === "scissors" && computerChoice === "rock"){
        console.log("Player Scissors / Computer Rock");
        console.log("You Lose!");
        ++computerScore;
        console.log("Computerscore " + computerScore);
        roundCount += 1;
    } else {
        console.log("Invalid input, please try again");
    }

    // check if either scores are more than 5 
    if (playerScore >= 5) {
        console.log("You won the game!");
    } else if(computerScore >= 5) {
        console.log("Computer has won the game!");
    }
}

