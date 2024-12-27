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

console.log(getComputerChoice());

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

console.log(getHumanChoice());


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log(`Draw! ${humanChoice} is equal to ${computerChoice}`);
    }
}