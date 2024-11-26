let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");

const choices = document.querySelectorAll(".choices");

const playAgain = document.querySelector("#play-again");

playAgain.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  userScoreSpan.removeAttribute("class");
  computerScoreSpan.removeAttribute("class");
  resultText.textContent = "Make your choice";
  resultText.removeAttribute("class");
  playAgain.setAttribute("hidden", true);
})

choices.forEach((choice)=>{
  choice.addEventListener("click", () => playGame(choice.id));
});

// GAME LOGIC

function playGame(userChoice){
  if(userScore !== 5 & computerScore!==5){
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

  // update scores and result based on the outcome
  if(result === "win"){
    userScore++;
    resultText.textContent = "You win!";
    // resultText.id = "winner";
  }else if(result === "lose"){
    computerScore++;
    resultText.textContent = "You lose!";
    // resultText.id = "loser";
  }else{
    resultText.textContent = "Match draw!";
    // resultText.id = "";
  }
  
  // updates scores of the gamers

  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  }
  
  if(userScore === 5 || computerScore ===5){
    closeMatch(userScore);
  }
}
// computer random choice

function getComputerChoice(){
  const choices = ["rock", "paper", "scissors"]
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex]; 
}

// determine the winner

function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return "draw";
  }
  
  if((userChoice === "rock" && computerChoice === "scissors") 
    || (userChoice === "paper" && computerChoice === "rock")
    || (userChoice === "scissors" && computerChoice === "paper")){
    return "win";
  }else{
    return "lose";
  }
}

function closeMatch(userScore){
  if(userScore === 5){
    resultText.textContent = "YOU WIN!";
    resultText.classList.add("victoria");
    userScoreSpan.classList.add("victoria");
  }else{
    resultText.textContent = "COMPUTER WINS!";
    resultText.classList.add("derrota");
    computerScoreSpan.classList.add("derrota");
  }

  playAgain.removeAttribute("hidden");
    
}