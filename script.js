const gameArray = ['rock', 'paper', 'scissors' ];
  let playerScore = 0;
    let computerScore = 0;
function game(){
  
    for (let i = 0; i < 3; i++) {
        playRound();
    }
    declareWinner(playerScore, computerScore);
}

function declareWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
      console.log("You are the overall winner!");
    } else if (computerScore > playerScore) {
      console.log("The computer is the overall winner.");
    } else {
      console.log("It's a tie for the overall game!");
    }
  
  }


function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();

    if (playerSelection == computerSelection){
                 console.log('Tie!')
                
                } else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
                             computerSelection == 'scissors' && playerSelection == 'paper' || 
                             computerSelection == 'paper' && playerSelection== 'rock') {
                                 computerScore += 1
                     console.log('You lose')
                     
                 } else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
                             playerSelection == 'scissors' && computerSelection == 'paper' || 
                             playerSelection == 'paper' && computerSelection == 'rock') {
                                 playerScore += 1
                     console.log('You win')
                }
                

                console.log(computerSelection);
                console.log(playerSelection);

               
                
            }

            
function playerChoice(){
    let input= prompt('Let\'s play!!Pick rock, paper, or scissors. Type it in.');
        input = input.toLowerCase();
        return input;
        
    
}


function getComputerChoice(){
    return gameArray[ Math.floor(Math.random() * gameArray.length)];

}

game();