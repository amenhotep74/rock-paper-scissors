// declaring variables for global use 
// var computerChoice;
// var computerSelection;

// Function to generate a random number for the computer
function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3);
    
    if(computerSelection === 0){
        console.log("Computer: rock!");
        var computerChoice = "rock";
        return computerChoice;
        
    }
    else if(computerSelection === 1){
        console.log("Computer: paper!");
        var computerChoice = "paper";
        return computerChoice;
    }
    else if(computerSelection === 2){
        console.log("Computer: scissors!");
        var computerChoice = "scissors";
        return computerChoice;
    } else {
        console.log("Invalid Computer Choice");
    }
}

function playRound(playerChoice, computerChoice) {
    // Get user to enter a number
    var playerChoice = prompt("Enter in rock, paper or scissors", "...");
    // convert user string into lower case
    playerChoice = playerChoice.toLowerCase();
    
    console.log(computerChoice);
    console.log(playerChoice);
    // if playerNumber and computer Num is same 
    if (playerChoice === computerChoice){
        console.log("Tie");
    }
    // Player Rock / Computer Paper
    else if (playerChoice === "rock" && computerChoice === "scissors"){
        console.log("Player Rock / Computer Paper");
        console.log("You lose!");
    }
    // Player Paper / Computer Rock 
    else if (playerChoice === "paper" && computerChoice === "rock"){
        console.log("Player Paper / Computer Rock");
        console.log("You Win!");
    }
    // Player Paper / Computer Scissors
    else if (playerChoice === "paper" && computerChoice === "scissors"){
        console.log("Player Paper / Computer Scissors");
        console.log("You Lose!");
    }
    // Player Scissors / Computer Paper
    else if (playerChoice === "scissors" && computerChoice === "paper"){
        console.log("Player Scissors / Computer Paper");
        console.log("You Lose!");
    }
    // Player Rock / Computer Scissors 
    else if (playerChoice === "rock" && computerChoice === "scissors"){
        console.log("Player Rock / Computer Scissors");
        console.log("You Win!");
    }
    // Player Scissors / Computer Rock 
    else if (playerChoice === "scissors" && computerChoice === "rock"){
        console.log("Player Scissors / Computer Rock");
        console.log("You Lose!");
    } else {
        console.log("Invalid input, please try again");
    }
}
computerPlay();
playRound();
