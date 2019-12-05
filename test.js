function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper';
    }
    else if (num == 2) {
        return 'scissors';
    } else {
        return 'error';
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            console.log('Draw!');
            return 0;
        }
        if (computerSelection == 'paper') {
            console.log('Paper beats rock. Computer\'s point.');
            return -1;
        }
        if (computerSelection == 'scissors') {
            console.log('Rock beats scissors. Your point.');
            return 1;
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('Paper beats rock. Your point.');
            return 1;
        }
        if (computerSelection == 'paper') {
            console.log('Draw!');
            return 0;
        }
        if (computerSelection == 'scissors') {
            console.log('Scissors beats paper. Computer\'s point.');
            return -1;
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('Rock beats scissors. Computer\'s point.');
            return -1;
        }
        if (computerSelection == 'paper') {
            console.log('Scissors beats paper. Your point');
            return 1;
        }
        if (computerSelection == 'scissors') {
            console.log('Draw!');
            return 0;
        }
    }
    return 'error';
}
function game() {
    console.log('Best of 5.');
    let computerScore = 0;
    let playerScore = 0;
    while (computerScore < 3 && playerScore < 3) {
        let playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
        let computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);
        if (outcome > 0) {
            ++playerScore;
        } else if (outcome < 0) {
            ++computerScore;
        }
        console.log('Computer: ' + computerScore + ' -- Player: ' + playerScore);
    }
    if (computerScore > playerScore) {
        console.log('Computer wins, ' + computerScore + ' to ' + playerScore + '.');
        return 0;
    } else if (playerScore > computerScore) {
        console.log('Player wins, ' + playerScore + ' to ' + computerScore + '.');
        return 0;
    }
}
alert('If text-only was good enough for Zork, it\'s good enough for rock-paper-scissors.\n\nEnter "game()" in console to begin.\n\n');