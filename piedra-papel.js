function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0){
        computerChoice = "rock";
    }else if (computerChoice === 1){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, paper or scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playGame(){

    let humanScore = 0;
    let computerScore =0;

    function playRound(humanChoice, computerChoice){
       
        let rockPaper = "Paper beats rock";
        let paperScissors = "Scissors beats paper";
        let scissorsRock = "Rock beats scissors";
        let even = "We're even, have chosen the same element..."

        if (humanChoice == "rock"){
            if (computerChoice == "paper"){
                console.log(`You lose! ${rockPaper}`);
                computerScore++;   
            }else if (computerChoice == "scissors"){
                console.log(`You win! ${scissorsRock}`);
                humanScore++;
            }else{
                console.log(even)
            }
        }else if (humanChoice == "paper"){
            if (computerChoice == "scissors"){
                console.log(`You lose! ${paperScissors}`);
                computerScore++;   
            }else if (computerChoice == "rock"){
                console.log(`You win! ${rockPaper}`);
                humanScore++;
            }else{
                console.log(even)
            }
        }else{
            if (computerChoice == "rock"){
                console.log(`You lose! ${scissorsRock}`);
                computerScore++;   
            }else if (computerChoice == "paper"){
                console.log(`You win! ${paperScissors}`);
                humanScore++;
            }else{
                console.log(even)
            }
        }
    }
    
    for (let i=1; i<=5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection =     getComputerChoice();
        console.log(`ROUND ${i}`);
        playRound(humanSelection, computerSelection); 
    }

    if(humanScore > computerScore){
        console.log(`You win`)
    }else if (humanScore < computerScore) {
       console.log(`Computer wins`)
    }else{
        console.log("You're even");
    }
    console.log(`TOTAL SCORES: Human: ${humanScore} - Computer: ${computerScore}`)
 
 }

playGame();