let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1;

    switch(choice){
        case 1: 
            return "rock";

        case 2:
            return "paper";
        
        case 3:
            return "scissors";
    }
}



function getHumanChoice(){
    let choice = prompt("Type your selection: Rock, Paper, or Scissors? ");
    choice = choice.toLowerCase().trim();

    if(choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    }
    else{
        console.log("Please input a valid selection: Rock, Paper, or Scissors");
        return getHumanChoice();
    }

}




function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log(`Draw! ${humanChoice} is equal to ${computerChoice}`);
    }

    else if((humanChoice === "rock" && computerChoice === "paper")
            ||(humanChoice === "paper" && computerChoice === "scissors")
            || (humanChoice === "scissors" && computerChoice === "rock") ){

        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    else{
        console.log(`You win! ${humanChoice} beats ${computerChoice}`); 
        humanScore++;
    }
}


    function playGame(){
        let numRounds = 0;

        while(numRounds < 5){
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice);
            numRounds++;

        }

        if(humanScore > computerScore){
            return `Congratulations! You won the game by ${humanScore-computerScore} points`;
        }
        else if(computerScore > humanScore){
            return `Oh no! You lost the game by ${computerScore-humanScore} points`;
        }
        else{
            return 'Tie game!';
        }
    }

    console.log(playGame());
    